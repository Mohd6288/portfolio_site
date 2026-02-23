"use client";
import React, { useState, useEffect, useRef } from "react";
import { Mail, Github, Linkedin, Menu, X, Sun, Moon } from "lucide-react";

/* =============================
   1. DATA CONFIG (EASY TO EDIT)
   ============================= */

const HERO = {
  name: "Mohammed Alkhalifa",
  title: "Junior Data Analyst",
  subtitle: "Power BI • Excel • SQL • Python | Reporting & Dashboards",
  tagline:
    "Building clear summaries, visuals, and stakeholder-ready reporting using Power BI, Excel, SQL, and Python. Supporting performance tracking and digital transformation aligned with Saudi Vision 2030.",
  location: "Dammam, Saudi Arabia",
  email: "M.alkhalifah@hotmail.com",
  phone: "+966540005871",
  github: "https://github.com/Mohd6288",
  linkedin: "https://linkedin.com/in/mohammed-a-alkhalifa-68322b1bb",
  cvUrl: "/Mohammed-Alkhalifa-Data-analyst.pdf",
};

const ABOUT = {
  heading: "About Me",
  subtitle: "Background & Focus",
  paragraphs: [
    "I'm a Creative Computing graduate from Goldsmiths, University of London (2025) with First-Class Honours, specializing in data analytics, machine learning, and business intelligence. Currently working as a Data Analyst at Advanced Micro Technologies (AMT) in Alkhobar, Saudi Arabia, where I ensure data accuracy, develop insightful dashboards, and translate raw data into clear reports for strategic decision-making.",
    "With a unique background as a Chemical Plant Operator at Sadara Chemical Company, I bring strong operational discipline, problem-solving skills, and attention to detail to data analytics. I'm passionate about supporting performance tracking and digital transformation aligned with Saudi Vision 2030, using tools like Power BI, Python, SQL, and Excel to drive data-driven decisions.",
  ],
};

const ABOUT_IMAGES = [
  { src: "/images/image_1.jpg", label: "Interactive Visuals" },
  { src: "/images/image_2.jpg", label: "Creative Coding" },
  { src: "/images/image_3.jpg", label: "Physical Computing" },
  { src: "/images/image_4.jpg", label: "UX & UI" },
];

const TECH_STACK = [
  "Power BI & Tableau",
  "Python & SQL",
  "Excel & Data Analysis",
  "Machine Learning (scikit-learn, TensorFlow, PyTorch)",
  "Data Visualization (Matplotlib, Seaborn)",
  "Git/GitHub",
  "Jupyter Notebooks",
  "ETL & Data Cleaning",
  "Statistical Analysis",
];

