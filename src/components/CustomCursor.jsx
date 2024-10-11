import React, { useState, useEffect, useRef } from "react";

const CustomCursor = () => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const timeoutRef = useRef(null);
  const requestRef = useRef(null);

  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);

    if (!isTouchDevice) {
      const moveCursor = (e) => {
        setDotPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      };

      const animateCircle = () => {
        setCirclePosition((prevPos) => ({
          x: lerp(prevPos.x, dotPosition.x, 0.15),
          y: lerp(prevPos.y, dotPosition.y, 0.15),
        }));
        requestRef.current = requestAnimationFrame(animateCircle);
      };

      const handleMouseEnter = () => setIsHovering(true);
      const handleMouseLeave = () => setIsHovering(false);

      window.addEventListener("mousemove", moveCursor);
      requestRef.current = requestAnimationFrame(animateCircle);

      const clickableElements = document.querySelectorAll(".clickable");
      clickableElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });

      return () => {
        window.removeEventListener("mousemove", moveCursor);
        window.removeEventListener("resize", checkTouchDevice);
        clickableElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
        });
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
      };
    }
  }, [isTouchDevice, dotPosition]);

  if (isTouchDevice) {
    return null;
  }

  const circleStyle = {
    width: "40px",
    height: "40px",
    backgroundColor: "rgba(255, 226, 95, 0.3)",
    borderRadius: "50%",
    position: "fixed",
    pointerEvents: "none",
    zIndex: 9998,
    left: `${circlePosition.x}px`,
    top: `${circlePosition.y}px`,
    transform: `translate(-50%, -50%) ${
      isHovering ? "scale(1.5)" : "scale(1)"
    }`,
    opacity: isVisible ? 1 : 0,
    transition: "transform 0.1s ease, opacity 0.3s ease",
  };

  const dotStyle = {
    width: "8px",
    height: "8px",
    backgroundColor: "#facc14",
    borderRadius: "50%",
    position: "fixed",
    pointerEvents: "none",
    zIndex: 9999,
    left: `${dotPosition.x}px`,
    top: `${dotPosition.y}px`,
    opacity: isVisible ? 1 : 0,
    transform: "translate(-50%, -50%)",
    transition: "opacity 0.3s ease",
  };

  return (
    <>
      <div style={circleStyle} />
      <div style={dotStyle} />
    </>
  );
};

export default CustomCursor;
