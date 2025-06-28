import React, { useState } from "react";
import { API_PATHS } from "../utils/apiPaths";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const SubmitionForm = () => {
  const [pdf, setPdf] = useState(null);
  const [github, setGithub] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const navigate = useNavigate();
  const [taskField, setTaskField] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("github", github);
    formData.append("liveLink", liveLink);
    formData.append("pdf", pdf);
    formData.append("taskField", taskField);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in to submit the task.");
        return;
      }
      const res = await axiosInstance.post(
        API_PATHS.TASKS.SUBMIT_TASK,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("Response:", res.status, res.data);
      if (res.status === 200 || res.status === 201) {
        alert("Task submitted successfully!");
        setPdf(null);
        setGithub("");
        setLiveLink("");
        navigate("/user-dashboard");
      } else {
        alert("Failed to submit task. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting task:", error);
      alert("An error occurred while submitting the task. Please try again.");
    }
  };

  return (
    <form
      className="mt-6 space-y-4 bg-white shadow-md p-4 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block mb-1 font-semibold">
          Upload PDF (Project Report/Screenshot)
        </label>
        <input
          type="file"
          accept=".pdf"
          className="border border-gray-300 p-2 w-full rounded"
          onChange={(e) => setPdf(e.target.files[0])}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">GitHub Repo Link</label>
        <input
          type="url"
          placeholder="https://github.com/username/project"
          className="border border-gray-300 p-2 w-full rounded"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Live Deployed Link</label>
        <input
          type="url"
          placeholder="https://yourproject.vercel.app"
          className="border border-gray-300 p-2 w-full rounded"
          value={liveLink}
          onChange={(e) => setLiveLink(e.target.value)}
          required
        />
      </div>
      <select
        value={taskField}
        onChange={(e) => setTaskField(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="">Select Task Type</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="fullstack">Fullstack</option>
        <option value="aws">AWS</option>
        <option value="python">Python</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit Task
      </button>
    </form>
  );
};

export default SubmitionForm;
