import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // pulls from .env
  headers: { "Content-Type": "application/json" },
});

// Attach token on every request
API.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  // If you use refreshToken as a cookie, adapt here.
  return config;
}, err => Promise.reject(err));

let refreshing = false;
let queue = [];

const processQueue = (error, token = null) => {
  queue.forEach(prom => (error ? prom.reject(error) : prom.resolve(token)));
  queue = [];
};

API.interceptors.response.use(
  res => res,
  async err => {
    const originalReq = err.config;
    // Only auto-refresh if 401 and not already retried
    if (err.response?.status === 401 && !originalReq._retry) {
      originalReq._retry = true;
      if (refreshing) {
        return new Promise((resolve, reject) => {
          queue.push({ resolve, reject });
        })
          .then(token => {
            originalReq.headers.Authorization = "Bearer " + token;
            return API(originalReq);
          })
          .catch(e => Promise.reject(e));
      }
      refreshing = true;
      const refresh = localStorage.getItem("refreshToken") || Cookies.get("refreshToken");
      try {
        const resp = await axios.post(
          `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_TOKEN_REFRESH_ENDPOINT}`,
          { refresh }
        );
        const newToken = resp.data.access;
        // Save new token
        localStorage.setItem("token", newToken);
        API.defaults.headers.common.Authorization = "Bearer " + newToken;
        originalReq.headers.Authorization = "Bearer " + newToken;
        processQueue(null, newToken);
        return API(originalReq);
      } catch (refreshError) {
        processQueue(refreshError, null);
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        // Optionally clear cookie if using refresh cookies
        Cookies.remove("refreshToken");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      } finally {
        refreshing = false;
      }
    }
    return Promise.reject(err);
  }
);

export default API;
