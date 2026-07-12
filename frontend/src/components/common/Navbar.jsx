import { HiOutlineDocumentArrowUp } from "react-icons/hi2";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import navLinks from "../../constants/navLinks";
import logo from "../../assets/logo.svg";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-0">
          <img
            src={logo}
            alt="MedExplain AI Logo"
            className="w-24 h-24 object-contain"
          />

          <h1 className="text-xl font-bold text-slate-800 dark:text-white transition-colors">
            MedExplain AI
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center justify-center transition-all duration-300"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-slate-700" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-500" />
            )}
          </button>
          <button
            onClick={() => {
              document.getElementById("upload-section")?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-5 py-2 rounded-xl transition-all duration-300 hover:scale-[1.03]"
          >
            <HiOutlineDocumentArrowUp />
            <span className="hidden sm:inline">Upload Report</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
