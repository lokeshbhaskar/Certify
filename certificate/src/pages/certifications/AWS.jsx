// src/pages/AWS.jsx
import React from "react";
import InternshipPage from "../../components/InternshipPage";
import { awsTasks } from "../../utils/tasks";

const AWS = () => {
  return <InternshipPage title="AWS Cloud Engineer" tasks={awsTasks} themeColor="yellow" />;
};

export default AWS;
