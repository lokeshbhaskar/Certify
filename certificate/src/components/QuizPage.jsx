import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const QuizPage = ({ title, quizz }) => {
  const navigate = useNavigate();

  const colorMap = {
    blue: "border-blue-600 text-blue-800",
    green: "border-green-500 text-green-700",
    purple: "border-purple-600 text-purple-700",
    yellow: "border-yellow-500 text-yellow-700",
    red: "border-red-600 text-red-700",
  };
  const colorClasses = colorMap[themeColor] || "border-blue-600 text-blue-800";
  const borderColor = colorClasses.split(" ")[0];
  const textColor = colorClasses.split(" ")[1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-3xl font-extrabold text-center mb-10 ${textColor}`}>
          🧠 {title} Quizzes
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {quizz.map((quiz, index) => (
            <div
              key={index}
              onClick={() => navigate(`/quiz/${quiz.field}`)}
              className={`bg-white rounded-lg shadow-md border-t-4 ${borderColor} p-5 hover:shadow-xl cursor-pointer transition-all`}
            >
              <div className="flex items-center gap-3 mb-2">
                <FaQuestionCircle className={`text-xl ${textColor}`} />
                <h3 className="text-xl font-semibold text-gray-800">{quiz.field} Quiz</h3>
              </div>
              <p className="text-sm text-gray-600">
                {quiz.questions.length} questions • {quiz.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default QuizPage;
