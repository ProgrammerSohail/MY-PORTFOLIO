// components/ScrollIndicator.jsx
import React, { useState, useEffect } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Hide the indicator when scrolled 20% of the page
      if (
        scrollY > windowHeight * 0.2 ||
        scrollY + windowHeight >= documentHeight
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-5 transform z-50 animate-bounce">
      <div className="w-14 h-14 shadow-xl bg-yellow-600 rounded-full flex items-center justify-center">
        <div className="w-8 h-8  animate-scroll">
          <FaArrowDown color="#fff" size={29} />
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
