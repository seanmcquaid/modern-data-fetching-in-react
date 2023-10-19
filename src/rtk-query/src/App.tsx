import { useDeletePostMutation, useGetPostsQuery } from "./store/postsApi";

function App() {
  const { data } = useGetPostsQuery();
  const [mutate] = useDeletePostMutation();

  return (
    <div>
      <h1>Let's dig into using RTK Query</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            {post.title} <button onClick={() => mutate(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
