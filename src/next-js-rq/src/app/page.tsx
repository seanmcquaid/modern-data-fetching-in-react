"use client";

import useSuspenseGetPostsQuery from "@/services/queries/useSuspenseGetPostsQuery";
import { useRouter } from "next/navigation";

const App = () => {
  const { data } = useSuspenseGetPostsQuery();
  const router = useRouter();

  return (
    <div>
      <h1>Time to dig into using Next.js with React Query</h1>
      <button onClick={() => router.push("/morePosts")}>More Posts</button>
      <button onClick={() => router.push("/morePostsSuspense")}>
        More Posts with Suspense
      </button>
      <button onClick={() => router.push("/multipleSuspense")}>
        Multiple Suspense
      </button>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <p>{post.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
