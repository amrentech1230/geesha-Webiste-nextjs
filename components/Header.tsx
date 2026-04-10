"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react"; // Import X icon for close button

const navLeft = [
  { label: "Home",  href: "/" },
  { label: "About", href: "/about" },
];

const navRight = [
  { label: "Portfolio",  href: "/portfolio" },
  { label: "Blogs",      href: "/blogs" },
];

const services = [
  { label: "Web Design",        href: "/services/web-design",        icon: "🎨", color: "text-sky-500"     },
  { label: "Web Development",   href: "/services/web-development",   icon: "💻", color: "text-blue-500"    },
  { label: "App Development",   href: "/services/app-development",   icon: "📱", color: "text-violet-500"  },
  { label: "Digital Marketing", href: "/services/digital-marketing", icon: "📈", color: "text-emerald-500" },
  { label: "AI Solutions",      href: "/services/ai-solutions",      icon: "🤖", color: "text-amber-500"   },
  { label: "Cloud Engineering", href: "/services/cloud-engineering", icon: "☁️", color: "text-rose-500"    },
];

// Define a set of colors to cycle through for the industry links to maintain visual consistency
const industryColors = [
  "text-rose-500", "text-emerald-500", "text-violet-500", "text-sky-500", "text-amber-500", "text-blue-500",
  "text-green-500", "text-purple-500", "text-red-500", "text-indigo-500", "text-yellow-500", "text-pink-500",
];

// Helper to generate href and assign color, and ensure unique color assignment
let colorIndex = 0;
const createIndustryItem = (label: string, icon: string) => {
  const assignedColor = industryColors[colorIndex % industryColors.length];
  colorIndex++;
  return {
    label,
    icon,
    href: `/industries/${label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`,
    color: assignedColor,
  };
};

// Grouped industries for the nested dropdown
const categorizedIndustries = [
  {
    category: "Health & Wellness",
    icon: "❤️",
    subCategories: [
      {
        name: "Healthcare Solutions",
        items: [
          createIndustryItem("Healthcare", "❤️"),
          createIndustryItem("Fitness", "💪"),
        ]
      },
      {
        name: "Wearable Technology",
        items: [
          createIndustryItem("Wearables", "⌚"),
        ]
      }
    ]
  },
  {
    category: "Financial Services",
    icon: "🏦",
    subCategories: [
      {
        name: "Banking & Payments",
        items: [
          createIndustryItem("Finance", "💰"), // Ensure this links to /industries/finance
          createIndustryItem("Banking", "🏦"), // This will now link to /industries/banking
          createIndustryItem("Payments", "💸"), // This will now link to /industries/payments
        ]
      },
      {
        name: "Insurance & Lending",
        items: [
          createIndustryItem("Insurance", "🛡️"), // This will now link to /industries/insurance
          createIndustryItem("Lending", "💳"), // This will now link to /industries/lending
        ]
      }
    ]
  },
  {
    category: "E-Commerce & Retail",
    icon: "🛍️",
    subCategories: [
      {
        name: "Online Commerce",
        items: [
          createIndustryItem("ECommerce", "🛒"), // This will now link to /industries/ecommerce
          createIndustryItem("Retail", "🛍️"), // This will now link to /industries/retail
        ]
      },
      {
        name: "Food & Hospitality",
        items: [
          createIndustryItem("Restaurant", "🍽️"), // This will now link to /industries/restaurant
          createIndustryItem("Travel", "✈️"),     // This will now link to /industries/travel
        ]
      },
      {
        name: "Real Estate",
        items: [
          createIndustryItem("Real Estate", "🏠"), // This will now link to /industries/real-estate
        ]
      }
    ]
  },
  {
    category: "Logistics & Supply Chain",
    icon: "🚢",
    subCategories: [
      {
        name: "Transportation & Delivery",
        items: [
          createIndustryItem("Logistics", "🚢"),
          createIndustryItem("Aviation", "🛫"),
          createIndustryItem("EMobility", "🚗"),
        ]
      },
      {
        name: "Supply Chain Management",
        items: [
          createIndustryItem("Supply Chain", "🔗"),
        ]
      }
    ]
  },
  {
    category: "Manufacturing & Energy",
    icon: "🏭",
    subCategories: [
      {
        name: "Industrial Solutions",
        items: [
          createIndustryItem("Construction", "🏗️"),
          createIndustryItem("Manufacturing", "🏭"),
        ]
      },
      {
        name: "Energy & Utilities",
        items: [
          createIndustryItem("Energy", "💡"),
        ]
      }
    ]
  },
  {
    category: "Media & Communication",
    icon: "📣",
    subCategories: [
      {
        name: "Content & Publishing",
        items: [
          createIndustryItem("Magazine & Newspaper", "📰"),
          createIndustryItem("Social Media", "💬"),
        ]
      },
      {
        name: "Marketing & Advertising",
        items: [
          createIndustryItem("Marketing", "📣"),
        ]
      },
      {
        name: "Telecommunications",
        items: [
          createIndustryItem("Telecom", "📞"),
        ]
      }
    ]
  },
  {
    category: "Education & Entertainment",
    icon: "🎓",
    subCategories: [
      {
        name: "Learning Platforms",
        items: [
          createIndustryItem("Education", "🎓"),
        ]
      },
      {
        name: "Digital Entertainment",
        items: [
          createIndustryItem("Entertainment", "🎬"),
          createIndustryItem("Gaming", "🎮"),
          createIndustryItem("OTT", "📺"),
        ]
      },
      {
        name: "Event Management",
        items: [
          createIndustryItem("Events", "🗓️"),
        ]
      }
    ]
  },
  {
    category: "Public Sector & Social Impact",
    icon: "🗳️",
    subCategories: [
      {
        name: "Government & Policy",
        items: [
          createIndustryItem("Politics", "🗳️"),
        ]
      },
      {
        name: "Corporate Social Responsibility",
        items: [
          createIndustryItem("CSR", "💎"),
        ]
      }
    ]
  },
  {
    category: "Specialized Platforms",
    icon: "🚀",
    subCategories: [
      {
        name: "On-Demand Services",
        items: [
          createIndustryItem("On-Demand", "🚀"), // This will now link to /industries/on-demand
        ]
      },
      {
        name: "Agriculture Tech",
        items: [
          createIndustryItem("Agriculture", "🌱"), // This will now link to /industries/agriculture
        ]
      }
    ]
  },
];

