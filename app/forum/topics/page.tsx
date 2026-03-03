import Link from "next/link";
import { store } from "../_lib/store";

export default function TopicsPage() {
  const topics = store.getTopics();

  return (
    <div className="fade-up max-w-6xl mx-auto px-5 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-[var(--fg)] mb-2">Topics</h1>
        <p className="text-sm text-[var(--muted)]">Browse discussions by category</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic) => {
          const postCount = store.getPostCountForTopic(topic.id);
          const latestPost = store.getPostsByTopic(topic.id)[0];
          const latestAuthor = latestPost ? store.getUserById(latestPost.userId) : null;

          return (
            <Link key={topic.id} href={`/forum/topics/${topic.id}`} className="card p-5 hover:bg-[var(--card-hover)] group">
              <div className="flex items-start gap-4">
                <div
                  className="topic-icon group-hover:scale-110 transition-transform"
                  style={{ background: topic.color + "20", color: topic.color }}
                >
                  {topic.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-bold text-[var(--fg)] mb-1 group-hover:text-[var(--accent)] transition-colors">
                    {topic.name}
                  </h2>
                  <p className="text-xs text-[var(--muted)] mb-3 line-clamp-2">{topic.description}</p>
                  <div className="flex items-center gap-3 text-[10px] text-[var(--muted)]">
                    <span className="font-semibold" style={{ color: topic.color }}>{postCount} posts</span>
                    {latestAuthor && (
                      <span>Latest by <span className="text-[var(--fg)]">{latestAuthor.username}</span></span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
