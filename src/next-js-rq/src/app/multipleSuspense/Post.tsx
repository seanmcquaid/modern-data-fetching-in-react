"use client";
import QueryKeys from "@/services/queries/QueryKeys";
import postsService from "@/services/postsService";
import sleep from "@/utils/sleep";
import { useSuspenseQuery } from "@tanstack/react-query";

interface PostProps {
  id: number;
  waitMs: number;
}

const Post = ({ id, waitMs }: PostProps) => {
  const { data } = useSuspenseQuery({
    queryKey: [QueryKeys.GET_POST, id],
    queryFn: async () => {
      await sleep(waitMs);
      return postsService.getPost(id.toString());
    },
  });

  return (
    <div>
      <h1>Post {id}</h1>
      <p>{data?.title}</p>
      <p>{data?.body}</p>
    </div>
  );
};

export default Post;
