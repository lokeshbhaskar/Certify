import React, { useEffect, useState } from "react";
import SubmitionForm from "./SubmitionForm";
import { FaTasks } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const InternshipPage = ({ title, tasks, themeColor }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const colorMap = {
    blue: "border-blue-600 text-blue-800",
    green: "border-green-500 text-green-700",
    purple: "border-purple-600 text-purple-700",
    yellow: "border-yellow-500 text-yellow-700",
    red: "border-red-600 text-red-700",
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds loader
    return () => clearTimeout(timer);
  }, []);

  const colorClasses = colorMap[themeColor] || "border-blue-600 text-blue-800";
  const borderColor = colorClasses.split(" ")[0]; // e.g., border-blue-600
  const textColor = colorClasses.split(" ")[1]; // e.g., text-blue-800

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white p-6">
       {loading && (
        <Loader />
      )}
      <div
        className={`max-w-4xl mx-auto transition-all duration-500 ${
          loading ? "blur-sm" : "blur-0"
        }`}
      >
        <div className="py-4 flex md:flex-row flex-col items-center gap-4 justify-center ">
          <h1
            className={`text-3xl font-extrabold text-center  drop-shadow-sm ${textColor}`}
          >
            🚀 {title} Virtual Internship
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

        <div
          className={`bg-white rounded-lg shadow-lg p-6 mb-10 border-t-4 ${borderColor} hover:shadow-xl transition-all`}
        >
          <div className="flex items-center gap-2 mb-4">
            <FaTasks className={`${textColor} text-xl`} />
            <h2 className="text-2xl font-semibold text-gray-800">
              Assigned Tasks
            </h2>
          </div>
          <ul className="list-disc list-inside space-y-3 text-gray-700 pl-2">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="hover:text-blue-600 transition-all duration-200"
              >
                {task}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-all">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            📤 Submit Your Work
          </h2>
          <SubmitionForm />
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;
