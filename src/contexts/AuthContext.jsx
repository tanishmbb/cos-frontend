import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "@api/axiosInstance"; // import your axios instance

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [refreshToken, setRefreshToken] = useState(() => localStorage.getItem("refreshToken"));
  const [user, setUser] = useState(() => token ? jwtDecode(token) : null);
  const [loading, setLoading] = useState(true);

  // On mount, validate token
  useEffect(() => {
    if (token) {
      let decoded;
      try {
        decoded = jwtDecode(token);
      } catch (e) {
        logout();
        setLoading(false);
        return;
      }
      const now = Date.now() / 1000;
      if (decoded.exp && decoded.exp < now) {
        logout();
      } else {
        setUser(decoded);
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      }
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    const resp = await axios.post("/auth/login/", credentials);
    const newToken = resp.data.access;
    const newRefresh = resp.data.refresh; // adapt to your backend!
    localStorage.setItem("token", newToken);
    localStorage.setItem("refreshToken", newRefresh);
    setToken(newToken);
    setRefreshToken(newRefresh);
    axios.defaults.headers.common.Authorization = `Bearer ${newToken}`;
    setUser(jwtDecode(newToken));
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    delete axios.defaults.headers.common.Authorization;
    setToken(null);
    setRefreshToken(null);
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{
        user, token, refreshToken, login, logout, loading,
        isAuthenticated: () => Boolean(user)
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
