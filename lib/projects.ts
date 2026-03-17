export interface Project {
  id: string;
  num: string;
  title: string;
  tag: string;
  color: string;
  type: "video" | "image";
  media: string;
  desc: string;
  longDesc?: string;
  techStack?: string[];
  link: { label: string; url: string };
  link2?: { label: string; url: string };
}

export const PROJECTS: Project[] = [
  {
    id: "document-control",
    num: "01",
    title: "AMT Document Control System",
    tag: "Full Stack",
    color: "emerald",
    type: "image",
    media: "/images/AMT Logo Trans.png",
    desc: "Automated document management system — processes emails via IMAP, classifies documents by type and discipline, generates sequential transmittal numbers, and logs correspondence in Excel.",
    longDesc: "A full-stack document control system built for Advanced Micro Technologies (AMT). The system automates the entire document management workflow — from receiving emails via IMAP to classifying documents by type and engineering discipline, generating sequential transmittal numbers, and maintaining a comprehensive correspondence log in Excel. This replaced a manual process that was error-prone and time-consuming, saving hours of work daily.",
    techStack: ["Next.js", "Node.js", "IMAP", "Excel.js", "Railway"],
    link: { label: "Visit Live Site", url: "https://amt-doccon.up.railway.app/login" },
  },
  {
    id: "vision2030-quiz",
    num: "02",
    title: "Vision 2030 Quiz Arena",
    tag: "Full Stack",
    color: "emerald",
    type: "image",
    media: "/images/vision2030-quiz.png",
    desc: "AI-powered Saudi Arabia quiz game — 120+ questions, 6 categories, interactive story mode, adaptive difficulty, hints, sound effects, Arabic bilingual UI, and leaderboard.",
    longDesc: "An AI-powered interactive quiz game about Saudi Arabia's Vision 2030. Features over 120 questions across 6 categories, an engaging story mode where players progress through narrative-driven challenges, adaptive difficulty that adjusts based on performance, a hint system, immersive sound effects, full Arabic/English bilingual support, and a competitive leaderboard system.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI/GPT"],
    link: { label: "Open App", url: "/quiz-game" },
    link2: { label: "GitHub", url: "https://github.com/Mohd6288/vision2030-QuizGame" },
  },
  {
    id: "map-poster",
    num: "03",
    title: "MapPoster — City Map Generator",
    tag: "Full Stack",
    color: "emerald",
    type: "image",
    media: "/images/map-poster-dammam.png",
    desc: "Generate beautiful, minimalist map posters for any city — 17 themes, live preview, multilingual support, and export to PNG, SVG, or PDF. Built with Next.js, Canvas API, and OpenStreetMap data.",
    longDesc: "A creative tool that generates beautiful, minimalist map posters for any city in the world. Users can choose from 17 carefully crafted themes, see live previews as they customize, add text in multiple languages, and export their creations as high-resolution PNG, SVG, or PDF files. The application fetches real geographic data from OpenStreetMap and renders it using the Canvas API for smooth, responsive rendering.",
    techStack: ["Next.js", "Canvas API", "OpenStreetMap", "TypeScript", "Tailwind CSS"],
    link: { label: "Open App", url: "/map-poster" },
    link2: { label: "GitHub", url: "https://github.com/Mohd6288/MapPoster" },
  },
  {
    id: "platform-adventure",
    num: "04",
    title: "Platform Adventure Game",
    tag: "Game Dev",
    color: "amber",
    type: "image",
    media: "/images/platform-adventure.svg",
    desc: "Multi-level 2D platformer built with p5.js — 5 levels, dash & wall-jump mechanics, weather system, combo scoring, enemy AI, leaderboard, and mobile support.",
    longDesc: "A feature-rich 2D platformer game built entirely with p5.js. Players navigate through 5 increasingly challenging levels with dash and wall-jump mechanics. The game includes a dynamic weather system that affects gameplay, a combo scoring system that rewards skillful play, intelligent enemy AI with different behavior patterns, a persistent leaderboard, and full mobile touch support.",
    techStack: ["p5.js", "JavaScript", "HTML5 Canvas", "CSS"],
    link: { label: "Open App", url: "/platform-game" },
    link2: { label: "GitHub", url: "https://github.com/Mohd6288/gameProject" },
  },
  {
    id: "ai-body-tracking",
    num: "05",
    title: "AI Body Tracking Installation",
    tag: "AI & ML",
    color: "sky",
    type: "video",
    media: "https://www.youtube.com/embed/7O4HrpV3EY0",
    desc: "Real-time body-movement tracking that triggers generative visuals and sound using MediaPipe and TouchDesigner.",
    longDesc: "An interactive art installation that uses AI-powered body tracking to create a responsive audiovisual experience. The system captures real-time body movements through a camera, processes them using Google's MediaPipe framework, and maps the motion data to generative visuals and sound in TouchDesigner. The result is an immersive experience where every movement creates unique visual patterns and soundscapes.",
    techStack: ["MediaPipe", "TouchDesigner", "Python", "Computer Vision"],
    link: { label: "View on GitHub", url: "https://github.com/Mohd6288/CCP_Final_-NO_Name_yet-.git" },
  },
  {
    id: "style-diffusion",
    num: "06",
    title: "AI Style Diffusion Camera",
    tag: "AI & ML",
    color: "purple",
    type: "image",
    media: "/images/image_9.png",
    desc: "AI-powered style transfer app — transform photos into vintage, B&W, comic, cartoon, or anime art using Stable Diffusion (FLUX.1-Kontext) via HuggingFace, plus instant canvas filters.",
    longDesc: "An AI-powered creative tool that transforms photos into different artistic styles. Users can apply styles like vintage, black & white, comic book, cartoon, and anime using Stable Diffusion (FLUX.1-Kontext) through HuggingFace's inference API. The app also includes instant canvas-based filters for quick transformations without AI processing. Features a real-time camera feed and gallery for saved creations.",
    techStack: ["Next.js", "Stable Diffusion", "HuggingFace API", "Canvas API", "TypeScript"],
    link: { label: "Open App", url: "/style-camera" },
    link2: { label: "GitHub", url: "https://github.com/Mohd6288/real-time-style-diffusion-camera" },
  },
  {
    id: "dj-app",
    num: "07",
    title: "C++ DJ Application",
    tag: "Audio",
    color: "pink",
    type: "video",
    media: "https://www.youtube.com/embed/fomGKOAOfXk",
    desc: "Desktop DJ app in C++ with real-time mixing, BPM sync, custom waveform UI, and live performance controls.",
    longDesc: "A desktop DJ application built from scratch in C++ using the JUCE framework. Features dual-deck mixing with real-time audio processing, automatic BPM detection and sync, custom waveform visualization UI, crossfader and EQ controls, and live performance features including looping and cue points. The application handles audio at a low level for minimal latency during live mixing.",
    techStack: ["C++", "JUCE Framework", "Audio DSP", "Custom UI"],
    link: { label: "View on GitHub", url: "https://github.com/Mohd6288/DJ_app.git" },
  },
  {
    id: "ml-fever",
    num: "08",
    title: "ML: Fever Classification",
    tag: "Machine Learning",
    color: "teal",
    type: "image",
    media: "/images/image_7.png",
    desc: "End-to-end ML notebook on a medical dataset: preprocessing, feature engineering, model training and evaluation.",
    longDesc: "A comprehensive machine learning project that tackles fever classification on a medical dataset. The notebook walks through the complete ML pipeline: data loading and exploration, preprocessing and cleaning, feature engineering, model selection and training (comparing multiple algorithms), hyperparameter tuning, and thorough evaluation with metrics like accuracy, precision, recall, and F1-score.",
    techStack: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
    link: { label: "View Notebook", url: "https://drive.google.com/file/d/1BtOluXAlnDgXSrvaN2xdLFEugEELoS-6/view?usp=sharing" },
  },
  {
    id: "diffusion-jellyfish",
    num: "09",
    title: "Diffusion: Jellyfish Generation",
    tag: "Machine Learning",
    color: "teal",
    type: "image",
    media: "/images/image_8.png",
    desc: "Diffusion model generating diverse jellyfish imagery — covers data prep, model configuration, training, and evaluation.",
    longDesc: "A deep learning project exploring generative AI through diffusion models. The project trains a diffusion model to generate diverse and realistic jellyfish imagery. It covers the entire process from data preparation and augmentation, through model architecture configuration, training with progressive noise schedules, to evaluation of generated samples. The result demonstrates how diffusion models learn to create complex organic forms.",
    techStack: ["Python", "PyTorch", "Diffusion Models", "Google Colab"],
    link: { label: "View Notebook", url: "https://colab.research.google.com/drive/1QrN0vTAFjN8g0K39j_B1DYpe_LRs3QUb?usp=sharing" },
  },
  {
    id: "knowledge-sharing",
    num: "10",
    title: "Knowledge Sharing Forum",
    tag: "Full Stack",
    color: "emerald",
    type: "image",
    media: "/images/image_6.png",
    desc: "Modern community forum built with Next.js & Tailwind — user auth, topic categories, posts with likes, threaded replies, and full-text search.",
    longDesc: "A modern community forum platform built with Next.js and Tailwind CSS. Features include user authentication and profiles, organized topic categories, posts with a like system, threaded reply chains, full-text search across all content, and a clean responsive UI. Designed to facilitate knowledge sharing and community engagement.",
    techStack: ["Next.js", "Tailwind CSS", "Authentication", "Full-text Search"],
    link: { label: "Open App", url: "/forum" },
    link2: { label: "GitHub", url: "https://github.com/Mohd6288/forumApp" },
  },
  {
    id: "arduino-pomodoro",
    num: "11",
    title: "Arduino Pomodoro Timer",
    tag: "IoT",
    color: "purple",
    type: "video",
    media: "https://www.youtube.com/embed/VT0XQL8e6lo",
    desc: "Hardware Pomodoro timer built with Arduino and LEDs — tactile feedback for focused, distraction-free work sessions.",
    longDesc: "A physical Pomodoro timer built with Arduino hardware. The device uses LEDs to indicate work and break periods with visual countdown, providing tactile and visual feedback that keeps you focused without the distractions of a phone or computer timer. The hardware includes a button interface for starting, pausing, and resetting sessions, making it a dedicated tool for productivity.",
    techStack: ["Arduino", "C/C++", "LEDs", "Physical Computing"],
    link: { label: "View on GitHub", url: "https://github.com/Mohd6288/pomodoro.git" },
  },
  {
    id: "travel-app",
    num: "12",
    title: "Travel App Prototype",
    tag: "UX / UI",
    color: "indigo",
    type: "image",
    media: "/images/image_5.png",
    desc: "Clickable Figma prototype for a travel app — intuitive flows, clean visual hierarchy, and user-centred design.",
    longDesc: "A comprehensive UX/UI design project for a travel application. The clickable Figma prototype showcases intuitive user flows for trip planning, booking, and discovery. Features clean visual hierarchy, consistent design language, user-centred design principles, and smooth transitions between screens. The prototype demonstrates a complete mobile travel experience from onboarding to booking confirmation.",
    techStack: ["Figma", "UX Research", "UI Design", "Prototyping"],
    link: { label: "View in Figma", url: "https://www.figma.com/proto/CsPjykLNtZYDJ5EhRgAIIL/those-bishes-doin-stuff?node-id=509-181&starting-point-node-id=509%3A181&t=KJXY2eLYak57iSUT-1" },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.id === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.id);
}
