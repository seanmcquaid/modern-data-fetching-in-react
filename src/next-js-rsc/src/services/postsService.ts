import Post from "../types/Post";
import QueryKeys from "./QueryKeys";

const baseUrl = "https://jsonplaceholder.typicode.com";

const postsService = {
  getPosts: () =>
    fetch(`${baseUrl}/posts`, { next: { tags: [QueryKeys.GET_POSTS] } }).then(
      (res) => res.json() as Promise<Post[]>
    ),
  getPost: (id: string) =>
    fetch(`${baseUrl}/posts/${id}`).then((res) => res.json() as Promise<Post>),
  deletePost: (id: string) =>
    fetch(`${baseUrl}/posts/${id}`, { method: "DELETE" }),
} as const;

export default postsService;
