import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

    
        <nav className="flex items-center justify-between bg-white-700 dark:bg-black">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="w-10 h-10 md:w-24 md:h-24 object-contain dark:hidden"
            />
          </Link>
          <button
        className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
        onClick={handleChangeTheme}
      >
        Change Theme
      </button>
          <div className="flex items-center">
            <div className="md:hidden">
              <button
                className="text-black focus:outline-none mx-2 dark:text-white"
                onClick={toggleMenu}
              >
                {open ? 'X' : 'Menu'}
              </button>
            </div>
            <div
              className={`md:flex ${open ? 'flex' : 'hidden'}`}
            >
              <Link to="/" className="text-black px-2 dark:text-white">Home</Link>
              <Link to="/about" className="text-black px-2 dark:text-white">About</Link>
              <Link to="/contact" className="text-black px-2 dark:text-white">Contact</Link>
              <Link to="/" className="text-black px-2 dark:text-white">Works</Link>
            </div>
          </div>
        </nav>
  );
}
export default Navbar;