const PROJECTS = [
  {
    id: "ai-body-tracking",
    title: "AI Body Tracking Installation",
    tag: "AI & ML",
    tagColor: "sky",
    type: "video" as const,
    videoUrl: "https://www.youtube.com/embed/7O4HrpV3EY0",
    description:
      "Built a real-time interactive system that tracks body movement and triggers generative visuals and sound using MediaPipe and TouchDesigner. An immersive AI-driven installation showcasing creative applications of computer vision.",
    linkLabel: "View on GitHub",
    linkUrl: "https://github.com/Mohd6288/CCP_Final_-NO_Name_yet-.git",
  },
  {
    id: "arduino-pomodoro",
    title: "Arduino Pomodoro Project",
    tag: "IoT",
    tagColor: "purple",
    type: "video" as const,
    videoUrl: "https://www.youtube.com/embed/VT0XQL8e6lo",
    description:
      "A physical Pomodoro timer built with Arduino, LEDs, and user feedback mechanisms to support focused study sessions and better time awareness.",
    linkLabel: "View on GitHub",
    linkUrl: "https://github.com/Mohd6288/pomodoro.git",
  },
  {
    id: "dj-app",
    title: "C++ DJ Application",
    tag: "Audio",
    tagColor: "pink",
    type: "video" as const,
    videoUrl: "https://www.youtube.com/embed/fomGKOAOfXk",
    description:
      "A desktop DJ application developed in C++ with real-time mixing, track controls, and a custom UI designed for live performance.",
    linkLabel: "View on GitHub",
    linkUrl: "https://github.com/Mohd6288/DJ_app.git",
  },
  {
    id: "travel-app",
    title: "Travel App Prototype",
    tag: "UX / UI",
    tagColor: "indigo",
    type: "image" as const,
    imageUrl: "/images/image_5.png",
    description:
      "Designed a clickable mobile UI prototype with simple flows and clean visual hierarchy using Figma. Focus on intuitive navigation and user-centered design principles.",
    linkLabel: "View Prototype",
    linkUrl:
      "https://www.figma.com/proto/CsPjykLNtZYDJ5EhRgAIIL/those-bishes-doin-stuff?node-id=509-181&starting-point-node-id=509%3A181&t=KJXY2eLYak57iSUT-1",
  },
  {
    id: "knowledge-sharing",
    title: "Knowledge Sharing Forum",
    tag: "Full Stack",
    tagColor: "emerald",
    type: "image" as const,
    imageUrl: "/images/image_6.png",
    description:
      "A dynamic web application built with SQL and server-side scripting to help users share coding tips, ask questions, and grow a supportive learning community.",
    linkLabel: "Visit Live Site",
    linkUrl: "http://doc.gold.ac.uk/usr/700/",
    wide: true,
  },
  {
    id: "ml-fever-notebook",
    title: "End-to-End Machine Learning: Fever Classification",
    tag: "Machine Learning",
    tagColor: "teal",
    type: "image" as const,
    imageUrl: "/images/image_7.png",
    description:
      "An end-to-end machine learning notebook that builds and evaluates models on a medical-style dataset, comparing patients with and without fever. It walks through data preprocessing, feature engineering, training, and evaluation in a clear, educational way.",
    linkLabel: "View Notebook",
    linkUrl:
      "https://drive.google.com/file/d/1BtOluXAlnDgXSrvaN2xdLFEugEELoS-6/view?usp=sharing",
  },
  {
    id: "ml-diffusion-jellyfish",
    title: "Diffusion Models: Jellyfish Image Generation",
    tag: "Machine Learning",
    tagColor: "teal",
    type: "image" as const,
    imageUrl: "/images/image_8.png",
    description:
      "An end-to-end machine learning notebook that applies diffusion models to generate diverse jellyfish images. The notebook covers data preparation, model configuration, training, and qualitative evaluation of the generated samples.",
    linkLabel: "View Notebook",
    linkUrl:
      "https://colab.research.google.com/drive/1QrN0vTAFjN8g0K39j_B1DYpe_LRs3QUb?usp=sharing",
  },
  {
    id: "realtime-style-diffusion",
    title: "Real-Time Style Diffusion Camera",
    tag: "Machine Learning",
    tagColor: "teal",
    type: "image" as const,
    imageUrl: "/images/image_9.png",
    description:
      "An interactive Stable Diffusion app that transforms webcam or uploaded photos into old-film, comic, cartoon, and anime styles in real time. Built with Python, Diffusers, and Gradio, it showcases prompt-based style control, adjustable strength, and a dark-mode UI for creative machine learning exploration.",
    linkLabel: "View on GitHub",
    linkUrl: "https://github.com/Mohd6288/real-time-style-diffusion-camera",
    wide: true,
  },
];

const CONTACT_CARDS = [
  {
    id: "email",
    label: "Email",
    value: "M.alkhalifah@hotmail.com",
    href: "mailto:M.alkhalifah@hotmail.com",
    icon: Mail,
    color: "sky",
  },
  {
    id: "github",
    label: "GitHub",
    value: "@Mohd6288",
    href: "https://github.com/Mohd6288",
    icon: Github,
    color: "purple",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/mohammed-a-alkhalifa-68322b1bb",
    icon: Linkedin,
    color: "indigo",
  },
];

/* =============================
   2. HOOKS
   ============================= */

function useTheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored !== null ? stored === "dark" : prefersDark;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  return { isDark, toggle };
}

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* =============================
   3. SMALL REUSABLE COMPONENTS
   ============================= */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Typewriter({ text, speed = 75 }: { text: string; speed?: number }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx < text.length) {
      const t = setTimeout(() => setIdx((i) => i + 1), speed);
      return () => clearTimeout(t);
    }
  }, [idx, text, speed]);

  return (
    <span>
      {text.slice(0, idx)}
      {idx < text.length && (
        <span className="inline-block w-[3px] h-[0.85em] bg-sky-400 ml-1 align-middle rounded-sm animate-pulse" />
      )}
    </span>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <Reveal className="text-center mb-14">
      {subtitle && (
        <p className="text-sky-500 dark:text-sky-400 text-sm uppercase tracking-[0.2em] mb-3 font-semibold">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500 dark:from-sky-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-2">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-sky-500" />
        <div className="h-1.5 w-1.5 rounded-full bg-sky-400" />
        <div className="h-px w-20 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500" />
        <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500" />
      </div>
    </Reveal>
  );
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="text-xs rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/70 px-3 py-1 text-slate-600 dark:text-slate-300 hover:border-sky-400 dark:hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-300 transition-all duration-200 cursor-default">
      {label}
    </span>
  );
}

/* =============================
   4. SECTION COMPONENTS
   ============================= */

