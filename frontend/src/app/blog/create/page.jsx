"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import ReactMarkdown from "react-markdown";
import { useAddPostsMutation } from "@/store/posts";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useUser } from "@/store/user";
import remarkGfm from 'remark-gfm'
import Markdown from "@/components/Markdown";

const BlogCreate = () => {
  const router = useRouter();
  const [addPost] = useAddPostsMutation();
  const user = useUser();
  const [markdownDisplay, setMarkdownDisplay] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const markdown = useRef();
  const titleRef = useRef();

  function handleShowPreview(e) {
    e.preventDefault();

    setMarkdownDisplay(markdown.current.value);
    markdown.current.style.display = "none";
    setShowPreview(true);
  }

  function handlePublish(e) {
    e.preventDefault();

    addPost({
      uid: user.uid,
      title: titleRef.current.value,
      content: markdown.current.value,
    })
      .unwrap()
      .then((res) => {
        // TODO: Redirect to posted blog
        router.push(`/blog/${res.id}`);
      });
  }

  return (
    <div className={styles.container}>
      <nav className={styles.navCreate}>
        <h1 className={styles.logo}> Your Blog </h1>
        <h2 className={styles.createTag}> Wrtie your story.</h2>
        <div className={styles.buttons}>
          <button className={styles.blogButton} onClick={handlePublish}>
            Publish
          </button>
          {showPreview ? (
            <button
              onClick={() => {
                markdown.current.style.display = "block";
                titleRef.current.style.display = 'block';
                setShowPreview(false);
                setMarkdownDisplay("");
              }}
              className={`${styles.blogButton} ${styles.previewButton} ${styles['previewButton--inverted']}`}
            >
              Go Back
            </button>
          ) : (
            <button
              onClick={handleShowPreview}
              className={`${styles.blogButton} ${styles.previewButton}`}
            >
              Preview
            </button>
          )}
        </div>
      </nav>
      <input className={styles['blog-titlearea']} placeholder="Add title" ref={titleRef}></input>
      <textarea
        className={styles['blog-textarea']}
        placeholder="Tell your story to the world. (You can use markdown format here)"
        ref={markdown}
      ></textarea>
      <div
        style={{ display: markdownDisplay ? "block" : "none" }}
        className={styles['markdown']}
      >
        <Markdown>
          {markdownDisplay}
        </Markdown>
      </div>


      <a href="https://www.markdownguide.org/basic-syntax/" target="_blank">Click here on how to use markdown </a>

    </div>
  );
};

export default BlogCreate;