// Flatten all industries for mobile menu and general lookup
// Reset colorIndex before flattening to ensure consistent colors if createIndustryItem was called elsewhere
colorIndex = 0; // Reset for consistent color assignment in allFlatIndustries
const allFlatIndustries = categorizedIndustries.flatMap(cat =>
  cat.subCategories.flatMap(subCat => subCat.items)
);

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [mounted,   setMounted]   = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [showContactForm, setShowContactForm] = useState(false); // New state for contact form modal
  // State to manage which main industry category is currently active/hovered in the dropdown
  const [activeIndustryCategory, setActiveIndustryCategory] = useState(categorizedIndustries[0].category);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = mounted && scrolled;

  const linkCls = `nav-link-hover transition-colors duration-200 ${active ? "hover:text-brand" : "hover:text-white"}`;

  return (
    <>
      <style>{`
        @keyframes hdr-border {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .hdr-border::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg,#103c61,#0ea5e9,#7c3aed,#e11d48,#f59e0b,#059669,#103c61);
          background-size: 300% 100%;
          animation: hdr-border 5s linear infinite;
          opacity: 0.55;
        }
        .nav-link-hover { position: relative; padding-bottom: 2px; }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #103c61, #0ea5e9);
          transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .nav-link-hover:hover::after { width: 100%; }
      `}</style>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          active
            ? "hdr-border bg-white/95 backdrop-blur-2xl shadow-sm py-2"
            : "bg-transparent py-3"
        }`}
      >
        {/* ── Main bar ── */}
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-12">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/geesha_logo.png"
              alt="Geesha Solutions"
              width={active ? 88 : 100}
              height={36}
              className="object-contain transition-all duration-500"
            />
          </Link>

          {/* Desktop nav */}
          <nav className={`hidden md:flex items-center gap-6 text-[13px] font-semibold transition-colors duration-300 ${active ? "text-gray-600" : "text-white/90"}`}>

            {/* Left links: Home, About */}
            {navLeft.map(({ label, href }) => (
              <Link key={label} href={href} className={linkCls}>{label}</Link>
            ))}

            {/* Services dropdown — right after About */}
            <div className="relative group">
              <span className={`${linkCls} cursor-pointer flex items-center gap-1`}>
                Services
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </span>

              {/* Dropdown panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 rounded-2xl overflow-hidden z-50 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 shadow-2xl shadow-black/15 border border-gray-100 bg-white">
                <div className="px-4 py-3 bg-gradient-to-r from-brand/5 to-sky-500/5 border-b border-gray-100">
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand/60">Our Services</p>
                </div>
                <div className="p-2">
                  {services.map(({ label, href, icon, color }) => (
                    <Link key={label} href={href} className="group/item flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-all duration-200">
                      <span className="text-base w-7 text-center">{icon}</span>
                      <span className={`text-sm font-semibold text-gray-700 group-hover/item:${color} transition-colors duration-200`}>{label}</span>
                      <span className="ml-auto text-gray-300 group-hover/item:text-gray-500 group-hover/item:translate-x-0.5 transition-all duration-200 text-xs">→</span>
                    </Link>
                  ))}
                </div>
                <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                  <Link href="/services" className="text-xs font-bold text-brand hover:text-brand-light transition-colors duration-200 flex items-center gap-1">
                    View all services →
                  </Link>
                </div>
              </div>
            </div>

            {/* Industries dropdown */}
            <div
              className="relative group"
              // Reset active category when mouse leaves the entire dropdown area, defaulting to the first category
              onMouseLeave={() => setActiveIndustryCategory(categorizedIndustries[0].category)}
            >
              <Link href="/industries" className={`${linkCls} cursor-pointer flex items-center gap-1`}>
                Industries
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[700px] rounded-2xl overflow-hidden z-50 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 shadow-2xl shadow-black/15 border border-gray-100 bg-white flex">
                {/* Left panel: Main Categories */}
                <div className="w-1/3 p-2 border-r border-gray-100 bg-gray-50">
                  <div className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400">Main Categories</div>
                  {categorizedIndustries.map((cat) => (
                    <div
                      key={cat.category}
                      onMouseEnter={() => setActiveIndustryCategory(cat.category)}
                      className={`group/category flex items-center gap-2 px-3 py-2.5 rounded-xl cursor-pointer transition-colors duration-200 ${
                        activeIndustryCategory === cat.category ? "bg-white shadow-sm text-brand" : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <span className="text-base w-6 text-center">{cat.icon}</span>
                      <span className="text-sm font-semibold">{cat.category}</span>
                      <span className="ml-auto text-gray-300 group-hover/category:text-gray-500 transition-colors duration-200">→</span>
                    </div>
                  ))}
                </div>

                {/* Right panel: Sub-categories and their items */}
                <div className="w-2/3 p-6">
                  <div className="px-4 py-3 bg-gradient-to-r from-brand/5 to-sky-500/5 border-b border-gray-100 -mx-6 -mt-6 mb-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-brand/60">
                      {activeIndustryCategory} Solutions
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-4 pt-3">
                    {categorizedIndustries.find(cat => cat.category === activeIndustryCategory)?.subCategories?.map((subCat) => (
                      <div key={subCat.name} className="col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{subCat.name}</h4>
                        <div className="space-y-1">
                          {subCat.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="group/item flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-brand py-1.5 rounded-md transition-colors duration-200"
                            >
                              <span className={`text-base w-5 text-center ${item.color}`}>{item.icon}</span>
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                  <Link href="/industries" className="text-xs font-bold text-brand hover:text-brand-light transition-colors duration-200 flex items-center gap-1">
                    View all industries →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right links: Portfolio, Careers, Blogs */}
            {navRight.map(({ label, href }) => (
              <Link key={label} href={href} className={linkCls}>{label}</Link>
            ))}

          </nav>

          {/* Right side: phone + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+94770000000"
              className={`text-[12px] font-semibold transition-colors duration-300 ${active ? "text-gray-500 hover:text-brand" : "text-white/60 hover:text-white"}`}
            >
              📞 +91 9780804666
            </a>
            <button
              className={`shine-btn text-[13px] font-bold px-5 py-2 rounded-full transition-all duration-300 ${
                active
                  ? "bg-gradient-to-r from-brand to-sky-500 text-white shadow-md shadow-brand/20 hover:shadow-brand/40 hover:-translate-y-0.5"
                  : "bg-white/15 backdrop-blur-sm border border-white/25 text-white hover:bg-white/25 hover:border-white/40"
              }`}
              onClick={() => setShowContactForm(true)} // Open contact form on click
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-1.5 rounded-lg transition-colors duration-300 ${active ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-[2px] bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>

        </div>

        {/* ── Mobile menu ── */}
        <div className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-white/98 backdrop-blur-2xl border-t border-gray-100 px-6 py-5 flex flex-col gap-1">

            {navLeft.map(({ label, href }) => (
              <Link key={label} href={href} onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-semibold text-gray-700 hover:text-brand border-b border-gray-50 transition-colors duration-200">
                {label}
              </Link>
            ))}

            {/* Mobile services grid */}
            <div className="py-3 border-b border-gray-50">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Services</p>
              <div className="grid grid-cols-2 gap-2">
                {services.map(({ label, href, icon }) => (
                  <Link key={label} href={href} onClick={() => setMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 hover:bg-brand/5 text-xs font-semibold text-gray-600 hover:text-brand transition-all duration-200">
                    <span>{icon}</span>{label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile industries grid */}
            <div className="py-3 border-b border-gray-50">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Industries</p>
              <div className="grid grid-cols-2 gap-2">
                {allFlatIndustries.map(({ label, href, icon, color }) => (
                  <Link key={label} href={href} onClick={() => setMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 hover:bg-brand/5 text-xs font-semibold text-gray-600 hover:text-brand transition-all duration-200">
                    {/* Using the icon and dynamically assigned color from allFlatIndustries */}
                    <span className={`text-base ${color}`}>{icon}</span>
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {navRight.map(({ label, href }) => (
              <Link key={label} href={href} onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-semibold text-gray-700 hover:text-brand border-b border-gray-50 last:border-0 transition-colors duration-200">
                {label}
              </Link>
            ))}

            <button
              className="shine-btn mt-3 w-full py-3 bg-gradient-to-r from-brand to-sky-500 text-white rounded-xl font-bold text-sm"
              onClick={() => {
                setMenuOpen(false); // Close mobile menu
                setShowContactForm(true); // Open contact form
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>

      </header>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              aria-label="Close contact form"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
            <p className="text-slate-500 mb-6">
              We'd love to hear from you! Fill out the form below and we'll get back to you shortly.
            </p>

            {/* Placeholder for your actual contact form */}
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand"></textarea>
              </div>
              <button type="submit" className="shine-btn w-full py-3 bg-gradient-to-r from-brand to-sky-500 text-white rounded-xl font-bold text-sm">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
