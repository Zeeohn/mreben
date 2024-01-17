import react, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { AuthSignup, AuthLogin } from "./components/Auth";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";

function App() {
  let navigate = useNavigate();
  let authToken = sessionStorage.getItem("Auth Token");
  useEffect(() => {
    if (authToken) {
      navigate("/");
    }
  }, [authToken]);
  return (
    <>
      <Routes>
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/signup" element={<AuthSignup />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
