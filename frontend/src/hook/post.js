const { useGetPostsQuery } = require("@/store/posts");
const { useUser } = require("@/store/user");

export const useFilterPostQuery = () => {
    const { data: blogs, isLoading, isError } = useGetPostsQuery();
    const { uid } = useUser();

    return {
        data: blogs?.filter(blog => blog.create_by == uid),
        isLoading,
        isError,
    }
}