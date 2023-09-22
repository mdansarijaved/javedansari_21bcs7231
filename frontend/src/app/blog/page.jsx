'use client'
import { useGetPostsQuery } from "@/store/posts"

export default function Blogs() {
    const { data: blogs, isLoading } = useGetPostsQuery();
    
    if (isLoading) return <div> Loading ... </div>

    console.log(blogs)
    return (
        <div></div>
    )
}