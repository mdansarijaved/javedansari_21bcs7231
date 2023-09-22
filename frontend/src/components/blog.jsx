import React from 'react'
import ReactMarkdown from 'react-markdown'
const Blog = ({Title , content}) => {
  return (
    <div>
        <h1>{Title}</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default Blog