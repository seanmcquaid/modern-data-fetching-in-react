import { useSuspenseQuery } from "@tanstack/react-query";
import QueryKeys from "../QueryKeys";
import postsService from "../postsService";
import sleep from "@/utils/sleep";

const useSuspenseGetPostsQuery = () => {
  const result = useSuspenseQuery({
    queryKey: [QueryKeys.GET_POSTS],
    queryFn: async () => {
      await sleep(3000);
      return postsService.getPosts();
    },
  });

  return result;
};

export default useSuspenseGetPostsQuery;
