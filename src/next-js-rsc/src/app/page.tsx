import postsService from "@/services/postsService"

const App = async () => {
  const posts = await postsService.getPosts();
  
  return (
    <div>
      <h1>Time to dig into using React Server Components</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
