// src/pages/Backend.jsx
import React from "react";
import InternshipPage from "../../components/InternshipPage";
import { backendTasks } from "../../utils/tasks";

const Backend = () => {
  return <InternshipPage title="Backend Developer" tasks={backendTasks} themeColor="green" />;
};

export default Backend;
