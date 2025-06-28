import React from "react";
import bgimg from "../assets/bgimg.png";
import Navbar from "../components/layouts/Navbar";
import Card from "../components/cards/Card";
import Footer from "../components/Footer";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import QuizCard from "../components/cards/QuizCards";

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <section
        className=" w-[90%] md:w-[80%] lg:w-[75%] min-h-[90vh] mt-4 md:mt-8  justify-between items-center rounded-xl m-4 overflow-hidden shadow-xl pt-4"
        >
        <Navbar />
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] py-10 md:py-0 ">
          {/* Left side: Image */}
          <div className="w-full  flex items-center justify-center md:w-1/2 mb-8 md:mb-0">
            <img
              src={img1}
              alt="Training and Certification"
              className="w-[60%] max-w-md rounded-xl drop-shadow-lg"
            />
            <img
              src={img2}
              alt="Training and Certification"
              className="w-[40%] max-w-md rounded-xl drop-shadow-lg"
            />
          </div>
          {/* Right side: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Training and Certification
            </h1>
            <p className="text-white mb-6 mx-5 text-start">
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
      {/* <QuizCard /> */}
      <Footer />
    </div>
  );
};

export default Home;
