import React, { useEffect } from "react";
import { trio } from "ldrs";

const LoadingAnimation = () => {
  useEffect(() => {
    trio.register();
  }, []);

  return (
    // Default values shown
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <l-trio size="40" speed="1.3" color="gold"></l-trio>
    </div>
  );
};

export default LoadingAnimation;
