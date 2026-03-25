"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Mail, Github, Linkedin, Phone, MessageCircle,
  Menu, X, Moon, Monitor,
  ExternalLink, ArrowRight, MapPin, Send, CheckCircle, AlertCircle,
  Globe, BarChart3, Bot, Smartphone, Database, Palette,
} from "lucide-react";

/* ═══════════════════════════════════════
   DATA  (المحتوى — لهجة حجازية غير رسمية)
═══════════════════════════════════════ */

const HERO = {
  name: "محمد الخليفة",
  title: "محلل بيانات",
  roles: ["محلل بيانات", "مطوّر Power BI", "مهتم بالذكاء الاصطناعي", "مطوّر Python"],
  location: "الدمام، السعودية",
  workplace: "Advanced Micro Technologies, KSA",
  tagline:
    "أحوّل البيانات الخام إلى تقارير واضحة ولوحات معلومات تفاعلية وعروض بصرية جاهزة لصنّاع القرار — باستخدام Power BI و Python و SQL و Excel، تماشياً مع رؤية السعودية 2030.",
  email: "M.alkhalifah@hotmail.com",
  github: "https://github.com/Mohd6288",
  linkedin: "https://www.linkedin.com/in/mohammed-alkhalifa-68322b1bb/",
  phone: "+966540005871",
  cvUrl: "/Mohammed-Alkhalifa-Data-analyst.pdf",
};

const STATS = [
  { num: 1,    suffix: "st", label: "مرتبة الشرف الأولى", sub: "جولدسميث، جامعة لندن" },
  { num: 2,    suffix: "+",  label: "سنوات خبرة",          sub: "بيانات وتحليلات"     },
  { num: 12,   suffix: "+",  label: "مشروع",               sub: "في مجالات متنوعة"     },
  { num: 2030, suffix: "",   label: "متوافق مع الرؤية",    sub: "المملكة العربية السعودية" },
];

const ABOUT = {
  heading: "نبذة عني",
  subtitle: "الخلفية والتخصص",
  paragraphs: [
    "خريج حوسبة إبداعية من جامعة جولدسميث بلندن (2025) بمرتبة الشرف الأولى. تخصصي في تحليل البيانات وتعلم الآلة وذكاء الأعمال، وحالياً أعمل محلل بيانات في شركة Advanced Micro Technologies بالخبر.",
    "قبل دخولي مجال التقنية اشتغلت مشغّل مصنع كيميائي في شركة صدارة، وهالتجربة علّمتني الانضباط والدقة في التفاصيل — صفات أطبقها في كل مشروع تحليل بيانات. شغوف بالمساهمة في التحوّل الرقمي ضمن رؤية السعودية 2030.",
  ],
};

const ABOUT_IMAGES = [
  { src: "/images/image_1.jpg", label: "مرئيات تفاعلية" },
  { src: "/images/image_2.jpg", label: "برمجة إبداعية"   },
  { src: "/images/image_3.jpg", label: "حوسبة فيزيائية"  },
  { src: "/images/image_4.jpg", label: "تجربة المستخدم"   },
];

const TECH_STACK = [
  "Power BI", "Tableau", "Python", "SQL", "Excel",
  "Machine Learning", "Data Visualisation", "Git / GitHub",
  "Jupyter", "ETL & Cleaning", "Statistical Analysis", "scikit-learn",
  "TensorFlow", "PyTorch", "Matplotlib", "Seaborn",
];

