import React from "react";
import Homepage from "./pages/home/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import Register from "./pages/register/Register";
import { Toaster } from "react-hot-toast";
import Login from "./pages/login/Login";
import Profile from "./pages/profilePage/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
