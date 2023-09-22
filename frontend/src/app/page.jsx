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
            <h3 className="">Let the world know your story.</h3>
            <p>Your unique voice and perspective can spark change and inspire others. Share your story with the world through a blog.</p>
            </div>
          <Image src={'/images/16.svg'} width={200} height={200} alt="svg" className="rotate-svg" />
          </div>
          <div className="blogText">
            <p className="blogparaText">Blogging is a dynamic and fulfilling activity that offers numerous advantages. Firstly, it provides an outlet for self-expression and creativity. It's a space where you can articulate your thoughts, share your experiences, and demonstrate your expertise on topics that matter to you. Whether you're passionate about travel, technology, fashion, or any other subject, blogging enables you to delve deeply into your interests and connect with like-minded individuals.</p>
              <p className="blogparaText">Furthermore, blogging is a powerful tool for personal development. It enhances your writing abilities, critical thinking skills, and research capabilities. Consistently crafting and refining your content forces you to effectively organize your ideas, which can be invaluable in both personal and professional contexts.</p>
            </div>
        </div>
    </>
  );
}
