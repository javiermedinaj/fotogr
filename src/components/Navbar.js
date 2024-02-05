import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex items-center justify-between bg-white-700 dark:bg-zinc-950 dark:text-white p-4">
      <Link to="/" className="flex items-center">
        <img
          src="/logo.jpg"
          alt="Logo"
          className="w-10 h-10 md:w-24 md:h-24 object-contain dark:hidden"
        />
      </Link>
      <div className="flex items-center">
        <button
          className="text-black focus:outline-none mx-2 dark:text-white"
          onClick={handleChangeTheme}
        >
          {theme === "light" ? <FaMoon size={20} className="inline-block" /> : <FaSun size={20} className="inline-block" />}
        </button>
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none mx-2 dark:text-white"
            onClick={toggleMenu}
          >
            {open ? <FaTimes size={20} className="inline-block" /> : <FaBars size={20} className="inline-block" />}
          </button>
        </div>
        <div className={`md:flex ${open ? "flex" : "hidden"}`}>
          <Link to="/" className="text-black px-2 dark:text-white">
            Home
          </Link>
          <Link to="/about" className="text-black px-2 dark:text-white">
            About
          </Link>
          <Link to="/contact" className="text-black px-2 dark:text-white">
            Contact
          </Link>
          <Link to="/" className="text-black px-2 dark:text-white">
            Works
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
