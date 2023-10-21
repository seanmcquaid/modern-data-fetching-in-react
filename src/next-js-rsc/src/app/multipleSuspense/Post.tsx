import postsService from "@/services/postsService";
import sleep from "@/utils/sleep";

interface PostProps {
  id: number;
  waitMs: number;
}

const Post = async ({ id, waitMs }: PostProps) => {
  await sleep(waitMs);
  const post = await postsService.getPost(id.toString());

  return (
    <div>
      <h1>Post {id}</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
