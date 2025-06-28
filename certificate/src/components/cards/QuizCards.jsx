import React from "react";
import { useNavigate } from "react-router-dom";
import quizTopics from "../../utils/quizeTopics";

const QuizCard = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div className="pt-20 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        🧠 Take a Quiz & Test Your Knowledge
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-6 max-w-7xl mx-auto">
        {quizTopics.map((quiz) => (
          <div
            key={quiz.id}
            onClick={() => handleNavigate(quiz.route)}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl cursor-pointer transition duration-300 transform hover:scale-105 flex flex-col items-center text-center"
          >
            <img src={quiz.image} alt={quiz.title} className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">{quiz.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{quiz.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
