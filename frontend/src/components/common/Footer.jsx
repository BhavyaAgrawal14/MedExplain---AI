import React from 'react';
import { Sparkles, Activity } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import socialLinks from "../../constants/socialLinks";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">MedExplain AI</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
              AI-powered medical report analyzer that transforms complex medical reports into simple explanations, health insights, and lifestyle recommendations.
            </p>
            <div className="flex items-center gap-4">
              <a href={socialLinks.github} aria-label="Github" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md shadow-black/20 group">
                <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href={socialLinks.linkedin} aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md shadow-black/20 group">
                <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                  How it Works
                </a>
              </li>
              <li>
                <a href="#features" className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors" />
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-rose-500/10 flex-shrink-0 flex items-center justify-center mt-0.5">
            <Sparkles className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <h4 className="text-slate-200 font-medium mb-2">Medical Disclaimer</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              MedExplain AI is designed exclusively for educational and informational purposes. Our AI analysis does not constitute professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or report. Never disregard professional medical advice or delay in seeking it because of information provided by this application.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MedExplain AI. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <span className="text-rose-500 animate-pulse">♥</span> for better health understanding.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;