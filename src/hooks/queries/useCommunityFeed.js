import { useInfiniteQuery } from "@tanstack/react-query";
import * as postsApi from "@api/posts";

export function useCommunityFeed(communityId) {
  return useInfiniteQuery(
    ["communityPosts", communityId],
    ({ pageParam = 1 }) => postsApi.fetchCommunityPosts(communityId, pageParam),
    {
      getNextPageParam: lastPage => lastPage.next_page ?? false,
    }
  );
}
