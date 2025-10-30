import axios from "./axiosInstance";

export const fetchSkills = () => axios.get("/skills/");
export const fetchBadges = () => axios.get("/badges/");
export const assignBadge = (userId, badgeId) =>
  axios.post(`/users/${userId}/assign-badge/`, { badge_id: badgeId });
export const addSkill = (userId, skillId) =>
  axios.post(`/users/${userId}/add-skill/`, { skill_id: skillId });
