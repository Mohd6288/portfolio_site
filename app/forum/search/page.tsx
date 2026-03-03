import Link from "next/link";
import { store } from "../_lib/store";

function timeAgo(date: string) {
  const s = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (s < 60) return "just now";
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const results = query ? store.searchPosts(query) : [];

  return (
    <div className="fade-up max-w-4xl mx-auto px-5 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-[var(--fg)] mb-2">Search</h1>
        <p className="text-sm text-[var(--muted)]">Find posts by keyword</p>
      </div>

      {/* ── Search Form ── */}
      <form action="/forum/search" method="GET" className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="Search posts..."
            className="flex-1"
            autoFocus
          />
          <button type="submit" className="btn btn-primary px-6">
            Search
          </button>
        </div>
      </form>

      {/* ── Results ── */}
      {query && (
        <div className="mb-4">
          <p className="text-sm text-[var(--muted)]">
            {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;<span className="text-[var(--accent)] font-semibold">{query}</span>&rdquo;
          </p>
        </div>
      )}

      {query && results.length === 0 && (
        <div className="card p-10 text-center">
          <p className="text-3xl mb-3">&#128269;</p>
          <p className="text-sm text-[var(--muted)]">No posts found matching your search.</p>
          <p className="text-xs text-[var(--muted)] mt-1">Try a different keyword or browse <Link href="/forum/topics" className="text-[var(--accent)]">topics</Link>.</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-3">
          {results.map((post) => {
            const author = store.getUserById(post.userId);
            const topic = store.getTopicById(post.topicId);
            const replyCount = store.getReplyCount(post.id);

            return (
              <Link key={post.id} href={`/forum/posts/${post.id}`} className="card block p-4 hover:bg-[var(--card-hover)]">
                <div className="flex items-start gap-3">
                  <div
                    className="avatar avatar-md text-white mt-0.5"
                    style={{ background: `hsl(${(author?.id ?? 0) * 72}, 60%, 45%)` }}
                  >
                    {author?.username.slice(0, 2) ?? "?"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-[var(--fg)] mb-1">{post.title}</h3>
                    <p className="text-xs text-[var(--muted)] line-clamp-2 mb-2">{post.content}</p>
                    <div className="flex items-center gap-3 text-[10px] text-[var(--muted)]">
                      <span className="font-semibold">{author?.username}</span>
                      {topic && (
                        <span className="tag" style={{ background: topic.color + "20", color: topic.color }}>
                          {topic.name}
                        </span>
                      )}
                      <span>{timeAgo(post.createdAt)}</span>
                      <span>&hearts; {post.likes.size}</span>
                      <span>&#128172; {replyCount}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* ── Quick suggestions ── */}
      {!query && (
        <div className="card p-6">
          <h2 className="text-sm font-bold text-[var(--fg)] mb-4">Popular searches</h2>
          <div className="flex flex-wrap gap-2">
            {["TypeScript", "Python", "React", "CSS", "Docker", "AI", "Node.js", "Flutter"].map((term) => (
              <Link
                key={term}
                href={`/forum/search?q=${encodeURIComponent(term)}`}
                className="tag bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