const PROJECTS = [
  {
    id: "document-control",
    num: "٠١",
    title: "نظام إدارة الوثائق — AMT",
    tag: "فل ستاك",
    color: "emerald",
    type: "image" as const,
    media: "/images/AMT Logo Trans.png",
    desc: "نظام إدارة وثائق مؤتمت — يعالج الإيميلات عبر IMAP، يصنّف المستندات حسب النوع والتخصص، يولّد أرقام إرسال متسلسلة، ويسجّل كل المراسلات تلقائياً في إكسل.",
    link: { label: "افتح التطبيق", url: "https://amt-doccon.up.railway.app/login" },
  },
  {
    id: "vision2030-quiz",
    num: "٠٢",
    title: "كويز رؤية 2030",
    tag: "فل ستاك",
    color: "emerald",
    type: "image" as const,
    media: "/images/vision2030-quiz.png",
    desc: "لعبة أسئلة ذكية عن السعودية — أكثر من 120 سؤال في 6 فئات، وضع قصة تفاعلي، صعوبة تتكيّف مع مستواك، تلميحات ومؤثرات صوتية، واجهة ثنائية اللغة، ولوحة متصدرين.",
    link: { label: "افتح التطبيق", url: "/quiz-game" },
    link2: { label: "GitHub", url: "https://github.com/Mohd6288/vision2030-QuizGame" },
  },
  {
    id: "map-poster",
    num: "٠٣",
    title: "MapPoster — مولّد خرائط المدن",
    tag: "فل ستاك",
    color: "emerald",
    type: "image" as const,
    media: "/images/map-poster-dammam.png",
    desc: "أنشئ ملصقات خرائط أنيقة وبسيطة لأي مدينة — 17 نمطاً بصرياً، معاينة مباشرة، دعم لغات متعددة، وتصدير بصيغة PNG أو SVG أو PDF. مبني بـ Next.js و Canvas API و OpenStreetMap.",
    link: { label: "افتح التطبيق", url: "/map-poster" },
    link2: { label: "GitHub", url: "https://github.com/Mohd6288/MapPoster" },
  },
  {
    id: "platform-adventure",
    num: "٠٤",
    title: "لعبة منصات المغامرة",
    tag: "تطوير ألعاب",
    color: "amber",
    type: "image" as const,
    media: "/images/platform-adventure.svg",
    desc: "لعبة منصات ثنائية الأبعاد بخمس مراحل — فيها اندفاع وقفز على الجدران، نظام طقس، نقاط مضاعفة، ذكاء اصطناعي للأعداء، لوحة متصدرين، ودعم كامل للجوال.",
    link: { label: "افتح التطبيق", url: "/platform-game" },
    link2: { label: "GitHub", url: "https://github.com/Mohd6288/gameProject" },
  },
  {
    id: "ai-body-tracking",
    num: "٠٥",
    title: "تتبع الجسم بالذكاء الاصطناعي",
    tag: "ذكاء اصطناعي",
    color: "sky",
    type: "video" as const,
    media: "https://www.youtube.com/embed/7O4HrpV3EY0",
    desc: "تتبع حركة الجسم بالوقت الحقيقي لتشغيل مرئيات توليدية وأصوات مكانية باستخدام MediaPipe و TouchDesigner.",
    link: { label: "شوفه على GitHub", url: "https://github.com/Mohd6288/CCP_Final_-NO_Name_yet-.git" },
  },
  {
    id: "style-diffusion",
    num: "٠٦",
    title: "كاميرا نقل الأنماط بالـ AI",
    tag: "ذكاء اصطناعي",
    color: "purple",
    type: "image" as const,
    media: "/images/image_9.png",
    desc: "تطبيق نقل أنماط بالذكاء الاصطناعي — حوّل صورك إلى أسلوب كلاسيكي أو أبيض وأسود أو كوميك أو كرتون أو أنمي عبر Stable Diffusion و HuggingFace، مع فلاتر فورية.",
    link: { label: "افتح التطبيق", url: "/style-camera" },
    link2: { label: "GitHub", url: "https://github.com/Mohd6288/real-time-style-diffusion-camera" },
  },
  {
    id: "dj-app",
    num: "٠٧",
    title: "تطبيق DJ بلغة C++",
    tag: "صوتيات",
    color: "pink",
    type: "video" as const,
    media: "https://www.youtube.com/embed/fomGKOAOfXk",
    desc: "تطبيق DJ مكتبي مبني بـ C++ — مكس لحظي، مزامنة إيقاع تلقائية، واجهة موجات صوتية مخصصة، وأدوات تحكم بالأداء المباشر.",
    link: { label: "شوفه على GitHub", url: "https://github.com/Mohd6288/DJ_app.git" },
  },
  {
    id: "ml-fever",
    num: "٠٨",
    title: "تعلم آلي: تصنيف الحمّى",
    tag: "تعلم آلي",
    color: "teal",
    type: "image" as const,
    media: "/images/image_7.png",
    desc: "دفتر تعلم آلي شامل على بيانات طبية — يغطي المعالجة المسبقة وهندسة الخصائص وتدريب النموذج وتقييم الأداء.",
    link: { label: "شوف الدفتر", url: "https://drive.google.com/file/d/1BtOluXAlnDgXSrvaN2xdLFEugEELoS-6/view?usp=sharing" },
  },
  {
    id: "diffusion-jellyfish",
    num: "٠٩",
    title: "Diffusion: توليد قناديل البحر",
    tag: "تعلم آلي",
    color: "teal",
    type: "image" as const,
    media: "/images/image_8.png",
    desc: "نموذج Diffusion مدرَّب لتوليد صور متنوعة لقناديل البحر — يغطي تجهيز البيانات وإعدادات النموذج والتدريب والتقييم.",
    link: { label: "شوف الدفتر", url: "https://colab.research.google.com/drive/1QrN0vTAFjN8g0K39j_B1DYpe_LRs3QUb?usp=sharing" },
  },
  {
    id: "knowledge-sharing",
    num: "١٠",
    title: "منتدى مشاركة المعرفة",
    tag: "فل ستاك",
    color: "emerald",
    type: "image" as const,
    media: "/images/image_6.png",
    desc: "منتدى مجتمعي عصري مبني بـ Next.js و Tailwind — يدعم تسجيل الدخول، تصنيفات المواضيع، منشورات بإعجابات، ردود متسلسلة، وبحث نصي شامل.",
    link: { label: "افتح التطبيق", url: "/forum" },
    link2: { label: "GitHub", url: "https://github.com/Mohd6288/forumApp" },
  },
  {
    id: "arduino-pomodoro",
    num: "١١",
    title: "مؤقت بومودورو بالأردوينو",
    tag: "إنترنت الأشياء",
    color: "purple",
    type: "video" as const,
    media: "https://www.youtube.com/embed/VT0XQL8e6lo",
    desc: "مؤقت بومودورو مادي مبني بالأردوينو وأضواء LED — يوفر تنبيهات حسية لجلسات عمل مركّزة خالية من التشتيت.",
    link: { label: "شوفه على GitHub", url: "https://github.com/Mohd6288/pomodoro.git" },
  },
  {
    id: "travel-app",
    num: "١٢",
    title: "نموذج تطبيق سفر",
    tag: "تجربة مستخدم",
    color: "indigo",
    type: "image" as const,
    media: "/images/image_5.png",
    desc: "نموذج Figma تفاعلي لتطبيق سفر — تدفقات استخدام بديهية، تسلسل بصري نظيف، وتصميم يضع المستخدم في المقام الأول.",
    link: { label: "شوفه في Figma", url: "https://www.figma.com/proto/CsPjykLNtZYDJ5EhRgAIIL/those-bishes-doin-stuff?node-id=509-181&starting-point-node-id=509%3A181&t=KJXY2eLYak57iSUT-1" },
  },
];

