import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#10b981";
const gradTo   = "#14b8a6";
const grad     = "from-emerald-400 to-teal-500";

export const metadata = {
  title: "Digital Marketing Services | Geesha Solutions",
  description: "SEO, Google Ads, social media, and content marketing to grow your business online. Data-driven and ROI-focused.",
};

export default function DigitalMarketingPage() {
  return (
    <div>
      <ServiceHero
        label="Digital Marketing"
        title="Growth That's"
        highlight="Measurable."
        desc="Data-driven SEO, paid ads, and social media strategies that bring real traffic, qualified leads, and measurable revenue growth to your business."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="📈"
        badges={["SEO", "Google Ads", "Meta Ads", "Social Media", "Email Marketing", "Content Marketing", "Analytics", "CRO"]}
        stats={[
          { value: "3x",    label: "Avg ROAS" },
          { value: "+180%", label: "Organic Traffic" },
          { value: "40+",   label: "Brands Grown" },
          { value: "24h",   label: "Campaign Go-Live" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Digital Marketing"
        serviceDesc="We combine data, creativity, and technology to build marketing engines that consistently generate leads, sales, and brand awareness for your business."
        features={[
          { icon: "🔍", title: "SEO Optimization",        desc: "Technical SEO, keyword strategy, and content optimization to rank on page 1 of Google." },
          { icon: "📣", title: "Social Media Marketing",   desc: "Organic and paid campaigns across Instagram, LinkedIn, Facebook, and TikTok." },
          { icon: "💰", title: "Google & Meta Ads",        desc: "Data-driven PPC campaigns with laser-targeted audiences and maximized ROAS." },
          { icon: "📧", title: "Email Marketing",          desc: "Automated drip campaigns, newsletters, and lifecycle emails that convert." },
          { icon: "✍️", title: "Content Marketing",        desc: "Blog posts, case studies, and landing pages that attract and convert organic traffic." },
          { icon: "📊", title: "Analytics & Reporting",    desc: "Monthly reports with clear KPIs, conversion tracking, and actionable insights." },
          { icon: "🎯", title: "Conversion Rate Optimisation", desc: "A/B testing, heatmaps, and UX improvements to turn more visitors into customers." },
          { icon: "🤝", title: "Influencer Marketing",     desc: "Identify, manage, and measure influencer partnerships that drive real brand awareness." },
        ]}
        tools={["Google Ads", "Meta Ads Manager", "Google Analytics 4", "SEMrush", "Ahrefs", "Mailchimp", "HubSpot", "Hotjar", "Google Search Console", "Canva", "Buffer", "Klaviyo"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🔎", title: "Audit & Strategy",   desc: "Full audit of your digital presence and a custom growth strategy tailored to your goals." },
          { num: "02", icon: "⚙️", title: "Campaign Setup",     desc: "Ad accounts, tracking pixels, UTMs, and content calendars configured and ready." },
          { num: "03", icon: "📊", title: "Execute & Optimise", desc: "Campaigns go live with weekly A/B testing and continuous data-driven optimization." },
          { num: "04", icon: "📈", title: "Report & Scale",     desc: "Monthly performance reviews and budget scaling based on what's working best." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "📊", title: "100% Data-Driven",          desc: "Every decision is backed by real data — no guesswork, no vanity metrics." },
          { icon: "🎯", title: "Laser-Targeted Campaigns",  desc: "We reach your exact ideal customer with precision targeting across every channel." },
          { icon: "💰", title: "ROI-Focused Approach",      desc: "We optimize for revenue, not just clicks — your bottom line is our north star." },
          { icon: "📝", title: "Full Transparency",          desc: "Weekly updates, monthly reports, and 24/7 dashboard access to all your campaigns." },
          { icon: "⚡", title: "Fast Campaign Launch",       desc: "Campaigns live within 24 hours of approval — no delays, no bureaucracy." },
          { icon: "🔄", title: "Continuous Optimisation",   desc: "We never set and forget — constant testing and improvement is our standard." },
        ]}
        otherServices={[
          { label: "Web Design",        href: "/services/web-design",        icon: "🎨", grad: "from-sky-400 to-cyan-500" },
          { label: "Web Development",   href: "/services/web-development",   icon: "💻", grad: "from-blue-500 to-indigo-600" },
          { label: "App Development",   href: "/services/app-development",   icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "AI Solutions",      href: "/services/ai-solutions",      icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "Cloud Engineering", href: "/services/cloud-engineering", icon: "☁️", grad: "from-rose-400 to-pink-500" },
        ]}
      />
    </div>
  );
}
