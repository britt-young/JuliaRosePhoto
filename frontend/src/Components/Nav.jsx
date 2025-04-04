import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenuFold } from "react-icons/ai";
// import Logo from "../assets/logo/icon-logo.svg";

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  // Handle the menu link click
  const handleLinkClick = () => {
    if (click) {
      setClick(false);
    }
  };

  // Define the menu content
  const menuItems = (
    <ul className="list-none p-0 m-0 flex flex-col lg:flex-row lg:gap-20">
      <li className="hover:text-black transition mb-4 lg:mb-0">
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>
      </li>
      <li className="hover:text-black transition mb-4 lg:mb-0">
        <Link to="/services" onClick={handleLinkClick}>
          Services
        </Link>
      </li>
      <li className="hover:text-black transition mb-4 lg:mb-0">
        <Link to="/gallery" onClick={handleLinkClick}>
          Gallery
        </Link>
      </li>
      <li className="hover:text-black transition mb-4 lg:mb-0">
        <Link to="/contact" onClick={handleLinkClick}>
          Contact
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="font-body bg-main">
      <div className="h-10h flex justify-around items-center z-50 text-white lg:py-1 px-20">
        {/* Logo Section */}
        {/* <div className="flex items-center flex-1">
          <span className="flex items-center">
            <img src={Logo} alt="Logo" className="h-auto" />
            <p className="font-title ml-2 text-black">Riley Addison Photo</p>
          </span>
        </div> */}

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:justify-end">
          {menuItems}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="block lg:hidden p-2 transition z-60"
          onClick={handleClick}
          aria-label="Toggle Menu"
        >
          {click ? <FaTimes size={24} /> : <AiOutlineMenuFold size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-lightp text-white flex flex-col items-center justify-center transition-transform transform ${
            click ? "translate-x-0" : "translate-x-full"
          } lg:hidden z-50`}
        >
          {/* Mobile Menu Close Button */}
          <button
            className="absolute top-4 right-4 p-2 transition"
            onClick={handleClick}
            aria-label="Close Menu"
          >
            {click ? <FaTimes size={24} /> : <AiOutlineMenuFold size={24} />}
          </button>

          {menuItems}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
