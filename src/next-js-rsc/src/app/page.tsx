import postsService from "@/services/postsService"
import DeleteButton from "@/components/DeleteButton";
import { deletePost } from "./actions";

const App = async () => {
  const posts = await postsService.getPosts();
  
  return (
    <div>
      <h1>Time to dig into using React Server Components</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.title}</p>
            <form action={deletePost}>
              <input type="hidden" value={post.id} name="id"/>
              <DeleteButton />
            </form>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
