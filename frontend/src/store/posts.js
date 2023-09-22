import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://cu-backend.up.railway.app'
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => ({
                url: '/posts/',
            }),
            providesTags: ['Post'],
            transformResponse: (res) => {
                return res.sort(compareCreateTimes);
            }
        }),
        addPosts: builder.mutation({
            query: ({ uid, content, title }) => ({
                url: '/posts/',
                body: {
                    'create_by': uid,
                    'title': title,
                    'content': content,
                },
                method: 'POST'
            }),
            invalidatesTags: ['Post']

        }),
        getPostById: builder.query({
            query: ({ id }) => ({
                url: `/posts/${id}/`
            }),
            providesTags: ['Post']
        }),
        deletePost: builder.query({
            query: ({ id }) => ({
                url: `/posts/${id}/`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useAddPostsMutation,
    useDeletePostQuery,
} = postsApi

function compareCreateTimes(a, b) {
    const dateA = new Date(a.create_time);
    const dateB = new Date(b.create_time);

    if (dateA < dateB) {
        return 1;
    }
    if (dateA > dateB) {
        return -1;
    }
    return 0;
}