'use client'
import Blog from "@/components/blog"
import { useGetPostByIdQuery } from "@/store/posts"

export default function Page({ params }) {
    const { data: blog, isError, isLoading } = useGetPostByIdQuery({ id: params.slug })
    
    if (isError) return <div>Not Found</div>
    if (isLoading) return <div>Loading...</div>

    return (
        <Blog blog={blog}/>
    )
}