import React from "react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };

  let name = sessionStorage.getItem("Name");

  return (
    <div className="flex flex-col items-center justify-center">
      <p>
        {`Welcome, ${
          name ? name : "user"
        }! This section is still in development, please bear with us
        😢!`}
      </p>
      <br />
      You can click this button to Logout:
      <button
        className="bg-red-500 text-white px-3 py-4 rounded-lg w-1/4 my-4 "
        onClick={handleLogout}
      >
        Logout
      </button>
      <p>
        OR <br /> Go to{" "}
        <a href="/" className="text-green-500 underline">
          home page
        </a>
      </p>
    </div>
  );
};
