"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
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
  { label: "Contact Us",      href: "/contact" },
];

const services = [
  { label: "Web Design",        href: "/services/web-design",        icon: "🎨", color: "text-sky-500"     },
  { label: "Web Development",   href: "/services/web-development",   icon: "💻", color: "text-blue-500"    },
  { label: "App Development",   href: "/services/app-development",   icon: "📱", color: "text-violet-500"  },
  { label: "Digital Marketing", href: "/services/digital-marketing", icon: "📈", color: "text-emerald-500" },
  { label: "AI Solutions",      href: "/services/ai-solutions",      icon: "🤖", color: "text-amber-500"   },
  { label: "Cloud Engineering", href: "/services/cloud-engineering", icon: "☁️", color: "text-rose-500"    },
];

// Define a set of colors to cycle through for industry links to maintain visual consistency
const industryColors = [
  "text-rose-500", "text-emerald-500", "text-violet-500", "text-sky-500", "text-amber-500", "text-blue-500",
  "text-green-500", "text-purple-500", "text-red-500", "text-indigo-500", "text-yellow-500", "text-pink-500",
];

// Helper to create a base industry item without color
const createBaseIndustryItem = (label: string, icon: string) => {
  return {
    label,
    icon,
    href: `/industries/${label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`,
  };
};

// Raw industry data structure
const rawCategorizedIndustries = [
  {
    category: "Health & Wellness",
    icon: "❤️",
    subCategories: [
      {
        name: "Healthcare Solutions",
        items: [
          createBaseIndustryItem("Healthcare", "❤️"),
          createBaseIndustryItem("Fitness", "💪"),
        ]
      },
      {
        name: "Wearable Technology",
        items: [
          createBaseIndustryItem("Wearables", "⌚"),
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
          createBaseIndustryItem("Finance", "💰"),
          createBaseIndustryItem("Banking", "🏦"),
          createBaseIndustryItem("Payments", "💸"),
        ]
      },
      {
        name: "Insurance & Lending",
        items: [
          createBaseIndustryItem("Insurance", "🛡️"),
          createBaseIndustryItem("Lending", "💳"),
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
          createBaseIndustryItem("ECommerce", "🛒"),
          createBaseIndustryItem("Retail", "🛍️"),
        ]
      },
      {
        name: "Food & Hospitality",
        items: [
          createBaseIndustryItem("Restaurant", "🍽️"),
          createBaseIndustryItem("Travel", "✈️"),
        ]
      },
      {
        name: "Real Estate",
        items: [
          createBaseIndustryItem("Real Estate", "🏠"),
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
          createBaseIndustryItem("Logistics", "🚢"),
          createBaseIndustryItem("Aviation", "🛫"),
          createBaseIndustryItem("EMobility", "🚗"),
        ]
      },
      {
        name: "Supply Chain Management",
        items: [
          createBaseIndustryItem("Supply Chain", "🔗"),
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
          createBaseIndustryItem("Construction", "🏗️"),
          createBaseIndustryItem("Manufacturing", "🏭"),
        ]
      },
      {
        name: "Energy & Utilities",
        items: [
          createBaseIndustryItem("Energy", "💡"),
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
          createBaseIndustryItem("Magazine & Newspaper", "📰"),
          createBaseIndustryItem("Social Media", "💬"),
        ]
      },
      {
        name: "Marketing & Advertising",
        items: [
          createBaseIndustryItem("Marketing", "📣"),
        ]
      },
      {
        name: "Telecommunications",
        items: [
          createBaseIndustryItem("Telecom", "📞"),
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
          createBaseIndustryItem("Education", "🎓"),
        ]
      },
      {
        name: "Digital Entertainment",
        items: [
          createBaseIndustryItem("Entertainment", "🎬"),
          createBaseIndustryItem("Gaming", "🎮"),
          createBaseIndustryItem("OTT", "📺"),
        ]
      },
      {
        name: "Event Management",
        items: [
          createBaseIndustryItem("Events", "🗓️"),
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
          createBaseIndustryItem("Politics", "🗳️"),
        ]
      },
      {
        name: "Corporate Social Responsibility",
        items: [
          createBaseIndustryItem("CSR", "💎"),
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
          createBaseIndustryItem("On-Demand", "🚀"),
        ]
      },
      {
        name: "Agriculture Tech",
        items: [
          createBaseIndustryItem("Agriculture", "🌱"),
        ]
      }
    ]
  },
    {
    category: "Food",
    icon: "🚀",
    subCategories: [
      {
        name: "Food",
        items: [ // Changed icon from 🚀 to 🍔
          createBaseIndustryItem("Food", "🍔"),
        ]
      },

    ]
  },
];

