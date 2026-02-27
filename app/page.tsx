"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Mail, Github, Linkedin, Phone, MessageCircle,
  Menu, X, Moon, Monitor,
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
  linkedin: "https://www.linkedin.com/in/mohammed-alkhalifa-68322b1bb/",
  phone: "+966540005871",
  cvUrl: "/Mohammed-Alkhalifa-Data-analyst.pdf",
};

const STATS = [
  { num: 1,    suffix: "st", label: "Class Honours",    sub: "Goldsmiths, London" },
  { num: 2,    suffix: "+",  label: "Years Experience", sub: "Data Analytics"     },
  { num: 10,   suffix: "+",  label: "Projects",         sub: "Multiple Domains"   },
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

/* All projects — same card size, NO wide flag — ordered by impact */
const PROJECTS = [
  {
    id: "document-control",
    num: "01",
    title: "AMT Document Control System",
    tag: "Full Stack",
    color: "emerald",
    type: "image" as const,
    media: "/images/AMT Logo Trans.png",
    desc: "Automated document management system — processes emails via IMAP, classifies documents by type and discipline, generates sequential transmittal numbers, and logs correspondence in Excel.",
    link: { label: "Visit Live Site", url: "https://amt-doccon.up.railway.app/login" },
  },
  {
    id: "platform-adventure",
    num: "02",
    title: "Platform Adventure Game",
    tag: "Game Dev",
    color: "amber",
    type: "image" as const,
    media: "/images/platform-adventure.svg",
    desc: "Multi-level 2D platformer built with p5.js — 5 levels, dash & wall-jump mechanics, weather system, combo scoring, enemy AI, leaderboard, and mobile support.",
    link: { label: "Play Live", url: "https://game-project-sooty-phi.vercel.app" },
    link2: { label: "GitHub", url: "https://github.com/Mohd6288/gameProject" },
  },
  {
    id: "ai-body-tracking",
    num: "03",
    title: "AI Body Tracking Installation",
    tag: "AI & ML",
    color: "sky",
    type: "video" as const,
    media: "https://www.youtube.com/embed/7O4HrpV3EY0",
    desc: "Real-time body-movement tracking that triggers generative visuals and sound using MediaPipe and TouchDesigner.",
    link: { label: "View on GitHub", url: "https://github.com/Mohd6288/CCP_Final_-NO_Name_yet-.git" },
  },
  {
    id: "style-diffusion",
    num: "04",
    title: "Real-Time Style Camera",
    tag: "Engineering",
    color: "purple",
    type: "image" as const,
    media: "/images/image_9.png",
    desc: "Live webcam effects app — apply 6 visual styles (vintage, B&W, retro, comic, cartoon, anime) in real time using Canvas pixel processing, 100% client-side.",
    link: { label: "Try Live Demo", url: "https://real-time-style-diffusion-camera.vercel.app/" },
    link2: { label: "GitHub", url: "https://github.com/Mohd6288/real-time-style-diffusion-camera" },
  },
  {
    id: "dj-app",
    num: "05",
    title: "C++ DJ Application",
    tag: "Audio",
    color: "pink",
    type: "video" as const,
    media: "https://www.youtube.com/embed/fomGKOAOfXk",
    desc: "Desktop DJ app in C++ with real-time mixing, BPM sync, custom waveform UI, and live performance controls.",
    link: { label: "View on GitHub", url: "https://github.com/Mohd6288/DJ_app.git" },
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
    id: "knowledge-sharing",
    num: "08",
    title: "Knowledge Sharing Forum",
    tag: "Full Stack",
    color: "emerald",
    type: "image" as const,
    media: "/images/image_6.png",
    desc: "Modern community forum built with Next.js & Tailwind — user auth, topic categories, posts with likes, threaded replies, and full-text search.",
    link: { label: "Visit Live Site", url: "https://forum-app-ten-eta.vercel.app/" },
    link2: { label: "GitHub", url: "https://github.com/Mohd6288/forumApp" },
  },
  {
    id: "arduino-pomodoro",
    num: "09",
    title: "Arduino Pomodoro Timer",
    tag: "IoT",
    color: "purple",
    type: "video" as const,
    media: "https://www.youtube.com/embed/VT0XQL8e6lo",
    desc: "Hardware Pomodoro timer built with Arduino and LEDs — tactile feedback for focused, distraction-free work sessions.",
    link: { label: "View on GitHub", url: "https://github.com/Mohd6288/pomodoro.git" },
  },
  {
    id: "travel-app",
    num: "10",
    title: "Travel App Prototype",
    tag: "UX / UI",
    color: "indigo",
    type: "image" as const,
    media: "/images/image_5.png",
    desc: "Clickable Figma prototype for a travel app — intuitive flows, clean visual hierarchy, and user-centred design.",
    link: { label: "View in Figma", url: "https://www.figma.com/proto/CsPjykLNtZYDJ5EhRgAIIL/those-bishes-doin-stuff?node-id=509-181&starting-point-node-id=509%3A181&t=KJXY2eLYak57iSUT-1" },
  },
];

const CONTACT = [
  { id: "email",    icon: Mail,           label: "Email",    value: HERO.email,  href: `mailto:${HERO.email}`,                        color: "sky",     desc: "Send me an email"  },
  { id: "whatsapp", icon: MessageCircle,  label: "WhatsApp", value: HERO.phone,  href: `https://wa.me/${HERO.phone.replace("+","")}`, color: "emerald", desc: "Chat on WhatsApp"  },
  { id: "phone",    icon: Phone,          label: "Phone",    value: HERO.phone,  href: `tel:${HERO.phone}`,                           color: "pink",    desc: "Call me directly"  },
  { id: "github",   icon: Github,         label: "GitHub",   value: "@Mohd6288", href: HERO.github,                                   color: "purple",  desc: "View my repos"     },
  { id: "linkedin", icon: Linkedin,       label: "LinkedIn", value: "Connect",   href: HERO.linkedin,                                 color: "indigo",  desc: "Let's connect"     },
];

const FILTERS = [
  { label: "All",          match: []                                    },
  { label: "ML & AI",      match: ["AI & ML", "Machine Learning"]       },
  { label: "Engineering",  match: ["IoT", "Audio", "Game Dev"]          },
  { label: "Design & Web", match: ["UX / UI", "Full Stack"]             },
];

/* colour maps — unified retro style, both modes use CSS variables */
const TAG_CLS: Record<string, string> = {
  sky:     "bg-[var(--tag-bg)] text-[var(--tag-text)] border-[var(--card-border)]",
  purple:  "bg-[var(--tag-bg)] text-[var(--tag-text)] border-[var(--card-border)]",
  pink:    "bg-[var(--tag-bg)] text-[var(--tag-text)] border-[var(--card-border)]",
  indigo:  "bg-[var(--tag-bg)] text-[var(--tag-text)] border-[var(--card-border)]",
  emerald: "bg-[var(--tag-bg)] text-[var(--tag-text)] border-[var(--card-border)]",
  teal:    "bg-[var(--tag-bg)] text-[var(--tag-text)] border-[var(--card-border)]",
  amber:   "bg-[var(--tag-bg)] text-[var(--tag-text)] border-[var(--card-border)]",
};
const BORDER_CLS: Record<string, string> = {
  sky:     "hover:border-[var(--accent)]",
  purple:  "hover:border-[var(--accent)]",
  pink:    "hover:border-[var(--accent)]",
  indigo:  "hover:border-[var(--accent)]",
  emerald: "hover:border-[var(--accent)]",
  teal:    "hover:border-[var(--accent)]",
  amber:   "hover:border-[var(--accent)]",
};
const LINK_CLS: Record<string, string> = {
  sky:     "text-[var(--link)] hover:text-[var(--link-hover)]",
  purple:  "text-[var(--link)] hover:text-[var(--link-hover)]",
  pink:    "text-[var(--link)] hover:text-[var(--link-hover)]",
  indigo:  "text-[var(--link)] hover:text-[var(--link-hover)]",
  emerald: "text-[var(--link)] hover:text-[var(--link-hover)]",
  teal:    "text-[var(--link)] hover:text-[var(--link-hover)]",
  amber:   "text-[var(--link)] hover:text-[var(--link-hover)]",
};
const ICON_CLS: Record<string, string> = {
  sky:     "text-[var(--accent-muted)]",
  emerald: "text-[var(--accent-muted)]",
  pink:    "text-[var(--accent-muted)]",
  purple:  "text-[var(--accent-muted)]",
  indigo:  "text-[var(--accent-muted)]",
  amber:   "text-[var(--accent-muted)]",
};
const ICON_BG: Record<string, string> = {
  sky:     "bg-[var(--tag-bg)] group-hover:bg-[var(--card-bg)]",
  emerald: "bg-[var(--tag-bg)] group-hover:bg-[var(--card-bg)]",
  pink:    "bg-[var(--tag-bg)] group-hover:bg-[var(--card-bg)]",
  purple:  "bg-[var(--tag-bg)] group-hover:bg-[var(--card-bg)]",
  indigo:  "bg-[var(--tag-bg)] group-hover:bg-[var(--card-bg)]",
  amber:   "bg-[var(--tag-bg)] group-hover:bg-[var(--card-bg)]",
};

/* ═══════════════════════════════════════
   HOOKS
═══════════════════════════════════════ */

function useTheme() {
  const [dark, setDark] = useState(false);
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
      <span className="inline-block w-[3px] h-[0.82em] bg-[var(--accent)] ml-1 align-middle rounded-sm animate-pulse" />
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
      className="fixed top-0 left-0 z-[9999] h-[2.5px] bg-[var(--accent)] pointer-events-none"
      style={{ width: `${w}%`, transition: "width 80ms linear" }}
    />
  );
}

