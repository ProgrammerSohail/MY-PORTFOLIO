import { useEffect, useMemo, useState } from "react";
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

  const data = useMemo(
    () => [
      { title: "Years Experience", target: 4, key: "experience" },
      { title: "Completed Projects", target: 35, key: "projects" },
      { title: "Happy Clients", target: 50, key: "customers" },
      { title: "Technical Skills", target: 15, key: "skills" },
      { title: "Certifications", target: 8, key: "certifications" },
      { title: "Languages Known", target: 4, key: "languages" },
      { title: "Lines of Code", target: 100000, key: "codeLines" },
      { title: "Open Source Contributions", target: 20, key: "contributions" },
    ],
    []
  );

  useEffect(() => {
    const duration = 3000;
    const interval = 50;
    const steps = duration / interval;

    const timer = setInterval(() => {
      setCounters((prev) => {
        const newCounters = { ...prev };
        let completed = true;

        data.forEach((item) => {
          if (prev[item.key] < item.target) {
            newCounters[item.key] = Math.min(
              prev[item.key] + item.target / steps,
              item.target
            );
            completed = false;
          }
        });

        if (completed) {
          clearInterval(timer);
        }

        return newCounters;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [data]);

  const PersonalInfoSection = () => (
    <div className="bg-gray-900 bg-opacity-80 p-6 rounded-2xl">
      <h2 className="text-3xl font-bold mb-6 text-yellow-400">
        Personal Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {personalDetails.map((detail, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-yellow-500 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col space-y-1">
              <span className="text-sm text-gray-400">{detail.label}</span>
              <span className="text-lg text-white font-medium truncate">{detail.value}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href={`mailto:${
            personalDetails.find((d) => d.label === "Email")?.value
          }`}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center space-x-2"
        >
          <span>Contact Me</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </a>
      </motion.div>
    </div>
  );

  const StatsSection = () => (
    <div className="grid grid-cols-2 gap-4">
      {data.map((item, index) => (
        <div key={index} className="container noselect">
          <div className="canvas c">
            {Array.from({ length: 25 }, (_, i) => (
              <div key={i} className={`tracker tr-${i + 1}`} />
            ))}
            <div className="flex flex-col justify-center p-4" id="card">
              <p className="text-4xl font-bold text-white text-stroke-2 text-stroke-yellow-500">
                {Math.round(counters[item.key])}+
              </p>
              <p className="ttt text-white text-stroke-1 text-stroke-yellow-500">
                {item.title}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="px-1 max-w-6xl mx-auto p-6 shadow-lg rounded-lg lg:px-20">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        <strong>PERSONAL INFOS</strong>
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <PersonalInfoSection />
        </div>
        <StatsSection />
      </div>
    </div>
  );
};

export default PersonalInfoCard;
