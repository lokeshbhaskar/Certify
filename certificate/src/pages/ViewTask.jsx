import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import { toast } from "react-toastify";

const ViewTask = () => {
  const { userId } = useParams();
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axiosInstance.get(
          API_PATHS.TASKS.GET_USER_TASKS(userId),
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setTasks(res.data);
      } catch (err) {
        console.error("Error fetching task", err);
      }
    };
    fetchTask();
  }, [userId]);
  // console.log(tasks)

  const handleTaskUpdate = async (taskId, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      await axiosInstance.patch(
        API_PATHS.TASKS.UPDATE_STATUS(taskId),
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Task update successfully")
      navigate("/admin-dashboard");
    } catch (err) {
      console.error("Error updating task", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Task Details
        </h1>

        {tasks.map((task, index) => (
          <div
            key={task._id}
            className="bg-white rounded-2xl shadow-md p-6 mb-6 transition hover:shadow-xl"
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700">
                👤 User: {task.user?.name}
              </h2>
            </div>

            <div className="text-gray-600 space-y-2">
              <p>
                🔗 <strong>GitHub:</strong>{" "}
                <a
                  href={task.github}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {task.github}
                </a>
              </p>

              <p>
                🌐 <strong>Deployed Link:</strong>{" "}
                <a
                  href={task.liveLink}
                  className="text-green-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {task.liveLink}
                </a>
              </p>

              <p>
                📌 <strong>Current Status:</strong>{" "}
                <span
                  className={`inline-block px-3 py-1 text-sm rounded-full ${
                    task.status === "pending"
                      ? "bg-yellow-200 text-yellow-800"
                      : task.status === "in progress"
                      ? "bg-blue-200 text-blue-800"
                      : "bg-green-200 text-green-800"
                  }`}
                >
                  {task.status}
                </span>
              </p>
            </div>

            <div className="mt-4">
              <label className="block font-medium mb-1">Update Status:</label>
              <select
                value={task.updatedStatus || task.status}
                onChange={(e) => {
                  const updatedTasks = [...tasks];
                  updatedTasks[index].updatedStatus = e.target.value;
                  setTasks(updatedTasks);
                }}
                className="border rounded-lg p-2 w-full max-w-xs"
              >
                <option value="pending">Pending</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <button
              onClick={() =>
                handleTaskUpdate(task._id, task.updatedStatus || task.status)
              }
              className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              ✅ Update Task
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ViewTask;
