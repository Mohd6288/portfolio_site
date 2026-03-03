/* ═══════════════════════════════════════
   IN-MEMORY DATA STORE
   Pre-seeded with demo data.
   On Vercel, data resets on cold start —
   fine for a portfolio demo.
═══════════════════════════════════════ */

import { createHash } from "crypto";

// ── Types ──────────────────────────────
export interface User {
  id: number;
  username: string;
  email: string;
  password: string; // sha-256 hash
  joinedAt: string;
}

export interface Topic {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  userId: number;
  topicId: number;
  createdAt: string;
  likes: Set<number>; // user IDs who liked
}

export interface Reply {
  id: number;
  content: string;
  postId: number;
  userId: number;
  createdAt: string;
  likes: Set<number>;
}

// ── Helpers ────────────────────────────
export function hashPw(pw: string): string {
  return createHash("sha256").update(pw).digest("hex");
}

function ago(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
}

// ── Store class ────────────────────────
class Store {
  users: User[] = [];
  topics: Topic[] = [];
  posts: Post[] = [];
  replies: Reply[] = [];
  private nextUserId = 1;
  private nextPostId = 1;
  private nextReplyId = 1;

  constructor() {
    this.seed();
  }

  // ── USERS ──
  addUser(username: string, email: string, password: string): User {
    const u: User = {
      id: this.nextUserId++,
      username,
      email,
      password: hashPw(password),
      joinedAt: new Date().toISOString(),
    };
    this.users.push(u);
    return u;
  }

  getUserById(id: number) {
    return this.users.find((u) => u.id === id);
  }

  getUserByUsername(username: string) {
    return this.users.find(
      (u) => u.username.toLowerCase() === username.toLowerCase()
    );
  }

  authenticate(username: string, password: string): User | null {
    const u = this.getUserByUsername(username);
    if (!u) return null;
    return u.password === hashPw(password) ? u : null;
  }

  // ── TOPICS ──
  getTopics() {
    return this.topics;
  }

  getTopicById(id: number) {
    return this.topics.find((t) => t.id === id);
  }

  getPostCountForTopic(topicId: number) {
    return this.posts.filter((p) => p.topicId === topicId).length;
  }

  // ── POSTS ──
  addPost(title: string, content: string, userId: number, topicId: number): Post {
    const p: Post = {
      id: this.nextPostId++,
      title,
      content,
      userId,
      topicId,
      createdAt: new Date().toISOString(),
      likes: new Set(),
    };
    this.posts.push(p);
    return p;
  }

  getPostById(id: number) {
    return this.posts.find((p) => p.id === id);
  }

