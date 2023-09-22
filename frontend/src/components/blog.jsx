import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./blogcontent.module.css";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import Image from "next/image";
const Blog = ({ blog }) => {
  const { title, content, uid } = blog;
  const time = new Date().getDate();
  return (
    <div className={styles.main}>
      <div className={styles.profile}>
        <div className={styles.imagediv}>
          <Image
            src={"/images/hero.jpg"}
            width={200}
            height={200}
            alt="profile"
          />
        </div>
        <p className={styles.uid}>{uid} <span className={styles.dot}> . </span> <span className={styles.time}>{time}Sept/2023</span></p>
      </div>
      <div className={styles.blogbody}>

      <h1 className={styles.tittle}>{title}</h1>
      <ReactMarkdown className={styles.content}>{content}</ReactMarkdown>
      </div>
      {/* <div className={styles.reaction}>
      <ThumbsUp />
      <ThumbsDown />
      </div> */}
    </div>
  );
};

export default Blog;
