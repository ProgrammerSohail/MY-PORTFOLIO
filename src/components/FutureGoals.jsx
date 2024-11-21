import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Line, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  RadialLinearScale
);

const FutureGoals = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [skillLevels] = useState({
    Backend: 65,
    Database: 85,
    Laravel: 60,
    PHP: 45,
    "API Development": 70,
    "System Architecture": 55,
  });

  const goals = [
    {
      title: "Become a Top-Tier Programmer",
      description:
        "Striving to be among the best in the field, constantly pushing boundaries and exploring new technologies.",
    },
    {
      title: "Master Backend Development",
      description:
        "Deepening knowledge in server-side programming, API development, and system architecture.",
    },
    {
      title: "Database Expertise",
      description:
        "Achieving proficiency in advanced database management, optimization, and scalability techniques.",
    },
    {
      title: "Laravel Mastery",
      description:
        "Becoming an expert in Laravel framework, creating robust and efficient web applications.",
    },
    {
      title: "PHP Advancement",
      description:
        "Enhancing PHP skills to create more powerful and sophisticated web solutions.",
    },
    {
      title: "Professional Growth at AsonTechSol",
      description:
        "Contributing to and growing with AsonTechSol, pushing the boundaries of what&apos;s possible in web development.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % goals.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [goals.length]);

  const radarData = {
    labels: Object.keys(skillLevels),
    datasets: [
      {
        label: "Current Skill Level",
        data: Object.values(skillLevels),
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        pointBackgroundColor: "rgba(255, 206, 86, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255, 206, 86, 1)",
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Learning Progress",
        data: [30, 35, 55, 60, 70, 80, 85, 91, 95],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        pointLabels: {
          color: "white",
        },
        ticks: {
          color: "white",
          backdropColor: "transparent",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Learning Progress Over Time",
        color: "white",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "white",
        },
      },
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "white",
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-opacity-5 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Future Goals & Learning Objectives
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-filter backdrop-blur shadow-xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-yellow-400">
              My Journey
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              As a passionate developer working with AsonTechSol, I&apos;m on a
              relentless pursuit of excellence in programming. My journey
              involves mastering backend development, databases, Laravel, and
              PHP to create innovative and efficient web solutions.
            </p>
            <div className="h-64">
              <Line data={lineData} options={lineOptions} />
            </div>
          </motion.div>
          <motion.div
            className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-filter backdrop-blur-lg shadow-xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-yellow-400">
              Learning Objectives
            </h2>
            <div className="h-64 mb-6">
              <Radar data={radarData} options={radarOptions} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(skillLevels).map(([skill, level]) => (
                <div key={skill} className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                  <span className="text-sm">
                    {skill}: {level}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <motion.div
            className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-filter backdrop-blur-lg shadow-xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-yellow-400">
              Goals
            </h2>
            <div className="relative h-48">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg p-6 transform transition-all duration-500 ease-in-out ${
                    index === activeIndex
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-95 z-0"
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    scale: index === activeIndex ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-2">{goal.title}</h3>
                  <p className="text-base">{goal.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-filter backdrop-blur-lg shadow-xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-yellow-400">
              Professional Growth
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              At AsonTechSol, I&apos;m not just developing software &ndash;
              I&apos;m developing my career. Each project is an opportunity to
              push boundaries and explore new frontiers in web development.
            </p>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a
                href="https://asontechsol.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-3 px-6 rounded-full hover:from-yellow-500 hover:to-yellow-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Visit AsonTechSol
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FutureGoals;
