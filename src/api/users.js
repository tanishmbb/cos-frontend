import axios from "./axiosInstance";

export const fetchUsers = (params = {}) => axios.get("/users/", { params });
export const fetchUser = (id) => axios.get(`/users/${id}/`);
export const updateUser = (id, payload) => axios.put(`/users/${id}/`, payload);

export const uploadAvatar = (id, file) => {
  const data = new FormData();
  data.append("avatar", file);
  return axios.post(`/users/${id}/avatar/`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