// Assign colors to all industry items in a deterministic way
let currentIndustryColorIndex = 0;
const assignColorsToIndustryItems = (items: any[]) => {
  return items.map((item: any) => {
    const assignedColor = industryColors[currentIndustryColorIndex % industryColors.length];
    currentIndustryColorIndex++;
    return { ...item, color: assignedColor };
  });
};

const categorizedIndustries = rawCategorizedIndustries.map(cat => ({
  ...cat,
  subCategories: cat.subCategories.map(subCat => ({
    ...subCat,
    items: assignColorsToIndustryItems(subCat.items),
  })),
}));

// New structure for the "About" dropdown
const categorizedAbout = [
  {
    category: "Company",
    icon: "🏢",
    subCategories: [
      {
        name: "Overview",
        items: [
          { label: "Who We Are", href: "/about/who-we-are", icon: "👤", color: "text-sky-500" },
          { label: "What We Do", href: "/about/what-we-do", icon: "💡", color: "text-blue-500" },
          { label: "Mission & Vision", href: "/about/mission-vision", icon: "🎯", color: "text-indigo-500" },
          { label: "Brand Story", href: "/about/brand-story", icon: "📖", color: "text-purple-500" },
        ]
      },
      {
        name: "Our Team",
        items: [
          { label: "Meet the Team", href: "/about/team", icon: "👥", color: "text-violet-500" },
          { label: "Roles & Expertise", href: "/about/roles", icon: "🛠️", color: "text-fuchsia-500" },
        ]
      }
    ]
  },
  {
    category: "Culture & Values",
    icon: "💖",
    subCategories: [
      {
        name: "Our Foundation",
        items: [
          { label: "Core Values", href: "/about/values", icon: "💎", color: "text-rose-500" },
          { label: "Work Culture", href: "/about/culture", icon: "🤝", color: "text-pink-500" },
        ]
      }
    ]
  },
  {
    category: "How We Work",
    icon: "⚙️",
    subCategories: [
      {
        name: "Our Approach",
        items: [
          { label: "Our Process", href: "/about/our-process", icon: "📈", color: "text-emerald-500" },
          { label: "Tech Stack", href: "/about/tech-stack", icon: "💻", color: "text-amber-500" },
        ]
      }
    ]
  },
  {
    category: "Insights & Impact",
    icon: "🏆",
    subCategories: [
      { name: "Showcase", items: [{ label: "Case Studies", href: "/about/case-studies", icon: "📊", color: "text-blue-500" }] },
      { name: "Client Reviews", items: [{ label: "Testimonials", href: "/about/testimonials", icon: "💬", color: "text-green-500" }] },
    ]
  },
    {
    category: "FAQ",
    icon: "❓",
    subCategories: [
      { name: "Faq", items: [{ label: "FAQ", href: "/about/faq", icon: "❓", color: "text-blue-500" }] },
    ]
  }

];

