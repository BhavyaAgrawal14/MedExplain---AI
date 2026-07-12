import React from "react";
import { Sparkles, Activity } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import socialLinks from "../../constants/socialLinks";
import logo from "../../assets/logo.svg";
import { theme } from "../../constants/theme";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
  className={`${theme.section} text-slate-700 dark:text-slate-300 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300`}
>
      {/* Background Decorator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col">
            <div className="flex items-center gap-0 mb-6">
              <img
                src={logo}
                alt="MedExplain AI Logo"
                className="w-24 h-24 object-contain"
              />
              <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                MedExplain AI
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-sm">
              AI-powered medical report analyzer that transforms complex medical
              reports into simple explanations, health insights, and lifestyle
              recommendations.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={socialLinks.github}
                aria-label="Github"
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
              >
                <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={socialLinks.linkedin}
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
              >
                <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-3 group"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-blue-600 transition-colors" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-3 group"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-blue-600 transition-colors" />
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-3 group"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-blue-600 transition-colors" />
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-3 group"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-blue-600 transition-colors" />
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
  to="/legal"
  className="text-slate-600 dark:text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-3 group"
>
  <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-blue-600 transition-colors" />
  Privacy Policy
</Link>
              </li>
              <li>
                <Link
  to="/legal"
  className="text-slate-600 dark:text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-3 group"
>
  <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-blue-600 transition-colors" />
  Disclaimer
</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-500">
          <p>
            © {new Date().getFullYear()} MedExplain AI. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <span className="text-rose-500 animate-pulse">♥</span>{" "}
            for better health understanding.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
