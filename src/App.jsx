import react, { useState } from "react";
import toast from "react-hot-toast";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { AuthSignup, AuthLogin } from "./components/Auth";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/signup" element={<AuthSignup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
