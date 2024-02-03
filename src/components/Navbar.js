import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex items-center justify-between bg-white-700">
      <img
        src="/logo.jpg"
        alt="Logo"
        className="w-10 h-10 md:w-24 md:h-24 object-contain"
      />
      <div className="flex items-center">
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            {open ? 'X' : 'Menu'}
          </button>
        </div>
        <div
          className={`md:flex ${open ? 'flex' : 'hidden'}`}
        >
          <a href="#" className="text-black px-2">Home</a>
          <a href="#" className="text-black px-2">About</a>
        
          <a href="#" className="text-black px-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
