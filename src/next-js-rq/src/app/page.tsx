"use client"

import useSuspenseGetPostsQuery from "@/services/queries/useSuspenseGetPostsQuery"

const App = () => {
  const {data} = useSuspenseGetPostsQuery();
  
  return (
    <div>
      <h1>Time to dig into using Next.js with React Query</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <p>{post.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
