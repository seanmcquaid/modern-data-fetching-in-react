import useGetPostsQuery from "./services/queries/useGetPostsQuery";
import useDeletePostMutation from "./services/mutations/useDeletePostMutation";

interface DeleteButtonProps {
  id: number;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const { mutate, isPending } = useDeletePostMutation();

  return (
    <button onClick={() => mutate(id)}>
      {isPending ? "Loading" : "Delete"}
    </button>
  );
}

function App() {
  const { data } = useGetPostsQuery();

  return (
    <div>
      <h1>Let's dig into using React Query!</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <p>{post.title}</p>
            <DeleteButton id={post.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
