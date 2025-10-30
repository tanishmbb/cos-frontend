import axios from "./axiosInstance";

export const fetchConversations = () => axios.get("/messaging/conversations/");
export const fetchMessages = (conversationId) =>
  axios.get(`/messaging/conversations/${conversationId}/messages/`);
export const sendMessage = (conversationId, payload) =>
  axios.post(`/messaging/conversations/${conversationId}/messages/`, payload);
