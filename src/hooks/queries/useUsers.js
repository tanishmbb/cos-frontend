import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as usersApi from "@api/users";

export function useUsers(params) {
  return useQuery(["users", params], () => usersApi.fetchUsers(params));
}

export function useUser(id) {
  return useQuery(["user", id], () => usersApi.fetchUser(id), {
    enabled: !!id,
  });
}

export function useUpdateUser() {
  const qc = useQueryClient();
  return useMutation(({ id, payload }) => usersApi.updateUser(id, payload), {
    onSuccess: (_, vars) => {
      qc.invalidateQueries(["user", vars.id]);
      qc.invalidateQueries(["users"]);
    },
  });
}
