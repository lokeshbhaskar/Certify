import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { FaCheckCircle, FaClock, FaHourglassHalf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [summary, setSummary] = useState({
    completed: 0,
    pending: 0,
    inProgress: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axiosInstance.get(
          API_PATHS.TASKS.GET_LOGGEDIN_USER_TASKS,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const taskList = res.data || [];
        setTasks(taskList);
        const completed = taskList.filter(
          (t) => t.status === "completed"
        ).length;
        const pending = taskList.filter((t) => t.status === "pending").length;
        const inProgress = taskList.filter(
          (t) => t.status === "in progress"
        ).length;
        setSummary({ completed, pending, inProgress });
      } catch (err) {
        console.error("Failed to load tasks", err);
      }
    };

    fetchTasks();
  }, []);

  const handlePreview = (task) => {
    navigate("/certificate-preview", { state: { task } });
  };
  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="flex md:flex-row flex-col items-center justify-center gap-4 h-24 ">
        <h1 className="text-xl  md:text-3xl font-bold text-blue-800  text-center">
          Welcome to Your Dashboard
        </h1>
        <div className="">
          <button
            onClick={() => navigate("/")}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition transform duration-300 font-bold"
          >
            Go to Home
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white border-l-4 border-green-500 p-5 rounded shadow hover:shadow-lg transition">
          <div className="flex items-center space-x-3">
            <FaCheckCircle className="text-green-500 text-2xl" />
            <div>
              <h2 className="font-semibold text-lg">Completed Tasks</h2>
              <p className="text-green-700 text-2xl">{summary.completed}</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-yellow-400 p-5 rounded shadow hover:shadow-lg transition">
          <div className="flex items-center space-x-3">
            <FaHourglassHalf className="text-yellow-500 text-2xl" />
            <div>
              <h2 className="font-semibold text-lg">In Progress</h2>
              <p className="text-yellow-700 text-2xl">{summary.inProgress}</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-red-500 p-5 rounded shadow hover:shadow-lg transition">
          <div className="flex items-center space-x-3">
            <FaClock className="text-red-500 text-2xl" />
            <div>
              <h2 className="font-semibold text-lg">Pending Tasks</h2>
              <p className="text-red-700 text-2xl">{summary.pending}</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Tasks</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks assigned yet.</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white p-5 rounded-lg shadow hover:shadow-xl transition-all border-l-4 border-blue-500"
            >
              <p className="text-xl font-bold mb-2 text-blue-700">
                {task.title}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Status:</strong>{" "}
                <span
                  className={`font-semibold ${
                    task.status === "completed"
                      ? "text-green-600"
                      : task.status === "pending"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {task.status}
                </span>
              </p>
              <p className="text-gray-600">
                <strong>Description:</strong>{" "}
                {task.description || "No description provided."}
              </p>
              {task.status === "completed" ? (
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => handlePreview(task)}
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 cursor-pointer"
                  >
                    Preview Certificate & Download
                  </button>
                </div>
              ) : (
                <p> Your task is not verified yet </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