// Flatten all industries for mobile menu and general lookup
const allFlatIndustries = categorizedIndustries.flatMap(cat =>
  cat.subCategories.flatMap(subCat => subCat.items)
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false); // New state for contact form modal
  const [showTopProgressBar, setShowTopProgressBar] = useState(false); // New state for the top progress bar loader
  const [loading, setLoading] = useState(false); // State for page loader
  // States to manage which main category is currently active/hovered in the dropdowns
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [activeIndustryCategory, setActiveIndustryCategory] = useState(categorizedIndustries[0].category);
  const [activeAboutCategory, setActiveAboutCategory] = useState(categorizedAbout[0].category);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Page Loader Logic
  useEffect(() => {
    // Show loader immediately on route change start
    setLoading(true);

    // Hide loader after a short delay to ensure content is ready
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);
  const handleMobileMenuToggle = (menu: string) => {
    setOpenMobileMenu(openMobileMenu === menu ? null : menu);
  };

  const active = scrolled;
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
        @keyframes fill-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .nav-link-hover:hover::after { width: 100%; }
      `}</style>

      {/* Sticky "Get in Touch" button on the left side */}
      <Link href="/contact">
        <button
          className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-gradient-to-r from-brand to-sky-500 text-white font-bold py-3 px-5 rounded-l-lg shadow-lg hover:from-brand-light hover:to-sky-400 transition-all duration-300 transform hover:-translate-y-1/2 hover:scale-105"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'translateY(-50%)',
          }}
        >
          Get in Touch
        </button>
      </Link>

      {/* Top Progress Bar Loader */}
      {showTopProgressBar && (
        <div className="fixed top-0 left-0 w-full h-1 z-[9998] bg-gradient-to-r from-brand to-sky-500">
          <div className="h-full bg-white/50" style={{ animation: 'fill-progress 0.5s ease-out forwards' }} />
        </div>
      )}

      {/* Page Loader */}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative flex h-20 w-20">
            {/* Outer ring */}
            <div className="absolute inset-0 animate-spin rounded-full border-4 border-solid border-brand border-t-transparent" />
            {/* Inner dot */}
            <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-sky-500" />
          </div>
        </div>
      )}


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
              src={active ? "/geesha_logo_dark.png" : "/geesha_logo.webp"}
              alt="Geesha Solutions"
              width={active ? 88 : 100}
              height={36}
              priority // Add priority for LCP image
              className="object-contain transition-all duration-500"
              style={{ height: "auto" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className={`hidden md:flex items-center gap-6 text-[13px] font-semibold transition-colors duration-300 ${active ? "text-gray-600" : "text-white/90"}`}>

            {/* Left links: Home, About */}
            {navLeft.map(({ label, href }) => (
              label === 'About' ? (
                <div key={label} className="relative group">
                  <Link href={href} className={`${linkCls} cursor-pointer flex items-center gap-1`}>
                    {label}
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] rounded-2xl overflow-hidden z-50 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 shadow-2xl shadow-black/15 border border-gray-100 bg-white flex">
                    {/* Left panel: Main About Categories */}
                    <div className="w-2/5 p-2 border-r border-gray-100 bg-gray-50/80">
                      <div className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-gray-400">About Geesha</div>
                      <div className="grid grid-cols-1 gap-1">
                        {categorizedAbout.map((cat) => (
                          <div
                            key={cat.category}
                            // Using onMouseEnter to change the active category
                            onMouseEnter={() => setActiveAboutCategory(cat.category)}
                            className={`group/category flex items-center gap-2 px-3 py-2.5 rounded-xl cursor-pointer transition-colors duration-200 ${
                              activeAboutCategory === cat.category ? "bg-white shadow-sm text-brand" : "hover:bg-gray-100 text-gray-700"
                            }`}
                          >
                            <span className="text-base w-6 text-center">{cat.icon}</span>
                            <span className="text-sm font-semibold">{cat.category}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right panel: Sub-categories and their items for About */}
                    <div className="w-3/5 p-6 flex flex-col">
                      <div className="grow">
                        <p className="text-[10px] font-black uppercase tracking-widest text-violet-500/80 mb-4">
                          {activeAboutCategory} Details
                        </p>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                          {categorizedAbout.find(cat => cat.category === activeAboutCategory)?.subCategories?.map((subCat) => (
                            <div key={subCat.name} className="space-y-1">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 border-b border-gray-100 pb-1">{subCat.name}</h4>
                              {subCat.items.map((item) => (
                                <Link key={item.label} href={item.href} className={`group/item flex items-center gap-2 text-sm font-medium text-gray-600 hover:${item.color} py-1 rounded-md transition-colors duration-200`}>
                                  <span className={`text-base w-5 text-center ${item.color}`}>{item.icon}</span>
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <Link href="/about" className="text-xs font-bold text-violet-600 hover:text-violet-800 transition-colors duration-200 flex items-center gap-1">
                          View all about us →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={label} href={href} className={linkCls}>{label}</Link>
              )
            ))}

            {/* Services dropdown — right after About */}
            <div className="relative group">
              {/* State to manage which main about category is currently active/hovered in the dropdown */}
              {/* Initialize with the first category to ensure content is displayed on initial hover */}
              <span className="hidden" /> {/* Placeholder to prevent error if activeAboutCategory is not defined */}
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
              // Reset active category when leaving the industries dropdown
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
            {/* <a
              href="tel:+94770000000"
              className={`text-[12px] font-semibold transition-colors duration-300 ${active ? "text-gray-500 hover:text-brand" : "text-white/60 hover:text-white"}`}
            >
              📞 +91 9780804666
            </a> */}
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
        <div className={`md:hidden overflow-y-auto transition-all duration-500 ${menuOpen ? "max-h-[calc(100vh-6rem)] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-white/98 backdrop-blur-2xl border-t border-gray-100 px-4 py-5 flex flex-col gap-1">

            <Link href="/" onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-semibold text-gray-700 hover:text-brand border-b border-gray-50 transition-colors duration-200">
              Home
            </Link>

            {/* Mobile About Dropdown */}
            <div className="border-b border-gray-50">
              <button onClick={() => handleMobileMenuToggle('about')} className="w-full flex justify-between items-center py-2.5 text-sm font-semibold text-gray-700 hover:text-brand transition-colors duration-200">
                About
                <svg className={`w-3 h-3 transition-transform duration-300 ${openMobileMenu === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`grid transition-all duration-300 ease-in-out ${openMobileMenu === 'about' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden p-3 bg-gray-50/70 rounded-b-lg">
                  {categorizedAbout.map((mainCat) => (
                    mainCat.subCategories && (
                      <div key={mainCat.category} className="mb-3 last:mb-0">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{mainCat.category}</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {mainCat.subCategories.flatMap(subCat => subCat.items).map(({ label, href, icon }) => (
                            <Link key={label} href={href} onClick={() => setMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white hover:bg-brand/5 text-xs font-semibold text-gray-600 hover:text-brand transition-all duration-200">
                              <span>{icon}</span>{label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Services Dropdown */}
            <div className="border-b border-gray-50">
              <button onClick={() => handleMobileMenuToggle('services')} className="w-full flex justify-between items-center py-2.5 text-sm font-semibold text-gray-700 hover:text-brand transition-colors duration-200">
                Services
                <svg className={`w-3 h-3 transition-transform duration-300 ${openMobileMenu === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`grid transition-all duration-300 ease-in-out ${openMobileMenu === 'services' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden p-3 bg-gray-50/70 rounded-b-lg">
                  <div className="grid grid-cols-2 gap-2">
                    {services.map(({ label, href, icon }) => (
                      <Link key={label} href={href} onClick={() => setMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white hover:bg-brand/5 text-xs font-semibold text-gray-600 hover:text-brand transition-all duration-200">
                        <span>{icon}</span>{label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Industries Dropdown */}
            <div className="border-b border-gray-50">
              <button onClick={() => handleMobileMenuToggle('industries')} className="w-full flex justify-between items-center py-2.5 text-sm font-semibold text-gray-700 hover:text-brand transition-colors duration-200">
                Industries
                <svg className={`w-3 h-3 transition-transform duration-300 ${openMobileMenu === 'industries' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`grid transition-all duration-300 ease-in-out ${openMobileMenu === 'industries' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden p-3 bg-gray-50/70 rounded-b-lg">
                  <div className="grid grid-cols-2 gap-2">
                    {allFlatIndustries.map(({ label, href, icon, color }) => (
                      <Link key={label} href={href} onClick={() => setMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white hover:bg-brand/5 text-xs font-semibold text-gray-600 hover:text-brand transition-all duration-200">
                        <span className={`text-base ${color}`}>{icon}</span>
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
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
