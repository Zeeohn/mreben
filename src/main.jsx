import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Analytics } from "@vercel/analytics";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Toaster />
      <App />
      <Analytics />
    </Router>
  </React.StrictMode>
);
