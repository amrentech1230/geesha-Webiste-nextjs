import AboutHero from "@/components/about/AboutHero";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";
import { Lightbulb, Rocket, Users, Heart } from "lucide-react";

export const metadata = {
  title: "Brand Story | Geesha Solutions",
  description: "The story of Geesha Solutions: From a simple idea to a global digital innovation partner. Discover our journey, our purpose, and the values that define us.",
};

const StoryBlock = ({
  title,
  subtitle,
  children,
  image,
  imageAlt,
  reverse = false,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) => (
  <section className="relative py-24">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div className={`relative ${reverse ? "md:order-2" : ""}`}>
        <div className="animate-blob absolute -top-16 -left-16 w-80 h-80 rounded-full bg-brand/15 blur-3xl pointer-events-none" />
        <Image
          src={image}
          alt={imageAlt}
          width={600}
          height={450}
          className="relative rounded-3xl object-cover w-full h-auto shadow-2xl hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        <span className="section-label label-brand inline-flex mb-4">{subtitle}</span>
        <h2 className="text-4xl font-black text-white mb-6">{title}</h2>
        <div className="space-y-4 text-white/60 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </section>
);

const PhilosophyCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
        <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-sky-500 flex items-center justify-center text-white shadow-lg">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-white/60 leading-relaxed">{children}</p>
    </div>
);

export default function BrandStoryPage() {
  return (
    <div className="relative overflow-hidden" style={{ background: "linear-gradient(160deg,#060d1a 0%,#0d1f3c 60%,#0a1628 100%)" }}>
      <div className="animate-blob absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-brand/25 blur-[140px] pointer-events-none" />
      <div className="animate-blob-delay absolute top-[10%] right-[-15%] w-[550px] h-[550px] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <AboutHero />

      <StoryBlock
        subtitle="The Genesis"
        title="An Idea Sparked by a Problem"
        image="/about_vision.jpg"
        imageAlt="Conceptual image of an idea forming"
      >
        <p>Geesha Solutions began not in a boardroom, but from a simple observation: countless brilliant ideas were failing to see the light of day due to a gap in technological execution. We saw a need for a partner who could do more than just write code—a partner who could understand the vision and build the bridge to reality.</p>
        <p>In 2019, our founder assembled a small, passionate team with a shared belief: technology should be an enabler, not a barrier. This was the start of our journey.</p>
      </StoryBlock>

      <StoryBlock
        subtitle="The Evolution"
        title="From Small Steps to Global Reach"
        image="/about_vision.jpg"
        imageAlt="Geesha Solutions team collaborating on a project"
        reverse
      >
        <p>Our first projects were challenging, but they solidified our process and our commitment to quality. Word of mouth became our greatest asset. With each successful launch, our reputation grew, and so did our team.</p>
        <p>Today, we are a globally recognized digital innovation agency, having partnered with startups and Fortune 500 companies alike. Our story is one of persistence, partnership, and a relentless pursuit of excellence.</p>
      </StoryBlock>

      <section className="relative py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white">Our Guiding <span className="gradient-text-vivid">Philosophy</span></h2>
            <p className="mt-5 text-lg text-white/60">These aren't just words on a page; they are the principles that guide every decision we make.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <PhilosophyCard icon={<Lightbulb size={24} />} title="Innovation as a Default">We don't just adopt new technology; we seek to understand its potential to create unprecedented value for our clients.</PhilosophyCard>
            <PhilosophyCard icon={<Rocket size={24} />} title="Execution is Everything">A brilliant strategy is only as good as its execution. We are obsessed with delivering high-quality, functional, and scalable products.</PhilosophyCard>
            <PhilosophyCard icon={<Users size={24} />} title="Partnership Over Projects">We build long-term relationships, acting as an extension of our clients' teams. Your success is the ultimate metric of our success.</PhilosophyCard>
            <PhilosophyCard icon={<Heart size={24} />} title="Human-Centered at Heart">Behind every screen is a person. We design and build with empathy, creating experiences that are intuitive, accessible, and enjoyable.</PhilosophyCard>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </div>
  );
}