import { useState } from "react";
import { motion } from "framer-motion"; // Added for animations
import ContactSection from "./contactSection";
import BackGround from "./layouts/BackGround";

const Messages = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Handle form submission logic here
  };

  const inputClasses =
    "w-full p-3 sm:p-4 border-2 border-yellow-400 rounded-full bg-transparent text-white placeholder-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all duration-300";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="cursor-none min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center py-8 sm:px-2 lg:px-8"
    >
      <div className="max-w-7xl w-full space-y-8 px-2 sm:px-8 md:px-16 rounded-3xl text-white">
        <div className="fixed -z-40 top-0 bottom-0 w-screen h-screen inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ic3RhcnMiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMSIgZmlsbD0iI2ZkZTY4YSIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjAuNSIgZmlsbD0iI2ZkZTY4YSIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjAuNzUiIGZpbGw9IiNmZGU2OGEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc3RhcnMpIi8+PC9zdmc+')] opacity-20"></div>

        <motion.h2
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 sm:mb-12 pt-16 sm:pt-24 md:pt-32 cursor-none mt-10"
        >
          <span className="text-white">GET IN </span>
          <BackGround />
          <span style={{ color: "#cc8d04" }}>TOUCH</span>
        </motion.h2>

        <div className="p-4 md:px-14 sm:p-6 md:p-8 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <ContactSection />

            <div className="form">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="YOUR NAME"
                  className={inputClasses}
                  onChange={handleChange}
                  required
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="YOUR EMAIL"
                  className={inputClasses}
                  onChange={handleChange}
                  required
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="subject"
                  value={formData.subject}
                  placeholder="YOUR SUBJECT"
                  className={inputClasses}
                  onChange={handleChange}
                  required
                />
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  placeholder="YOUR MESSAGE"
                  rows="4"
                  className="w-full p-3 sm:p-4 border-2 border-yellow-400 rounded-3xl bg-transparent text-white placeholder-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all duration-300 resize-none"
                  onChange={handleChange}
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-gray-700 font-bold rounded-full transition-all duration-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-white"
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </motion.button>
              </form>

              <div className="mt-12 sm:mt-16">
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Frequently Asked Questions
                </h4>
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="backdrop-blur-sm bg-white/30 p-4 sm:p-6 rounded-xl shadow-lg"
                    >
                      <h5 className="font-bold text-yellow-400 mb-2">
                        What is your response time?
                      </h5>
                      <p className="text-white">
                        We respond to all inquiries within 24 hours.
                      </p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="backdrop-blur-sm bg-white/30 p-4 sm:p-6 rounded-xl shadow-lg"
                    >
                      <h5 className="font-bold text-yellow-400 mb-2">
                        How can I contact you?
                      </h5>
                      <p className="text-white">
                        You can contact us via email, phone, or through this
                        contact form.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Messages;
