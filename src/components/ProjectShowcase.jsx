import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BlockImg from "../../public/imgs/Blockchain-Technology-1-details.jpg";
import VotImg from "../../public/imgs/image-1.jpg";

const ProjectShowcase = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
      image: `${VotImg}`,
      github: "https://github.com/ProgrammerSohail",
      live: "",
    },
    // {
    //   title: "AI-Powered Chat Application",
    //   description:
    //     "An intelligent chat app that uses natural language processing for enhanced communication.",
    //   technologies: ["Python", "TensorFlow", "React", "WebRTC"],
    //
    //   image: "../public/imgs/Blockchain-Technology-1-details.jpg",
    //   github: "https://github.com/yourusername/ai-chat-app",
    //   live: "",
    // },
    {
      title: "Blockchain Voting System",
      description:
        "A secure and transparent voting system built on blockchain technology.",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
      image: `${BlockImg}`,
      github: "https://github.com/ProgrammerSohail",
      live: "",
    },
    // Add more projects as needed
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        nextProject();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovering, nextProject]);

  return (
    <div className=" bg-opacity-5  py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#facc14] to-[#cc8d04]">
          Project Showcase
        </h2>
        <div className="relative" ref={carouselRef}>
          <div className="overflow-hidden">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === currentProject
                    ? "opacity-100"
                    : "opacity-0 absolute top-0 left-0"
                }`}
                initial={false}
                animate={{
                  rotateY: (index - currentProject) * -45,
                  scale: index === currentProject ? 1 : 0.8,
                  z: index === currentProject ? 0 : -200,
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl overflow-hidden">
                  <div className="relative h-64 sm:h-72 md:h-96">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#facc14] to-[#cc8d04]">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-[#facc14] to-[#cc8d04] text-gray-900 rounded-full text-sm font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#facc14] hover:text-[#cc8d04] transition-colors"
                      >
                        GitHub
                      </a>
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-[#facc14] to-[#cc8d04] text-gray-900 px-4 py-2 rounded-md hover:from-[#cc8d04] hover:to-[#facc14] transition-all duration-300"
                        >
                          Live Demo
                        </a>
                      ) : (
                        <span className="text-gray-400 italic">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#facc14] to-[#cc8d04] text-gray-900 p-2 rounded-full hover:from-[#cc8d04] hover:to-[#facc14] transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#facc14] to-[#cc8d04] text-gray-900 p-2 rounded-full hover:from-[#cc8d04] hover:to-[#facc14] transition-all duration-300"
          >
            →
          </button>
        </div>
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#facc14] to-[#cc8d04]">
            Project Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#facc14] to-[#cc8d04]" />
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-gradient-to-r from-[#facc14] to-[#cc8d04] absolute left-1/2 transform -translate-x-1/2 ${
                    index === currentProject ? "scale-150" : ""
                  } transition-all duration-300`}
                />
                <div
                  className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg hover:bg-opacity-20 rounded-lg p-4 shadow-xl max-w-md ${
                    index % 2 === 0 ? "mr-8" : "ml-8"
                  } hover:scale-105 transition-all duration-300`}
                >
                  <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#facc14] to-[#cc8d04] mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
