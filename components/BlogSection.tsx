"use client";

import { useReveal } from "@/hooks/useReveal";

const blogs = [
  { tag: "AI & Tech", title: "How AI is Reshaping Modern Web Development",          date: "Jan 12, 2025", read: "5 min", grad: "from-sky-400 via-blue-500 to-brand",          emoji: "🤖", labelClass: "label-blue" },
  { tag: "Design",    title: "Top UI/UX Trends to Watch in 2025",                   date: "Jan 28, 2025", read: "4 min", grad: "from-violet-400 via-purple-500 to-indigo-600", emoji: "🎨", labelClass: "label-violet" },
  { tag: "Business",  title: "Why Every SMB Needs a Digital Transformation Strategy",date: "Feb 5, 2025",  read: "6 min", grad: "from-emerald-400 via-teal-500 to-cyan-600",    emoji: "📈", labelClass: "label-emerald" },
];

export default function BlogSection() {
  const ref = useReveal();

  return (
    <section ref={ref} className="section-mesh py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="reveal section-label label-brand">✦ Insights</span>
          <h2 className="reveal mt-4 text-4xl md:text-5xl font-black text-gray-900" style={{ transitionDelay: "0.1s" }}>
            Latest from Our <span className="gradient-text">Blog</span>
          </h2>
          <p className="reveal mt-4 text-slate-500 max-w-xl mx-auto text-lg" style={{ transitionDelay: "0.2s" }}>
            Stay updated with the latest trends, tips, and insights from our team of experts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((b, i) => (
            <div
              key={i}
              className="reveal card-white group rounded-3xl overflow-hidden hover:-translate-y-2 float-shadow transition-all duration-500 cursor-pointer"
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              <div className={`relative h-52 bg-gradient-to-br ${b.grad} overflow-hidden`}>
                <div className="absolute inset-0 dot-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20 group-hover:scale-125 group-hover:opacity-30 transition-all duration-700 select-none">
                  {b.emoji}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className={`absolute top-4 left-4 section-label ${b.labelClass} text-xs`}>{b.tag}</span>
              </div>

              <div className="p-7">
                <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand group-hover:to-sky-500 transition-all duration-300">
                  {b.title}
                </h3>
                <div className="flex items-center gap-3 mt-4 text-xs text-slate-400">
                  <span>{b.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>{b.read} read</span>
                </div>
                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-brand group-hover:gap-3 transition-all duration-300">
                  Read More <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-14" style={{ transitionDelay: "0.3s" }}>
          <button className="shine-btn px-10 py-4 border-2 border-brand text-brand rounded-full font-bold hover:bg-brand hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-brand/20">
            View All Articles →
          </button>
        </div>
      </div>
    </section>
  );
}
