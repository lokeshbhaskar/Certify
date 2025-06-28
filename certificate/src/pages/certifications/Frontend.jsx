import React from "react";
import { frontendTasks } from "../../utils/tasks";
import SubmitionForm from "../../components/SubmitionForm";
import { FaTasks } from "react-icons/fa";
import InternshipPage from "../../components/InternshipPage";

const Frontend = () => {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
    //   <div className="max-w-4xl mx-auto">
    //     <h1 className="text-3xl font-extrabold text-center text-blue-800 mb-8 drop-shadow-sm">
    //       🚀 Frontend Developer Virtual Internship
    //     </h1>
    //     <div className="bg-white rounded-lg shadow-lg p-6 mb-10 border-t-4 border-blue-600 transition-all hover:shadow-xl">
    //       <div className="flex items-center gap-2 mb-4">
    //         <FaTasks className="text-blue-600 text-xl" />
    //         <h2 className="text-2xl font-semibold text-gray-800">Assigned Tasks</h2>
    //       </div>
    //       <ul className="list-disc list-inside space-y-3 text-gray-700 pl-2">
    //         {frontendTasks.map((task, index) => (
    //           <li
    //             key={index}
    //             className="hover:text-blue-600 transition-all duration-200"
    //           >
    //             {task}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-all">
    //       <h2 className="text-2xl font-semibold text-green-700 mb-4">
    //         📤 Submit Your Work
    //       </h2>
    //       <SubmitionForm />
    //     </div>
    //   </div>
    // </div>
     <InternshipPage title="Frontend Developer" tasks={frontendTasks} themeColor="pink" />
  );
};

export default Frontend;
