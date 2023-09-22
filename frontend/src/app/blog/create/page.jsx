"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import "./page.css";
import ReactMarkdown from "react-markdown";
import { useAddPostsMutation } from "@/store/posts";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useUser } from "@/store/user";

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
    titleRef.current.style.display = "none";
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
        router.push("/");
      });
  }

  return (
    <div className="main">
      <nav className="navCreate">
        <h1 className="logo">YourBlog</h1>
        <h2 className="createTag">Wrtie your story.</h2>
        <div className="buttons">
          <button className="blogButton" onClick={handlePublish}>
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
              className="blogButton previewButton previewButton--inverted"
            >
              Go Back
            </button>
          ) : (
            <button
              onClick={handleShowPreview}
              className={`blogButton previewButton`}
            >
              Preview
            </button>
          )}
        </div>
      </nav>
      <input id="blog-titlearea" placeholder="Add title" ref={titleRef}></input>
      <textarea
        id="blog-textarea"
        placeholder="Tell your story to the world"
        ref={markdown}
      ></textarea>
      {/* <PageContent /> */}
      <div
        style={{ display: markdownDisplay ? "block" : "none" }}
        className="Markdown-Div"
      >
        <ReactMarkdown>{markdownDisplay}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogCreate;