const CONTACT = [
  { id: "email",    icon: Mail,          label: "البريد",   value: HERO.email,  href: `mailto:${HERO.email}`,                        color: "sky",     desc: "أرسل لي إيميل"     },
  { id: "whatsapp", icon: MessageCircle, label: "واتساب",   value: HERO.phone,  href: `https://wa.me/${HERO.phone.replace("+","")}`, color: "emerald", desc: "راسلني على واتساب"  },
  { id: "phone",    icon: Phone,         label: "الجوال",   value: HERO.phone,  href: `tel:${HERO.phone}`,                           color: "pink",    desc: "اتصل بي مباشرة"    },
  { id: "github",   icon: Github,        label: "GitHub",   value: "@Mohd6288", href: HERO.github,                                   color: "purple",  desc: "استعرض مشاريعي"     },
  { id: "linkedin", icon: Linkedin,      label: "LinkedIn", value: "تواصل",     href: HERO.linkedin,                                 color: "indigo",  desc: "تواصل معي"          },
];

const SERVICES = [
  {
    icon: Globe,
    title: "تطوير مواقع",
    desc: "مواقع وتطبيقات ويب مبنية بـ Next.js و React و Tailwind CSS — سريعة ومتجاوبة ومهيّأة لمحركات البحث.",
  },
  {
    icon: BarChart3,
    title: "لوحات معلومات وتقارير",
    desc: "لوحات معلومات تفاعلية بـ Power BI و Tableau تحوّل البيانات الخام إلى رؤى عملية واضحة لصنّاع القرار.",
  },
  {
    icon: Bot,
    title: "أتمتة وسكربتات",
    desc: "أتمتة سير العمل بـ Python — من خطوط بيانات وعمليات ETL إلى معالجة الإيميلات وأنظمة إدارة المستندات.",
  },
  {
    icon: Smartphone,
    title: "واجهات متجاوبة",
    desc: "واجهات دقيقة ومتوافقة مع الجوال أولاً — تدفقات استخدام بديهية، إمكانية وصول عالية، وأنماط تصميم حديثة.",
  },
  {
    icon: Database,
    title: "تحليل بيانات",
    desc: "تحليلات شاملة بـ Python و SQL و Excel — تنظيف البيانات والنمذجة الإحصائية والتصوير البصري المقنع.",
  },
  {
    icon: Palette,
    title: "تقنية إبداعية",
    desc: "تركيبات تفاعلية ومرئيات توليدية ومشاريع تجريبية تمزج البرمجة بالإعلام الإبداعي والحوسبة الفيزيائية.",
  },
];

