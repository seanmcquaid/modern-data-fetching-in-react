"use client";

import useGetPostsQuery from "@/services/queries/useGetPostsQuery";
import { useRouter } from "next/navigation";

const MorePostsPage = () => {
  const { data } = useGetPostsQuery();
  const router = useRouter();

  return (
    <div>
      <h1>Time to dig into using Next.js with React Query AGAIN</h1>
      <p>Look CLOSELY at the dev tools when we go back between the pages</p>
      <button onClick={() => router.push("/")}>Go Back</button>
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

export default MorePostsPage;
