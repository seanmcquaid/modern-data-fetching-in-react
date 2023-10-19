import { useQuery } from "@tanstack/react-query";
import QueryKeys from "./QueryKeys";
import postsService from "../postsService";

const useGetPostsQuery = () => {
  const result = useQuery({
    queryKey: [QueryKeys.GET_POSTS],
    queryFn: () => postsService.getPosts(),
  });

  return result;
};

export default useGetPostsQuery;
