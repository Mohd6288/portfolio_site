import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs, PROJECTS } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Mohammed Alkhalifa`,
    description: project.desc,
    openGraph: {
      title: project.title,
      description: project.desc,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = PROJECTS.findIndex((p) => p.id === slug);
  const prev = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const next = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg)]/95 border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-muted)] hover:text-[var(--accent)] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
            Back to Projects
          </Link>
          <span className="text-[10px] font-bold text-[var(--accent-muted)] tabular-nums">
            PROJECT {project.num}
          </span>
        </div>
      </header>

      <article className="max-w-5xl mx-auto px-6 py-16">
        {/* Tag + Title */}
        <div className="mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold border bg-[var(--tag-bg)] text-[var(--tag-text)] border-[var(--card-border)] mb-4">
            {project.tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[var(--fg)] leading-tight mb-4">
            {project.title}
          </h1>
          <p className="text-base md:text-lg text-[var(--accent-muted)] leading-relaxed max-w-3xl">
            {project.longDesc || project.desc}
          </p>
        </div>

        {/* Media */}
        <div className="rounded-2xl overflow-hidden border border-[var(--card-border)] bg-[var(--card-bg)] mb-12 shadow-lg">
          {project.type === "video" ? (
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={project.media}
                title={project.title}
                loading="lazy"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="aspect-video flex items-center justify-center bg-[var(--card-bg)] p-8">
              <img
                src={project.media}
                alt={project.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </div>

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--accent-muted)] mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[var(--border)] bg-[var(--card-bg)] text-[var(--fg)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-16">
          <a
            href={project.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-[var(--bg)] text-sm font-bold shadow-lg hover:scale-[1.04] transition-all"
          >
            {project.link.label}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
          {project.link2 && (
            <a
              href={project.link2.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--fg)] text-sm font-bold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              {project.link2.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          )}
        </div>

        {/* Prev / Next navigation */}
        <div className="border-t border-[var(--border)] pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                href={`/projects/${prev.id}`}
                className="group p-5 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--accent)] transition-all"
              >
                <span className="text-[10px] uppercase tracking-widest text-[var(--accent-muted)]">Previous</span>
                <p className="text-sm font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors mt-1">{prev.title}</p>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                href={`/projects/${next.id}`}
                className="group p-5 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--accent)] transition-all text-right"
              >
                <span className="text-[10px] uppercase tracking-widest text-[var(--accent-muted)]">Next</span>
                <p className="text-sm font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors mt-1">{next.title}</p>
              </Link>
            ) : <div />}
          </div>
        </div>
      </article>
    </main>
  );
}
