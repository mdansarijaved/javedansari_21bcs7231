'use client'
import Blog from '@/components/blog';
import { useFilterPostQuery } from '@/hook/post'
import React from 'react'

const MyBlogs = () => {
  const { data: blogs, isLoading } = useFilterPostQuery();
  
  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {blogs.map(blog => 
        <Blog
          key={blog.id} 
          blog={blog}
        />  
      )}
    </div>
  )
}

export default MyBlogs