import { useDeletePostMutation, useGetPostsQuery } from "./store/postsApi";

interface DeleteButtonProps {
  id: number;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const [mutate, { isLoading }] = useDeletePostMutation();

  return (
    <button onClick={() => mutate(id)}>
      {isLoading ? "Loading" : "Delete"}
    </button>
  );
};

function App() {
  const { data } = useGetPostsQuery();

  return (
    <div>
      <h1>Let's dig into using RTK Query</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            {post.title} <DeleteButton id={post.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
