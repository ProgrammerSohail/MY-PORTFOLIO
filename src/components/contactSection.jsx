import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-8 rounded-3xl relative overflow-hidden"
    >
      <div className="relative z-10 space-y-8">
        <motion.h3
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
            Contact Information
          </span>
        </motion.h3>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 gap-6"
        >
          <ContactItem
            icon={MdEmail}
            title="Email"
            content="programmersohail.dev@gmail.com"
            delay={0.1}
          />
          <ContactItem
            icon={MdPhone}
            title="Phone"
            content="+923128481076"
            delay={0.2}
          />
          <ContactItem
            icon={MdLocationOn}
            title="Location"
            content="Islamabad, Pakistan"
            delay={0.3}
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-8"
        >
          {[
            {
              icon: FaFacebook,
              href: "https://www.facebook.com/programer.sohail",
              label: "Facebook",
              color: "#4267B2",
            },
            {
              icon: FaWhatsapp,
              href: "https://wa.me/+923128481076",
              label: "WhatsApp",
              color: "#25D366",
            },
            {
              icon: FaLinkedin,
              href: "https://www.linkedin.com/in/programmer-sohail-978a15324",
              label: "LinkedIn",
              color: "#0077B5",
            },
            {
              icon: FaGithub,
              href: "https://github.com/ProgrammerSohail",
              label: "GitHub",
              color: "#333",
            },
          ].map((social, index) => (
            <SocialLink key={index} {...social} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const ContactItem = ({ icon: Icon, title, content, delay }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay }}
    className="group bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300"
  >
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-full bg-gray-700 group-hover:bg-gray-600">
        <Icon className="text-2xl text-yellow-400" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <p className="text-gray-300">{content}</p>
      </div>
    </div>
  </motion.div>
);

ContactItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};

const SocialLink = ({ icon: Icon, href, label }) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
  >
    <Icon className="text-2xl text-yellow-400" />
  </motion.a>
);

SocialLink.propTypes = {
  icon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ContactSection;
