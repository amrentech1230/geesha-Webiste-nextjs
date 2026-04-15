import AboutHero from "@/components/about/AboutHero";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Case Studies | Geesha Solutions",
  description: "Explore our case studies to see how we've helped businesses like yours achieve their goals with our digital solutions.",
};

const caseStudies = [
  {
    title: "FinTech Dashboard Transformation",
    category: "Web Development",
    image: "/portfolio/fintech.jpg",
    desc: "How we helped a leading fintech startup increase user engagement by 40% with a real-time analytics dashboard.",
    href: "/portfolio/fintech-dashboard",
    tags: ["Next.js", "Data Visualization", "Real-Time"],
    grad: "from-sky-400 to-blue-500",
  },
  {
    title: "AI-Powered E-Commerce Platform",
    category: "AI & E-Commerce",
    image: "/portfolio/ecommerce.jpg",
    desc: "Building a full-stack e-commerce solution with AI-powered recommendations that boosted sales by 25%.",
    href: "/portfolio/ecommerce-platform",
    tags: ["AI", "React", "Node.js"],
    grad: "from-violet-400 to-purple-500",
  },
  {
    title: "Healthcare Mobile App",
    category: "App Development",
    image: "/portfolio/healthcare.jpg",
    desc: "Creating a cross-platform patient management mobile app for a major hospital chain, improving patient care.",
    href: "/portfolio/healthcare-app",
    tags: ["React Native", "Healthcare", "HIPAA"],
    grad: "from-emerald-400 to-teal-500",
  },
];

const CaseStudyCard = ({ study }: { study: typeof caseStudies[0] }) => (
  <div className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
    <div className="relative h-56">
      <Image
        src={study.image}
        alt={study.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent`} />
    </div>
    <div className="p-8">
      <div className="flex flex-wrap gap-2 mb-4">
        {study.tags.map(tag => (
          <span key={tag} className="px-3 py-1 text-xs bg-white/10 text-white/60 border border-white/10 rounded-full font-medium">{tag}</span>
        ))}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
      <p className="text-white/60 leading-relaxed line-clamp-3">{study.desc}</p>
      <Link href={study.href} className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-brand hover:gap-3 transition-all duration-300">
        Read Case Study <ArrowRight size={16} />
      </Link>
    </div>
  </div>
);

export default function CaseStudiesPage() {
  return (
    <div className="relative overflow-hidden" style={{ background: "linear-gradient(160deg,#060d1a 0%,#0d1f3c 60%,#0a1628 100%)" }}>
      <div className="animate-blob absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-brand/25 blur-[140px] pointer-events-none" />
      <div className="animate-blob-delay absolute top-[10%] right-[-15%] w-[550px] h-[550px] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <AboutHero />

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Our Track Record of <span className="gradient-text-vivid">Success</span>
            </h2>
            <p className="mt-5 text-lg text-white/60">
              Explore our case studies to see how we've helped businesses like yours achieve their goals with our digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => <CaseStudyCard key={study.title} study={study} />)}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </div>
  );
}