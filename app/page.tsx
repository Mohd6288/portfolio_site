"use client";
import React, { useState, useEffect, useRef } from "react";
import { Mail, Github, Linkedin, Menu, X, Sun, Moon, ExternalLink, ArrowRight } from "lucide-react";

/* =============================
   1. DATA CONFIG
   ============================= */

const HERO = {
  name: "Mohammed Alkhalifa",
  title: "Junior Data Analyst",
  subtitle: "Power BI • Excel • SQL • Python",
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
    "I'm a Creative Computing graduate from Goldsmiths, University of London (2025) with First-Class Honours, specializing in data analytics, machine learning, and business intelligence. Currently working as a Data Analyst at Advanced Micro Technologies (AMT) in Alkhobar, Saudi Arabia.",
    "With a background as a Chemical Plant Operator at Sadara Chemical Company, I bring operational discipline and attention to detail to analytics. Passionate about Saudi Vision 2030 digital transformation using Power BI, Python, SQL, and Excel.",
  ],
};

const STATS = [
  { num: 1, suffix: "st", label: "Class Honours", sub: "Goldsmiths, London" },
  { num: 2,  suffix: "+", label: "Years Experience", sub: "Data Analytics" },
  { num: 8,  suffix: "+", label: "Projects", sub: "Multiple Domains" },
  { num: 2030, suffix: "", label: "Vision Aligned", sub: "Saudi Arabia" },
];

const ABOUT_IMAGES = [
  { src: "/images/image_1.jpg", label: "Interactive Visuals" },
  { src: "/images/image_2.jpg", label: "Creative Coding" },
  { src: "/images/image_3.jpg", label: "Physical Computing" },
  { src: "/images/image_4.jpg", label: "UX & UI" },
];

const TECH_STACK = [
  "Power BI", "Tableau", "Python", "SQL", "Excel",
  "Machine Learning", "Data Visualization", "Git/GitHub",
  "Jupyter", "ETL & Cleaning", "Statistical Analysis", "scikit-learn",
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
      "Real-time interactive system tracking body movement to trigger generative visuals and sound using MediaPipe and TouchDesigner.",
    linkLabel: "View on GitHub",
    linkUrl: "https://github.com/Mohd6288/CCP_Final_-NO_Name_yet-.git",
  },
  {
    id: "arduino-pomodoro",
    title: "Arduino Pomodoro Timer",
    tag: "IoT",
    tagColor: "purple",
    type: "video" as const,
    videoUrl: "https://www.youtube.com/embed/VT0XQL8e6lo",
    description:
      "Physical Pomodoro timer built with Arduino, LEDs, and user feedback mechanisms supporting focused study sessions.",
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
      "Desktop DJ application in C++ with real-time mixing, track controls, and a custom UI designed for live performance.",
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
      "Clickable mobile UI prototype with intuitive flows and clean visual hierarchy built in Figma.",
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
      "Dynamic web app built with SQL and server-side scripting for sharing coding tips and growing a learning community.",
    linkLabel: "Visit Live Site",
    linkUrl: "http://doc.gold.ac.uk/usr/700/",
    wide: true,
  },
  {
    id: "ml-fever-notebook",
    title: "ML: Fever Classification",
    tag: "Machine Learning",
    tagColor: "teal",
    type: "image" as const,
    imageUrl: "/images/image_7.png",
    description:
      "End-to-end ML notebook comparing fever vs. non-fever patients: data preprocessing, feature engineering, training, and evaluation.",
    linkLabel: "View Notebook",
    linkUrl:
      "https://drive.google.com/file/d/1BtOluXAlnDgXSrvaN2xdLFEugEELoS-6/view?usp=sharing",
  },
  {
    id: "ml-diffusion-jellyfish",
    title: "Diffusion: Jellyfish Generation",
    tag: "Machine Learning",
    tagColor: "teal",
    type: "image" as const,
    imageUrl: "/images/image_8.png",
    description:
      "Diffusion model notebook generating diverse jellyfish images. Covers data prep, model config, training, and qualitative evaluation.",
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
      "Stable Diffusion app transforming webcam/uploaded photos into old-film, comic, cartoon, and anime styles in real time with Gradio.",
    linkLabel: "View on GitHub",
    linkUrl: "https://github.com/Mohd6288/real-time-style-diffusion-camera",
    wide: true,
  },
];

