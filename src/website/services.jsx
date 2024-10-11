import React, { useEffect, useRef } from "react";

import PersonalInfoCard from "../components/PersonalInfo";
import ProjectShowcase from "../components/ProjectShowcase";
import MySkills from "../components/MySkills";
import ExperienceEducation from "../components/Education";
import ScrollIndicator from "../components/layouts/ScrollInd";
import FutureGoals from "../components/FutureGoals";
import ServicesComponent from "../components/Services";
import BackGround from "../components/layouts/BackGround";

const Services = () => {
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
    <div className="min-h-screen text-white py-12 px-2 sm:px-2 lg:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 w-full">
      <div className="max-w-6xl mx-auto cursor-none">
        <h1 className="text-4xl font-bold text-center mb-12 text-white hdr pt-28 md:pt-0">
          <BackGround />
          <strong>Services</strong>
        </h1>
        <ScrollIndicator />
        {[ServicesComponent].map((Component, index) => (
          <section
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="mb-12 opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out "
          >
            <Component />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Services;
