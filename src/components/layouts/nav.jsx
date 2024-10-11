import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserIcon,
  EnvelopeIcon,
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon,
} from "@heroicons/react/24/solid";
import Navigation from "./MobileNav";

const ServiceIcon = ({ className = "w-8 h-8" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const DesktopNavItem = ({
  icon,
  text,
  to,
  isActive,
  onMouseEnter,
  onMouseLeave,
  delay,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <li
      className={`mb-4 transition-all duration-300 ease-in-out
                  ${isHovered ? "w-40" : "w-16"}
                  ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onMouseLeave();
      }}
    >
      <Link
        to={to}
        className={`cursor-none flex items-center p-3 rounded-r-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white
                    ${isActive ? "ring-2 ring-white" : ""}`}
      >
        <span className="w-8 h-8 flex-shrink-0">{icon}</span>
        <span
          className={`ml-4 whitespace-nowrap transition-all duration-300
                      ${
                        isHovered
                          ? "opacity-100 max-w-full"
                          : "opacity-0 max-w-0"
                      } overflow-hidden`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
};

const MobileNavItem = ({ icon, text, to, isActive, onClick }) => (
  <li className="mb-4">
    <Link
      to={to}
      className={`flex items-center p-3 rounded-lg ${
        isActive ? "bg-yellow-600" : "hover:bg-yellow-500"
      } text-white transition-colors duration-200`}
      onClick={onClick}
    >
      <span className="w-6 h-6 flex-shrink-0">{icon}</span>
      <span className="ml-4">{text}</span>
    </Link>
  </li>
);

const VerticalNav = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { icon: <HomeIcon />, text: "Home", to: "/" },
    { icon: <UserIcon />, text: "About Me", to: "/about" },
    { icon: <ServiceIcon />, text: "Services", to: "/services" },
    { icon: <EnvelopeIcon />, text: "Contact Us", to: "/ContactUs" },
  ];

  return (
    <Navigation
      isMobile={isMobile}
      isNavOpen={isNavOpen}
      toggleNav={toggleNav}
      closeNav={closeNav}
      navItems={[
        { to: "/", label: "Home", icon: "🏠" },
        { to: "/about", label: "About", icon: "ℹ️" },
        { to: "/services", label: "Services", icon: "🛠️" },
        { to: "/contact", label: "Contact", icon: "📞" },
      ]}
    />
  );
};

export default VerticalNav;
