import Logo from "../assets/logo.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-scroll";
import Resume from "../assets/resume/KarthikRajResume.pdf";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  nav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a1927] text-gray-300 z-30">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link
            className="hover:text-gray-100"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-gray-100"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-gray-100"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-gray-100"
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-gray-100"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* !!! */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          nav
            ? "md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a1927] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60-px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 py-3">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/karthik-raj-748b30239/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60-px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] py-3">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/karthikdedsec"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60-px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] py-3">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://mail.google.com/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60-px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] py-3">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={"#"}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
