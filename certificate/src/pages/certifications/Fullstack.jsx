// src/pages/Fullstack.jsx
import React from "react";
import InternshipPage from "../../components/InternshipPage";
import { fullstackTasks } from "../../utils/tasks";

const Fullstack = () => {
  return <InternshipPage title="Fullstack MERN Developer" tasks={fullstackTasks} themeColor="red" />;
};
export default Fullstack;
