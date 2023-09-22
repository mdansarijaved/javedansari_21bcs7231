import React from 'react'
import CreatedBy from './CreatedBy'

const BlogMinified = ({ blog }) => {
  return (
    <a className="card" href={`/blog/${blog.id}`}>
      <CreatedBy uid={blog.create_by} />
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