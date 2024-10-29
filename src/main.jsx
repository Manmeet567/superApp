import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/404";
import Selection from "./pages/MovieSelection";
import Dashboard from "./pages/Dashboard";
import Browse from "./pages/Browse";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/browse" element={<Browse />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
