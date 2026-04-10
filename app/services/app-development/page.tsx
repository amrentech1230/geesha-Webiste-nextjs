import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#8b5cf6";
const gradTo   = "#7c3aed";
const grad     = "from-violet-500 to-purple-600";

export const metadata = {
  title: "App Development Services | Geesha Solutions",
  description: "Custom iOS & Android apps with Flutter and React Native. Beautiful UX, fast performance, and App Store ready.",
};

export default function AppDevelopmentPage() {
  return (
    <div>
      <ServiceHero
        label="App Development"
        title="Apps Users"
        highlight="Love."
        desc="Custom iOS and Android applications built with Flutter and React Native — beautiful, fast, and engineered for millions of users with seamless cross-platform experiences."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="📱"
        badges={["Flutter", "React Native", "iOS", "Android", "Firebase", "App Store", "Play Store", "Push Notifications"]}
        stats={[
          { value: "20+",   label: "Apps Launched" },
          { value: "500k+", label: "Total Downloads" },
          { value: "4.8★",  label: "Avg Store Rating" },
          { value: "3mo",   label: "Avg Time to Launch" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Mobile App"
        serviceDesc="From concept to App Store, we build cross-platform mobile apps that users love — with native performance, beautiful UI, and all the features your business needs."
        features={[
          { icon: "📱", title: "iOS & Android Apps",        desc: "Native-quality apps for both platforms using Flutter or React Native from a single codebase." },
          { icon: "🎯", title: "Custom UX Flows",            desc: "Intuitive user journeys designed around how your users actually think and behave." },
          { icon: "🔔", title: "Push Notifications",         desc: "Real-time push notifications, in-app messaging, and engagement automation." },
          { icon: "💳", title: "In-App Payments",            desc: "Stripe, Apple Pay, Google Pay, and subscription billing integrated seamlessly." },
          { icon: "📡", title: "Offline Support",            desc: "Apps that work without internet and sync data automatically when reconnected." },
          { icon: "📈", title: "Analytics & Crash Reports",  desc: "Firebase Analytics, Sentry crash reporting, and A/B testing built in from day one." },
          { icon: "🔐", title: "Biometric Authentication",   desc: "Face ID, Touch ID, and secure login flows for maximum user security and convenience." },
          { icon: "🗺️", title: "Maps & Geolocation",        desc: "Google Maps, location tracking, geofencing, and real-time navigation features." },
        ]}
        tools={["Flutter", "React Native", "Dart", "Firebase", "Xcode", "Android Studio", "Fastlane", "TestFlight", "Sentry", "Mixpanel", "Stripe SDK", "Google Maps SDK"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🔍", title: "UX Research",    desc: "User personas, journey maps, and competitor analysis to define the perfect experience." },
          { num: "02", icon: "🎨", title: "UI Design",      desc: "High-fidelity Figma screens for every flow, reviewed and approved before development." },
          { num: "03", icon: "⚙️", title: "Development",   desc: "Agile sprints with TestFlight / Play Store beta builds for real device testing." },
          { num: "04", icon: "🏪", title: "Store Launch",   desc: "App Store & Play Store submission, ASO optimization, and post-launch monitoring." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "🚀", title: "Cross-Platform Expertise",   desc: "One codebase, two platforms — Flutter delivers true native performance on iOS and Android." },
          { icon: "🎨", title: "Beautiful UI by Default",    desc: "Every screen is designed with care — smooth animations, intuitive flows, and pixel-perfect UI." },
          { icon: "🔒", title: "Enterprise-Grade Security",  desc: "Biometric auth, encrypted storage, and secure API communication on every app." },
          { icon: "📊", title: "Built-In Analytics",         desc: "Firebase, Mixpanel, and custom event tracking so you always know how users behave." },
          { icon: "⚡", title: "Fast Time to Market",        desc: "From kickoff to App Store in as little as 8 weeks with our proven agile process." },
          { icon: "🛡️", title: "Ongoing Maintenance",       desc: "OS updates, bug fixes, and feature additions — we're your long-term app partner." },
        ]}
        otherServices={[
          { label: "Web Design",        href: "/services/web-design",        icon: "🎨", grad: "from-sky-400 to-cyan-500" },
          { label: "Web Development",   href: "/services/web-development",   icon: "💻", grad: "from-blue-500 to-indigo-600" },
          { label: "Digital Marketing", href: "/services/digital-marketing", icon: "📈", grad: "from-emerald-400 to-teal-500" },
          { label: "AI Solutions",      href: "/services/ai-solutions",      icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "Cloud Engineering", href: "/services/cloud-engineering", icon: "☁️", grad: "from-rose-400 to-pink-500" },
        ]}
      />
    </div>
  );
}
