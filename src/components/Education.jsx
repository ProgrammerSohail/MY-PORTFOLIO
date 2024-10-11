import React, { useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaFileAlt,
  FaUsers,
  FaServer,
  FaPalette,
  FaLaptopCode,
} from "react-icons/fa";
import { motion } from "framer-motion";

const experienceEducationData = [
  {
    title: "JR. SOFTWARE DEVELOPER - SPARK MARKETING",
    date: "FEB 1ST, 2021 - PRESENT",
    type: "experience",
    icon: <FaBriefcase />,
    color: "text-white",
    responsibilities: [
      { text: "Developing and Maintaining company website.", icon: <FaCode /> },
      {
        text: "Developing Online School Management System (Private IP)",
        icon: <FaUsers />,
      },
      {
        text: "Developing Online Quiz Management System (Private IP)",
        icon: <FaLaptopCode />,
      },
      {
        text: "Making documentation on software with security encryption.",
        icon: <FaFileAlt />,
      },
      {
        text: "Developed Mobile App for proofing the property file (Fake or Real).",
        icon: <FaMobileAlt />,
      },
      { text: "Developed HRM for the company.", icon: <FaUsers /> },
    ],
  },
  {
    title: "IT ASSOCIATE - SPARK DIGITAL UNICORN",
    date: "JAN 1ST, 2022",
    type: "experience",
    icon: <FaBriefcase />,
    color: "text-white",
    responsibilities: [
      {
        text: "Mastered React.js, Tailwind CSS, and JavaScript for building dynamic, responsive, and interactive user interfaces",
        icon: <FaPalette />,
      },
      {
        text: "Skilled in Laravel (PHP) for scalable backend development, including design and implementation of RESTful APIs",
        icon: <FaServer />,
      },
      {
        text: "Implemented full-stack solutions, including frontend development for Ason Tech Company (Islamabad), integrating technologies for optimal performance",
        icon: <FaCode />,
      },
    ],
  },
  {
    title: "CURRENT STUDENT OF B.S COMPUTER SCIENCE - UET Mardan",
    icon: <FaGraduationCap />,
    date: "2024",
    type: "education",
    color: "text-white",
    description:
      "Student of B.S Computer Science from well-known and top in Ranking University",
  },
  {
    title: "F.SC (Computer Science)",
    icon: <FaGraduationCap />,
    date: "2023-2024",
    type: "education",
    color: "text-white",
    description:
      "Studied Intermediate in science (Computer Science) from MCA Sherghar",
  },
  {
    title: "MATRICULATION - SSC FBISE",
    icon: <FaGraduationCap />,
    date: "2020 - 2022",
    type: "education",
    color: "text-white",
    description: "Studied Matriculation in Science from from SSC Jewar",
  },
];

const ExperienceEducation = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedItem, setExpandedItem] = useState(null);

  const filteredData = experienceEducationData.filter(
    (item) =>
      activeFilter === "All" ||
      (activeFilter === "Experience" && item.type === "experience") ||
      (activeFilter === "Education" && item.type === "education")
  );
  const FilterButton = ({ filter, activeFilter, onClick }) => (
    <button
      className={`px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base rounded-full transition-all duration-300 ${
        activeFilter === filter
          ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white"
          : "text-gray-300 hover:bg-white hover:bg-opacity-10"
      }`}
      onClick={() => onClick(filter)}
    >
      {filter}
    </button>
  );

  return (
    <div className=" text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Experience & Education
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full p-1 flex flex-wrap justify-center">
            {["All", "Experience", "Education"].map((filter) => (
              <FilterButton
                key={filter}
                filter={filter}
                activeFilter={activeFilter}
                onClick={setActiveFilter}
              />
            ))}
          </div>
        </motion.div>

        <div className="space-y-8">
          {filteredData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div
                className={`bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-yellow-600/30 hover:bg-opacity-10 cursor-pointer`}
                onClick={() =>
                  setExpandedItem(expandedItem === index ? null : index)
                }
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full p-2 bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center mr-4">
                    <span className="text-2xl text-white">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm italic text-gray-400">{item.date}</p>
                  </div>
                </div>
                {expandedItem === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.description && (
                      <p className="mt-2 text-gray-300">{item.description}</p>
                    )}
                    {item.responsibilities && (
                      <ul className="mt-4 space-y-2 text-gray-300">
                        {item.responsibilities.map((resp, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="mr-2 text-yellow-600">
                              {resp.icon}
                            </span>
                            {resp.text}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;
