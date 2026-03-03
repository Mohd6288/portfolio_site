import Link from "next/link";
import { notFound } from "next/navigation";
import { store } from "../../_lib/store";
import { getSession } from "../../_lib/auth";
import { createPostAction } from "../../_actions/actions";

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

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const topicId = parseInt(id, 10);
  const topic = store.getTopicById(topicId);
  if (!topic) notFound();

  const user = await getSession();
  const posts = store.getPostsByTopic(topicId);

  return (
    <div className="fade-up max-w-4xl mx-auto px-5 py-12">
      {/* ── Topic Header ── */}
      <div className="card p-6 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="topic-icon" style={{ background: topic.color + "20", color: topic.color }}>
            {topic.icon}
          </div>
          <div>
            <h1 className="text-2xl font-black text-[var(--fg)]">{topic.name}</h1>
            <p className="text-sm text-[var(--muted)]">{topic.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
          <span className="font-semibold" style={{ color: topic.color }}>{posts.length} posts</span>
          <Link href="/forum/topics" className="text-[var(--accent)] hover:text-[var(--accent-hover)]">&larr; All Topics</Link>
        </div>
      </div>

      {/* ── New Post Form ── */}
      {user ? (
        <details className="card mb-8 group">
          <summary className="p-4 cursor-pointer text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] list-none flex items-center gap-2">
            <span className="text-lg">+</span> Create New Post
          </summary>
          <form action={createPostAction} className="px-4 pb-4 space-y-3 border-t border-[var(--border)] pt-4">
            <input type="hidden" name="topicId" value={topicId} />
            <div>
              <label className="block text-xs font-semibold text-[var(--muted)] mb-1.5">Title</label>
              <input type="text" name="title" placeholder="Give your post a clear title" required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[var(--muted)] mb-1.5">Content</label>
              <textarea name="content" placeholder="Share your thoughts, questions, or knowledge..." required rows={4} />
            </div>
            <button type="submit" className="btn btn-primary">
              Publish Post
            </button>
          </form>
        </details>
      ) : (
        <div className="card p-4 mb-8 text-center">
          <p className="text-sm text-[var(--muted)]">
            <Link href="/forum/login" className="text-[var(--accent)] hover:text-[var(--accent-hover)] font-semibold">Sign in</Link> to create a post
          </p>
        </div>
      )}

      {/* ── Posts List ── */}
      {posts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-3xl mb-3">&#128172;</p>
          <p className="text-sm text-[var(--muted)]">No posts yet. Be the first to start a discussion!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => {
            const author = store.getUserById(post.userId);
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
    </div>
  );
}
