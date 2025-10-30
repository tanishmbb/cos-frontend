import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as postsApi from "@api/posts";

export const usePosts = (params) =>
  useQuery(["posts", params], () => postsApi.fetchPosts(params));

export const usePost = (id) =>
  useQuery(["post", id], () => postsApi.fetchPost(id), { enabled: !!id });

export const useCreatePost = () => {
  const qc = useQueryClient();
  return useMutation(postsApi.createPost, {
    onSuccess: () => qc.invalidateQueries(["posts"]),
  });
};
