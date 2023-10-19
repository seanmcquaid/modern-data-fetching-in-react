import useGetPostsQuery from "./services/queries/useGetPostsQuery";
import useDeletePostMutation from "./services/mutations/useDeletePostMutation";

function App() {
  const { data } = useGetPostsQuery();
  const { mutate } = useDeletePostMutation();

  return (
    <div>
      <h1>Let's dig into using React Query!</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <p>{post.title}</p>
            <button onClick={() => mutate(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
