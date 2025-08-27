// src/pages/Courses.jsx
import { motion } from "framer-motion";

export default function Courses() {
  const courses = [
    "Front-End",
    "Back-End",
    "DSA",
    "Full Stack",
    "Data Science",
    "Machine Learning",
  ];

  return (
    <div className="px-6 py-16 bg-gradient-to-r from-[#fdcbf1] to-[#e6dee9] min-h-screen">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-center mb-14 text-gray-900"
      >
        Our Courses
      </motion.h2>

      {/* Course Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-2xl shadow-lg text-center cursor-pointer 
                       hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800">{course}</h3>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              Master {course} with interactive lessons, hands-on projects, and a
              certificate of completion.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2.5 
                         rounded-lg shadow-md hover:shadow-xl transition"
            >
              Explore
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