function Header({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-950/95 shadow-lg shadow-slate-200/60 dark:shadow-slate-900/60"
          : "bg-white/80 dark:bg-slate-950/80"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 hover:text-sky-500 dark:hover:text-sky-400 transition-colors text-lg"
        >
          {HERO.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-200 hover:scale-110"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <a
            href={HERO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 text-white hover:from-sky-400 hover:to-blue-400 transition-all shadow-sm shadow-sky-500/40 hover:shadow-sky-500/60 hover:scale-105"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-sky-500 transition-colors"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-slate-950/98 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors py-2 text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={HERO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 text-white text-center hover:from-sky-400 hover:to-blue-400 transition-all shadow-sm shadow-sky-500/40 font-medium"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}

      <div className="h-px w-full bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 opacity-60" />
    </header>
  );
}

function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0px)" : "translateY(22px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Floating gradient orbs */}
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-sky-400/6 dark:bg-sky-500/10 blur-3xl animate-float" />
        <div
          className="absolute -bottom-20 -right-20 h-[480px] w-[480px] rounded-full bg-purple-500/6 dark:bg-purple-500/10 blur-3xl animate-float-slow"
        />
        <div
          className="absolute top-1/3 right-1/3 h-[320px] w-[320px] rounded-full bg-pink-500/4 dark:bg-pink-500/8 blur-3xl animate-float-delayed"
        />
        <div
          className="absolute bottom-1/4 left-1/4 h-[260px] w-[260px] rounded-full bg-indigo-500/4 dark:bg-indigo-500/8 blur-3xl animate-float"
          style={{ animationDuration: "11s" }}
        />

        {/* Subtle dot-grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #64748b 1.2px, transparent 1.2px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Rotating ring accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-sky-500/5 dark:border-sky-500/10 animate-spin-slow" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full border border-purple-500/4 dark:border-purple-500/8 animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "25s" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status badge */}
        <div style={fade(0)}>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-50 dark:bg-gradient-to-r dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-200 dark:border-blue-500/40 text-blue-700 dark:text-blue-200 text-sm font-medium shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            Currently at Advanced Micro Technologies
          </div>
        </div>

        {/* Name */}
        <div style={fade(120)}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 text-slate-900 dark:text-slate-100">
            {HERO.name}
          </h1>
        </div>

        {/* Title — typewriter */}
        <div style={fade(250)}>
          <h2
            id="hero-heading"
            className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500 dark:from-sky-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient-shift"
          >
            <Typewriter text={HERO.title} speed={80} />
          </h2>
        </div>

        {/* Subtitle */}
        <div style={fade(500)}>
          <p className="text-base md:text-lg text-sky-600 dark:text-sky-300 mb-4 font-medium">
            {HERO.subtitle}
          </p>
        </div>

        {/* Location */}
        <div style={fade(600)}>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-2 flex items-center justify-center gap-1.5">
            <span>📍</span> {HERO.location}
          </p>
        </div>

        {/* Tagline */}
        <div style={fade(700)}>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {HERO.tagline}
          </p>
        </div>

        {/* CTA buttons */}
        <div style={fade(820)}>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 text-white font-medium shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:from-sky-400 hover:to-blue-400 hover:scale-[1.04] transition-all duration-200"
            >
              View Projects
            </a>
            <a
              href={HERO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900/60 text-slate-800 dark:text-slate-100 font-medium hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-200 hover:bg-sky-50 dark:hover:bg-slate-800 transition-all duration-200"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Social icons */}
        <div style={fade(940)}>
          <div className="flex justify-center gap-6 text-slate-500 dark:text-slate-300">
            <a
              href={`mailto:${HERO.email}`}
              aria-label="Email"
              className="hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-200 hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href={HERO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-200 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href={HERO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-200 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Tech badges — staggered */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {TECH_STACK.map((item, i) => (
            <div
              key={item}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "scale(1)" : "scale(0.85)",
                transition: `opacity 0.5s ease ${1050 + i * 65}ms, transform 0.5s ease ${1050 + i * 65}ms`,
              }}
            >
              <TechBadge label={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors group"
        aria-label="Scroll to about section"
        style={fade(1400)}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex items-start justify-center p-1 group-hover:border-sky-400 transition-colors">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce group-hover:bg-sky-400" />
        </div>
      </a>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <SectionTitle title={ABOUT.heading} subtitle={ABOUT.subtitle} />

      {/* Image grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {ABOUT_IMAGES.map((item, index) => (
          <Reveal key={item.label} delay={index * 100}>
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 shadow-md hover:shadow-xl hover:shadow-sky-500/20 hover:border-sky-400/60 dark:hover:border-sky-500/70 transition-all duration-300 hover:-translate-y-1">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="inline-flex rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-slate-100 border border-sky-500/50 shadow-lg">
                  {item.label}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Paragraphs */}
      <div className="max-w-3xl mx-auto text-center space-y-5">
        {ABOUT.paragraphs.map((para, idx) => (
          <Reveal key={idx} delay={idx * 160}>
            <p className="text-slate-700 dark:text-slate-200 text-base md:text-lg leading-relaxed">
              {para}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  const borderHover: Record<string, string> = {
    sky: "hover:border-sky-400/70 dark:hover:border-sky-500/70",
    purple: "hover:border-purple-400/70 dark:hover:border-purple-500/70",
    pink: "hover:border-pink-400/70 dark:hover:border-pink-500/70",
    indigo: "hover:border-indigo-400/70 dark:hover:border-indigo-500/70",
    emerald: "hover:border-emerald-400/70 dark:hover:border-emerald-500/70",
    teal: "hover:border-teal-400/70 dark:hover:border-teal-500/70",
  };

  const tagClass: Record<string, string> = {
    sky: "bg-sky-50 dark:bg-sky-500/15 text-sky-600 dark:text-sky-300 border-sky-300 dark:border-sky-500/40",
    purple: "bg-purple-50 dark:bg-purple-500/15 text-purple-600 dark:text-purple-300 border-purple-300 dark:border-purple-500/40",
    pink: "bg-pink-50 dark:bg-pink-500/15 text-pink-600 dark:text-pink-300 border-pink-300 dark:border-pink-500/40",
    indigo: "bg-indigo-50 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 border-indigo-300 dark:border-indigo-500/40",
    emerald: "bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/40",
    teal: "bg-teal-50 dark:bg-teal-500/15 text-teal-600 dark:text-teal-300 border-teal-300 dark:border-teal-500/40",
  };

  const linkColor: Record<string, string> = {
    sky: "text-sky-500 dark:text-sky-300 hover:text-sky-600 dark:hover:text-sky-200",
    purple: "text-purple-500 dark:text-purple-300 hover:text-purple-600 dark:hover:text-purple-200",
    pink: "text-pink-500 dark:text-pink-300 hover:text-pink-600 dark:hover:text-pink-200",
    indigo: "text-indigo-500 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-200",
    emerald: "text-emerald-500 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-200",
    teal: "text-teal-500 dark:text-teal-300 hover:text-teal-600 dark:hover:text-teal-200",
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-y border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-950/70"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <SectionTitle title="Featured Projects" subtitle="Selected Work" />

        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.id}
              delay={i * 75}
              className={project.wide ? "md:col-span-2" : ""}
            >
              <article
                className={`shimmer-card relative group h-full bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-2xl dark:hover:shadow-slate-900/60 transition-all duration-300 overflow-hidden hover:-translate-y-1 ${
                  borderHover[project.tagColor] ?? borderHover.sky
                }`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-50">
                      {project.title}
                    </h3>
                    <span
                      className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium border ${
                        tagClass[project.tagColor] ?? tagClass.sky
                      }`}
                    >
                      {project.tag}
                    </span>
                  </div>

                  {project.type === "video" && project.videoUrl && (
                    <div className="aspect-video mt-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                      <iframe
                        className="w-full h-full"
                        src={project.videoUrl}
                        title={project.title}
                        loading="lazy"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}

                  {project.type === "image" && project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full rounded-xl mt-4 border border-slate-200 dark:border-slate-800 group-hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                  )}

                  <p className="mt-4 text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center mt-4 text-sm font-medium group-hover:translate-x-1 transition-transform ${
                      linkColor[project.tagColor] ?? linkColor.sky
                    }`}
                  >
                    {project.linkLabel} →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const iconBg: Record<string, string> = {
    sky: "bg-sky-50 dark:bg-sky-500/15 group-hover:bg-sky-100 dark:group-hover:bg-sky-500/25",
    purple: "bg-purple-50 dark:bg-purple-500/15 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/25",
    indigo: "bg-indigo-50 dark:bg-indigo-500/15 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/25",
  };
  const iconColor: Record<string, string> = {
    sky: "text-sky-500 dark:text-sky-300",
    purple: "text-purple-500 dark:text-purple-300",
    indigo: "text-indigo-500 dark:text-indigo-300",
  };
  const cardBorder: Record<string, string> = {
    sky: "hover:border-sky-400/70 dark:hover:border-sky-500/70",
    purple: "hover:border-purple-400/70 dark:hover:border-purple-500/70",
    indigo: "hover:border-indigo-400/70 dark:hover:border-indigo-500/70",
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <SectionTitle title="Get In Touch" subtitle="Let's Build Something" />

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {CONTACT_CARDS.map(({ id, href, label, value, icon: Icon, color }, i) => (
          <Reveal key={id} delay={i * 100}>
            <a
              href={href}
              target={id === "email" ? "_self" : "_blank"}
              rel={id === "email" ? undefined : "noopener noreferrer"}
              className={`group block bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 text-center hover:-translate-y-1 ${
                cardBorder[color] ?? cardBorder.sky
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${
                  iconBg[color] ?? iconBg.sky
                }`}
              >
                <Icon size={28} className={iconColor[color] ?? iconColor.sky} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                {label}
              </h3>
              <p className="text-slate-500 dark:text-slate-300 text-sm break-all">{value}</p>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={300} className="text-center">
        <a
          href={HERO.cvUrl}
          download
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 text-white font-medium hover:from-sky-400 hover:to-purple-400 transition-all shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.04]"
        >
          Download My Resume
        </a>
      </Reveal>
    </section>
  );
}

/* =============================
   5. MAIN PAGE COMPONENT
   ============================= */

export default function Home() {
  const { isDark, toggle } = useTheme();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Header isDark={isDark} toggleTheme={toggle} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100/40 dark:bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                {HERO.name}
              </h3>
              <p className="text-xs text-slate-500">
                © {new Date().getFullYear()} All rights reserved. Built with Next.js & Tailwind CSS
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={`mailto:${HERO.email}`}
                className="p-2 rounded-full bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-400/50 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={HERO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-300 hover:text-purple-500 dark:hover:text-purple-400 hover:border-purple-400/50 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={HERO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-400/50 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors group"
            >
              <span>Back to top</span>
              <span className="group-hover:-translate-y-1 transition-transform">↑</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
