import axios from "./axiosInstance";

export const fetchOrganizations = (params = {}) =>
  axios.get("/organizations/", { params });

export const fetchOrganization = (id) => axios.get(`/organizations/${id}/`);
export const createOrganization = (payload) =>
  axios.post("/organizations/", payload);
export const updateOrganization = (id, payload) =>
  axios.put(`/organizations/${id}/`, payload);
export const deleteOrganization = (id) =>
  axios.delete(`/organizations/${id}/`);
