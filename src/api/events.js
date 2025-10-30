import axios from "./axiosInstance";

export const fetchEvents = (params = {}) => axios.get("/events/", { params });
export const fetchEvent = (id) => axios.get(`/events/${id}/`);
export const createEvent = (payload) => axios.post("/events/", payload);
export const updateEvent = (id, payload) => axios.put(`/events/${id}/`, payload);
export const deleteEvent = (id) => axios.delete(`/events/${id}/`);

export const registerForEvent = (id) => axios.post(`/events/${id}/register/`);
export const cancelRegistration = (id) =>
  axios.post(`/events/${id}/cancel/`);
