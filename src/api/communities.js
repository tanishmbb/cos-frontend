import axios from "./axiosInstance";

export const fetchCommunities = (params = {}) =>
  axios.get("/communities/", { params });
export const fetchCommunity = (id) => axios.get(`/communities/${id}/`);
export const createCommunity = (payload) =>
  axios.post("/communities/", payload);
export const updateCommunity = (id, payload) =>
  axios.put(`/communities/${id}/`, payload);
export const deleteCommunity = (id) =>
  axios.delete(`/communities/${id}/`);

export const joinCommunity = (id) => axios.post(`/communities/${id}/join/`);
export const leaveCommunity = (id) => axios.post(`/communities/${id}/leave/`);
