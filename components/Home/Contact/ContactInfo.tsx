import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-bold text-white">Lets get in touch!</h2>
      <p className="text-base text-gray-300">
        You can reach me through the contact form or directly via email and
        social media below.
      </p>

      <div className="flex items-center gap-3">
        <div className="w-7 h-7 bg-blue-800 flex items-center justify-center">
          <FaEnvelope className="text-white text-sm" />
        </div>
        <p className="text-gray-300 font-semibold text-sm md:text-base">
          ridhohanafi2000@gmail.com
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-7 h-7 bg-blue-800 flex items-center justify-center">
          <FaPhone className="text-white text-sm" />
        </div>
        <p className="text-gray-300 font-semibold text-sm md:text-base">
          +62 852 7156 7575
        </p>
      </div>

      <a
        href="https://linkedin.com/in/ridho-hanafi-068188153/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 hover:opacity-80"
      >
        <div className="w-7 h-7 bg-blue-800 flex items-center justify-center">
          <FaLinkedin className="text-white text-sm" />
        </div>
        <p className="text-gray-300 font-semibold text-sm md:text-base">
          LinkedIn
        </p>
      </a>

      <a
        href="https://github.com/ridhohf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 hover:opacity-80"
      >
        <div className="w-7 h-7 bg-blue-800 flex items-center justify-center">
          <FaGithub className="text-white text-sm" />
        </div>
        <p className="text-gray-300 font-semibold text-sm md:text-base">
          GitHub
        </p>
      </a>

      <a
        href="https://instagram.com/ridho_hf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 hover:opacity-80"
      >
        <div className="w-7 h-7 bg-blue-800 flex items-center justify-center">
          <FaInstagram className="text-white text-sm" />
        </div>
        <p className="text-gray-300 font-semibold text-sm md:text-base">
          Instagram
        </p>
      </a>
    </div>
  );
};

export default ContactInfo;
