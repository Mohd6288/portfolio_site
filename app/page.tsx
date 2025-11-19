import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Available for Opportunities
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mohammed Alkhalifa
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
            Creative Technologist & Front-End Developer
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Specializing in AI-driven experiences, interactive installations, and immersive digital products that bridge creativity with cutting-edge technology.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="\Mohammed-Alkhalifa-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-50 transition-all border-2 border-blue-600 hover:shadow-lg hover:scale-105"
            >
              Download CV
            </a>
          </div>
          <div className="flex justify-center gap-6 text-gray-700">
            <a href="mailto:M.alkhalifah@hotmail.com" aria-label="Email" className="hover:text-blue-600 transition-colors hover:scale-110 transform duration-200">
              <Mail size={24} />
            </a>
            <a href="https://github.com/Mohd6288" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-600 transition-colors hover:scale-110 transform duration-200">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/mohammed-a-alkhalifa-68322b1bb" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition-colors hover:scale-110 transform duration-200">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>