const SECTION_NUMS: Record<string, number> = { "About Me": 1, "Featured Projects": 2, "Get In Touch": 3 };
function SectionLabel({ title, sub }: { title: string; sub?: string }) {
  const num = SECTION_NUMS[title] ?? 0;
  return (
    <Reveal className="text-center mb-16">
      {sub && (
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[var(--accent-muted)] mb-3">
          <span className="retro-section-num">§{num} — </span>{sub}
        </p>
      )}
      <h2 className="glitch-sub text-3xl md:text-4xl font-extrabold mb-5 text-[var(--accent)]">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-2">
        <div className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--border)]" />
        <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
        <div className="h-px w-20 bg-[var(--accent)]" />
        <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
        <div className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--border)]" />
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
    ? `${base} bg-[var(--bg)]/95 border-[var(--border)] shadow-sm`
    : `${base} bg-[var(--bg)]/75 border-transparent`;

  return (
    <header className={`sticky top-0 z-50 ${cls}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3.5">

        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-xl bg-[var(--accent)] flex items-center justify-center text-[var(--bg)] text-[11px] font-black tracking-tight shadow-sm group-hover:scale-110 transition-transform">
            MA
          </span>
          <span className="hidden sm:block text-sm font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
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
                  ? "text-[var(--accent)] bg-[var(--tag-bg)]"
                  : "text-[var(--accent-muted)] hover:text-[var(--fg)] hover:bg-[var(--tag-bg)]"
              }`}
            >
              {label}
              {active === id && (
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent)]" />
              )}
            </a>
          ))}

          <span className="w-px h-5 bg-[var(--border)] mx-2" />

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] text-[var(--accent-muted)] hover:border-[var(--border-hover)] hover:text-[var(--accent)] transition-all hover:scale-105"
          >
            {dark ? <Monitor size={14} /> : <Moon size={14} />}
          </button>

          <a
            href={HERO.cvUrl} target="_blank" rel="noopener noreferrer"
            className="ml-1 px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--accent)] text-[var(--bg)] shadow-sm hover:scale-[1.03] transition-all"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle theme"
            className="p-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] text-[var(--accent-muted)]"
          >
            {dark ? <Monitor size={14} /> : <Moon size={14} />}
          </button>
          <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu"
            className="p-2 rounded-lg text-[var(--fg)] hover:bg-[var(--tag-bg)] transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]/98">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {NAV.map(({ id, href, label }) => (
              <a key={id} href={href} onClick={() => setOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active === id ? "text-[var(--accent)] bg-[var(--tag-bg)]" : "text-[var(--accent-muted)]"
                }`}
              >{label}</a>
            ))}
            <a href={HERO.cvUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2.5 rounded-lg bg-[var(--accent)] text-[var(--bg)] text-sm font-semibold text-center"
            >Download CV</a>
          </nav>
        </div>
      )}
      <div className="h-px bg-[var(--accent)] opacity-40" />
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
        {/* dot grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        {/* rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-[var(--accent)]/10 animate-rotate" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-[var(--accent)]/5"
          style={{ animation: "rotateSlow 30s linear reverse infinite" }} />
      </div>

      {/* ── content ── */}
      <div className="relative z-10 max-w-3xl mx-auto text-center w-full">

        {/* badge */}
        <div style={f(0)} className="flex justify-center mb-7">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--tag-bg)] border border-[var(--border)] text-[var(--accent)] text-[11px] font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inset-0 rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative w-2 h-2 rounded-full bg-[var(--accent)]" />
            </span>
            Open to opportunities · {HERO.workplace}
          </span>
        </div>

        {/* greeting + name */}
        <div style={f(100)}>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent-muted)] font-semibold mb-3">Hello, I&apos;m</p>
          <h1 className="glitch-text text-5xl md:text-7xl font-black tracking-tight text-[var(--fg)] mb-4 leading-[1.02]" data-text={HERO.name}>
            {HERO.name}
          </h1>
        </div>

        {/* typewriter roles */}
        <div style={f(260)}>
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-[var(--accent)] min-h-[2.5rem]">
            <Typewriter texts={HERO.roles} speed={80} pause={2200} />
          </h2>
        </div>

        {/* location */}
        <div style={f(400)}>
          <p className="inline-flex items-center gap-1.5 text-xs text-[var(--accent-muted)] mb-5">
            <MapPin size={12} /> {HERO.location}
          </p>
        </div>

        {/* tagline */}
        <div style={f(500)}>
          <p className="text-sm md:text-base text-[var(--accent-muted)] max-w-xl mx-auto leading-relaxed mb-10">
            {HERO.tagline}
          </p>
        </div>

        {/* CTAs */}
        <div style={f(620)}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[var(--accent)] text-[var(--bg)] text-sm font-bold shadow-lg hover:scale-[1.04] transition-all"
            >View Projects <ArrowRight size={15} /></a>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--fg)] text-sm font-bold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >Get in Touch</a>
            <a href={HERO.cvUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--fg)] text-sm font-bold hover:border-[var(--accent)] transition-all"
            ><ExternalLink size={13} /> Download CV</a>
          </div>
        </div>

        {/* social icons */}
        <div style={f(740)}>
          <div className="flex justify-center gap-3 mb-12">
            {[
              { h: `mailto:${HERO.email}`, I: Mail,     l: "Email"    },
              { h: HERO.github,            I: Github,   l: "GitHub"   },
              { h: HERO.linkedin,          I: Linkedin, l: "LinkedIn" },
            ].map(({ h, I, l }) => (
              <a key={l} href={h} target={l === "Email" ? "_self" : "_blank"} rel={l === "Email" ? undefined : "noopener noreferrer"} aria-label={l}
                className="p-2.5 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--accent-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all hover:scale-110"
              ><I size={17} /></a>
            ))}
          </div>
        </div>

        {/* tech stack marquee */}
        <div style={f(860)}>
          <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--accent-muted)] font-semibold mb-3">Tech Stack</p>
          <div className="relative overflow-hidden max-w-2xl mx-auto">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />
            <div className="flex gap-2.5 animate-ticker w-max">
              {[...TECH_STACK, ...TECH_STACK].map((t, i) => (
                <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card-bg)] text-[var(--fg)] text-[11px] whitespace-nowrap">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a href="#about" aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--accent-muted)] hover:text-[var(--accent)] transition-colors group"
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
                  className="flex flex-col items-center justify-center p-5 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] text-center hover:border-[var(--border-hover)] transition-colors"
                >
                  <span className="text-2xl md:text-3xl font-black text-[var(--accent)] leading-none mb-1">
                    <AnimCounter num={s.num} suffix={s.suffix} />
                  </span>
                  <span className="text-xs font-semibold text-[var(--fg)]">{s.label}</span>
                  <span className="text-[10px] text-[var(--accent-muted)] mt-0.5">{s.sub}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Paragraphs */}
          <div className="space-y-4 mb-8">
            {ABOUT.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 130}>
                <p className="text-sm md:text-base text-[var(--accent-muted)] leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>

          {/* CTAs */}
          <Reveal delay={300}>
            <div className="flex flex-wrap gap-3">
              <a href={HERO.cvUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--bg)] text-sm font-bold shadow-sm hover:scale-[1.03] transition-all"
              ><ExternalLink size={13} /> View Full CV</a>
              <a href={HERO.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--border)] text-[var(--fg)] text-sm font-bold hover:border-[var(--border-hover)] hover:text-[var(--accent)] transition-all"
              ><Github size={13} /> GitHub</a>
            </div>
          </Reveal>
        </div>

        {/* Right — 2×2 image grid */}
        <div className="grid grid-cols-2 gap-3">
          {ABOUT_IMAGES.map((img, i) => (
            <Reveal key={img.label} delay={i * 80}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-sm hover:shadow-xl hover:border-[var(--border-hover)] transition-all duration-350 hover:-translate-y-1">
                <img src={img.src} alt={img.label} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block rounded-full bg-black/80 px-2.5 py-1 text-[10px] font-semibold text-white border border-[var(--accent)]/40">
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
    <section id="projects" className="border-y border-[var(--border)] bg-[var(--card-bg)]/70">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <SectionLabel title="Featured Projects" sub="Selected Work" />

        {/* Filter tabs */}
        <Reveal delay={0}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {FILTERS.map(({ label }) => (
              <button key={label} onClick={() => setFilter(label)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all duration-200 ${
                  filter === label
                    ? "bg-[var(--accent)] text-[var(--bg)] border-transparent shadow-sm scale-105"
                    : "border-[var(--border)] bg-[var(--card-bg)] text-[var(--fg)] hover:border-[var(--border-hover)] hover:text-[var(--accent)]"
                }`}
              >{label}
                <span className={`ml-1.5 text-[10px] ${filter === label ? "opacity-70" : "text-[var(--accent-muted)]"}`}>
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
              <article className={`card card-shimmer flex flex-col h-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${BORDER_CLS[p.color] ?? BORDER_CLS.sky}`}>

                {/* ── Fixed-height media (16 : 9) ── */}
                <div className="aspect-video w-full overflow-hidden rounded-t-2xl bg-[var(--card-bg)] shrink-0">
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
                    <span className="text-[10px] font-bold text-[var(--accent-muted)] tabular-nums">{p.num}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${TAG_CLS[p.color] ?? TAG_CLS.sky}`}>
                      {p.tag}
                    </span>
                  </div>

                  {/* title */}
                  <h3 className="text-sm md:text-base font-bold text-[var(--fg)] leading-snug mb-2 line-clamp-2">
                    {p.title}
                  </h3>

                  {/* description — fixed 3 lines */}
                  <p className="text-xs text-[var(--accent-muted)] leading-relaxed line-clamp-3 flex-1">
                    {p.desc}
                  </p>

                  {/* links — always at bottom */}
                  <div className="flex items-center gap-4 mt-4">
                    <a
                      href={p.link.url} target="_blank" rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-bold transition-all hover:gap-2.5 ${LINK_CLS[p.color] ?? LINK_CLS.sky}`}
                    >
                      {p.link.label} <ExternalLink size={11} />
                    </a>
                    {"link2" in p && (p as any).link2 && (
                      <a
                        href={(p as any).link2.url} target="_blank" rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs font-bold transition-all hover:gap-2.5 ${LINK_CLS[p.color] ?? LINK_CLS.sky}`}
                      >
                        {(p as any).link2.label} <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>

              </article>
            </Reveal>
          ))}
        </div>

        {list.length === 0 && (
          <div className="text-center py-20">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-sm text-[var(--accent-muted)]">No projects in this category yet.</p>
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
        <p className="text-center text-sm md:text-base text-[var(--accent-muted)] max-w-md mx-auto mb-12 leading-relaxed">
          Open to data roles, freelance projects, and collaborations. Reach out and let's build something together.
        </p>
      </Reveal>

      {/* 5 contact cards — top row 3, bottom row 2 centered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {CONTACT.map(({ id, icon: Icon, label, value, href, color, desc }, i) => (
          <Reveal key={id} delay={i * 90}>
            <a href={href}
              target={id === "email" ? "_self" : "_blank"}
              rel={id === "email" ? undefined : "noopener noreferrer"}
              className={`card group flex flex-col items-center p-8 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ${BORDER_CLS[color] ?? BORDER_CLS.sky}`}
            >
              {/* Icon with glow ring on hover */}
              <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-[0_0_20px_var(--glow)] ${ICON_BG[color] ?? ICON_BG.sky}`}>
                <Icon size={28} className={`transition-transform duration-300 group-hover:scale-110 ${ICON_CLS[color] ?? ICON_CLS.sky}`} />
              </div>
              <span className="text-base font-bold text-[var(--fg)] mb-1">{label}</span>
              <span className="text-xs text-[var(--accent-muted)] break-all text-center mb-2">{value}</span>
              <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[var(--accent)] opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                {desc}
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      {/* Bottom row: last 2 cards centered */}
      <style>{`
        @media (min-width: 1024px) {
          #contact .grid > :nth-child(4) { grid-column: 1 / 2; margin-left: auto; margin-right: 0; }
          #contact .grid > :nth-child(5) { grid-column: 2 / 4; margin-left: 0; margin-right: auto; }
          #contact .grid > :nth-child(4),
          #contact .grid > :nth-child(5) { max-width: calc((100% - 1.25rem) / 2); }
          #contact .grid { justify-items: center; }
          #contact .grid > :nth-child(4) { justify-self: end; }
          #contact .grid > :nth-child(5) { justify-self: start; }
        }
      `}</style>

      {/* Dual CTA */}
      <Reveal delay={280} className="text-center">
        <div className="inline-flex flex-col sm:flex-row gap-3 items-center">
          <a href={HERO.cvUrl} download
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--accent)] text-[var(--bg)] text-sm font-bold shadow-lg hover:scale-[1.04] transition-all"
          >Download Resume <ExternalLink size={13} /></a>
          <a href={`mailto:${HERO.email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--fg)] text-sm font-bold hover:border-[var(--border-hover)] hover:text-[var(--accent)] transition-all"
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
    <footer className="border-t border-[var(--border)] bg-[var(--card-bg)]/50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[var(--accent)] flex items-center justify-center text-[var(--bg)] text-xs font-black shadow-sm">MA</div>
            <div>
              <p className="text-sm font-bold text-[var(--fg)]">{HERO.name}</p>
              <p className="text-[11px] text-[var(--accent-muted)]">© {new Date().getFullYear()} · Built with Next.js & Tailwind CSS</p>
            </div>
          </div>
          <div className="flex gap-2.5">
            {[
              { h: `mailto:${HERO.email}`, I: Mail,     l: "Email"    },
              { h: HERO.github,            I: Github,   l: "GitHub"   },
              { h: HERO.linkedin,          I: Linkedin, l: "LinkedIn" },
            ].map(({ h, I, l }) => (
              <a key={l} href={h} target={l === "Email" ? "_self" : "_blank"} rel={l === "Email" ? undefined : "noopener noreferrer"} aria-label={l}
                className="p-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] text-[var(--accent-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all hover:scale-110"
              ><I size={15} /></a>
            ))}
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-[var(--border)] text-center">
          <a href="#top" className="text-xs text-[var(--accent-muted)] hover:text-[var(--accent)] transition-colors group inline-flex items-center gap-1.5">
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
      {/* Scanlines overlay — both modes */}
      <div className="scanlines" />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
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
