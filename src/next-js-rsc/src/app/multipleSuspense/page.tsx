import { Suspense } from "react";
import Post from "./Post";
import Link from "next/link";

const MultipleSuspenseExample = () => {
  return (
    <div>
      <h1>Time to dig into actually using Suspense for Data Fetching!</h1>
      <Link href="/">Home</Link>
      <Suspense fallback={<div>Loading!</div>}>
        <Post id={1} waitMs={3000} />
      </Suspense>
      <Suspense fallback={<div>Loading!</div>}>
        <Post id={2} waitMs={6000} />
      </Suspense>
    </div>
  );
};

export default MultipleSuspenseExample;
