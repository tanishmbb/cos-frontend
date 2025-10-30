import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as marketApi from "@api/marketplace";

export const useProducts = (params) =>
  useQuery(["products", params], () => marketApi.fetchProducts(params));

export const useProduct = (id) =>
  useQuery(["product", id], () => marketApi.fetchProduct(id), { enabled: !!id });

export const useCreateProduct = () => {
  const qc = useQueryClient();
  return useMutation(marketApi.createProduct, {
    onSuccess: () => qc.invalidateQueries(["products"]),
  });
};
