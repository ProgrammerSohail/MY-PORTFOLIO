import { motion } from "framer-motion";
import { FaRocket, FaUserFriends, FaClock, FaTools } from "react-icons/fa";

const ServicesBenefits = () => {
  const benefits = [
    {
      icon: <FaRocket />,
      title: "Performance Optimization",
      description: "Lightning-fast loading times and smooth user experiences through optimized code and efficient resource management.",
    },
    {
      icon: <FaUserFriends />,
      title: "Client-Centric Approach",
      description: "Dedicated support and collaboration throughout the development process, ensuring your vision becomes reality.",
    },
    {
      icon: <FaClock />,
      title: "Timely Delivery",
      description: "Strict adherence to project timelines without compromising on quality or attention to detail.",
    },
    {
      icon: <FaTools />,
      title: "Maintenance & Support",
      description: "Ongoing technical support and regular updates to keep your digital solutions running smoothly.",
    },
  ];

  return (
    <div className="py-16">
      <motion.h2 
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Why Choose Our Services?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-10 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-yellow-400 text-3xl mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              {benefit.title}
            </h3>
            <p className="text-gray-300">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a
          href="/ContactUs"
          className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-8 rounded-full hover:from-yellow-500 hover:to-yellow-700 transition duration-300 transform hover:-translate-y-1"
        >
          Get Started
        </a>
      </motion.div>
    </div>
  );
};

export default ServicesBenefits; 