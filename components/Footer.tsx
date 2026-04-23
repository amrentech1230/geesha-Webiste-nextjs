"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import Image from "next/image";
const active = false;

const socials = [
  { label: "in", grad: "from-blue-700 to-blue-500", href: "https://www.linkedin.com/company/geeshasolutions/posts/?feedView=all" },
  { label: "ig", grad: "from-purple-500 via-pink-500 to-yellow-500", href: "https://www.instagram.com/geeshasolutions/" },
  { label: "Gf", grad: "from-blue-500 to-orange-500", href: "https://www.goodfirms.co/company/geesha-solutions" },
  { label: "Cl", grad: "bg-white", href: "https://clutch.co/profile/geesha-solutions", textClass: "text-black" },
];

const serviceLinks = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "App Development", href: "/services/app-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "AI Solutions", href: "/services/ai-solutions" },
  { label: "Cloud Engineering", href: "/services/cloud-engineering" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Industries", href: "/industries" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const ref = useReveal();

  return (
    <footer ref={ref} className="overflow-hidden" style={{ background: "linear-gradient(180deg, #060d1a 0%, #030810 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        <div className="reveal" style={{ transitionDelay: "0s" }}>
          <Link href="/" className="shrink-0">
            <Image
              src="/geesha_logo.webp"
              alt="Geesha Solutions"
              width={active ? 100 : 100}
              height={36}
              className="object-contain transition-all duration-500"
              style={{ height: "auto" }}
              priority // Add priority for LCP image
            />
          </Link>
          <p className="mt-4 text-white/35 text-sm leading-relaxed">
            Engineering vision, driving innovation. We build digital products that scale and inspire.
          </p>
          <div className="flex gap-3 mt-6">
            {socials.map((s) => (
              <a key={s.label} href={s.href || "#"} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full ${s.grad.startsWith('bg-') ? s.grad : `bg-gradient-to-br ${s.grad}`} flex items-center justify-center text-xs font-bold opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 uppercase`}>
                <span className={s.textClass || 'text-white'}>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {[
          { title: "Services", links: serviceLinks },
          { title: "Company",  links: companyLinks },
        ].map((col, i) => (
          <div key={col.title} className="reveal" style={{ transitionDelay: `${0.1 * (i + 1)}s` }}>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/25 mb-6">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/40 hover:text-white underline-grow transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="reveal" style={{ transitionDelay: "0.3s" }}>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/25 mb-6">Contact</h4>
          <ul className="space-y-3 text-sm text-white/40">
            <li className="hover:text-white transition-colors duration-200 cursor-default">📧 sales@geeshasolutions.com</li>
            <li className="hover:text-white transition-colors duration-200 cursor-default">📧 hr@geeshasolutions.com</li>
            <li className="hover:text-white transition-colors duration-200 cursor-default">📞 +91 9780804666</li>
            <li className="hover:text-white transition-colors duration-200 cursor-default">📍 Plot D, 268 A, 4th Floor, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 140308</li>
          </ul>
          {/* <button className="shine-btn mt-8 px-6 py-3 bg-gradient-to-r from-brand to-sky-500 text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-300">
            Get in Touch
          </button> */}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/20">
        <span>© {new Date().getFullYear()} Geesha Solutions Pvt. Ltd. All rights reserved.</span>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-white/60 transition-colors duration-200">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-white/60 transition-colors duration-200">Terms of Service</Link>
          <Link href="/cookie-policy" className="hover:text-white/60 transition-colors duration-200">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
