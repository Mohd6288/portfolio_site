import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

/* =============================
   1. DATA CONFIG (EASY TO EDIT)
   ============================= */

// Hero text + links
const HERO = {
  name: "Mohammed Alkhalifa",
  title: "Creative Technologist & Front-End Developer",
  tagline:
    "I design and build AI-driven experiences, interactive installations, and immersive digital products at the intersection of code, creativity, and human experience.",
  email: "M.alkhalifah@hotmail.com",
  github: "https://github.com/Mohd6288",
  linkedin: "https://linkedin.com/in/mohammed-a-alkhalifa-68322b1bb",
  cvUrl: "/Mohammed-Alkhalifa-Resume.pdf",
};

// About section content
const ABOUT = {
  heading: "About Me",
  subtitle: "Background & Focus",
  paragraphs: [
    "I'm a Creative Computing graduate from Goldsmiths, University of London, with a focus on building interactive systems that feel both technically solid and emotionally engaging. My work spans front-end development, AI-driven interfaces, and physical computing.",
    "I enjoy designing experiences where learners and users can explore complex ideas through intuitive, playful interfaces. I've led workshops for kids, built tools for knowledge sharing, and developed data-driven, interactive installations.",
  ],
};

// Image tiles under About section
const ABOUT_IMAGES = [
  { src: "/images/image_1.jpg", label: "Interactive Visuals" },
  { src: "/images/image_2.jpg", label: "Creative Coding" },
  { src: "/images/image_3.jpg", label: "Physical Computing" },
  { src: "/images/image_4.jpg", label: "UX & UI" },
];

// Tech stack badges (you can add/remove easily)
const TECH_STACK = [
  "React",
  "TypeScript / JavaScript",
  "Tailwind CSS",
  "Arduino & Physical Computing",
  "TouchDesigner",
  "C++ / Audio",
];

// Projects
const PROJECTS = [
  {
    id: "ai-body-tracking",
    title: "AI Body Tracking Installation",
    tag: "AI & ML",
    tagColor: "sky",
    type: "video" as const,
    videoUrl: "https://www.youtube.com/embed/7O4HrpV3EY0",
    description:
      "A real-time interactive art installation using MediaPipe and TouchDesigner. The system responds to body movement with generative visuals and sound, creating an immersive AI-driven environment.",
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
      "A mobile travel companion app designed in Figma with a focus on clean UI, simple flows, and quick access to key travel information.",
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
    // wide: true, // makes it span 2 columns on desktop
  },
  {
    id: "ml-fever-notebook",
    title: "End-to-End Machine Learning: Fever Classification",
    tag: "Machine Learning",
    tagColor: "teal",
    type: "image" as const, // you can keep this or change later
    // Optional: if you make a thumbnail screenshot, put it here:
    imageUrl: "/images/image_7.png",
    description:
      "An end-to-end machine learning notebook that builds and evaluates models on a medical-style dataset, comparing patients with and without fever. It walks through data preprocessing, feature engineering, training, and evaluation in a clear, educational way.",
    linkLabel: "View Notebook",
    linkUrl:
      "https://drive.google.com/file/d/1BtOluXAlnDgXSrvaN2xdLFEugEELoS-6/view?usp=sharing",
    // wide: true, // uncomment if you want it to span 2 columns on desktop
  },
  {
  id: "ml-diffusion-jellyfish",
  title: "Diffusion Models: Jellyfish Image Generation",
  tag: "Machine Learning",
  tagColor: "teal", // uses the teal style we already configured
  type: "image" as const,
  // Optional thumbnail (add once you have a screenshot in /public/images/)
  imageUrl: "/images/image_8.png",
  description:
    "An end-to-end machine learning notebook that applies diffusion models to generate diverse jellyfish images. The notebook covers data preparation, model configuration, training, and qualitative evaluation of the generated samples.",
  linkLabel: "View Notebook",
  linkUrl: "https://colab.research.google.com/drive/1QrN0vTAFjN8g0K39j_B1DYpe_LRs3QUb?usp=sharing",
},
{
  id: "realtime-style-diffusion",
  title: "Real-Time Style Diffusion Camera",
  tag: "Machine Learning",
  tagColor: "teal", // uses the teal style we already configured
  type: "image" as const,
  // add a screenshot of the Gradio app UI to this path
  imageUrl: "/images/image_9.png",
  description:
    "An interactive Stable Diffusion app that transforms webcam or uploaded photos into old-film, comic, cartoon, and anime styles in real time. Built with Python, Diffusers, and Gradio, it showcases prompt-based style control, adjustable strength, and a dark-mode UI for creative machine learning exploration.",
  linkLabel: "View on GitHub",
  linkUrl: "https://github.com/Mohd6288/real-time-style-diffusion-camera",
}


];

// Contact cards
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
   2. SMALL PRESENTATIONAL PIECES
   ============================= */

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-semibold mb-3 bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-sm uppercase tracking-[0.2em]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Small badge for tech stack
function TechBadge({ label }: { label: string }) {
  return (
    <span className="text-xs rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-300">
      {label}
    </span>
  );
}

