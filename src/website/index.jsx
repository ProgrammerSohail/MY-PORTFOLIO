import { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BackGround from "../components/layouts/BackGround";
import MyImg from "../../public/imgs/sohail.png";

const TypedEffect = ({
  strings,
  typeSpeed = 80,
  backSpeed = 50,
  loop = true,
}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    let timeout;

    const typeChar = () => {
      if (!isDeleting && currentText !== currentString) {
        setCurrentText((prev) => prev + currentString[prev.length]);
        timeout = setTimeout(typeChar, typeSpeed);
      } else if (isDeleting && currentText !== "") {
        setCurrentText((prev) => prev.slice(0, -1));
        timeout = setTimeout(typeChar, backSpeed);
      } else if (currentText === currentString && !isDeleting) {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      } else if (currentText === "" && isDeleting) {
        setIsDeleting(false);
        setCurrentStringIndex((prevIndex) =>
          loop
            ? (prevIndex + 1) % strings.length
            : prevIndex < strings.length - 1
            ? prevIndex + 1
            : prevIndex
        );
      }
    };

    timeout = setTimeout(typeChar, isDeleting ? backSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [
    currentStringIndex,
    currentText,
    isDeleting,
    strings,
    typeSpeed,
    backSpeed,
    loop,
  ]);

  return <span>{currentText}</span>;
};

TypedEffect.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,
  typeSpeed: PropTypes.number,
  backSpeed: PropTypes.number,
  loop: PropTypes.bool,
};

const Home = () => {
  return (
    <section className="home w-screen -z-50 text-white grid md:grid-cols-2 inset-0  bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden cursor-none ">
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-2 lg:px-8">
        <BackGround />
        <div className="max-w-4xl w-full space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="home-content w-full h-full flex justify-center flex-col items-center md:px-16 px-4 py-16 md:py-0"
          >
            <img
              src={MyImg}
              alt="Sohail Khan, a professional web developer and designer "
              loading="lazy"
              className="rounded-full m-9 border-yellow-500 bg-gray-200 border-4  md:hidden"
              width="200"
            />
            <motion.h1
              className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I&apos;m <span className="text-white">SOHAIL KHAN</span>
            </motion.h1>

            <motion.h2
              className="text-3xl sm:text-4xl font-semibold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              I&apos;m a{" "}
              <span className="text-yellow-400">
                <TypedEffect
                  strings={[
                    "WEBSITE BUILDER",
                    "FULL-STACK DEVELOPER",
                    "UX/UI MAESTRO",
                    "DIGITAL DREAMWEAVER",
                    "CODE CONJURER",
                    "PIXEL PERFECTIONIST",
                    "WEB OPTIMIZATION WIZARD",
                    "INNOVATION ARCHITECT",
                    "TECH-SAVVY TRAILBLAZER",
                  ]}
                  typeSpeed={80}
                  backSpeed={60}
                  loop
                />
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Transforming ideas into stunning digital experiences. Let&apos;s
              create something amazing together!
            </motion.p>

            <motion.div
              className="flex justify-center space-x-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {[
                {
                  icon: FaWhatsapp,
                  href: "https://wa.me/+923128481076",
                  label: "WhatsApp",
                },
                {
                  icon: FaFacebook,
                  href: "https://www.facebook.com/programer.sohail",
                  label: "Facebook",
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/programmer-sohail-978a15324",
                  label: "LinkedIn",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Connect with Sohail Khan on ${social.label}`}
                  className="border border-yellow-600 p-3 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} className="text-white" />
                </motion.a>
              ))}
            </motion.div>

            <Link to="/about">
              <motion.button
                className="bg-yellow-500 text-gray-900 font-bold py-3 px-8 active:scale-110 rounded-full hover:bg-yellow-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="home-img-cont w-full h-full hidden md:flex justify-center md:items-end animate-fadeInUp delay-200 ">
        <Link
          to="/about"
          className="md:w-[430px] md:h-[590px] lg:w-[540px] lg:h-[600px] h-[400px] bottom-[-18px] md:relative overflow-hidden z-10 hover:scale-105 duration-700 cursor-none"
        >
          <img
            src={MyImg}
            alt="Sohail Khan, a professional web developer and designer"
            loading="lazy"
            width="540"
            height="600"
          />
        </Link>
      </div>
    </section>
  );
};

export default Home;
