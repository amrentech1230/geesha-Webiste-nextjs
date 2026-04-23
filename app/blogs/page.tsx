import BlogGrid from "@/components/blogs/BlogGrid";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Blog | Geesha Solutions",
  description: "Insights, articles, and news from the Geesha Solutions team on technology, design, and business.",
};

export default function BlogPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-[#060d1a]">
        {/* Background elements */}
        <div className="animate-blob absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand/25 blur-[120px] pointer-events-none" />
        <div className="animate-blob-delay absolute top-0 right-[-10%] w-[450px] h-[450px] rounded-full bg-violet-600/20 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#060d1a] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-36 text-center w-full">
          <span className="animate-slide-up section-label label-amber inline-flex mb-6">✦ Our Insights</span>
          <h1 className="animate-slide-up text-5xl md:text-7xl font-black text-white leading-tight delay-100">
            From Our <span className="gradient-text-warm">Blog</span>
          </h1>
          <p className="animate-slide-up mt-6 text-white/50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed delay-200">
            Stay updated with the latest trends, tips, and insights from our team of experts in technology, design, and business strategy.
          </p>
        </div>
      </section>

      <div className="bg-slate-50">
        <BlogGrid />
      </div>
      <CTASection />
    </div>
  );
}