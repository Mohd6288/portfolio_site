"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Mail, Github, Linkedin,
  Menu, X, Sun, Moon,
  ExternalLink, ArrowRight, MapPin,
} from "lucide-react";

/* ═══════════════════════════════════════
   DATA  (edit content here)
═══════════════════════════════════════ */

const HERO = {
  name: "Mohammed Alkhalifa",
  title: "Junior Data Analyst",
  roles: ["Data Analyst", "Power BI Developer", "ML Enthusiast", "Python Developer"],
  location: "Dammam, Saudi Arabia",
  workplace: "Advanced Micro Technologies, KSA",
  tagline:
    "Building clear reports, dashboards, and stakeholder-ready visuals using Power BI, Python, SQL, and Excel — aligned with Saudi Vision 2030.",
  email: "M.alkhalifah@hotmail.com",
  github: "https://github.com/Mohd6288",
  linkedin: "www.linkedin.com/in/mohammed-alkhalifa-68322b1bb",
  cvUrl: "/Mohammed-Alkhalifa-Data-analyst.pdf",
};

const STATS = [
  { num: 1,    suffix: "st", label: "Class Honours",    sub: "Goldsmiths, London" },
  { num: 2,    suffix: "+",  label: "Years Experience", sub: "Data Analytics"     },
  { num: 8,    suffix: "+",  label: "Projects",         sub: "Multiple Domains"   },
  { num: 2030, suffix: "",   label: "Vision Aligned",   sub: "Saudi Arabia"       },
];

const ABOUT = {
  heading:  "About Me",
  subtitle: "Background & Focus",
  paragraphs: [
    "Creative Computing graduate from Goldsmiths, University of London (2025) with First-Class Honours, specialising in data analytics, machine learning, and business intelligence. Currently a Data Analyst at Advanced Micro Technologies (AMT) in Alkhobar, Saudi Arabia.",
    "Former Chemical Plant Operator at Sadara Chemical Company — I bring operational discipline and sharp attention to detail to every analytics project. Passionate about Saudi Vision 2030 digital transformation.",
  ],
};

const ABOUT_IMAGES = [
  { src: "/images/image_1.jpg", label: "Interactive Visuals"  },
  { src: "/images/image_2.jpg", label: "Creative Coding"       },
  { src: "/images/image_3.jpg", label: "Physical Computing"    },
  { src: "/images/image_4.jpg", label: "UX & UI"               },
];

const TECH_STACK = [
  "Power BI", "Tableau", "Python", "SQL", "Excel",
  "Machine Learning", "Data Visualisation", "Git / GitHub",
  "Jupyter", "ETL & Cleaning", "Statistical Analysis", "scikit-learn",
  "TensorFlow", "PyTorch", "Matplotlib", "Seaborn",
];

