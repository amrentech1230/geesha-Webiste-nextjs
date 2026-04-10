"use client";

import { useReveal } from "@/hooks/useReveal";
import { Banknote, HeartPulse, ShoppingCart, GraduationCap, Factory, Ship, Building, Car, Leaf, Plane, Utensils, Globe, Home, Newspaper, Users, Megaphone, Rocket, Gem, Lightbulb, Wallet, Landmark, Shield, CreditCard, Watch, Dumbbell, Package, Calendar, PlayCircle, ShoppingBag, Tv, Gamepad, Phone } from "lucide-react";

// Define a set of gradient and shadow classes to cycle through
const gradientStyles = [
  { grad: "from-emerald-400 to-teal-600", shadow: "hover:shadow-emerald-200/60" },
  { grad: "from-rose-400 to-pink-600", shadow: "hover:shadow-rose-200/60" },
  { grad: "from-violet-500 to-purple-600", shadow: "hover:shadow-violet-200/60" },
  { grad: "from-sky-400 to-cyan-500", shadow: "hover:shadow-sky-200/60" },
  { grad: "from-amber-400 to-orange-500", shadow: "hover:shadow-amber-200/60" },
  { grad: "from-brand to-blue-500", shadow: "hover:shadow-blue-200/60" },
];

// Helper function to get a gradient style based on index
const getGradientStyle = (index: number) => gradientStyles[index % gradientStyles.length];

const allIndustries = [
  // Column 1
  { title: "Healthcare", icon: HeartPulse, desc: "Innovative solutions for patient care, medical research, and health management." }, // Ensure this is unique if Finance is also added
  { title: "Wearables", icon: Watch, desc: "Developing smart wearable technology for fitness, health, and lifestyle." },
  { title: "Fitness", icon: Dumbbell, desc: "Building platforms and apps to enhance personal fitness and wellness journeys." },
  { title: "On-Demand", icon: Rocket, desc: "Creating seamless on-demand services for various consumer needs." },
  { title: "ECommerce", icon: ShoppingCart, desc: "Robust online stores and marketplaces for a superior shopping experience." },
  { title: "Construction", icon: Building, desc: "Digital tools for project management, site monitoring, and operational efficiency." },
  { title: "Politics", icon: Megaphone, desc: "Platforms for political campaigns, public engagement, and data analysis." },
  { title: "EMobility", icon: Car, desc: "Software for electric vehicles, charging infrastructure, and smart transportation." },
  { title: "Logistics", icon: Ship, desc: "Optimizing supply chains with real-time tracking and fleet management systems." },
  { title: "Agriculture", icon: Leaf, desc: "Agri-tech solutions for smart farming, crop management, and sustainable practices." },
  { title: "Supply Chain", icon: Package, desc: "End-to-end supply chain visibility and optimization for complex networks." },

  // Column 2
  { title: "Finance", icon: Banknote, desc: "Secure and scalable financial software, from trading to personal finance." }, // This entry already exists and will now correctly link to the new page
  { title: "Banking", icon: Landmark, desc: "Digital banking solutions, core banking systems, and customer experience platforms.", href: "/industries/banking" }, // Added href for Banking
  { title: "Insurance", icon: Shield, desc: "Modernizing insurance processes with AI-driven claims and policy management." },
  { title: "Lending", icon: Wallet, desc: "Streamlined lending platforms for consumer and business finance." },
  { title: "Payments", icon: CreditCard, desc: "Secure and efficient payment gateways and processing solutions." },
  { title: "Entertainment", icon: Tv, desc: "Engaging digital experiences for media, streaming, and content delivery." },
  { title: "Education", icon: GraduationCap, desc: "E-learning platforms, virtual classrooms, and educational management systems." },
  { title: "Events", icon: Calendar, desc: "Event management software for seamless planning, ticketing, and engagement." },
  { title: "Manufacturing", icon: Factory, desc: "Smart factory solutions, IoT integration, and production optimization." },
  { title: "Energy", icon: Lightbulb, desc: "Software for energy management, smart grids, and renewable energy solutions." },
  { title: "OTT", icon: PlayCircle, desc: "Over-the-top media platforms for video streaming and content distribution." },

  // Column 3
  { title: "Restaurant", icon: Utensils, desc: "Digital solutions for restaurant operations, online ordering, and customer loyalty." },
  { title: "Travel", icon: Globe, desc: "Booking platforms, travel management systems, and personalized travel experiences." },
  { title: "Real Estate", icon: Home, desc: "Property management software, virtual tours, and real estate marketplaces." },
  { title: "Magazine & Newspaper", icon: Newspaper, desc: "Digital publishing platforms and content management systems." },
  { title: "Social Media", icon: Users, desc: "Building and enhancing social networking platforms and community tools." },
  { title: "Marketing", icon: Megaphone, desc: "Marketing automation, CRM, and analytics tools for effective campaigns." },
  { title: "Aviation", icon: Plane, desc: "Software for airline operations, fleet management, and passenger experience." },
  { title: "CSR", icon: Gem, desc: "Corporate Social Responsibility platforms for impact tracking and reporting." },
  { title: "Retail", icon: ShoppingBag, desc: "Retail management systems, inventory tracking, and customer engagement." },
  { title: "Gaming", icon: Gamepad, desc: "Developing engaging games and gaming platforms for various devices." },
  { title: "Telecom", icon: Phone, desc: "Solutions for telecommunication services, network management, and customer support." },
];

export default function IndustriesSection() {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f0f4f8 100%)" }}>
      {/* Animated blobs */}
      <div className="animate-blob absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-emerald-400/20 blur-[100px] pointer-events-none" />
      <div className="animate-blob-delay absolute top-[5%] right-[-10%] w-[350px] h-[350px] rounded-full bg-sky-400/20 blur-[90px] pointer-events-none" />
      <div className="animate-blob-slow absolute bottom-[-15%] left-[20%] w-[450px] h-[450px] rounded-full bg-violet-400/15 blur-[110px] pointer-events-none" />
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="reveal section-label label-emerald">✦ Industries We Serve</span>
          <h2 className="reveal mt-4 text-4xl md:text-5xl font-black text-gray-900" style={{ transitionDelay: "0.1s" }}>
            Expertise Across <span className="gradient-text">Key Sectors</span>
          </h2>
          <p className="reveal mt-4 text-slate-500 max-w-xl mx-auto text-lg" style={{ transitionDelay: "0.2s" }}>
            We apply our technical expertise to solve unique challenges and drive growth in a variety of industries, delivering solutions that are robust, scalable, and tailored to your specific market needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allIndustries.map((industry, i) => {
            const Icon = industry.icon;
            const { grad, shadow } = getGradientStyle(i);
            return (
              <div
                key={i}
                className={`reveal tilt-card card-white group relative p-8 rounded-3xl transition-all duration-400 hover:shadow-2xl ${shadow} cursor-pointer overflow-hidden`}
                style={{ transitionDelay: `${0.08 * i}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${grad} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-400 rounded-3xl`} />
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${grad} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon size={26} />
                </div>
                <h3 className="relative text-xl font-bold text-gray-900">{industry.title}</h3>
                <p className="relative mt-2 text-sm text-slate-500 leading-relaxed">{industry.desc}</p>
                <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${grad} transition-all duration-500 rounded-b-3xl`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}