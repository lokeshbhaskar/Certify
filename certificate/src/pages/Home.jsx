import React from "react";

import Card from "../components/cards/Card";

import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start ">
      <section className=" w-[90%] md:w-[80%] lg:w-[75%] min-h-[90vh] mt-4 md:mt-8  justify-between items-center rounded-xl m-4 overflow-hidden shadow-xl pt-4">
        {/* <Navbar className="fixed top-0 z-50" /> */}
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] py-10 md:py-0 ">
          {/* Left side: Image */}
          <div className="w-full  flex items-center justify-center md:w-1/2 mb-8 md:mb-0">
            <motion.img
              src={img1}
              alt="Training and Certification"
              className="w-[60%] max-w-md rounded-xl drop-shadow-lg hover:scale-105 transition-transform duration-500"
               whileHover={{ rotate: -2 }}
            />
            <motion.img
              src={img2}
              alt="Training and Certification"
              className="w-[40%] max-w-md rounded-xl drop-shadow-lg hover:scale-105 transition-transform duration-500"
              whileHover={{rotate:-5}}
            />
          </div>
          {/* Right side: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Training and Certification
            </h1>
            <p className="text-orange-600 mb-6 mx-5 text-start">
              100+ certification courses. 100% online
            </p>
            <a
              href="#courses"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-full transition"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
      <Card />
    </div>
  );
};

export default Home;
