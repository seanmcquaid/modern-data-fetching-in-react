import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const baseUrl = 'https://jsonplaceholder.typicode.com'

const postsService = {
  getPosts: () => fetch(`${baseUrl}/posts`).then(res => res.json() as Promise<Post[]>),
  deletePost: (id: number) => fetch(`${baseUrl}/posts/${id}`, { method: 'DELETE' }),
};

const QueryKeys = {
  GET_POSTS: 'getPosts',
} as const;

function App() {
  const {data} = useQuery({
    queryKey: [QueryKeys.GET_POSTS],
    queryFn: () => postsService.getPosts(),
  })
  const queryClient = useQueryClient();
  const {mutate} = useMutation({
    mutationFn: (id: number) => postsService.deletePost(id),
    onSuccess: () => queryClient.invalidateQueries({
      queryKey: [QueryKeys.GET_POSTS],
      exact: true
    })
  })
  
  return (
    <div>
      <h1>Let's dig into using React Query!</h1>
      <ul>
        {data?.map((post: Post) => (
          <li key={post.id}>
            <p>{post.title}</p>
            <button onClick={() => mutate(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
