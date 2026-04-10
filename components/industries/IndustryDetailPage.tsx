"use client";

import { useReveal } from "@/hooks/useReveal";
import Icon from "@/components/Icon";
import { icons } from "lucide-react";

interface IndustryDetailPageProps {
  title: string;
  description: string;
  iconName: keyof typeof icons;
  color: string; // Tailwind color class for consistency
}

export default function IndustryDetailPage({ title, description, iconName, color }: IndustryDetailPageProps) {
  const ref = useReveal();

  // Extract base color for gradient from the text color class
  // e.g., "text-rose-500" -> "from-rose-400 to-rose-500"
  const baseColor = color.replace('text-', '');
  const gradientFrom = `from-${baseColor.split('-')[0]}-400`;
  const gradientTo = `to-${baseColor}`;

  return (
    <section ref={ref} className="relative py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="reveal mb-8">
          <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-white mb-6 shadow-lg`}>
            <Icon name={iconName} size={40} />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            {title} Industry Solutions
          </h1>
          <p className="mt-6 text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Placeholder for more detailed content */}
        <div className="reveal mt-16 text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Approach to {title}</h2>
          <p className="text-slate-500 leading-relaxed mb-4">
            We understand the unique challenges and opportunities within the {title} sector. Our tailored solutions are designed to address specific industry needs, enhance operational efficiency, and drive innovation.
          </p>
          <ul className="list-disc list-inside text-slate-500 space-y-2">
            <li>Custom software development to streamline workflows.</li>
            <li>AI-powered analytics for data-driven decision making.</li>
            <li>Secure and scalable cloud infrastructure.</li>
            <li>User-centric design for intuitive platforms.</li>
          </ul>
          <p className="mt-6 text-slate-500 leading-relaxed">
            Partner with Geesha Solutions to transform your {title} business and stay ahead in a competitive market.
          </p>
        </div>
      </div>
    </section>
  );
}