  getPostsByTopic(topicId: number) {
    return this.posts
      .filter((p) => p.topicId === topicId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  getRecentPosts(limit = 10) {
    return [...this.posts]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
  }

  toggleLikePost(postId: number, userId: number) {
    const p = this.getPostById(postId);
    if (!p) return;
    if (p.likes.has(userId)) p.likes.delete(userId);
    else p.likes.add(userId);
  }

  // ── REPLIES ──
  addReply(content: string, postId: number, userId: number): Reply {
    const r: Reply = {
      id: this.nextReplyId++,
      content,
      postId,
      userId,
      createdAt: new Date().toISOString(),
      likes: new Set(),
    };
    this.replies.push(r);
    return r;
  }

  getRepliesByPost(postId: number) {
    return this.replies
      .filter((r) => r.postId === postId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  }

  getReplyCount(postId: number) {
    return this.replies.filter((r) => r.postId === postId).length;
  }

  toggleLikeReply(replyId: number, userId: number) {
    const r = this.replies.find((x) => x.id === replyId);
    if (!r) return;
    if (r.likes.has(userId)) r.likes.delete(userId);
    else r.likes.add(userId);
  }

  // ── SEARCH ──
  searchPosts(query: string) {
    const q = query.toLowerCase();
    return this.posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q)
    );
  }

  // ── STATS ──
  getStats() {
    return {
      users: this.users.length,
      topics: this.topics.length,
      posts: this.posts.length,
      replies: this.replies.length,
    };
  }

  // ── SEED DATA ───────────────────────
  private seed() {
    // Topics
    this.topics = [
      { id: 1, name: "JavaScript",      description: "Everything JS — frameworks, Node.js, TypeScript, and more",         icon: "JS", color: "#f7df1e" },
      { id: 2, name: "Python",           description: "Python for web, data science, AI/ML, and automation",               icon: "PY", color: "#3776ab" },
      { id: 3, name: "Web Development",  description: "HTML, CSS, responsive design, accessibility, and frontend tools",   icon: "WD", color: "#e44d26" },
      { id: 4, name: "DevOps & Cloud",   description: "CI/CD, Docker, Kubernetes, AWS, and infrastructure",                icon: "DO", color: "#0db7ed" },
      { id: 5, name: "Mobile Dev",       description: "iOS, Android, React Native, Flutter, and cross-platform",           icon: "MB", color: "#3ddc84" },
      { id: 6, name: "AI & ML",          description: "Machine learning, deep learning, LLMs, and computer vision",        icon: "AI", color: "#ff6f00" },
    ];

    // Users (password = "demo123" for all)
    const pw = hashPw("demo123");
    this.users = [
      { id: 1, username: "JohnDoe",   email: "john@example.com",   password: pw, joinedAt: ago(120) },
      { id: 2, username: "JaneSmith", email: "jane@example.com",   password: pw, joinedAt: ago(90)  },
      { id: 3, username: "DevMaster", email: "dev@example.com",    password: pw, joinedAt: ago(60)  },
      { id: 4, username: "CodeNinja", email: "ninja@example.com",  password: pw, joinedAt: ago(45)  },
      { id: 5, username: "TechLead",  email: "tech@example.com",   password: pw, joinedAt: ago(30)  },
    ];
    this.nextUserId = 6;

    // Posts
    this.posts = [
      { id: 1,  title: "Why TypeScript is a Game Changer",                  content: "TypeScript has completely transformed how I write JavaScript. The type safety catches bugs at compile time, the IDE support is incredible, and the developer experience is just so much better. Has anyone else made the switch? What was your experience?",                            userId: 1, topicId: 1, createdAt: ago(10), likes: new Set([2, 3, 4]) },
      { id: 2,  title: "Best Python Libraries for Data Science in 2025",    content: "I've been compiling a list of must-have Python libraries: pandas, numpy, scikit-learn, matplotlib, seaborn, plotly. But I feel like I'm missing some newer ones. What libraries have you discovered recently that changed your workflow?",                                               userId: 2, topicId: 2, createdAt: ago(8),  likes: new Set([1, 3, 5]) },
      { id: 3,  title: "CSS Grid vs Flexbox — When to Use What?",           content: "I see a lot of developers defaulting to Flexbox for everything, but CSS Grid is incredibly powerful for 2D layouts. My rule of thumb: Flexbox for 1D (rows or columns), Grid for 2D (rows AND columns). What's your approach?",                                                         userId: 3, topicId: 3, createdAt: ago(7),  likes: new Set([1, 2, 4]) },
      { id: 4,  title: "Docker Compose for Local Development",              content: "Setting up Docker Compose for our dev environment was one of the best decisions we made. New developers can get started in minutes instead of hours. Here's our setup: postgres, redis, and the app all containerized with hot reloading.",                                               userId: 4, topicId: 4, createdAt: ago(6),  likes: new Set([1, 5]) },
      { id: 5,  title: "React Native vs Flutter — 2025 Edition",            content: "I've built production apps in both React Native and Flutter. React Native wins for JS/TS developers, Flutter wins for performance-critical apps. The gap is narrowing though. What's your preference and why?",                                                                          userId: 5, topicId: 5, createdAt: ago(5),  likes: new Set([1, 2, 3]) },
      { id: 6,  title: "Getting Started with LLMs and Prompt Engineering",  content: "Large Language Models are revolutionizing how we build software. I've been experimenting with the Claude API and it's incredibly capable. Here are some tips for effective prompt engineering that I've learned along the way.",                                                           userId: 1, topicId: 6, createdAt: ago(4),  likes: new Set([2, 3, 4, 5]) },
      { id: 7,  title: "Node.js Performance Tips",                          content: "After profiling our Node.js API, we found some quick wins: use streams for large payloads, avoid synchronous operations, leverage clustering, and cache aggressively. Our response times dropped 60%. What performance tricks have you found?",                                          userId: 3, topicId: 1, createdAt: ago(3),  likes: new Set([1, 4]) },
      { id: 8,  title: "Building a REST API with FastAPI",                   content: "FastAPI has become my go-to for Python APIs. It's fast, has automatic OpenAPI docs, type validation with Pydantic, and async support out of the box. Here's a quick tutorial on setting up a CRUD API with it.",                                                                         userId: 2, topicId: 2, createdAt: ago(3),  likes: new Set([3, 5]) },
      { id: 9,  title: "The State of CSS in 2025",                          content: "CSS has evolved so much — container queries, cascade layers, :has() selector, subgrid, color-mix(), and so much more. I feel like many developers haven't caught up with these features. What new CSS features are you most excited about?",                                              userId: 4, topicId: 3, createdAt: ago(2),  likes: new Set([1, 2, 3, 5]) },
      { id: 10, title: "Kubernetes for Small Teams — Is It Worth It?",       content: "We're a team of 5 and debating whether K8s is overkill. Docker Compose works fine for staging, and we use managed services for production. Has anyone successfully adopted K8s with a small team? Was it worth the complexity?",                                                          userId: 5, topicId: 4, createdAt: ago(2),  likes: new Set([1, 4]) },
      { id: 11, title: "P5.js for Creative Coding",                         content: "I recently built a platformer game using P5.js and it was an amazing experience. The library makes it so easy to create interactive graphics and animations. Perfect for learning game dev fundamentals. What creative projects have you built?",                                          userId: 1, topicId: 1, createdAt: ago(1),  likes: new Set([2, 3, 5]) },
      { id: 12, title: "Fine-Tuning Models on Custom Data",                 content: "I've been fine-tuning open-source models on domain-specific data and the results are impressive. Using LoRA adapters keeps the compute cost low. Has anyone had success with fine-tuning for production use cases?",                                                                      userId: 3, topicId: 6, createdAt: ago(1),  likes: new Set([1, 2, 4]) },
    ];
    this.nextPostId = 13;

    // Replies
    this.replies = [
      { id: 1,  content: "Totally agree! TypeScript's type inference is magical. Once you get used to it, plain JS feels scary.",            postId: 1,  userId: 2, createdAt: ago(9),  likes: new Set([1, 3]) },
      { id: 2,  content: "I'd add Polars to that list — it's blazingly fast for dataframes, much faster than pandas for large datasets.",    postId: 2,  userId: 4, createdAt: ago(7),  likes: new Set([2, 5]) },
      { id: 3,  content: "Great rule of thumb! I'd also add that Grid is amazing for page-level layouts while Flexbox shines for components.", postId: 3,  userId: 1, createdAt: ago(6),  likes: new Set([3]) },
      { id: 4,  content: "We use the same approach! Docker Compose + hot reload is such a productivity boost.",                              postId: 4,  userId: 2, createdAt: ago(5),  likes: new Set([4]) },
      { id: 5,  content: "Flutter's hot reload is unbeatable though. And Dart is actually a really nice language once you get used to it.",  postId: 5,  userId: 3, createdAt: ago(4),  likes: new Set([5, 1]) },
      { id: 6,  content: "Prompt engineering is definitely a skill. I've found that few-shot examples work better than lengthy instructions.", postId: 6,  userId: 5, createdAt: ago(3),  likes: new Set([1, 2]) },
      { id: 7,  content: "Streams are so underused! We saw huge memory savings when switching from loading full files to streaming.",         postId: 7,  userId: 4, createdAt: ago(2),  likes: new Set([3]) },
      { id: 8,  content: "Container queries are a game changer. Finally, truly component-based responsive design!",                         postId: 9,  userId: 5, createdAt: ago(1),  likes: new Set([4, 1]) },
      { id: 9,  content: "P5.js is great for prototyping! I used it for data visualization projects too.",                                  postId: 11, userId: 4, createdAt: ago(1),  likes: new Set([1]) },
      { id: 10, content: "LoRA is incredible for the cost savings. We fine-tuned a model for customer support and it works great.",          postId: 12, userId: 5, createdAt: ago(0),  likes: new Set([3, 1]) },
    ];
    this.nextReplyId = 11;
  }
}

// ── Singleton (survives HMR in dev) ──
const g = globalThis as unknown as { __store: Store };
export const store = g.__store ?? new Store();
if (process.env.NODE_ENV !== "production") g.__store = store;
