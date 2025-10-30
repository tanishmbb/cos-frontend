import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as oppApi from "@api/opportunities";

export const useOpportunities = (params) =>
  useQuery(["opportunities", params], () => oppApi.fetchOpportunities(params));

export const useOpportunity = (id) =>
  useQuery(["opportunity", id], () => oppApi.fetchOpportunity(id), { enabled: !!id });

export const useCreateOpportunity = () => {
  const qc = useQueryClient();
  return useMutation(oppApi.createOpportunity, {
    onSuccess: () => qc.invalidateQueries(["opportunities"]),
  });
};
