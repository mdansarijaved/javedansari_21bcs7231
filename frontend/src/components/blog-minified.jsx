import React from 'react'

const BlogMinified = ({ blog }) => {
  console.log(blog)
  return (
    <a className="card" href={`/blog/${blog.id}`}>
      <h1 className="card-tittle">
        {blog.title}
      </h1>
      <div className="card-content">
        <p></p>
      </div>
    </a>
  )
}

export default BlogMinified