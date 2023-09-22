'use client'
import BlogMinified from "@/components/blog-minified";
import "./page.css";
import Image from "next/image";
import { useGetPostsQuery } from "@/store/posts";

export default function Home() {
  const { data: blogs, isLoading } = useGetPostsQuery();
  
  if (isLoading) return <div>Loading...</div>
  return (
    <>
        <div className="landing-1">
          {blogs.map(blog => (
            <BlogMinified 
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
        <div className="anotherdiv">
          <div className="svg-container">
            <div className="text-svg-container">
            <h3 className="text">Let the world know your story.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum cupiditate eveniet nam esse autem, aliquam suscipit</p>
            </div>
          <Image src={'/images/16.svg'} width={200} height={200} alt="svg" className="rotate-svg" />
          </div>
        </div>
    </>
  );
}