/* All projects — same card size, NO wide flag */
const PROJECTS = [
  {
    id: "ai-body-tracking",
    num: "01",
    title: "AI Body Tracking Installation",
    tag: "AI & ML",
    color: "sky",
    type: "video" as const,
    media: "https://www.youtube.com/embed/7O4HrpV3EY0",
    desc: "Real-time body-movement tracking that triggers generative visuals and sound using MediaPipe and TouchDesigner.",
    link: { label: "View on GitHub", url: "https://github.com/Mohd6288/CCP_Final_-NO_Name_yet-.git" },
  },
  {
    id: "arduino-pomodoro",
    num: "02",
    title: "Arduino Pomodoro Timer",
    tag: "IoT",
    color: "purple",
    type: "video" as const,
    media: "https://www.youtube.com/embed/VT0XQL8e6lo",
    desc: "Hardware Pomodoro timer built with Arduino and LEDs — tactile feedback for focused, distraction-free work sessions.",
    link: { label: "View on GitHub", url: "https://github.com/Mohd6288/pomodoro.git" },
  },
  {
    id: "dj-app",
    num: "03",
    title: "C++ DJ Application",
    tag: "Audio",
    color: "pink",
    type: "video" as const,
    media: "https://www.youtube.com/embed/fomGKOAOfXk",
    desc: "Desktop DJ app in C++ with real-time mixing, BPM sync, custom waveform UI, and live performance controls.",
    link: { label: "View on GitHub", url: "https://github.com/Mohd6288/DJ_app.git" },
  },
  {
    id: "travel-app",
    num: "04",
    title: "Travel App Prototype",
    tag: "UX / UI",
    color: "indigo",
    type: "image" as const,
    media: "/images/image_5.png",
    desc: "Clickable Figma prototype for a travel app — intuitive flows, clean visual hierarchy, and user-centred design.",
    link: { label: "View in Figma", url: "https://www.figma.com/proto/CsPjykLNtZYDJ5EhRgAIIL/those-bishes-doin-stuff?node-id=509-181&starting-point-node-id=509%3A181&t=KJXY2eLYak57iSUT-1" },
  },
  {
    id: "knowledge-sharing",
    num: "05",
    title: "Knowledge Sharing Forum",
    tag: "Full Stack",
    color: "emerald",
    type: "image" as const,
    media: "/images/image_6.png",
    desc: "Full-stack Q&A forum built with SQL and server-side scripting — share coding tips and grow a learning community.",
    link: { label: "Visit Live Site", url: "http://doc.gold.ac.uk/usr/700/" },
  },
  {
    id: "ml-fever",
    num: "06",
    title: "ML: Fever Classification",
    tag: "Machine Learning",
    color: "teal",
    type: "image" as const,
    media: "/images/image_7.png",
    desc: "End-to-end ML notebook on a medical dataset: preprocessing, feature engineering, model training and evaluation.",
    link: { label: "View Notebook", url: "https://drive.google.com/file/d/1BtOluXAlnDgXSrvaN2xdLFEugEELoS-6/view?usp=sharing" },
  },
  {
    id: "diffusion-jellyfish",
    num: "07",
    title: "Diffusion: Jellyfish Generation",
    tag: "Machine Learning",
    color: "teal",
    type: "image" as const,
    media: "/images/image_8.png",
    desc: "Diffusion model generating diverse jellyfish imagery — covers data prep, model configuration, training, and evaluation.",
    link: { label: "View Notebook", url: "https://colab.research.google.com/drive/1QrN0vTAFjN8g0K39j_B1DYpe_LRs3QUb?usp=sharing" },
  },
  {
    id: "style-diffusion",
    num: "08",
    title: "Real-Time Style Diffusion Camera",
    tag: "Machine Learning",
    color: "teal",
    type: "image" as const,
    media: "/images/image_9.png",
    desc: "Stable Diffusion Gradio app — transforms webcam photos into old-film, comic, cartoon, and anime styles in real time.",
    link: { label: "View on GitHub", url: "https://github.com/Mohd6288/real-time-style-diffusion-camera" },
  },
];

const CONTACT = [
  { id: "email",    icon: Mail,     label: "Email",    value: HERO.email,   href: `mailto:${HERO.email}`, color: "sky"    },
  { id: "github",   icon: Github,   label: "GitHub",   value: "@Mohd6288",  href: HERO.github,            color: "purple" },
  { id: "linkedin", icon: Linkedin, label: "LinkedIn", value: "Connect",    href: HERO.linkedin,          color: "indigo" },
];

const FILTERS = [
  { label: "All",          match: []                                    },
  { label: "ML & AI",      match: ["AI & ML", "Machine Learning"]       },
  { label: "Engineering",  match: ["IoT", "Audio"]                      },
  { label: "Design & Web", match: ["UX / UI", "Full Stack"]             },
];

