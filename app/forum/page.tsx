import Link from "next/link";
import { store } from "./_lib/store";
import { getSession } from "./_lib/auth";

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

export default async function Home() {
  const user = await getSession();
  const stats = store.getStats();
  const recentPosts = store.getRecentPosts(6);
  const topics = store.getTopics();

  return (
    <div className="fade-up">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-6xl mx-auto px-5 py-20 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--accent)] text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
            {stats.users} members &middot; {stats.posts} posts &middot; {stats.replies} replies
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[var(--fg)] mb-4 leading-tight">
            Knowledge <span className="text-[var(--accent)]">Forum</span>
          </h1>
          <p className="text-[var(--muted)] text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            A community for developers to share knowledge, ask questions, and discuss the latest in tech.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/forum/topics" className="btn btn-primary">
              Browse Topics &rarr;
            </Link>
            {!user && (
              <Link href="/forum/register" className="btn btn-ghost">
                Join the Community
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-5 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: stats.topics, l: "Topics",  c: "#6366f1" },
              { n: stats.posts,  l: "Posts",   c: "#22c55e" },
              { n: stats.replies,l: "Replies", c: "#f59e0b" },
              { n: stats.users,  l: "Members", c: "#ec4899" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="text-2xl font-black" style={{ color: s.c }}>{s.n}</p>
                <p className="text-xs text-[var(--muted)] font-medium">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* ── Recent Posts ── */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[var(--fg)]">Recent Posts</h2>
              <Link href="/forum/topics" className="text-xs font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors">
                View All &rarr;
              </Link>
            </div>
            <div className="space-y-3">
              {recentPosts.map((post) => {
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
                        <h3 className="text-sm font-bold text-[var(--fg)] mb-1 truncate">{post.title}</h3>
                        <p className="text-xs text-[var(--muted)] line-clamp-2 mb-2">{post.content}</p>
                        <div className="flex items-center gap-3 text-[10px] text-[var(--muted)]">
                          <span className="font-semibold">{author?.username}</span>
                          {topic && (
                            <span className="tag" style={{ background: topic.color + "20", color: topic.color }}>
                              {topic.name}
                            </span>
                          )}
                          <span>{timeAgo(post.createdAt)}</span>
                          <span className="flex items-center gap-0.5">&hearts; {post.likes.size}</span>
                          <span className="flex items-center gap-0.5">&#128172; {replyCount}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ── Topics Sidebar ── */}
          <div>
            <h2 className="text-xl font-bold text-[var(--fg)] mb-6">Topics</h2>
            <div className="space-y-3">
              {topics.map((topic) => {
                const postCount = store.getPostCountForTopic(topic.id);
                return (
                  <Link key={topic.id} href={`/forum/topics/${topic.id}`} className="card block p-4 hover:bg-[var(--card-hover)]">
                    <div className="flex items-center gap-3">
                      <div className="topic-icon" style={{ background: topic.color + "20", color: topic.color }}>
                        {topic.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-[var(--fg)]">{topic.name}</h3>
                        <p className="text-[11px] text-[var(--muted)]">{postCount} posts</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
