import axios from "./axiosInstance";

export const fetchOpportunities = (params = {}) =>
  axios.get("/opportunities/", { params });
export const fetchOpportunity = (id) => axios.get(`/opportunities/${id}/`);
export const createOpportunity = (payload) =>
  axios.post("/opportunities/", payload);
export const updateOpportunity = (id, payload) =>
  axios.put(`/opportunities/${id}/`, payload);
export const deleteOpportunity = (id) =>
  axios.delete(`/opportunities/${id}/`);
