import axios from "./axiosInstance";

export const fetchProducts = (params = {}) =>
  axios.get("/marketplace/products/", { params });
export const fetchProduct = (id) =>
  axios.get(`/marketplace/products/${id}/`);
export const createProduct = (payload) =>
  axios.post("/marketplace/products/", payload);
export const updateProduct = (id, payload) =>
  axios.put(`/marketplace/products/${id}/`, payload);
export const deleteProduct = (id) =>
  axios.delete(`/marketplace/products/${id}/`);
