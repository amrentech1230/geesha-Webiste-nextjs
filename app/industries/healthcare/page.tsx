import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import CTASection from "@/components/CTASection";

// --- HERO SECTION DATA ---
const heroData = {
  label: "Wearables Industry",
  title: "Connecting Data to Daily Life",
  highlight: "with Smart Wearable Tech.",
  desc: "We develop the software that powers next-generation wearables, from fitness trackers to smart rings, creating seamless experiences that sync data between devices and users.",
  grad: "from-emerald-400 to-teal-600",
  gradFrom: "#34d399", // emerald-400
  gradTo: "#14b8a6",   // teal-500
  emoji: "⌚",
  badges: ["Bluetooth LE", "IoT Core", "Data Sync", "Companion Apps"],
  stats: [
    { value: "1M+", label: "Paired Devices" },
    { value: "10ms", label: "Sync Latency" },
    { value: "99.9%", label: "Connectivity" },
    { value: "20+", label: "Device Models" },
  ],
};

// --- FEATURES SECTION DATA ---
const featuresData = {
  serviceTitle: "Wearables",
  serviceDesc: "Our expertise lies in building the bridge between hardware and software, turning raw sensor data into meaningful insights for users.",
  features: [
    { icon: "", title: "Companion Mobile Apps", desc: "Intuitive iOS and Android apps that sync, visualize, and manage data from wearable devices." },
    { icon: "☁️", title: "Cloud Data Platform", desc: "Scalable cloud infrastructure to securely store and process vast amounts of time-series data from IoT devices." },
    { icon: "🔋", title: "Firmware & BLE Comms", desc: "Efficient and low-energy Bluetooth communication protocols for reliable data transfer and long battery life." },
    { icon: "📈", title: "Health & Fitness Analytics", desc: "Advanced algorithms to analyze biometric data, providing users with actionable insights and trends." },
  ],
  tools: ["Bluetooth Low Energy (BLE)", "MQTT", "AWS IoT", "Google Fit", "HealthKit"],
};

// --- PROCESS SECTION DATA ---
const processData = {
  steps: [
    { num: "01", title: "Hardware Integration", desc: "Defining communication protocols and data models in collaboration with hardware engineers.", icon: "🤝" },
    { num: "02", title: "Prototype & Test", desc: "Rapidly prototyping the app and device connection to ensure stability and performance.", icon: "🧪" },
    { num: "03", title: "App & Cloud Development", desc: "Building the user-facing mobile application and the backend cloud platform in parallel sprints.", icon: "⚙️" },
    { num: "04", title: "Scale & Optimize", desc: "Deploying the ecosystem and continuously optimizing for performance, battery life, and user experience.", icon: "🚀" },
  ],
};

export const metadata = {
  title: "Wearable App Development | Geesha Solutions",
  description: "Custom software for wearable technology, including companion apps, cloud data platforms, and BLE communication.",
};

export default function WearablesIndustryPage() {
  return (
    <main>
      <ServiceHero {...heroData} />
      <ServiceFeatures
        {...featuresData}
        grad={heroData.grad}
        gradFrom={heroData.gradFrom}
        gradTo={heroData.gradTo}
      />
      <ServiceProcess {...processData} gradFrom={heroData.gradFrom} gradTo={heroData.gradTo} />
      <CTASection />
    </main>
  );
}