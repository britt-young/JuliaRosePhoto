import { React, useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenuFold } from "react-icons/ai";

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  // Define the menu content
  const menuItems = (
    <ul className="list-none p-0 m-0 flex flex-col lg:flex-row lg:gap-8">
      <li className="hover:text-black transition">
        <Link to="Home">Home</Link>
      </li>
      <li className="hover:text-black transition">
        <Link to="About">About</Link>
      </li>
      <li className="hover:text-black transition">
        <Link to="Services">Services</Link>
      </li>
      <li className="hover:text-black transition">
        <Link to="Gallery">Gallery</Link>
      </li>
      <li className="hover:text-black transition">
        <Link to="Contact">Contact</Link>
      </li>
    </ul>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between items-center z-50 text-white lg:py-5 px-20 py-4">
        {/* Logo Section */}
        <div className="flex items-center flex-1">
          <span>
            <img src="logo.png" alt="logo img" />
          </span>
        </div>

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
          className={`fixed top-0 left-0 w-full h-full bg-olive text-white flex flex-col items-center justify-center transition-transform transform ${
            click ? "translate-x-0" : "translate-x-full"
          } lg:hidden z-50`}
        >
            
            {/* Mobile Menu Close Button */}
        <button
          className="block lg:hidden p-2 transition"
          onClick={handleClick}
          aria-label="Toggle Menu"
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
