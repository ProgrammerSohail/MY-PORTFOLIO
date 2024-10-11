import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-8  rounded-3xl relative overflow-hidden border border-yellow-600">
      <div className="relative z-10 space-y-8">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
            Let's Connect
          </span>
        </h3>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed backdrop-blur-sm bg-white/10 p-4 sm:p-6 rounded-xl shadow-lg text-center border border-yellow-400/30">
          I'm excited to collaborate on new projects and bring creative ideas to
          life. Don't hesitate to reach out!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ContactItem
            icon={MdEmail}
            title="Email"
            content="programmersohail.dev@gmail.com"
          />
          <ContactItem icon={MdPhone} title="Phone" content="+923198481058" />
          <ContactItem
            icon={MdLocationOn}
            title="Location"
            content="Islamabad, Pakistan"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              icon: FaFacebook,
              href: "https://www.facebook.com/programer.sohail",
              label: "Facebook",
            },
            {
              icon: FaWhatsapp,
              href: "https://wa.me/+923128481076",
              label: "WhatsApp",
            },
            {
              icon: FaLinkedin,
              href: "https://www.linkedin.com/in/programmer-sohail-978a15324",
              label: "LinkedIn",
            },
            {
              icon: FaGithub,
              href: "https://github.com/ProgrammerSohail",
              label: "GitHub",
            },
          ].map((social, index) => (
            <SocialLink key={index} {...social} />
          ))}
        </div>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed backdrop-blur-sm bg-white/10 p-4 sm:p-6 rounded-xl shadow-lg text-center border border-yellow-400/30">
          As a passionate web developer, I thrive on turning innovative ideas
          into reality. Whether you're looking to build a cutting-edge web
          application, need help with a challenging coding problem, or want to
          discuss the latest trends in tech, I'm always eager to connect. Let's
          join forces and create something extraordinary together!
        </p>
      </div>
    </div>
  );
};

const ContactItem = ({ icon: Icon, title, content }) => (
  <div className="group">
    <div className="backdrop-blur-sm h-36  bg-white/10 p-4 rounded-xl shadow-lg transition-all duration-300 border border-yellow-400/30 hover:border-yellow-400/60 hover:bg-white/20">
      <div className="flex items-center space-x-3 mb-2 text-justify">
        <Icon className="text-2xl text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 flex-shrink-0" />
        <h4 className="text-lg font-semibold text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300">
          {title}
        </h4>
      </div>
      <p className="text-gray-300 text-sm break-words">{content}</p>
    </div>
  </div>
);

const SocialLink = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    className="text-yellow-400 hover:text-yellow-300 transition-all duration-300 transform hover:scale-110 flex flex-col items-center"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    <Icon
      size={28}
      className="filter drop-shadow-lg hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"
    />
    <span className="text-xs mt-1 text-gray-300">{label}</span>
  </a>
);

export default ContactSection;
