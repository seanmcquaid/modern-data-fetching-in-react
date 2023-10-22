import Post from "../types/Post";
import QueryKeys from "./QueryKeys";

const baseUrl = "https://jsonplaceholder.typicode.com";

// cache: 'no-store' is used to prevent caching in Next.js

const postsService = {
  getPosts: () =>
    fetch(`${baseUrl}/posts`, {
      next: { tags: [QueryKeys.GET_POSTS], revalidate: 60 },
    }).then((res) => res.json() as Promise<Post[]>),
  getPost: (id: string) =>
    fetch(`${baseUrl}/posts/${id}`, {
      next: { tags: [QueryKeys.GET_POST, id] },
    }).then((res) => res.json() as Promise<Post>),
  deletePost: (id: string) =>
    fetch(`${baseUrl}/posts/${id}`, { method: "DELETE" }),
} as const;

export default postsService;
