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
      const res = await axiosInstance.post(API_PATHS.AUTH.ADMIN_LOGIN, {
        token: token.trim(),
      });
      const jwtToken = res.data.token;
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
    // <div className="min-h-screen flex items-center justify-center">
    //   <form onSubmit={handleLogin} className="space-y-4 p-6 border rounded">
    //     <input
    //       type="password"
    //       placeholder="Enter Admin Token"
    //       value={token}
    //       onChange={(e) => setToken(e.target.value)}
    //       className="border p-2 w-full"
    //     />
    //     <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
    //       Login
    //     </button>
    //     {error && <p className="text-red-500">{error}</p>}
    //   </form>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Admin Login
        </h2>

        <div>
          <label
            htmlFor="admin-token"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Admin Token
          </label>
          <input
            id="admin-token"
            type="password"
            placeholder="Enter Admin Token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
