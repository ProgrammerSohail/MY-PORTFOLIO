import React, { useState, useEffect } from "react";
import CVButton from "./CvBtn";
import "../index.css";
import { motion } from "framer-motion";

const PersonalInfoCard = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    customers: 0,
    skills: 0,
    certifications: 0,
    languages: 0,
    codeLines: 0,
    contributions: 0,
  });

  const personalDetails = [
    { label: "First Name", value: "Sohail" },
    { label: "Last Name", value: "Khan" },
    { label: "Age", value: "20 Years" },
    { label: "Nationality", value: "Pakistan" },
    { label: "Freelance", value: "Available" },
    { label: "Address", value: "Islamabad, Pakistan" },
    { label: "Phone", value: "+92 3128481076" },
    { label: "Email", value: "programmersohail.dev@gmail.com" },
    { label: "Skype", value: "xxxxxxxx" },
    { label: "Languages", value: "Pashto, Urdu, English" },
  ];

  const data = [
    { title: "Years Experience", target: 4, key: "experience" },
    { title: "Completed Projects", target: 35, key: "projects" },
    { title: "Happy Clients", target: 50, key: "customers" },
    { title: "Technical Skills", target: 15, key: "skills" },
    { title: "Certifications", target: 8, key: "certifications" },
    { title: "Languages Known", target: 3, key: "languages" },
    { title: "Lines of Code", target: 100000, key: "codeLines" },
    { title: "Open Source Contributions", target: 20, key: "contributions" },
  ];
  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;

    const timer = setInterval(() => {
      setCounters((prev) => {
        const newCounters = { ...prev };
        let completed = true;

        for (const item of data) {
          if (prev[item.key] < item.target) {
            newCounters[item.key] = Math.min(
              prev[item.key] + item.target / steps,
              item.target
            );
            completed = false;
          }
        }

        if (completed) {
          clearInterval(timer);
        }

        return newCounters;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-1   max-w-6xl  mx-auto p-6 shadow-lg rounded-lg  lg:px-20">
      <h2 className="text-2xl  font-bold mb-4 text-gray-700">
        <strong>PERSONAL INFOS</strong>
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <div className="max-w-4xl mx-auto p-4 md:p-8 border-2 border-yellow-600 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-4 hover:bg-opacity-20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-lg">
                    <span className="font-semibold text-yellow-300">
                      {detail.label}:
                    </span>{" "}
                    <span className="text-white">{detail.value}</span>
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a
                href="mailto:********@gmail.com"
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {data.map((item, index) => (
            <div key={index} className="container noselect">
              <div className="canvas c">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className={`tracker tr-${i + 1}`} />
                ))}
                <div className="flex flex-col justify-center p-4" id="card">
                  <p className="text-4xl font-bold text-black">
                    {Math.round(counters[item.key])}+
                  </p>
                  <p className="ttt text-black">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
