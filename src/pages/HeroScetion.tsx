import React from "react";
import anasImage from "../assets/anas.jpg";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full h-full p-5 bg-gray-100 dark:bg-gray-900 pb-10">
      <div className="md:w-1/2 text-center md:text-left">
        {/* Animated Heading */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          <span className="typing-animation">
            Welcome to my Portfolio
          </span>
        </h1>
        {/* Description */}
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Welcome to the portfolio of Mohammad Anas, a versatile professional with expertise in IT Technical Support, 
          Digital Marketing, Software Engineering, and Creative Design. With a passion for technology and design, 
          I offer a broad range of services from web development to digital marketing and graphic design. 
          Explore my services, portfolio, and curated collection of photography available for purchase.
        </p>
        {/* Hire Me Button */}
        <div className="mt-6">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500 hover:scale-105 transform transition-all duration-300">
            Hire Me
          </button>
        </div>
      </div>
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center relative">
        <div className="relative w-[500px] h-[450px] bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="absolute top-4 left-4 w-[500px] h-[450px] bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <img src={anasImage} alt="heros" className="rounded-lg w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
