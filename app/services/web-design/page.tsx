import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#0ea5e9";
const gradTo   = "#06b6d4";
const grad     = "from-sky-400 to-cyan-500";

export const metadata = {
  title: "Web Design Services | Geesha Solutions",
  description: "Modern, responsive UI/UX designs tailored to your brand. Pixel-perfect, accessible, and conversion-focused.",
};

export default function WebDesignPage() {
  return (
    <div>
      <ServiceHero
        label="Web Design"
        title="Design That"
        highlight="Converts."
        desc="We craft stunning, responsive UI/UX designs that captivate your audience, reflect your brand identity, and turn every visitor into a loyal customer."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="🎨"
        badges={["UI/UX Design", "Figma", "Responsive Design", "WCAG Accessible", "Brand Identity", "Prototyping"]}
        stats={[
          { value: "150+", label: "Designs Delivered" },
          { value: "100%", label: "Client Satisfaction" },
          { value: "48h",  label: "First Draft" },
          { value: "5★",   label: "Average Rating" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Complete Web Design"
        serviceDesc="From brand identity to pixel-perfect UI, we design every element with purpose — ensuring your digital presence stands out and drives results."
        features={[
          { icon: "🎨", title: "Brand Identity Design",     desc: "Logos, color palettes, and typography systems that make your brand instantly recognizable and memorable." },
          { icon: "📱", title: "Responsive UI/UX",           desc: "Pixel-perfect designs that look stunning on every device — mobile, tablet, and desktop." },
          { icon: "🖼️", title: "Wireframes & Prototypes",   desc: "Interactive Figma prototypes so you can see and feel your product before a single line of code is written." },
          { icon: "⚡", title: "Performance-First Design",   desc: "Lightweight, optimized assets and layouts built for speed and perfect Core Web Vitals scores." },
          { icon: "♿", title: "Accessibility (WCAG 2.1)",   desc: "Inclusive designs that meet WCAG 2.1 AA standards so every user can access your product." },
          { icon: "🔄", title: "Unlimited Revisions",        desc: "We iterate until you're 100% satisfied. No hidden revision fees, ever." },
          { icon: "🛒", title: "Landing Page Design",        desc: "High-converting landing pages designed with proven CRO principles and A/B testing in mind." },
          { icon: "📊", title: "Design System Creation",     desc: "Scalable component libraries and design tokens for consistent, maintainable UI across your product." },
        ]}
        tools={["Figma", "Adobe XD", "Illustrator", "Photoshop", "Framer", "Webflow", "Tailwind CSS", "Storybook", "Zeplin", "InVision"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🔍", title: "Discovery Call",     desc: "We deep-dive into your brand, goals, target audience, and competitors." },
          { num: "02", icon: "🎯", title: "Moodboard & Style",  desc: "Visual directions and style tiles presented for your approval before designing." },
          { num: "03", icon: "✏️", title: "Design & Prototype", desc: "Full Figma designs with interactive prototypes for every key screen and flow." },
          { num: "04", icon: "🚀", title: "Handoff & Support",  desc: "Developer-ready assets, design tokens, and ongoing post-launch design support." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "🏆", title: "Award-Winning Designers",    desc: "Our design team has delivered 150+ projects across 20+ industries worldwide." },
          { icon: "⚡", title: "Fast Turnaround",             desc: "First draft delivered within 48 hours. Full project completed in 1–2 weeks." },
          { icon: "🔄", title: "Unlimited Revisions",         desc: "We iterate until you're 100% happy — no extra charges, no limits." },
          { icon: "📱", title: "Mobile-First Approach",       desc: "Every design starts mobile-first to ensure perfect experience on all devices." },
          { icon: "🎯", title: "Conversion Focused",          desc: "Every design decision is backed by UX research and conversion rate optimization." },
          { icon: "🤝", title: "Dedicated Designer",          desc: "One dedicated designer owns your project from kickoff to final handoff." },
        ]}
        otherServices={[
          { label: "Web Development",   href: "/services/web-development",   icon: "💻", grad: "from-blue-500 to-indigo-600" },
          { label: "App Development",   href: "/services/app-development",   icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "Digital Marketing", href: "/services/digital-marketing", icon: "📈", grad: "from-emerald-400 to-teal-500" },
          { label: "AI Solutions",      href: "/services/ai-solutions",      icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "Cloud Engineering", href: "/services/cloud-engineering", icon: "☁️", grad: "from-rose-400 to-pink-500" },
        ]}
      />
    </div>
  );
}
