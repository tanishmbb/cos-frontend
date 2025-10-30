import axios from "./axiosInstance";

export const fetchPosts = (params = {}) => axios.get("/posts/", { params });
export const fetchPost = (id) => axios.get(`/posts/${id}/`);
export const createPost = (payload) => axios.post("/posts/", payload);
export const deletePost = (id) => axios.delete(`/posts/${id}/`);

export const likePost = (id) => axios.post(`/posts/${id}/like/`);
export const unlikePost = (id) => axios.post(`/posts/${id}/unlike/`);

export const addComment = (postId, payload) =>
  axios.post(`/posts/${postId}/comments/`, payload);
export const fetchComments = (postId) =>
  axios.get(`/posts/${postId}/comments/`);
export const fetchCommunityPosts = (communityId, page = 1) =>
  axios.get(`/communities/${communityId}/posts/`, { params: { page } }).then(res => res.data);
