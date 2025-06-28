import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { FaHourglassEnd } from "react-icons/fa6";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axiosInstance.get(
          API_PATHS.TASKS.GET_USERS_WITH_TASK_STATUS,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users", err);
      }
    };
    fetchUsers();
  }, [location]);
  // console.log(users.status);
  // console.log(users.map(u => ({ name: u.name, status: u.status })));

  const handleViewTask = (userId) => {
    navigate(`/admin/task/${userId}`);
  };
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b pb-4">
          👩‍💼 Admin Dashboard
        </h1>
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-blue-100 text-blue-900 uppercase text-sm font-semibold">
              <tr>
                <th className="px-6 py-3 text-left">Profile</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Task</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-200">
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="hover:bg-blue-50 transition duration-200"
                >
                  <td className="px-6 py-4">
                    <img
                      src={user.profileImageUrl || "https://i.pravatar.cc/50"}
                      alt="avatar"
                      className="w-10 h-10 rounded-full border border-gray-300 shadow-sm"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleViewTask(user._id)}
                      className="px-4 py-1.5 text-sm font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                      View Task
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    {user.status === "pending" ? (
                      <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        <FaHourglassEnd className="mr-1" /> Pending
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        <FaCheckCircle className="mr-1" /> Checked
                      </span>
                    )}
                    {/* {user.status === "checked" ? (
                      <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        <FaCheckCircle className="mr-1" /> Checked
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        <FaHourglassEnd className="mr-1" /> Pending
                      </span>
                    )} */}
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No users found with assigned tasks.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
