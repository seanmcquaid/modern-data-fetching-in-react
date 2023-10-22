import Post from "../types/Post";

const baseUrl = "https://jsonplaceholder.typicode.com";

const postsService = {
  getPosts: () =>
    fetch(`${baseUrl}/posts`).then((res) => res.json() as Promise<Post[]>),
  deletePost: (id: string) =>
    fetch(`${baseUrl}/posts/${id}`, { method: "DELETE" }),
  getPost: (id: string) =>
    fetch(`${baseUrl}/posts/${id}`).then((res) => res.json() as Promise<Post>),
} as const;

export default postsService;
