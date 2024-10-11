import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ isMobile, isNavOpen, toggleNav, closeNav, navItems }) => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  const MobileNavItem = ({ to, label, icon, isActive, onClick, index }) => (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link
        to={to}
        className={`flex items-center p-4 rounded-lg ${
          isActive ? 'bg-yellow-500 text-white' : 'text-gray-300 hover:bg-gray-800'
        }`}
        onClick={() => {
          setActiveIndex(index);
          onClick();
        }}
      >
        <span className="mr-3">{icon}</span>
        <span className="text-lg font-medium">{label}</span>
      </Link>
    </motion.li>
  );

  return (
    <div className="relative">
      <button
        onClick={toggleNav}
        className="fixed z-50 right-4 top-4 bg-yellow-500 text-white p-2 rounded-full shadow-lg"
      >
        {isNavOpen ? '✕' : '☰'}
      </button>
      <AnimatePresence>
        {isNavOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gray-900"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 bg-gray-800">
                <h1 className="text-white text-2xl font-bold">Menu</h1>
                <button onClick={closeNav} className="text-gray-400 hover:text-white">
                  ✕
                </button>
              </div>
              <div className="flex-grow overflow-y-auto p-4">
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <MobileNavItem
                      key={index}
                      {...item}
                      isActive={index === activeIndex}
                      onClick={closeNav}
                      index={index}
                    />
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-800">
                <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-yellow-500"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((activeIndex + 1) / navItems.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;