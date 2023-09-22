import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./blogcontent.module.css";
import CreatedBy from "./CreatedBy";
import Link from "next/link";
const Blog = ({ blog }) => {
  const { title, content, create_by: uid } = blog;

  return (
    <div className={styles.main}>
      <CreatedBy uid={uid} />
      <div className={styles.blogbody}>
        <Link href={`/blog/${blog.id}`}>
          <h1 className={styles.tittle}>{title}</h1>
        </Link>
        <ReactMarkdown className={styles.content}>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Blog;

