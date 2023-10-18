import { useMutation, useQueryClient } from "@tanstack/react-query"
import postsService from "../postsService"
import QueryKeys from "../queries/QueryKeys"

const useDeletePostMutation = () => {
    const queryClient = useQueryClient()
    const result = useMutation({
        mutationFn: (id: number) => postsService.deletePost(id),
        onSuccess: () => queryClient.invalidateQueries({
          queryKey: [QueryKeys.GET_POSTS],
          exact: true
        })
      })

      return result
}

export default useDeletePostMutation