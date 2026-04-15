import ProcessSection from "@/components/ProcessSection";
import TechStack from "@/components/TechStack";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import { Code, Smartphone, Brain, TrendingUp, Cloud, Globe, CheckCircle } from "lucide-react";
import Icon from "@/components/Icon";

export const metadata = {
  title: "What We Do | Geesha Solutions",
  description:
    "Explore the services, processes, and technologies Geesha Solutions uses to build high-impact digital products for startups, SMBs, and global enterprises.",
};
const services = [
    { title: "Web Development", desc: "High-performance websites using Next.js, Laravel, and modern stacks.", icon: Code, grad: "from-brand to-blue-500" },
    { title: "App Development", desc: "Custom mobile apps for Android & iOS with a smooth native-like experience.", icon: Smartphone, grad: "from-violet-500 to-purple-600" },
    { title: "AI Solutions", desc: "Intelligent automation, chatbots, and AI-powered features for your product.", icon: Brain, grad: "from-amber-400 to-orange-500" },
    { title: "Digital Marketing", desc: "SEO, social media, and paid campaigns to grow your business online.", icon: TrendingUp, grad: "from-emerald-400 to-teal-500" },
    { title: "Cloud Engineering", desc: "Scalable cloud infrastructure on AWS, GCP, and Azure with DevOps.", icon: Cloud, grad: "from-rose-400 to-pink-500" },
    { title: "Web Design", desc: "Modern, responsive UI/UX designs tailored to your brand identity.", icon: Globe, grad: "from-sky-400 to-cyan-500" },
];

export default function WhatWeDoPage() {
  return (
    <div className="relative overflow-hidden" style={{ background: "linear-gradient(160deg,#060d1a 0%,#0d1f3c 60%,#0a1628 100%)" }}>
      {/* Animated blobs */}
      <div className="animate-blob absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-brand/25 blur-[140px] pointer-events-none" />
      <div className="animate-blob-delay absolute top-[10%] right-[-15%] w-[550px] h-[550px] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">

        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-brand font-bold">What We Do</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mt-2">
            We Engineer <span className="text-brand">Digital Solutions</span> That Drive Growth.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/60 max-w-3xl mx-auto">
            From initial strategy to final deployment, we offer a complete suite of services designed to build, launch, and scale exceptional digital products.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Core Services
            </h2>
            <p className="mt-4 text-lg text-white/60">
              We provide end-to-end services to transform your ideas into market-ready products.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={i}
                  className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.grad} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.grad} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <ServiceIcon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative bg-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">
              Our Approach to Building Excellence
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              We follow a structured, agile process to ensure quality, transparency, and timely delivery. Our methodology is built on four key pillars:
            </p>
            <div className="space-y-4">
              {[
                { title: "Discovery & Strategy", desc: "Understanding your vision and defining a clear roadmap for success." },
                { title: "Design & Prototyping", desc: "Crafting intuitive user experiences and beautiful interfaces." },
                { title: "Agile Development", desc: "Building robust solutions with clean code and iterative feedback." },
                { title: "Deployment & Growth", desc: "Launching your product and providing ongoing support for scaling." },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-500 mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            {["React", "Next.js", "Laravel", "Node.js", "Python", "Flutter", "AWS", "Docker", "Figma"].map(tech => (
              <div key={tech} className="p-4 bg-white/5 rounded-xl border border-white/10 shadow-sm hover:bg-white/10 transition-colors">
                <p className="font-bold text-white/80">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <TechStack />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}