const CONTACT_CARDS = [
  { id: "email",    label: "Email",    value: "M.alkhalifah@hotmail.com",  href: "mailto:M.alkhalifah@hotmail.com",                              icon: Mail,     color: "sky"    },
  { id: "github",   label: "GitHub",   value: "@Mohd6288",                  href: "https://github.com/Mohd6288",                                  icon: Github,   color: "purple" },
  { id: "linkedin", label: "LinkedIn", value: "Connect with me",             href: "https://linkedin.com/in/mohammed-a-alkhalifa-68322b1bb",       icon: Linkedin, color: "indigo" },
];

const PROJECT_FILTERS = [
  { label: "All",          tags: [] },
  { label: "ML & AI",      tags: ["AI & ML", "Machine Learning"] },
  { label: "Engineering",  tags: ["IoT", "Audio"] },
  { label: "Design & Web", tags: ["UX / UI", "Full Stack"] },
];

/* =============================
   2. HOOKS
   ============================= */

function useTheme() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const sys = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored !== null ? stored === "dark" : sys;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);
  const toggle = () =>
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  return { isDark, toggle };
}

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id); },
        { threshold: 0.35, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [ids]);
  return active;
}

/* =============================
   3. PRIMITIVE COMPONENTS
   ============================= */

function Reveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(30px)",
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

function StatCard({ num, suffix, label, sub }: typeof STATS[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const FRAMES = 55;
    const timer = setInterval(() => {
      frame++;
      const ease = 1 - Math.pow(1 - frame / FRAMES, 3);
      setCount(Math.round(ease * num));
      if (frame >= FRAMES) { setCount(num); clearInterval(timer); }
    }, 18);
    return () => clearInterval(timer);
  }, [started, num]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center hover:border-sky-400/60 dark:hover:border-sky-500/60 transition-colors duration-300"
    >
      <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent leading-none mb-1">
        {count}{suffix}
      </span>
      <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-tight">{label}</span>
      <span className="text-[10px] text-slate-400 mt-0.5 leading-tight">{sub}</span>
    </div>
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
      <h2 className="text-3xl md:text-4xl font-bold mb-5 bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500 dark:from-sky-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
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

/* =============================
   4. SCROLL PROGRESS BAR
   ============================= */

function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const update = () => {
      const s = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? (s / h) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[2.5px] bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500"
      style={{ width: `${pct}%`, transition: "width 80ms linear" }}
    />
  );
}

/* =============================
   5. HEADER
   ============================= */

function Header({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(["top", "about", "projects", "contact"]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const NAV = [
    { href: "#about",    id: "about",    label: "About" },
    { href: "#projects", id: "projects", label: "Projects" },
    { href: "#contact",  id: "contact",  label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-950/95 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 border-b border-slate-200 dark:border-slate-800"
          : "bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800/60"
      } backdrop-blur-md`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-sm shadow-sky-500/30 group-hover:scale-110 transition-transform duration-200">
            MA
          </span>
          <span className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors hidden sm:block">
            {HERO.name}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(({ href, id, label }) => (
            <a
              key={id}
              href={href}
              className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === id
                  ? "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/60"
              }`}
            >
              {label}
              {active === id && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-400" />
              )}
            </a>
          ))}

          {/* Divider */}
          <div className="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-2" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Light mode" : "Dark mode"}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 hover:border-sky-400 hover:text-sky-500 transition-all duration-200 hover:scale-105"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <a
            href={HERO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-medium hover:from-sky-400 hover:to-blue-500 transition-all shadow-sm shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.03]"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Light mode" : "Dark mode"}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-slate-950/98">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {NAV.map(({ href, id, label }) => (
              <a
                key={id}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active === id
                    ? "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href={HERO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-medium text-center"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}

      {/* Rainbow line */}
      <div className="h-px w-full bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 opacity-50" />
    </header>
  );
}

/* =============================
   6. HERO
   ============================= */

