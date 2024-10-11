import React, { useEffect, useRef } from "react";
import PersonalInfoCard from "./PersonalInfo";
import MySkills from "./MySkills";
import ExperienceEducation from "./Education";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import ProjectShowcase from "./ProjectShowcase";
import ScrollIndicator from "./layouts/ScrollInd";
import CVButton from "./CvBtn";
import FutureGoals from "./FutureGoals";
import BackGround from "./layouts/BackGround";

const AboutMe = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Lowered threshold for earlier triggering
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInLeft");
          entry.target.classList.remove("opacity-0", "translate-x-[-50px]");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="min-h-screen text-white py-12 px-2 sm:px-2 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 w-full">
      <div className="max-w-full mx-auto cursor-none">
        <h1 className="text-4xl font-bold text-center mb-12 text-white hdr pt-28 md:pt-0">
          <strong>About Me</strong>
          <BackGround />
        </h1>
        <ScrollIndicator />
        {[
          PersonalInfoCard,
          ProjectShowcase,
          MySkills,
          FutureGoals,
          ExperienceEducation,
        ].map((Component, index) => (
          <section
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="mb-12  opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out "
          >
            <Component />
          </section>
        ))}
        <CVButton />
      </div>
    </div>
  );
};

export default AboutMe;
