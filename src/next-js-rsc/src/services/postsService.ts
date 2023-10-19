import Post from "../types/Post";

const baseUrl = 'https://jsonplaceholder.typicode.com'

const postsService = {
    getPosts: () => fetch(`${baseUrl}/posts`).then(res => res.json() as Promise<Post[]>),
    deletePost: (id: number) => fetch(`${baseUrl}/posts/${id}`, { method: 'DELETE' }),
};

export default postsService;