/* =============================
   3. SECTIONS
   ============================= */

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-semibold tracking-tight text-slate-100 hover:text-sky-400 transition-colors"
        >
          {HERO.name}
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#projects" className="hover:text-sky-400 transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-sky-400 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">
            Contact
          </a>
          <a
            href={HERO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-sky-500 text-white hover:bg-sky-400 transition-colors shadow-sm shadow-sky-500/40"
          >
            CV
          </a>
        </nav>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 opacity-60" />
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative min-h-[80vh] flex items-center justify-center px-6 py-20"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-slate-900/80 border border-sky-500/40 text-sky-200 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for opportunities
        </div>

        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          {HERO.title}
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-1">
          {HERO.name}
        </p>
        <p className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          {HERO.tagline}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-500 text-white font-medium shadow-lg shadow-sky-500/40 hover:from-sky-400 hover:to-blue-400 hover:scale-[1.02] transition-transform"
          >
            View Projects
          </a>
          <a
            href={HERO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-slate-600 bg-slate-900/60 text-slate-100 font-medium hover:border-sky-400 hover:text-sky-200 hover:bg-slate-800 transition-colors"
          >
            Download CV
          </a>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-6 text-slate-300">
          <a
            href={`mailto:${HERO.email}`}
            aria-label="Email"
            className="hover:text-sky-400 transition-transform duration-200 hover:scale-110"
          >
            <Mail size={24} />
          </a>
          <a
            href={HERO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-sky-400 transition-transform duration-200 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href={HERO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-sky-400 transition-transform duration-200 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* Tech stack row */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 text-xs text-slate-400">
          {TECH_STACK.map((item) => (
            <TechBadge key={item} label={item} />
          ))}
        </div>
      </div>
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
        {ABOUT_IMAGES.map((item) => (
          <div
            key={item.label}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-md hover:shadow-xl hover:border-sky-500/70 transition-all duration-300"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-flex rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-100 border border-slate-700/80">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Paragraphs */}
      <div className="max-w-3xl mx-auto text-center space-y-5">
        {ABOUT.paragraphs.map((para, idx) => (
          <p
            key={idx}
            className="text-slate-200 text-base md:text-lg leading-relaxed"
          >
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-y border-slate-800 bg-slate-950/70"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <SectionTitle title="Featured Projects" subtitle="Selected Work" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {PROJECTS.map((project) => {
            // Decide classes based on tagColor (to keep JSX clean)
            const cardBorderHoverClass =
              project.tagColor === "sky"
                ? "hover:border-sky-500/70"
                : project.tagColor === "purple"
                ? "hover:border-purple-500/70"
                : project.tagColor === "pink"
                ? "hover:border-pink-500/70"
                : project.tagColor === "indigo"
                ? "hover:border-indigo-500/70"
                : "hover:border-emerald-500/70";

            const tagClass =
              project.tagColor === "sky"
                ? "bg-sky-500/15 text-sky-300 border-sky-500/40"
                : project.tagColor === "purple"
                ? "bg-purple-500/15 text-purple-300 border-purple-500/40"
                : project.tagColor === "pink"
                ? "bg-pink-500/15 text-pink-300 border-pink-500/40"
                : project.tagColor === "indigo"
                ? "bg-indigo-500/15 text-indigo-300 border-indigo-500/40"
                : "bg-emerald-500/15 text-emerald-300 border-emerald-500/40";

            const linkColorClass =
              project.tagColor === "sky"
                ? "text-sky-300 hover:text-sky-200"
                : project.tagColor === "purple"
                ? "text-purple-300 hover:text-purple-200"
                : project.tagColor === "pink"
                ? "text-pink-300 hover:text-pink-200"
                : project.tagColor === "indigo"
                ? "text-indigo-300 hover:text-indigo-200"
                : "text-emerald-300 hover:text-emerald-200";

            return (
              <article
                key={project.id}
                className={`group bg-slate-900/80 border border-slate-800 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden ${cardBorderHoverClass} ${
                  project.wide ? "md:col-span-2" : ""
                }`}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-50">
                      {project.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${tagClass}`}
                    >
                      {project.tag}
                    </span>
                  </div>

                  {/* Media (video or image) */}
                  {project.type === "video" && project.videoUrl && (
                    <div className="aspect-video mt-4 rounded-xl overflow-hidden border border-slate-800">
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
                      className="w-full rounded-xl mt-4 border border-slate-800 group-hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                  )}

                  <p className="mt-4 text-sm md:text-base text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center mt-4 text-sm font-medium group-hover:translate-x-1 transition-transform ${linkColorClass}`}
                  >
                    {project.linkLabel} →
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <SectionTitle title="Get In Touch" subtitle="Let's Build Something" />

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {CONTACT_CARDS.map(({ id, href, label, value, icon: Icon, color }) => (
          <a
            key={id}
            href={href}
            target={id === "email" ? "_self" : "_blank"}
            rel={id === "email" ? undefined : "noopener noreferrer"}
            className={`group bg-slate-900/80 border border-slate-800 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 text-center
              ${
                color === "sky"
                  ? "hover:border-sky-500/70"
                  : color === "purple"
                  ? "hover:border-purple-500/70"
                  : "hover:border-indigo-500/70"
              }
            `}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors
                ${
                  color === "sky"
                    ? "bg-sky-500/15 group-hover:bg-sky-500/25"
                    : color === "purple"
                    ? "bg-purple-500/15 group-hover:bg-purple-500/25"
                    : "bg-indigo-500/15 group-hover:bg-indigo-500/25"
                }
              `}
            >
              <Icon
                size={28}
                className={
                  color === "sky"
                    ? "text-sky-300"
                    : color === "purple"
                    ? "text-purple-300"
                    : "text-indigo-300"
                }
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-50 mb-2">
              {label}
            </h3>
            <p className="text-slate-300 text-sm break-all">{value}</p>
          </a>
        ))}
      </div>

      <div className="text-center">
        <a
          href={HERO.cvUrl}
          download
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 text-white font-medium hover:from-sky-400 hover:to-purple-400 transition-all shadow-lg shadow-sky-500/40 hover:scale-[1.02]"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
}

/* =============================
   4. MAIN PAGE COMPONENT
   ============================= */

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />

      <footer className="text-center py-10 px-6 border-t border-slate-800 text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} {HERO.name}. Built with React & Tailwind
          CSS.
        </p>
      </footer>
    </main>
  );
}
