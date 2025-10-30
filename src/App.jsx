// src/App.jsx
import React from "react";
import Header from "@components/layout/Header";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}