const FILTERS = [
  { label: "الكل",           match: []                                              },
  { label: "ذكاء اصطناعي",   match: ["ذكاء اصطناعي", "تعلم آلي"]                     },
  { label: "هندسة",          match: ["إنترنت الأشياء", "صوتيات", "تطوير ألعاب"]       },
  { label: "تصميم وويب",     match: ["تجربة مستخدم", "فل ستاك"]                       },
];

/* colour maps */
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
      <span className="inline-block w-[3px] h-[0.82em] bg-[var(--accent)] mr-1 align-middle rounded-sm animate-pulse" />
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
      className="fixed top-0 right-0 z-[9999] h-[2.5px] bg-[var(--accent)] pointer-events-none"
      style={{ width: `${w}%`, transition: "width 80ms linear" }}
    />
  );
}

const SECTION_NUMS: Record<string, number> = { "نبذة عني": 1, "خدمات فريلانس": 2, "مشاريعي المميزة": 3, "تواصل معي": 4 };
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
        <div className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--border)]" />
        <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
        <div className="h-px w-20 bg-[var(--accent)]" />
        <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
        <div className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--border)]" />
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
  const active = useActiveSection(["top", "about", "services", "projects", "contact"]);

  useEffect(() => {
    const fn = () => setScrolled(scrollY > 24);
    addEventListener("scroll", fn, { passive: true });
    return () => removeEventListener("scroll", fn);
  }, []);

  const NAV = [
    { id: "about",    href: "#about",    label: "عني" },
    { id: "services", href: "#services", label: "خدماتي" },
    { id: "projects", href: "#projects", label: "مشاريعي" },
    { id: "contact",  href: "#contact",  label: "تواصل" },
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
            م خ
          </span>
          <span className="hidden sm:block text-sm font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
            محمد الخليفة
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

          {/* Language switcher */}
          <a
            href="/"
            className="p-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] text-[var(--accent-muted)] hover:border-[var(--border-hover)] hover:text-[var(--accent)] transition-all hover:scale-105 text-xs font-bold"
            title="English"
          >
            EN
          </a>

          <button
            onClick={toggle}
            aria-label="تبديل الثيم"
            className="p-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] text-[var(--accent-muted)] hover:border-[var(--border-hover)] hover:text-[var(--accent)] transition-all hover:scale-105"
          >
            {dark ? <Monitor size={14} /> : <Moon size={14} />}
          </button>

          <a
            href={HERO.cvUrl} target="_blank" rel="noopener noreferrer"
            className="mr-1 px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--accent)] text-[var(--bg)] shadow-sm hover:scale-[1.03] transition-all"
          >
            حمّل السيرة الذاتية
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <a href="/" className="p-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] text-[var(--accent-muted)] text-xs font-bold" title="English">EN</a>
          <button onClick={toggle} aria-label="تبديل الثيم"
            className="p-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] text-[var(--accent-muted)]"
          >
            {dark ? <Monitor size={14} /> : <Moon size={14} />}
          </button>
          <button onClick={() => setOpen((o) => !o)} aria-label="القائمة"
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
            >حمّل السيرة الذاتية</a>
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

      {/* decorative bg */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-[var(--accent)]/10 animate-rotate" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-[var(--accent)]/5"
          style={{ animation: "rotateSlow 30s linear reverse infinite" }} />
      </div>

      {/* content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center w-full">

        {/* badge */}
        <div style={f(0)} className="flex justify-center mb-7">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--tag-bg)] border border-[var(--border)] text-[var(--accent)] text-[11px] font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inset-0 rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative w-2 h-2 rounded-full bg-[var(--accent)]" />
            </span>
            متاح للفرص الوظيفية · {HERO.workplace}
          </span>
        </div>

        {/* greeting + name */}
        <div style={f(100)}>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent-muted)] font-semibold mb-3">هلا، أنا</p>
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
            >شوف مشاريعي <ArrowRight size={15} className="rotate-180" /></a>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--fg)] text-sm font-bold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >تواصل معي</a>
            <a href={HERO.cvUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--fg)] text-sm font-bold hover:border-[var(--accent)] transition-all"
            ><ExternalLink size={13} /> حمّل السيرة الذاتية</a>
          </div>
        </div>

        {/* social icons */}
        <div style={f(740)}>
          <div className="flex justify-center gap-3 mb-12">
            {[
              { h: `mailto:${HERO.email}`, I: Mail,     l: "إيميل"   },
              { h: HERO.github,            I: Github,   l: "GitHub"   },
              { h: HERO.linkedin,          I: Linkedin, l: "LinkedIn" },
            ].map(({ h, I, l }) => (
              <a key={l} href={h} target={l === "إيميل" ? "_self" : "_blank"} rel={l === "إيميل" ? undefined : "noopener noreferrer"} aria-label={l}
                className="p-2.5 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--accent-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all hover:scale-110"
              ><I size={17} /></a>
            ))}
          </div>
        </div>

        {/* tech stack marquee */}
        <div style={f(860)}>
          <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--accent-muted)] font-semibold mb-3">المهارات التقنية</p>
          <div className="relative overflow-hidden max-w-2xl mx-auto">
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
            <div className="flex gap-2.5 animate-ticker w-max" style={{ direction: "ltr" }}>
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
      <a href="#about" aria-label="انزل لقسم عني"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--accent-muted)] hover:text-[var(--accent)] transition-colors group"
        style={f(1200)}
      >
        <span className="text-[9px] uppercase tracking-widest">انزل</span>
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

        {/* Right (in RTL) — stats + text + CTAs */}
        <div>
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

          <div className="space-y-4 mb-8">
            {ABOUT.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 130}>
                <p className="text-sm md:text-base text-[var(--accent-muted)] leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-3">
              <a href={HERO.cvUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--bg)] text-sm font-bold shadow-sm hover:scale-[1.03] transition-all"
              ><ExternalLink size={13} /> شوف السيرة الذاتية</a>
              <a href={HERO.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--border)] text-[var(--fg)] text-sm font-bold hover:border-[var(--border-hover)] hover:text-[var(--accent)] transition-all"
              ><Github size={13} /> GitHub</a>
            </div>
          </Reveal>
        </div>

        {/* Left (in RTL) — 2×2 image grid */}
        <div className="grid grid-cols-2 gap-3">
          {ABOUT_IMAGES.map((img, i) => (
            <Reveal key={img.label} delay={i * 80}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-sm hover:shadow-xl hover:border-[var(--border-hover)] transition-all duration-350 hover:-translate-y-1">
                <img src={img.src} alt={img.label} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 right-3 left-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
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
   SERVICES
═══════════════════════════════════════ */

function Services() {
  return (
    <section id="services" className="border-y border-[var(--border)] bg-[var(--card-bg)]/70">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <SectionLabel title="خدمات فريلانس" sub="حلول رقمية" />

        <Reveal delay={0}>
          <p className="text-center text-sm md:text-base text-[var(--accent-muted)] max-w-lg mx-auto mb-14 leading-relaxed">
            متاح لمشاريع فريلانس — سواء تحتاج موقع كامل أو لوحة معلومات أو سكربت أتمتة أو مشروع تقنية إبداعية. خلّنا نحوّل فكرتك لمنتج رقمي متقن.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className={`card group flex flex-col items-center text-center p-7 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 hover:border-[var(--accent)]`}>
                <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-[0_0_20px_var(--glow)] bg-[var(--tag-bg)] group-hover:bg-[var(--card-bg)]`}>
                  <Icon size={26} className={`transition-transform duration-300 group-hover:scale-110 text-[var(--accent-muted)]`} />
                </div>
                <h3 className="text-sm font-bold text-[var(--fg)] mb-2">{title}</h3>
                <p className="text-xs text-[var(--accent-muted)] leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="flex justify-center mt-12">
            <a href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[var(--accent)] text-[var(--bg)] text-sm font-bold shadow-lg hover:scale-[1.04] transition-all"
            >
              ناقش مشروعك <ArrowRight size={15} className="rotate-180" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   PROJECTS
═══════════════════════════════════════ */

function Projects() {
  const [filter, setFilter] = useState("الكل");

  const list = filter === "الكل"
    ? PROJECTS
    : PROJECTS.filter((p) => FILTERS.find((f) => f.label === filter)?.match.includes(p.tag));

  return (
    <section id="projects" className="border-y border-[var(--border)] bg-[var(--card-bg)]/70">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <SectionLabel title="مشاريعي المميزة" sub="أعمال مختارة" />

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
                <span className={`mr-1.5 text-[10px] ${filter === label ? "opacity-70" : "text-[var(--accent-muted)]"}`}>
                  {label === "الكل" ? PROJECTS.length : PROJECTS.filter(p => FILTERS.find(f => f.label === label)?.match.includes(p.tag)).length}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <article className={`card card-shimmer flex flex-col h-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${BORDER_CLS[p.color] ?? BORDER_CLS.sky}`}>

                {/* Media */}
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

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold text-[var(--accent-muted)] tabular-nums">{p.num}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${TAG_CLS[p.color] ?? TAG_CLS.sky}`}>
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="text-sm md:text-base font-bold text-[var(--fg)] leading-snug mb-2 line-clamp-2">
                    {p.title}
                  </h3>

                  <p className="text-xs text-[var(--accent-muted)] leading-relaxed line-clamp-3 flex-1">
                    {p.desc}
                  </p>

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
            <p className="text-sm text-[var(--accent-muted)]">ما في مشاريع بهالفئة لسه.</p>
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
      <SectionLabel title="تواصل معي" sub="خلّنا نتواصل" />

      <Reveal delay={0}>
        <p className="text-center text-sm md:text-base text-[var(--accent-muted)] max-w-md mx-auto mb-12 leading-relaxed">
          متاح لوظائف تحليل البيانات، مشاريع فريلانس، وأي تعاون إبداعي. تواصل معي وخلّنا نبني شيء مميز سوا.
        </p>
      </Reveal>

      {/* Top row: 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {CONTACT.slice(0, 3).map(({ id, icon: Icon, label, value, href, color, desc }, i) => (
          <Reveal key={id} delay={i * 90}>
            <a href={href}
              target={id === "email" ? "_self" : "_blank"}
              rel={id === "email" ? undefined : "noopener noreferrer"}
              className={`card group flex flex-col items-center p-8 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ${BORDER_CLS[color] ?? BORDER_CLS.sky}`}
            >
              <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-[0_0_20px_var(--glow)] ${ICON_BG[color] ?? ICON_BG.sky}`}>
                <Icon size={28} className={`transition-transform duration-300 group-hover:scale-110 ${ICON_CLS[color] ?? ICON_CLS.sky}`} />
              </div>
              <span className="text-base font-bold text-[var(--fg)] mb-1">{label}</span>
              <span className="text-xs text-[var(--accent-muted)] break-all text-center mb-2" dir="ltr">{value}</span>
              <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[var(--accent)] opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                {desc}
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      {/* Bottom row: 2 cards centered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-10">
        {CONTACT.slice(3).map(({ id, icon: Icon, label, value, href, color, desc }, i) => (
          <Reveal key={id} delay={(i + 3) * 90}>
            <a href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`card group flex flex-col items-center p-8 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ${BORDER_CLS[color] ?? BORDER_CLS.sky}`}
            >
              <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-[0_0_20px_var(--glow)] ${ICON_BG[color] ?? ICON_BG.sky}`}>
                <Icon size={28} className={`transition-transform duration-300 group-hover:scale-110 ${ICON_CLS[color] ?? ICON_CLS.sky}`} />
              </div>
              <span className="text-base font-bold text-[var(--fg)] mb-1">{label}</span>
              <span className="text-xs text-[var(--accent-muted)] break-all text-center mb-2" dir="ltr">{value}</span>
              <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[var(--accent)] opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                {desc}
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      {/* Contact Form */}
      <Reveal delay={200}>
        <ContactFormAr />
      </Reveal>
    </section>
  );
}

/* ═══════════════════════════════════════
   CONTACT FORM (Arabic)
═══════════════════════════════════════ */

function ContactFormAr() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-6 mb-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="name" type="text" required placeholder="اسمك"
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--fg)] text-sm placeholder:text-[var(--accent-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
          />
          <input
            name="email" type="email" required placeholder="إيميلك" dir="ltr"
            className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--fg)] text-sm placeholder:text-[var(--accent-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors text-left"
          />
        </div>
        <input
          name="subject" type="text" required placeholder="الموضوع"
          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--fg)] text-sm placeholder:text-[var(--accent-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
        />
        <textarea
          name="message" required rows={5} placeholder="رسالتك..."
          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--fg)] text-sm placeholder:text-[var(--accent-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
        />
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--accent)] text-[var(--bg)] text-sm font-bold shadow-lg hover:scale-[1.04] transition-all disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === "sending" ? "يرسل..." : "أرسل الرسالة"} <Send size={14} />
          </button>
          {status === "sent" && (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-500">
              <CheckCircle size={16} /> انرسلت!
            </span>
          )}
          {status === "error" && (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-500">
              <AlertCircle size={16} /> ما نرسلت، جرب مرة ثانية.
            </span>
          )}
        </div>
      </form>
    </div>
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
            <div className="w-9 h-9 rounded-xl bg-[var(--accent)] flex items-center justify-center text-[var(--bg)] text-xs font-black shadow-sm">م خ</div>
            <div>
              <p className="text-sm font-bold text-[var(--fg)]">{HERO.name}</p>
              <p className="text-[11px] text-[var(--accent-muted)]">© {new Date().getFullYear()} · مبني بـ Next.js و Tailwind CSS</p>
            </div>
          </div>
          <div className="flex gap-2.5">
            {[
              { h: `mailto:${HERO.email}`, I: Mail,     l: "إيميل"   },
              { h: HERO.github,            I: Github,   l: "GitHub"   },
              { h: HERO.linkedin,          I: Linkedin, l: "LinkedIn" },
            ].map(({ h, I, l }) => (
              <a key={l} href={h} target={l === "إيميل" ? "_self" : "_blank"} rel={l === "إيميل" ? undefined : "noopener noreferrer"} aria-label={l}
                className="p-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] text-[var(--accent-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all hover:scale-110"
              ><I size={15} /></a>
            ))}
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-[var(--border)] text-center">
          <a href="#top" className="text-xs text-[var(--accent-muted)] hover:text-[var(--accent)] transition-colors group inline-flex items-center gap-1.5">
            العودة للأعلى <span className="group-hover:-translate-y-0.5 transition-transform inline-block">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════
   ROOT
═══════════════════════════════════════ */

export default function HomeAr() {
  const { dark, toggle } = useTheme();
  return (
    <>
      <ScrollBar />
      <div className="scanlines" />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
        <Header dark={dark} toggle={toggle} />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
