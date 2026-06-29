import { FaGithub } from "react-icons/fa";
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";
import navLinks from "../../constants/navLinks";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
            M
          </div>

          <h1 className="text-xl font-bold text-slate-800">MedExplain AI</h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-100 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-5 py-2 rounded-xl transition">
            <HiOutlineDocumentArrowUp />
            <span className="hidden sm:inline">Upload Report</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
