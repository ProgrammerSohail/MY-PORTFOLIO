import { useEffect, useRef } from "react";
import ScrollIndicator from "../components/layouts/ScrollInd";
import ServicesComponent from "../components/Services";
import BackGround from "../components/layouts/BackGround";
import ServicesBenefits from "../components/ServicesBenefits";

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

    // Store current refs in a variable to avoid closure issues
    const currentRefs = sectionRefs.current;

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="min-h-screen text-white py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-5"></div>
      <div className="max-w-7xl mx-auto cursor-none relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 hdr pt-28 md:pt-0 tracking-tight">
            <BackGround />
            <strong>Our Services</strong>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering excellence through innovative solutions
          </p>
        </div>
        <ScrollIndicator />
        <div className="relative">
          {[ServicesComponent].map((Component, index) => (
            <section
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="mb-16 opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out hover:scale-[1.02] transform transition-transform"
            >
              <Component />
            </section>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none"></div>
      <ServicesBenefits />
    </div>
  );
};

export default Services;
