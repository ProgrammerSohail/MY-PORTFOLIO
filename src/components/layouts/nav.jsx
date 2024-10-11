import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserIcon,
  EnvelopeIcon,
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon,
} from "@heroicons/react/24/solid";

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
    <>
      {isMobile && (
        <button
          onClick={toggleNav}
          className="fixed right-4 top-4 z-50 bg-yellow-500 text-white p-2 rounded-full shadow-lg"
        >
          {isNavOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      )}
      <nav
        className={`fixed left-0 md:top-[30%] z-40 h-screen transition-transform duration-300 ease-in-out
                    ${
                      isMobile
                        ? `w-full bg-[rgba(0,0,0,0.7)] ${
                            isNavOpen ? "translate-x-0" : "-translate-x-full"
                          }`
                        : "w-auto"
                    }`}
      >
        {isMobile ? (
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center h-20 bg-[rgb(0,0,0)]">
              <h1 className="text-white text-2xl font-bold uppercase">
                Sohail's Page
              </h1>
            </div>
            <ul className="flex-grow p-4">
              {navItems.map((item, index) => (
                <MobileNavItem
                  key={index}
                  {...item}
                  isActive={location.pathname === item.to}
                  onClick={closeNav}
                />
              ))}
            </ul>
          </div>
        ) : (
          <ul className="pt-8">
            {navItems.map((item, index) => (
              <DesktopNavItem
                key={index}
                {...item}
                isActive={location.pathname === item.to}
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                delay={700 + index * 200}
              />
            ))}
          </ul>
        )}
      </nav>
      {isMobile && isNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeNav}
        ></div>
      )}
    </>
  );
};

export default VerticalNav;
