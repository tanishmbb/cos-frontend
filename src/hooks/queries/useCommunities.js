import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as comApi from "@api/communities";

export const useCommunities = (params) =>
  useQuery(["communities", params], () => comApi.fetchCommunities(params));

export const useCommunity = (id) =>
  useQuery(["community", id], () => comApi.fetchCommunity(id), { enabled: !!id });

export const useCreateCommunity = () => {
  const qc = useQueryClient();
  return useMutation(comApi.createCommunity, {
    onSuccess: () => qc.invalidateQueries(["communities"]),
  });
};
