import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as postsApi from "@api/posts";
export function useLikePost(postId) {
  const qc = useQueryClient();
  return useMutation(() => postsApi.likePost(postId), {
    onMutate: async () => {
      await qc.cancelQueries(["post", postId]);
      const previous = qc.getQueryData(["post", postId]);
      qc.setQueryData(["post", postId], old => ({ ...old, likes: (old.likes || 0) + 1 }));
      return { previous };
    },
    onError: (err, _, context) => {
      qc.setQueryData(["post", postId], context.previous);
    },
    onSettled: () => {
      qc.invalidateQueries(["post", postId]);
      qc.invalidateQueries(["communityPosts"]);
    }
  });
}
