import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as orgApi from "@api/organizations";

export const useOrganizations = (params) =>
  useQuery(["organizations", params], () => orgApi.fetchOrganizations(params));

export const useOrganization = (id) =>
  useQuery(["organization", id], () => orgApi.fetchOrganization(id), { enabled: !!id });

export const useCreateOrganization = () => {
  const qc = useQueryClient();
  return useMutation(orgApi.createOrganization, {
    onSuccess: () => qc.invalidateQueries(["organizations"]),
  });
};
