import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const SkillCircle = ({ skill, percentage, isVisible, index }) => {
  const controls = useAnimation();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (isVisible) {
      controls.start((i) => ({
        pathLength: percentage / 100,
        opacity: 1,
        transition: { duration: 1.5, ease: "easeInOut", delay: i * 0.2 },
      }));
    }
  }, [isVisible, controls, percentage]);

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <motion.div
        className="relative w-32 h-32 cursor-pointer"
        animate={{
          rotate: hover ? 360 : 0,
          scale: hover ? 1.1 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <motion.circle
            className="text-gray-200 dark:text-gray-700"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="44"
            cx="50"
            cy="50"
          />
          <motion.circle
            className="text-[#facc14]"
            strokeWidth="8"
            strokeLinecap="round"
            stroke="url(#gradient)"
            fill="transparent"
            r="44"
            cx="50"
            cy="50"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={controls}
            custom={index}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#facc14" />
              <stop offset="100%" stopColor="#cc8d04" />
            </linearGradient>
          </defs>
          <text
            x="50"
            y="50"
            fontFamily="Arial, sans-serif"
            fontSize="16"
            fontWeight="bold"
            textAnchor="middle"
            alignmentBaseline="central"
            fill="#cc8d04"
          >
            {`${percentage}%`}
          </text>
        </svg>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-black bg-opacity-70 p-2 rounded-md">
            <p className="text-white text-sm">{skill}</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.p
        className="mt-4 text-sm font-semibold text-[#cc8d04]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      >
        {skill}
      </motion.p>
    </motion.div>
  );
};

const MySkills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);
  const [filter, setFilter] = useState("All");

  const skills = [
    { name: "NEXT.JS", percentage: 70, category: "Frontend" },
    { name: "PYTHON (AI & ML)", percentage: 30, category: "Backend" },
    { name: "Tailwind CSS", percentage: 85, category: "Frontend" },
    { name: "DOT NET", percentage: 50, category: "Backend" },
    { name: "PHP", percentage: 45, category: "Backend" },
    { name: "DATABASE (MYSQL)", percentage: 85, category: "Database" },
    { name: "REACT JS", percentage: 80, category: "Frontend" },
    { name: "REACT NATIVE", percentage: 70, category: "Mobile" },
    { name: "LARAVEL", percentage: 60, category: "Backend" },
    { name: "HTML", percentage: 97, category: "Frontend" },
    { name: "JAVASCRIPT", percentage: 93, category: "Frontend" },
    { name: "CSS", percentage: 92, category: "Frontend" },
  ];

  const filteredSkills =
    filter === "All"
      ? skills
      : skills.filter((skill) => skill.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={skillsRef}
      className="max-w-6xl mx-auto p-4 sm:p-8 rounded-3xl md:px-10 lg:px-20"
    >
      <motion.h2
        className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#facc14] to-[#cc8d04] relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        MY SKILLS
        <motion.div
          className="absolute w-32 h-1 bg-gradient-to-r from-[#facc14] to-[#cc8d04] bottom-0 left-1/2 transform -translate-x-1/2"
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </motion.h2>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {["All", "Frontend", "Backend", "Mobile", "Database"].map(
          (category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full ${
                filter === category
                  ? "bg-[#facc14] text-gray-900"
                  : "bg-gray-700 text-white"
              } font-semibold text-sm`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
            >
              {category}
            </motion.button>
          )
        )}
      </div>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <SkillCircle
              skill={skill.name}
              percentage={skill.percentage}
              isVisible={isVisible}
              index={index}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MySkills;
