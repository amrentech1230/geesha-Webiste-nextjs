import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";

const blogs = [
  { tag: "AI & Tech", title: "How AI is Reshaping Modern Web Development",          date: "Jan 12, 2025", read: "5 min", grad: "from-sky-400 via-blue-500 to-brand",          emoji: "🤖", labelClass: "label-blue" },
  { tag: "Design",    title: "Top UI/UX Trends to Watch in 2025",                   date: "Jan 28, 2025", read: "4 min", grad: "from-violet-400 via-purple-500 to-indigo-600", emoji: "🎨", labelClass: "label-violet" },
  { tag: "Business",  title: "Why Every SMB Needs a Digital Transformation Strategy",date: "Feb 5, 2025",  read: "6 min", grad: "from-emerald-400 via-teal-500 to-cyan-600",    emoji: "📈", labelClass: "label-emerald" },
  { tag: "Cloud",     title: "Serverless vs. Containers: Which is Right for You?",   date: "Feb 18, 2025", read: "7 min", grad: "from-amber-400 via-orange-500 to-red-500",     emoji: "☁️", labelClass: "label-amber" },
  { tag: "Design",    title: "The Art of Micro-interactions",                        date: "Mar 3, 2025",  read: "4 min", grad: "from-rose-400 via-pink-500 to-fuchsia-600",    emoji: "✨", labelClass: "label-rose" },
  { tag: "AI & Tech", title: "Getting Started with Large Language Models",           date: "Mar 15, 2025", read: "8 min", grad: "from-slate-500 via-gray-600 to-zinc-700",      emoji: "🧠", labelClass: "label-slate" },
  { tag: "Business",  title: "The Future of Remote Work",                            date: "Apr 1, 2025",  read: "6 min", grad: "from-purple-400 via-pink-500 to-red-600",      emoji: "🏠", labelClass: "label-violet" },
  { tag: "AI & Tech", title: "Ethical AI: Challenges and Opportunities",             date: "Apr 10, 2025", read: "7 min", grad: "from-green-400 via-teal-500 to-blue-600",      emoji: "⚖️", labelClass: "label-emerald" },
  { tag: "Design",    title: "Accessibility in Web Design",                          date: "Apr 20, 2025", read: "5 min", grad: "from-yellow-400 via-orange-500 to-red-500",    emoji: "♿", labelClass: "label-amber" },
  { tag: "Cloud",     title: "Optimizing Cloud Costs",                               date: "May 5, 2025",  read: "6 min", grad: "from-indigo-400 via-purple-500 to-pink-600",   emoji: "💸", labelClass: "label-violet" },
  { tag: "Business",  title: "Building a Strong Brand Identity",                     date: "May 15, 2025", read: "5 min", grad: "from-red-400 via-orange-500 to-yellow-600",    emoji: "💡", labelClass: "label-amber" },
  { tag: "AI & Tech", title: "Personalized User Experiences with ML",                date: "May 25, 2025", read: "8 min", grad: "from-blue-400 via-cyan-500 to-teal-600",       emoji: "✨", labelClass: "label-blue" },
];

function getBlogData(slug: string) {
  const blog = blogs.find(b => {
    const blogSlug = b.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return blogSlug === slug;
  });
  return blog;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = getBlogData(params.slug);

  if (!blog) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${blog.title} | Geesha Solutions Blog`,
    description: `Read the full article on ${blog.title}.`,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = getBlogData(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      {/* Post Hero */}
      <section className={`relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br ${blog.grad}`}>
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
          <span className={`section-label ${blog.labelClass} inline-flex mb-6`}>
            {blog.tag}
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">
            {blog.title}
          </h1>
          <div className="flex items-center justify-center gap-4 mt-8 text-white/60 text-sm">
            <span>{blog.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span>{blog.read} read</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      {/* Post Content */}
      <article className="bg-slate-50 py-20">
        <div className="max-w-3xl mx-auto px-6 prose lg:prose-lg prose-slate">
          <p className="lead">
            This is the lead paragraph for the blog post. It provides a brief introduction to the topic and sets the stage for the content that follows. It's designed to be engaging and draw the reader in.
          </p>
          <h2>Understanding the Core Concepts</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
          </p>
          <p>
            Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
          </p>
          <blockquote>
            "The key to great design is capturing the spirit of the client and the essence of the space." – Michael S. Smith
          </blockquote>
          <h2>Diving Deeper into Implementation</h2>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.
          </p>
          <ul>
            <li>First point of discussion.</li>
            <li>Second point to elaborate on.</li>
            <li>A concluding thought or summary.</li>
          </ul>
          <h2>Conclusion</h2>
          <p>
            In conclusion, the landscape is constantly evolving. By staying informed and adaptable, we can navigate the challenges and seize the opportunities that lie ahead. Thank you for reading.
          </p>
        </div>
      </article>

      <CTASection />
    </div>
  );
}