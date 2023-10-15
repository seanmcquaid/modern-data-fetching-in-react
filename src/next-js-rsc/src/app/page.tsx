import { useEffect, useState } from "react"
import Post from "../types/Post"

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json() as Post[]
        setPosts(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [])

  if(isLoading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error</div>
  }
  
  return (
    <div>
      <h1>Time to dig into using React Server Components instead of this useEffect non-sense!</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
