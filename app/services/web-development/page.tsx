import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#3b82f6";
const gradTo   = "#6366f1";
const grad     = "from-blue-500 to-indigo-600";

export const metadata = {
  title: "Web Development Services | Geesha Solutions",
  description: "High-performance websites using Next.js, Laravel, and modern stacks. Scalable, secure, and built to grow.",
};

export default function WebDevelopmentPage() {
  return (
    <div>
      <ServiceHero
        label="Web Development"
        title="Code Built to"
        highlight="Scale."
        desc="High-performance, secure web applications using Next.js, Laravel, and modern stacks — engineered to handle growth from day one and deliver exceptional user experiences."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="💻"
        badges={["Next.js", "React", "Laravel", "Node.js", "PostgreSQL", "REST APIs", "TypeScript", "Tailwind CSS"]}
        stats={[
          { value: "30+",   label: "Sites Launched" },
          { value: "99.9%", label: "Uptime SLA" },
          { value: "2x",    label: "Faster Load Times" },
          { value: "0",     label: "Critical Bugs at Launch" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Full-Stack Web"
        serviceDesc="From blazing-fast frontends to robust backends and databases, we build complete web solutions that are secure, scalable, and maintainable."
        features={[
          { icon: "⚡", title: "Next.js & React",          desc: "Blazing-fast, SEO-friendly websites built with the latest Next.js App Router and React 18." },
          { icon: "🛒", title: "E-Commerce Platforms",     desc: "Custom storefronts with Stripe, PayPal, and full inventory management built in." },
          { icon: "🔧", title: "Laravel & PHP Backends",   desc: "Robust, scalable REST APIs and admin panels powered by Laravel and PHP 8." },
          { icon: "🗄️", title: "Database Architecture",   desc: "PostgreSQL, MySQL, and MongoDB setups optimized for performance and scale." },
          { icon: "🔒", title: "Security Hardening",       desc: "OWASP-compliant code, SSL, rate limiting, and penetration-tested deployments." },
          { icon: "📊", title: "CMS Integration",          desc: "Headless CMS setups with Sanity, Contentful, or WordPress for easy content management." },
          { icon: "🔗", title: "Third-Party Integrations", desc: "Payment gateways, CRMs, ERPs, and any API your business relies on." },
          { icon: "📈", title: "SEO & Performance",        desc: "Core Web Vitals optimization, structured data, and technical SEO baked in from day one." },
        ]}
        tools={["Next.js", "React", "TypeScript", "Laravel", "Node.js", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Docker", "Tailwind CSS", "GraphQL"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "📋", title: "Requirements",    desc: "We map out every feature, integration, and technical requirement in detail." },
          { num: "02", icon: "🏗️", title: "Architecture",   desc: "System design, database schema, and tech stack decisions are finalized." },
          { num: "03", icon: "⚙️", title: "Agile Build",    desc: "Weekly sprints with live demos so you see real progress every step of the way." },
          { num: "04", icon: "🚀", title: "Launch & Scale", desc: "CI/CD deployment, monitoring setup, and post-launch performance tuning." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "🏗️", title: "Modern Tech Stack",        desc: "We use Next.js, TypeScript, and cloud-native tools — never outdated frameworks." },
          { icon: "🔒", title: "Security by Default",       desc: "Every project is built with OWASP best practices and regular security audits." },
          { icon: "📈", title: "SEO-Ready from Day One",    desc: "Server-side rendering, structured data, and Core Web Vitals built in." },
          { icon: "⚡", title: "Sub-2s Load Times",         desc: "Performance optimization is non-negotiable — we target sub-2s load times on every project." },
          { icon: "🔄", title: "Agile Delivery",            desc: "Weekly sprints, live demos, and full transparency throughout the build." },
          { icon: "🛡️", title: "Post-Launch Support",      desc: "3 months of free bug fixes and support after every project launch." },
        ]}
        otherServices={[
          { label: "Web Design",        href: "/services/web-design",        icon: "🎨", grad: "from-sky-400 to-cyan-500" },
          { label: "App Development",   href: "/services/app-development",   icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "Digital Marketing", href: "/services/digital-marketing", icon: "📈", grad: "from-emerald-400 to-teal-500" },
          { label: "AI Solutions",      href: "/services/ai-solutions",      icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "Cloud Engineering", href: "/services/cloud-engineering", icon: "☁️", grad: "from-rose-400 to-pink-500" },
        ]}
      />
    </div>
  );
}
