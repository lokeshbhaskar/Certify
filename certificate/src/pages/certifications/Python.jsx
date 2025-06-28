// src/pages/Python.jsx
import React from "react";
import InternshipPage from "../../components/InternshipPage";
import { pythonTasks } from "../../utils/tasks";

const Python = () => {
  return <InternshipPage title="Python Developer" tasks={pythonTasks} themeColor="purple" />;
};

export default Python;