function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 60); return () => clearTimeout(t); }, []);

  const fade = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0px)" : "translateY(24px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative bg-noise min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden"
    >
      {/* Background layer */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full bg-sky-400/5 dark:bg-sky-500/8 blur-3xl animate-float" />
        <div className="absolute -bottom-24 -right-24 h-[550px] w-[550px] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-pink-500/3 dark:bg-pink-500/6 blur-3xl animate-float-delayed" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.022] dark:opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #64748b 1.2px, transparent 1.2px)", backgroundSize: "28px 28px" }}
        />

        {/* Rotating rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full border border-sky-500/5 dark:border-sky-500/8 animate-spin-slow" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[950px] w-[950px] rounded-full border border-purple-500/4 dark:border-purple-500/6"
          style={{ animation: "spinSlow 28s linear reverse infinite" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        {/* Live badge */}
        <div style={fade(0)} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-wide shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available · Advanced Micro Technologies, Saudi Arabia
          </div>
        </div>

        {/* Name */}
        <div style={fade(120)}>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-medium mb-3">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white leading-[1.05]">
            {HERO.name}
          </h1>
        </div>

        {/* Typewriter title */}
        <div style={fade(280)}>
          <h2
            id="hero-heading"
            className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500 dark:from-sky-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient-shift"
          >
            <Typewriter text={HERO.title} speed={85} />
          </h2>
        </div>

        {/* Subtitle chips */}
        <div style={fade(500)}>
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {HERO.subtitle.split(" • ").map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/30 text-sky-700 dark:text-sky-300 text-xs font-semibold"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Location */}
        <div style={fade(600)}>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center justify-center gap-1.5">
            <span>📍</span> {HERO.location}
          </p>
        </div>

        {/* Tagline */}
        <div style={fade(680)}>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
            {HERO.tagline}
          </p>
        </div>

        {/* CTA buttons */}
        <div style={fade(800)}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.04] transition-all duration-200"
            >
              View Projects <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-300 hover:bg-sky-50 dark:hover:bg-slate-800 transition-all duration-200"
            >
              Get in Touch
            </a>
            <a
              href={HERO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/40 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
            >
              <ExternalLink size={14} /> Download CV
            </a>
          </div>
        </div>

        {/* Social links */}
        <div style={fade(920)}>
          <div className="flex justify-center gap-4 mb-12">
            {[
              { href: `mailto:${HERO.email}`, icon: Mail,     label: "Email",    color: "hover:text-sky-500 dark:hover:text-sky-400" },
              { href: HERO.github,            icon: Github,   label: "GitHub",   color: "hover:text-purple-500 dark:hover:text-purple-400" },
              { href: HERO.linkedin,          icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-500 dark:hover:text-blue-400" },
            ].map(({ href, icon: Icon, label, color }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? "_self" : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
                aria-label={label}
                className={`p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-500 dark:text-slate-400 ${color} transition-all duration-200 hover:scale-110 hover:border-current`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Marquee tech stack */}
        <div style={fade(1050)}>
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-3 font-semibold">Tech Stack</p>
          <div className="relative overflow-hidden mx-auto max-w-2xl">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-50 dark:from-[#020617] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-50 dark:from-[#020617] to-transparent z-10 pointer-events-none" />
            <div className="flex gap-3 animate-marquee w-max">
              {[...TECH_STACK, ...TECH_STACK].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/70 text-slate-600 dark:text-slate-300 text-xs whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors group"
        style={fade(1400)}
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border-2 border-slate-300 dark:border-slate-600 rounded-full flex items-start justify-center pt-1.5 group-hover:border-sky-400 transition-colors">
          <div className="w-1 h-1.5 bg-slate-400 rounded-full animate-bounce group-hover:bg-sky-400" />
        </div>
      </a>
    </section>
  );
}

/* =============================
   7. ABOUT
   ============================= */

function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="max-w-6xl mx-auto px-6 py-24">
      <SectionTitle title={ABOUT.heading} subtitle={ABOUT.subtitle} />

      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* Left — stats + text */}
        <div>
          {/* Stats grid */}
          <Reveal delay={0}>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {STATS.map((s) => <StatCard key={s.label} {...s} />)}
            </div>
          </Reveal>

          <div className="space-y-4">
            {ABOUT.paragraphs.map((para, i) => (
              <Reveal key={i} delay={i * 140}>
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={HERO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold shadow-sm shadow-sky-500/30 hover:scale-[1.03] transition-transform"
              >
                <ExternalLink size={14} /> View Full CV
              </a>
              <a
                href={HERO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-semibold hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                <Github size={14} /> GitHub
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right — image grid */}
        <div className="grid grid-cols-2 gap-3">
          {ABOUT_IMAGES.map((item, i) => (
            <Reveal key={item.label} delay={i * 90}>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 shadow-sm hover:shadow-xl hover:shadow-sky-500/15 hover:border-sky-400/50 dark:hover:border-sky-500/60 transition-all duration-300 hover:-translate-y-1 aspect-square">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-flex rounded-full bg-slate-900/90 px-2.5 py-1 text-[11px] font-medium text-white border border-sky-500/40">
                    {item.label}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================
   8. PROJECTS
   ============================= */

const COLOR = {
  sky:     { border: "hover:border-sky-400/70 dark:hover:border-sky-500/70",    tag: "bg-sky-50 dark:bg-sky-500/15 text-sky-600 dark:text-sky-300 border-sky-200 dark:border-sky-500/40",    link: "text-sky-500 dark:text-sky-300 hover:text-sky-600 dark:hover:text-sky-200"    },
  purple:  { border: "hover:border-purple-400/70 dark:hover:border-purple-500/70", tag: "bg-purple-50 dark:bg-purple-500/15 text-purple-600 dark:text-purple-300 border-purple-200 dark:border-purple-500/40", link: "text-purple-500 dark:text-purple-300 hover:text-purple-600" },
  pink:    { border: "hover:border-pink-400/70 dark:hover:border-pink-500/70",   tag: "bg-pink-50 dark:bg-pink-500/15 text-pink-600 dark:text-pink-300 border-pink-200 dark:border-pink-500/40",    link: "text-pink-500 dark:text-pink-300 hover:text-pink-600"    },
  indigo:  { border: "hover:border-indigo-400/70 dark:hover:border-indigo-500/70", tag: "bg-indigo-50 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/40", link: "text-indigo-500 dark:text-indigo-300 hover:text-indigo-600" },
  emerald: { border: "hover:border-emerald-400/70 dark:hover:border-emerald-500/70", tag: "bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/40", link: "text-emerald-500 dark:text-emerald-300 hover:text-emerald-600" },
  teal:    { border: "hover:border-teal-400/70 dark:hover:border-teal-500/70",   tag: "bg-teal-50 dark:bg-teal-500/15 text-teal-600 dark:text-teal-300 border-teal-200 dark:border-teal-500/40",    link: "text-teal-500 dark:text-teal-300 hover:text-teal-600"    },
} as const;

function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const visible = filter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => {
        const group = PROJECT_FILTERS.find((f) => f.label === filter);
        return group?.tags.includes(p.tag);
      });

  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-y border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <SectionTitle title="Featured Projects" subtitle="Selected Work" />

        {/* Filter tabs */}
        <Reveal delay={0}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {PROJECT_FILTERS.map(({ label }) => (
              <button
                key={label}
                onClick={() => setFilter(label)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                  filter === label
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white border-transparent shadow-sm shadow-sky-500/30 scale-[1.05]"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-400"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((project, i) => {
            const c = COLOR[project.tagColor as keyof typeof COLOR] ?? COLOR.sky;
            return (
              <Reveal key={project.id} delay={i * 70} className={project.wide ? "md:col-span-2" : ""}>
                <article
                  className={`card-accent card-top-glow group h-full bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-xl dark:hover:shadow-slate-900/60 transition-all duration-300 hover:-translate-y-1 ${c.border}`}
                >
                  {/* Card number + header */}
                  <div className="p-6 pb-0">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-600 tabular-nums mt-1 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-50 leading-snug">
                          {project.title}
                        </h3>
                      </div>
                      <span className={`shrink-0 px-2.5 py-1 rounded-full text-[10px] font-semibold border ${c.tag}`}>
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  {/* Media */}
                  <div className="px-6">
                    {project.type === "video" && project.videoUrl && (
                      <div className="aspect-video rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
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
                      <div className="rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full group-hover:scale-[1.03] transition-transform duration-400"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="p-6 pt-4">
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <a
                      href={project.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all duration-200 ${c.link}`}
                    >
                      {project.linkLabel}
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Empty filter state */}
        {visible.length === 0 && (
          <div className="text-center py-20 text-slate-400 dark:text-slate-500">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-sm">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

/* =============================
   9. CONTACT
   ============================= */

function ContactSection() {
  const C = {
    sky:    { bg: "bg-sky-50 dark:bg-sky-500/10 group-hover:bg-sky-100 dark:group-hover:bg-sky-500/20", icon: "text-sky-500 dark:text-sky-400", border: "hover:border-sky-400/60 dark:hover:border-sky-500/60" },
    purple: { bg: "bg-purple-50 dark:bg-purple-500/10 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20", icon: "text-purple-500 dark:text-purple-400", border: "hover:border-purple-400/60 dark:hover:border-purple-500/60" },
    indigo: { bg: "bg-indigo-50 dark:bg-indigo-500/10 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20", icon: "text-indigo-500 dark:text-indigo-400", border: "hover:border-indigo-400/60 dark:hover:border-indigo-500/60" },
  } as const;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="max-w-5xl mx-auto px-6 py-24">
      <SectionTitle title="Get In Touch" subtitle="Let's Connect" />

      {/* Tagline */}
      <Reveal delay={0}>
        <p className="text-center text-slate-600 dark:text-slate-300 text-sm md:text-base max-w-lg mx-auto mb-12 leading-relaxed">
          Whether you have a data project, a collaboration idea, or just want to connect — I&apos;d love to hear from you.
        </p>
      </Reveal>

      {/* Contact cards */}
      <div className="grid sm:grid-cols-3 gap-5 mb-10">
        {CONTACT_CARDS.map(({ id, href, label, value, icon: Icon, color }, i) => {
          const styles = C[color as keyof typeof C] ?? C.sky;
          return (
            <Reveal key={id} delay={i * 100}>
              <a
                href={href}
                target={id === "email" ? "_self" : "_blank"}
                rel={id === "email" ? undefined : "noopener noreferrer"}
                className={`card-accent group flex flex-col items-center p-7 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center ${styles.border}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors ${styles.bg}`}>
                  <Icon size={24} className={styles.icon} />
                </div>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-1">{label}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 break-all">{value}</span>
              </a>
            </Reveal>
          );
        })}
      </div>

      {/* Resume CTA */}
      <Reveal delay={320} className="text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-4">
          <a
            href={HERO.cvUrl}
            download
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-purple-600 text-white text-sm font-bold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.04] transition-all"
          >
            Download Resume <ExternalLink size={14} />
          </a>
          <a
            href={`mailto:${HERO.email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 text-sm font-bold hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-all"
          >
            <Mail size={14} /> Send Email
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* =============================
   10. MAIN
   ============================= */

export default function Home() {
  const { isDark, toggle } = useTheme();

  return (
    <>
      <ScrollProgress />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <Header isDark={isDark} toggleTheme={toggle} />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />

        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/60">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Brand */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                  MA
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{HERO.name}</p>
                  <p className="text-[11px] text-slate-500">
                    © {new Date().getFullYear()} · Built with Next.js & Tailwind CSS
                  </p>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {[
                  { href: `mailto:${HERO.email}`, icon: Mail,     label: "Email",    color: "hover:text-sky-500 hover:border-sky-400/50"    },
                  { href: HERO.github,            icon: Github,   label: "GitHub",   color: "hover:text-purple-500 hover:border-purple-400/50" },
                  { href: HERO.linkedin,          icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-500 hover:border-blue-400/50"    },
                ].map(({ href, icon: Icon, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === "Email" ? "_self" : "_blank"}
                    rel={label === "Email" ? undefined : "noopener noreferrer"}
                    aria-label={label}
                    className={`p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-400 dark:text-slate-500 ${color} transition-all hover:scale-110`}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/60 text-center">
              <a
                href="#top"
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors group"
              >
                Back to top
                <span className="group-hover:-translate-y-0.5 transition-transform inline-block">↑</span>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
