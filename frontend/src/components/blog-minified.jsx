import React from 'react'
import CreatedBy from './CreatedBy'
import styles from './blog-minified.module.css'

const BlogMinified = ({ blog }) => {
  return (
    <a className={styles["card"]} href={`/blog/${blog.id}`}>
      <CreatedBy blog={blog} />
      <h1 className={styles["card-title"]}>
        {blog.title}
      </h1>
      <div className={styles["card-content"]}>
        <p></p>
      </div>
    </a>
  )
}

export default BlogMinified