/* colour maps */
const TAG_CLS: Record<string, string> = {
  sky:     "bg-sky-50     dark:bg-sky-500/15     text-sky-600     dark:text-sky-300     border-sky-200     dark:border-sky-500/40",
  purple:  "bg-purple-50  dark:bg-purple-500/15  text-purple-600  dark:text-purple-300  border-purple-200  dark:border-purple-500/40",
  pink:    "bg-pink-50    dark:bg-pink-500/15    text-pink-600    dark:text-pink-300    border-pink-200    dark:border-pink-500/40",
  indigo:  "bg-indigo-50  dark:bg-indigo-500/15  text-indigo-600  dark:text-indigo-300  border-indigo-200  dark:border-indigo-500/40",
  emerald: "bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/40",
  teal:    "bg-teal-50    dark:bg-teal-500/15    text-teal-600    dark:text-teal-300    border-teal-200    dark:border-teal-500/40",
};
const BORDER_CLS: Record<string, string> = {
  sky:     "hover:border-sky-400/60     dark:hover:border-sky-500/60",
  purple:  "hover:border-purple-400/60  dark:hover:border-purple-500/60",
  pink:    "hover:border-pink-400/60    dark:hover:border-pink-500/60",
  indigo:  "hover:border-indigo-400/60  dark:hover:border-indigo-500/60",
  emerald: "hover:border-emerald-400/60 dark:hover:border-emerald-500/60",
  teal:    "hover:border-teal-400/60    dark:hover:border-teal-500/60",
};
const LINK_CLS: Record<string, string> = {
  sky:     "text-sky-500     dark:text-sky-400     hover:text-sky-700     dark:hover:text-sky-200",
  purple:  "text-purple-500  dark:text-purple-400  hover:text-purple-700  dark:hover:text-purple-200",
  pink:    "text-pink-500    dark:text-pink-400    hover:text-pink-700    dark:hover:text-pink-200",
  indigo:  "text-indigo-500  dark:text-indigo-400  hover:text-indigo-700  dark:hover:text-indigo-200",
  emerald: "text-emerald-500 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-200",
  teal:    "text-teal-500    dark:text-teal-400    hover:text-teal-700    dark:hover:text-teal-200",
};
const ICON_CLS: Record<string, string> = {
  sky:    "text-sky-500    dark:text-sky-400",
  purple: "text-purple-500 dark:text-purple-400",
  indigo: "text-indigo-500 dark:text-indigo-400",
};
const ICON_BG: Record<string, string> = {
  sky:    "bg-sky-50    dark:bg-sky-500/15    group-hover:bg-sky-100    dark:group-hover:bg-sky-500/25",
  purple: "bg-purple-50 dark:bg-purple-500/15 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/25",
  indigo: "bg-indigo-50 dark:bg-indigo-500/15 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/25",
};

/* ═══════════════════════════════════════
   HOOKS
═══════════════════════════════════════ */

function useTheme() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const s = localStorage.getItem("theme");
    const sys = matchMedia("(prefers-color-scheme: dark)").matches;
    const d = s !== null ? s === "dark" : sys;
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
  }, []);
  const toggle = () =>
    setDark((p) => {
      const n = !p;
      localStorage.setItem("theme", n ? "dark" : "light");
      document.documentElement.classList.toggle("dark", n);
      return n;
    });
  return { dark, toggle };
}

function useInView(thr = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: thr }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [thr]);
  return { ref, visible };
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const obs = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id); },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o?.disconnect());
  }, [ids]);
  return active;
}

/* ═══════════════════════════════════════
   PRIMITIVES
═══════════════════════════════════════ */

