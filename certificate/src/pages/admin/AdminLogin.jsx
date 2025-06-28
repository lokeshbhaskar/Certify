// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { useNavigate } from "react-router-dom";


const AdminLogin = () => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post( API_PATHS.AUTH.ADMIN_LOGIN , {
        token : token.trim(),
      });
       const jwtToken = res.data.token; // ✅ avoid naming conflict
    // console.log("Admin token:", jwtToken)
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        // localStorage.setItem("isAdmin", "true");
        navigate("/admin-dashboard");
      }
    } catch (err) {
      setError("Invalid token!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="space-y-4 p-6 border rounded">
        <input
          type="password"
          placeholder="Enter Admin Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
