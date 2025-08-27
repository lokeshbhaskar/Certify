import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import certifications from "../../utils/Certifications";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      type: "spring",
      stiffness: 70,
    },
  }),
};

const Card = () => {
  const navigate = useNavigate();
  // const handleClick = (route) => navigate(route);
  const handleClick = (route) => {
    const token = localStorage.getItem("token");
    // console.log("token", token);
    if (!token) {
      navigate("/login");
      return;
    }
    navigate(route);
  };
  return (
    <div className="p-8 min-h-screen">
      <h2 className="text-center text-gray-800 text-3xl font-bold mb-8">
        Explore Our Certification Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto overflow-hidden p-6">
        {certifications.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 2 }}
            className="bg-white rounded-2xl overflow-hidden w-full max-w-sm mx-auto h-44 flex flex-col items-center justify-center cursor-pointer shadow-md hover:shadow-2xl transition duration-300 "
            onClick={() => handleClick(item.route)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-14 h-14 object-contain"
            />
            <div className="p-3 text-center">
              <h3 className="text-base font-bold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-orange-500 mt-1">
                {item.by}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Card;
