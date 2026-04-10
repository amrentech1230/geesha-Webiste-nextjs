"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

const blogs = [
  { tag: "AI & Tech", title: "How AI is Reshaping Modern Web Development",          date: "Jan 12, 2025", read: "5 min", grad: "from-sky-400 via-blue-500 to-brand",          emoji: "🤖", labelClass: "label-blue" },
  { tag: "Design",    title: "Top UI/UX Trends to Watch in 2025",                   date: "Jan 28, 2025", read: "4 min", grad: "from-violet-400 via-purple-500 to-indigo-600", emoji: "🎨", labelClass: "label-violet" },
  { tag: "Business",  title: "Why Every SMB Needs a Digital Transformation Strategy",date: "Feb 5, 2025",  read: "6 min", grad: "from-emerald-400 via-teal-500 to-cyan-600",    emoji: "📈", labelClass: "label-emerald" },
  { tag: "Cloud",     title: "Serverless vs. Containers: Which is Right for You?",   date: "Feb 18, 2025", read: "7 min", grad: "from-amber-400 via-orange-500 to-red-500",     emoji: "☁️", labelClass: "label-amber" },
  { tag: "Design",    title: "The Art of Micro-interactions",                        date: "Mar 3, 2025",  read: "4 min", grad: "from-rose-400 via-pink-500 to-fuchsia-600",    emoji: "✨", labelClass: "label-rose" },
  { tag: "AI & Tech", title: "Getting Started with Large Language Models",           date: "Mar 15, 2025", read: "8 min", grad: "from-slate-500 via-gray-600 to-zinc-700",      emoji: "🧠", labelClass: "label-slate" },
  // Added more blogs for pagination demonstration
  { tag: "Business",  title: "The Future of Remote Work",                            date: "Apr 1, 2025",  read: "6 min", grad: "from-purple-400 via-pink-500 to-red-600",      emoji: "🏠", labelClass: "label-violet" },
  { tag: "AI & Tech", title: "Ethical AI: Challenges and Opportunities",             date: "Apr 10, 2025", read: "7 min", grad: "from-green-400 via-teal-500 to-blue-600",      emoji: "⚖️", labelClass: "label-emerald" },
  { tag: "Design",    title: "Accessibility in Web Design",                          date: "Apr 20, 2025", read: "5 min", grad: "from-yellow-400 via-orange-500 to-red-500",    emoji: "♿", labelClass: "label-amber" },
  { tag: "Cloud",     title: "Optimizing Cloud Costs",                               date: "May 5, 2025",  read: "6 min", grad: "from-indigo-400 via-purple-500 to-pink-600",   emoji: "💸", labelClass: "label-violet" },
  { tag: "Business",  title: "Building a Strong Brand Identity",                     date: "May 15, 2025", read: "5 min", grad: "from-red-400 via-orange-500 to-yellow-600",    emoji: "💡", labelClass: "label-amber" },
  { tag: "AI & Tech", title: "Personalized User Experiences with ML",                date: "May 25, 2025", read: "8 min", grad: "from-blue-400 via-cyan-500 to-teal-600",       emoji: "✨", labelClass: "label-blue" },
];

export default function BlogGrid() {
  const ref = useReveal();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = useMemo(() => blogs.slice(indexOfFirstBlog, indexOfLastBlog), [currentPage]);

  const totalPages = useMemo(() => Math.ceil(blogs.length / blogsPerPage), []);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section ref={ref} className="section-mesh py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div key={currentPage} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((b, i) => {
            const slug = b.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            return (
              <Link
                href={`/blogs/${slug}`}
                key={`${b.title}-${i}`}
                className="reveal card-white group block rounded-3xl overflow-hidden hover:-translate-y-2 float-shadow transition-all duration-500 cursor-pointer"
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
              </Link>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  currentPage === i + 1
                    ? "bg-gradient-to-r from-brand to-sky-500 text-white shadow-lg shadow-brand/30"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-brand hover:text-brand"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}