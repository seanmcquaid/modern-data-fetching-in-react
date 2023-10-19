"use client";

import useSuspenseGetPostsQuery from "@/services/queries/useSuspenseGetPostsQuery";
import { useRouter } from "next/navigation";

const MorePostsSuspense = () => {
  const { data } = useSuspenseGetPostsQuery();
  const router = useRouter();

  return (
    <div>
      <h1>Time to dig into using Next.js with React Query AGAIN AGAIN</h1>
      <button onClick={() => router.push("/")}>Go back</button>
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

export default MorePostsSuspense;
