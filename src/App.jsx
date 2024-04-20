import react, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { AuthSignup, AuthLogin } from "./components/Auth";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import { About } from "./components/About";
import { Anatomy } from "./components/Anatomy";
import { Physiology } from "./components/Physiology";
import { Chatbot } from "./components/Chatbot";
import { Quiz } from "./components/Quiz";
import { Labs } from "./components/Labs";

function App() {
  let navigate = useNavigate();
  let authToken = sessionStorage.getItem("Auth Token");
  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken]);
  return (
    <>
      <Routes>
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/signup" element={<AuthSignup />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/heartAnatomy" element={<Anatomy />} />
        <Route path="/heartPhysiology" element={<Physiology />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/labs" element={<Labs />} />
      </Routes>
    </>
  );
}

export default App;
