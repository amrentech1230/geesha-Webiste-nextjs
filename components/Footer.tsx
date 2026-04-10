"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

const socials = [
  { label: "in", grad: "from-blue-700 to-blue-500", href: "https://www.linkedin.com/company/geeshasolutions/posts/?feedView=all" },
  { label: "ig", grad: "from-purple-500 via-pink-500 to-yellow-500", href: "https://www.instagram.com/geeshasolutions/" },


];

export default function Footer() {
  const ref = useReveal();

  return (
    <footer ref={ref} className="overflow-hidden" style={{ background: "linear-gradient(180deg, #060d1a 0%, #030810 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        <div className="reveal" style={{ transitionDelay: "0s" }}>
          <h2 className="text-2xl font-black gradient-text-vivid">Geesha Solutions</h2>
          <p className="mt-4 text-white/35 text-sm leading-relaxed">
            Engineering vision, driving innovation. We build digital products that scale and inspire.
          </p>
          <div className="flex gap-3 mt-6">
            {socials.map((s) => (
              <a key={s.label} href={s.href || "#"} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full bg-gradient-to-br ${s.grad} flex items-center justify-center text-xs text-white font-bold opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 uppercase`}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {[
          { title: "Services", links: ["Web Design", "Web Development", "App Development", "Digital Marketing", "AI Solutions", "Cloud Engineering"] },
          { title: "Company",  links: ["About Us", "Portfolio", "Careers", "Blog", "Industries", "Contact"] },
        ].map((col, i) => (
          <div key={col.title} className="reveal" style={{ transitionDelay: `${0.1 * (i + 1)}s` }}>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/25 mb-6">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-white/40 hover:text-white underline-grow transition-colors duration-200">{item}</Link>
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
          <button className="shine-btn mt-8 px-6 py-3 bg-gradient-to-r from-brand to-sky-500 text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6 px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/20">
        <span>© {new Date().getFullYear()} Geesha Solutions Pvt. Ltd. All rights reserved.</span>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
            <Link key={l} href="#" className="hover:text-white/60 transition-colors duration-200">{l}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
