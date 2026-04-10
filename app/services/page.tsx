import Link from "next/link";
import CTASection from "@/components/CTASection";

const services = [
  {
    emoji: "🎨", title: "Web Design",        href: "/services/web-design",
    desc: "Modern, responsive UI/UX designs tailored to your brand identity and built to convert.",
    grad: "from-sky-400 to-cyan-500", border: "border-sky-100", bg: "from-sky-50 to-cyan-50",
    tags: ["UI/UX", "Figma", "Branding"],
  },
  {
    emoji: "💻", title: "Web Development",   href: "/services/web-development",
    desc: "High-performance websites and web apps using Next.js, Laravel, and modern stacks.",
    grad: "from-blue-500 to-indigo-600", border: "border-blue-100", bg: "from-blue-50 to-indigo-50",
    tags: ["Next.js", "Laravel", "APIs"],
  },
  {
    emoji: "📱", title: "App Development",   href: "/services/app-development",
    desc: "Custom iOS & Android apps with Flutter and React Native — beautiful and blazing fast.",
    grad: "from-violet-500 to-purple-600", border: "border-violet-100", bg: "from-violet-50 to-purple-50",
    tags: ["Flutter", "iOS", "Android"],
  },
  {
    emoji: "📈", title: "Digital Marketing", href: "/services/digital-marketing",
    desc: "SEO, paid ads, and social media strategies that drive real traffic and measurable ROI.",
    grad: "from-emerald-400 to-teal-500", border: "border-emerald-100", bg: "from-emerald-50 to-teal-50",
    tags: ["SEO", "Google Ads", "Social"],
  },
  {
    emoji: "🤖", title: "AI Solutions",      href: "/services/ai-solutions",
    desc: "Custom AI chatbots, ML models, and intelligent automation to transform your operations.",
    grad: "from-amber-400 to-orange-500", border: "border-amber-100", bg: "from-amber-50 to-orange-50",
    tags: ["GPT", "ML Models", "NLP"],
  },
  {
    emoji: "☁️", title: "Cloud Engineering", href: "/services/cloud-engineering",
    desc: "Scalable cloud infrastructure on AWS, GCP, and Azure with DevOps and 99.99% uptime.",
    grad: "from-rose-400 to-pink-500", border: "border-rose-100", bg: "from-rose-50 to-pink-50",
    tags: ["AWS", "Kubernetes", "CI/CD"],
  },
];

export const metadata = {
  title: "Our Services | Geesha Solutions",
  description: "End-to-end digital services — web design, development, mobile apps, AI, cloud, and digital marketing.",
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-[#060d1a]">
        <div className="animate-blob absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-brand/25 blur-[120px] pointer-events-none" />
        <div className="animate-blob-delay absolute top-0 right-[-10%] w-[450px] h-[450px] rounded-full bg-violet-600/20 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#060d1a] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-36 text-center w-full">
          <span className="animate-slide-up section-label label-violet inline-flex mb-6">✦ What We Do</span>
          <h1 className="animate-slide-up text-5xl md:text-7xl font-black text-white leading-tight delay-100">
            Our <span className="gradient-text-vivid">Services</span>
          </h1>
          <p className="animate-slide-up mt-6 text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed delay-200">
            End-to-end digital solutions to help your business grow, scale, and lead in the digital era.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-mesh py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className={`group relative rounded-3xl border ${s.border} bg-gradient-to-br ${s.bg} p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 overflow-hidden block`}
              >
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${s.grad} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.grad} flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {s.emoji}
                </div>

                <h3 className="text-xl font-black text-gray-900">{s.title}</h3>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">{s.desc}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs text-slate-600 bg-white/80 border border-gray-200 px-3 py-1 rounded-full font-semibold">{t}</span>
                  ))}
                </div>

                <div className={`mt-6 flex items-center gap-1 text-sm font-bold bg-gradient-to-r ${s.grad} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300`}>
                  Explore Service <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
