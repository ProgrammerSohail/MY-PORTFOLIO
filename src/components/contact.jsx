import { useState } from "react";
import { motion } from "framer-motion";
import ContactSection from "./contactSection";
// import BackGround from "./layouts/BackGround";

const Messages = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const inputClasses =
    "w-full p-4 bg-gray-800/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300";

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-5xl font-bold text-center mb-16"
        >
          <span className="text-white">GET IN </span>
          <span className="text-yellow-400">TOUCH</span>
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="fixed -z-40 top-0 bottom-0 w-screen h-screen  inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ic3RhcnMiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMSIgZmlsbD0iI2ZkZTY4YSIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjAuNSIgZmlsbD0iI2ZkZTY4YSIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjAuNzUiIGZpbGw9IiNmZGU2OGEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc3RhcnMpIi8+PC9zdmc+')] opacity-20"></div>
          {/* Contact Info Section */}
          <div className="space-y-8 bg-gray-800/30 p-8 rounded-2xl">
            <ContactSection />

            {/* Social Links */}
            {/* <div className="flex gap-4 pt-6">
              {["facebook", "whatsapp", "linkedin", "github"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400/10 hover:bg-yellow-400/20 transition-colors"
                >
                  <i className={`fab fa-${social} text-yellow-400`}></i>
                </a>
              ))}
            </div> */}
          </div>

          {/* Form Section */}
          <div className="bg-gray-800/30 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name", type: "text", placeholder: "Full Name" },
                { name: "email", type: "email", placeholder: "Email Address" },
                { name: "subject", type: "text", placeholder: "Subject" },
              ].map((field) => (
                <motion.input
                  key={field.name}
                  whileFocus={{ scale: 1.01 }}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={inputClasses}
                  required
                />
              ))}

              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
                required
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Send Message
              </motion.button>
            </form>

            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-6">FAQ</h3>
              <div className="grid gap-4">
                {[
                  {
                    q: "What is your response time?",
                    a: "We typically respond within 24 hours",
                  },
                  {
                    q: "How can I contact you?",
                    a: "Via email, phone, or this contact form",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.01 }}
                    className="p-4 bg-gray-800/50 rounded-lg"
                  >
                    <h4 className="font-medium text-yellow-400 mb-2">
                      {faq.q}
                    </h4>
                    <p className="text-gray-300 text-sm">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Messages;
