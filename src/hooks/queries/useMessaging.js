import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as msgApi from "@api/messaging";

export const useConversations = () =>
  useQuery(["conversations"], msgApi.fetchConversations);

export const useMessages = (conversationId) =>
  useQuery(["messages", conversationId], () => msgApi.fetchMessages(conversationId), {
    enabled: !!conversationId,
  });

export const useSendMessage = () => {
  const qc = useQueryClient();
  return useMutation(({ conversationId, payload }) => msgApi.sendMessage(conversationId, payload), {
    onSuccess: (_, vars) => {
      qc.invalidateQueries(["messages", vars.conversationId]);
    },
  });
};
