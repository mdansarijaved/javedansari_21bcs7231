import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './blogcontent.module.css'
const Blog = ({Title , content}) => {
  return (
    <div className={styles.main}>
        <h1>{Title}</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default Blog