function Reveal({
  children, delay = 0, className = "",
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref} className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity .7s ease ${delay}ms, transform .7s ease ${delay}ms`,
      }}
    >{children}</div>
  );
}

function Typewriter({ texts, speed = 80, pause = 2200 }: { texts: string[]; speed?: number; pause?: number }) {
  const [ti, setTi]   = useState(0);
  const [ci, setCi]   = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = texts[ti];
    if (!del && ci < cur.length) {
      const t = setTimeout(() => setCi((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    if (!del && ci === cur.length) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && ci > 0) {
      const t = setTimeout(() => setCi((c) => c - 1), speed / 2.2);
      return () => clearTimeout(t);
    }
    if (del && ci === 0) {
      setDel(false);
      setTi((i) => (i + 1) % texts.length);
    }
  }, [ci, del, ti, texts, speed, pause]);

  return (
    <span>
      {texts[ti].slice(0, ci)}
      <span className="inline-block w-[3px] h-[0.82em] bg-sky-400 ml-1 align-middle rounded-sm animate-pulse" />
    </span>
  );
}

function AnimCounter({ num, suffix }: { num: number; suffix: string }) {
  const ref   = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const [on,  setOn]  = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold: 0.6 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!on) return;
    let f = 0;
    const id = setInterval(() => {
      f++;
      const ease = 1 - Math.pow(1 - f / 55, 3);
      setVal(Math.round(ease * num));
      if (f >= 55) { setVal(num); clearInterval(id); }
    }, 18);
    return () => clearInterval(id);
  }, [on, num]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function ScrollBar() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const fn = () => {
      const s = scrollY, h = document.documentElement.scrollHeight - innerHeight;
      setW(h > 0 ? (s / h) * 100 : 0);
    };
    addEventListener("scroll", fn, { passive: true });
    return () => removeEventListener("scroll", fn);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[2.5px] bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 pointer-events-none"
      style={{ width: `${w}%`, transition: "width 80ms linear" }}
    />
  );
}

function SectionLabel({ title, sub }: { title: string; sub?: string }) {
  return (
    <Reveal className="text-center mb-16">
      {sub && (
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-sky-500 dark:text-sky-400 mb-3">{sub}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-5 bg-gradient-to-r from-sky-500 via-blue-500 to-purple-600 dark:from-sky-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-2">
        <div className="h-px w-10 bg-gradient-to-r from-transparent to-sky-500" />
        <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
        <div className="h-px w-20 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500" />
        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
        <div className="h-px w-10 bg-gradient-to-l from-transparent to-pink-500" />
      </div>
    </Reveal>
  );
}

/* ═══════════════════════════════════════
   HEADER
═══════════════════════════════════════ */

function Header({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  const [open,    setOpen]    = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(["top", "about", "projects", "contact"]);

  useEffect(() => {
    const fn = () => setScrolled(scrollY > 24);
    addEventListener("scroll", fn, { passive: true });
    return () => removeEventListener("scroll", fn);
  }, []);

  const NAV = [
    { id: "about",    href: "#about",    label: "About"    },
    { id: "projects", href: "#projects", label: "Projects" },
    { id: "contact",  href: "#contact",  label: "Contact"  },
  ];

  const base = "transition-all duration-300 backdrop-blur-md border-b";
  const cls  = scrolled
    ? `${base} bg-white/95 dark:bg-[#020617]/95 border-slate-200 dark:border-slate-800 shadow-sm shadow-slate-100/80 dark:shadow-slate-900/80`
    : `${base} bg-white/75 dark:bg-[#020617]/75 border-transparent`;

  return (
    <header className={`sticky top-0 z-50 ${cls}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3.5">

        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center text-white text-[11px] font-black tracking-tight shadow-sm shadow-sky-500/40 group-hover:scale-110 transition-transform">
            MA
          </span>
          <span className="hidden sm:block text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            Mohammed Alkhalifa
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(({ id, href, label }) => (
            <a
              key={id} href={href}
              className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === id
                  ? "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/50"
              }`}
            >
              {label}
              {active === id && (
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-400" />
              )}
            </a>
          ))}

          <span className="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-2" />

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 hover:border-sky-400 hover:text-sky-500 transition-all hover:scale-105"
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          <a
            href={HERO.cvUrl} target="_blank" rel="noopener noreferrer"
            className="ml-1 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.03] transition-all"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle theme"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 text-slate-500 dark:text-slate-400"
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white/98 dark:bg-[#020617]/98">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {NAV.map(({ id, href, label }) => (
              <a key={id} href={href} onClick={() => setOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active === id ? "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10" : "text-slate-600 dark:text-slate-300"
                }`}
              >{label}</a>
            ))}
            <a href={HERO.cvUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold text-center"
            >Download CV</a>
          </nav>
        </div>
      )}
      <div className="h-px bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 opacity-40" />
    </header>
  );
}

/* ═══════════════════════════════════════
   HERO
═══════════════════════════════════════ */

function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 60); return () => clearTimeout(t); }, []);

  const f = (d: number): React.CSSProperties => ({
    opacity:    ready ? 1 : 0,
    transform:  ready ? "translateY(0)" : "translateY(22px)",
    transition: `opacity .72s ease ${d}ms, transform .72s ease ${d}ms`,
  });

  return (
    <section id="top" className="relative min-h-[92vh] flex items-center justify-center px-6 py-24 overflow-hidden">

      {/* ── decorative bg ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-52 -left-52 w-[620px] h-[620px] rounded-full bg-sky-400/6 dark:bg-sky-500/10 blur-3xl animate-float-a" />
        <div className="absolute -bottom-28 -right-28 w-[560px] h-[560px] rounded-full bg-purple-500/6 dark:bg-purple-500/10 blur-3xl animate-float-b" />
        <div className="absolute top-1/2 right-1/3  w-[360px] h-[360px] rounded-full bg-pink-500/4 dark:bg-pink-500/7 blur-3xl animate-float-c" />

        {/* dot grid */}
        <div className="absolute inset-0 opacity-[0.022] dark:opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle,#64748b 1.2px,transparent 1.2px)", backgroundSize: "28px 28px" }} />

        {/* rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-sky-500/5 dark:border-sky-500/8 animate-rotate" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-purple-500/4 dark:border-purple-500/6"
          style={{ animation: "rotateSlow 30s linear reverse infinite" }} />
      </div>

      {/* ── content ── */}
      <div className="relative z-10 max-w-3xl mx-auto text-center w-full">

        {/* badge */}
        <div style={f(0)} className="flex justify-center mb-7">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/25 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
              <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities · {HERO.workplace}
          </span>
        </div>

        {/* greeting + name */}
        <div style={f(100)}>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400 font-semibold mb-3">Hello, I&apos;m</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-4 leading-[1.02]">
            {HERO.name}
          </h1>
        </div>

        {/* typewriter roles */}
        <div style={f(260)}>
          <h2 className="text-xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500 dark:from-sky-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-grad min-h-[2.5rem]">
            <Typewriter texts={HERO.roles} speed={80} pause={2200} />
          </h2>
        </div>

        {/* location */}
        <div style={f(400)}>
          <p className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-5">
            <MapPin size={12} /> {HERO.location}
          </p>
        </div>

        {/* tagline */}
        <div style={f(500)}>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed mb-10">
            {HERO.tagline}
          </p>
        </div>

        {/* CTAs */}
        <div style={f(620)}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-bold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-[1.04] transition-all"
            >View Projects <ArrowRight size={15} /></a>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 text-sm font-bold hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-all"
            >Get in Touch</a>
            <a href={HERO.cvUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/40 text-slate-600 dark:text-slate-300 text-sm font-bold hover:border-slate-400 transition-all"
            ><ExternalLink size={13} /> Download CV</a>
          </div>
        </div>

        {/* social icons */}
        <div style={f(740)}>
          <div className="flex justify-center gap-3 mb-12">
            {[
              { h: `mailto:${HERO.email}`, I: Mail,     l: "Email",    c: "hover:text-sky-500 hover:border-sky-400"       },
              { h: HERO.github,            I: Github,   l: "GitHub",   c: "hover:text-purple-500 hover:border-purple-400" },
              { h: HERO.linkedin,          I: Linkedin, l: "LinkedIn", c: "hover:text-blue-500 hover:border-blue-400"     },
            ].map(({ h, I, l, c }) => (
              <a key={l} href={h} target={l === "Email" ? "_self" : "_blank"} rel={l === "Email" ? undefined : "noopener noreferrer"} aria-label={l}
                className={`p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-500 dark:text-slate-400 ${c} transition-all hover:scale-110`}
              ><I size={17} /></a>
            ))}
          </div>
        </div>

        {/* tech stack marquee */}
        <div style={f(860)}>
          <p className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-semibold mb-3">Tech Stack</p>
          <div className="relative overflow-hidden max-w-2xl mx-auto">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 dark:from-[#020617] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 dark:from-[#020617] to-transparent z-10 pointer-events-none" />
            <div className="flex gap-2.5 animate-ticker w-max">
              {[...TECH_STACK, ...TECH_STACK].map((t, i) => (
                <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/70 text-slate-600 dark:text-slate-300 text-[11px] whitespace-nowrap">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a href="#about" aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors group"
        style={f(1200)}
      >
        <span className="text-[9px] uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border-2 border-current rounded-full flex items-start justify-center pt-1.5 transition-colors">
          <div className="w-1 h-1.5 rounded-full bg-current animate-bounce" />
        </div>
      </a>
    </section>
  );
}

/* ═══════════════════════════════════════
   ABOUT
═══════════════════════════════════════ */

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <SectionLabel title={ABOUT.heading} sub={ABOUT.subtitle} />

      <div className="grid md:grid-cols-2 gap-14 items-start">

        {/* Left — stats + text + CTAs */}
        <div>
          {/* Stat grid */}
          <Reveal delay={0}>
            <div className="grid grid-cols-2 gap-3 mb-9">
              {STATS.map((s) => (
                <div key={s.label}
                  className="flex flex-col items-center justify-center p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-center hover:border-sky-400/50 dark:hover:border-sky-500/50 transition-colors"
                >
                  <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent leading-none mb-1">
                    <AnimCounter num={s.num} suffix={s.suffix} />
                  </span>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">{s.label}</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">{s.sub}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Paragraphs */}
          <div className="space-y-4 mb-8">
            {ABOUT.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 130}>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>

          {/* CTAs */}
          <Reveal delay={300}>
            <div className="flex flex-wrap gap-3">
              <a href={HERO.cvUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-bold shadow-sm shadow-sky-500/30 hover:scale-[1.03] transition-all"
              ><ExternalLink size={13} /> View Full CV</a>
              <a href={HERO.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-bold hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-400 transition-all"
              ><Github size={13} /> GitHub</a>
            </div>
          </Reveal>
        </div>

        {/* Right — 2×2 image grid */}
        <div className="grid grid-cols-2 gap-3">
          {ABOUT_IMAGES.map((img, i) => (
            <Reveal key={img.label} delay={i * 80}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-sm hover:shadow-xl hover:shadow-sky-500/15 hover:border-sky-400/50 dark:hover:border-sky-500/50 transition-all duration-350 hover:-translate-y-1">
                <img src={img.src} alt={img.label} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block rounded-full bg-black/80 px-2.5 py-1 text-[10px] font-semibold text-white border border-sky-500/40">
                    {img.label}
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

/* ═══════════════════════════════════════
   PROJECTS  — equal 3-column grid
═══════════════════════════════════════ */

function Projects() {
  const [filter, setFilter] = useState("All");

  const list = filter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => FILTERS.find((f) => f.label === filter)?.match.includes(p.tag));

  return (
    <section id="projects" className="border-y border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <SectionLabel title="Featured Projects" sub="Selected Work" />

        {/* Filter tabs */}
        <Reveal delay={0}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {FILTERS.map(({ label }) => (
              <button key={label} onClick={() => setFilter(label)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all duration-200 ${
                  filter === label
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white border-transparent shadow-sm shadow-sky-500/30 scale-105"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-400"
                }`}
              >{label}
                <span className={`ml-1.5 text-[10px] ${filter === label ? "text-white/80" : "text-slate-400 dark:text-slate-500"}`}>
                  {label === "All" ? PROJECTS.length : PROJECTS.filter(p => FILTERS.find(f => f.label === label)?.match.includes(p.tag)).length}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Equal 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <article className={`card card-shimmer flex flex-col h-full bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-xl dark:hover:shadow-slate-900/60 hover:-translate-y-1 transition-all duration-300 ${BORDER_CLS[p.color] ?? BORDER_CLS.sky}`}>

                {/* ── Fixed-height media (16 : 9) ── */}
                <div className="aspect-video w-full overflow-hidden rounded-t-2xl bg-slate-100 dark:bg-slate-800 shrink-0">
                  {p.type === "video" ? (
                    <iframe
                      className="w-full h-full"
                      src={p.media} title={p.title} loading="lazy"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={p.media} alt={p.title} loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>

                {/* ── Card body ── */}
                <div className="flex flex-col flex-1 p-5">
                  {/* number + tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold text-slate-300 dark:text-slate-600 tabular-nums">{p.num}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${TAG_CLS[p.color] ?? TAG_CLS.sky}`}>
                      {p.tag}
                    </span>
                  </div>

                  {/* title */}
                  <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-slate-50 leading-snug mb-2 line-clamp-2">
                    {p.title}
                  </h3>

                  {/* description — fixed 3 lines */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 flex-1">
                    {p.desc}
                  </p>

                  {/* link — always at bottom */}
                  <a
                    href={p.link.url} target="_blank" rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 mt-4 text-xs font-bold transition-all hover:gap-2.5 ${LINK_CLS[p.color] ?? LINK_CLS.sky}`}
                  >
                    {p.link.label} <ExternalLink size={11} />
                  </a>
                </div>

              </article>
            </Reveal>
          ))}
        </div>

        {list.length === 0 && (
          <div className="text-center py-20">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-sm text-slate-400 dark:text-slate-500">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   CONTACT
═══════════════════════════════════════ */

function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
      <SectionLabel title="Get In Touch" sub="Let's Connect" />

      <Reveal delay={0}>
        <p className="text-center text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-12 leading-relaxed">
          Open to data roles, freelance projects, and collaborations. Reach out and let's build something together.
        </p>
      </Reveal>

      {/* 3 equal contact cards */}
      <div className="grid sm:grid-cols-3 gap-5 mb-10">
        {CONTACT.map(({ id, icon: Icon, label, value, href, color }, i) => (
          <Reveal key={id} delay={i * 90}>
            <a href={href}
              target={id === "email" ? "_self" : "_blank"}
              rel={id === "email" ? undefined : "noopener noreferrer"}
              className={`card group flex flex-col items-center p-7 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${BORDER_CLS[color] ?? BORDER_CLS.sky}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors ${ICON_BG[color] ?? ICON_BG.sky}`}>
                <Icon size={24} className={ICON_CLS[color] ?? ICON_CLS.sky} />
              </div>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-1">{label}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 break-all text-center">{value}</span>
            </a>
          </Reveal>
        ))}
      </div>

      {/* Dual CTA */}
      <Reveal delay={280} className="text-center">
        <div className="inline-flex flex-col sm:flex-row gap-3 items-center">
          <a href={HERO.cvUrl} download
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-purple-600 text-white text-sm font-bold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/45 hover:scale-[1.04] transition-all"
          >Download Resume <ExternalLink size={13} /></a>
          <a href={`mailto:${HERO.email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 text-sm font-bold hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-all"
          ><Mail size={13} /> Send Email</a>
        </div>
      </Reveal>
    </section>
  );
}

/* ═══════════════════════════════════════
   FOOTER
═══════════════════════════════════════ */

function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center text-white text-xs font-black shadow-sm shadow-sky-500/30">MA</div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{HERO.name}</p>
              <p className="text-[11px] text-slate-400">© {new Date().getFullYear()} · Built with Next.js & Tailwind CSS</p>
            </div>
          </div>
          <div className="flex gap-2.5">
            {[
              { h: `mailto:${HERO.email}`, I: Mail,     l: "Email",    c: "hover:text-sky-500    hover:border-sky-400/60"    },
              { h: HERO.github,            I: Github,   l: "GitHub",   c: "hover:text-purple-500 hover:border-purple-400/60" },
              { h: HERO.linkedin,          I: Linkedin, l: "LinkedIn", c: "hover:text-blue-500   hover:border-blue-400/60"   },
            ].map(({ h, I, l, c }) => (
              <a key={l} href={h} target={l === "Email" ? "_self" : "_blank"} rel={l === "Email" ? undefined : "noopener noreferrer"} aria-label={l}
                className={`p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-400 dark:text-slate-500 ${c} transition-all hover:scale-110`}
              ><I size={15} /></a>
            ))}
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/50 text-center">
          <a href="#top" className="text-xs text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors group inline-flex items-center gap-1.5">
            Back to top <span className="group-hover:-translate-y-0.5 transition-transform inline-block">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════
   ROOT
═══════════════════════════════════════ */

export default function Home() {
  const { dark, toggle } = useTheme();
  return (
    <>
      <ScrollBar />
      <main className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100">
        <Header dark={dark} toggle={toggle} />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
