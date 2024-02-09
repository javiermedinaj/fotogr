import { useState } from "react";
import { Link } from "react-router-dom";
import {  FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex items-center justify-between bg-gray-200 p-4">
      <Link to="/" className="flex items-center">
        <img
          src="/logo-removebg.png"
          alt="Logo"
          className="w-10 h-10 md:w-24 md:h-24 object-contain "
        />
      </Link>
      <div className="flex items-center">
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none mx-2"
            onClick={toggleMenu}
          >
            {open ? <FaTimes size={20} className="inline-block" /> : <FaBars size={20} className="inline-block" />}
          </button>
        </div>
        <div className={`md:flex ${open ? "flex" : "hidden"}`}>
          <Link to="/" className="text-black px-2">
            Home
          </Link>
          <Link to="/about" className="text-black px-2">
            About
          </Link>
          <Link to="/contact" className="text-black px-2">
            Contact
          </Link>
          <Link to="/works" className="text-black px-2">
            Works
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;