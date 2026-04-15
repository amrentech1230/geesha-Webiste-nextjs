"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqCategories = [
  {
    name: "General",
    icon: "❓",
    faqs: [
      {
        question: "What is Geesha Solutions?",
        answer: "Geesha Solutions is a digital innovation agency specializing in building high-impact digital products for startups, SMBs, and global enterprises. We focus on AI-powered solutions, cloud engineering, and modern digital transformation."
      },
      {
        question: "What industries do you serve?",
        answer: "We have experience across a wide range of industries including FinTech, Healthcare, E-commerce, Logistics, Education, and more. Our agile approach allows us to adapt our expertise to any sector's unique challenges."
      },
    ]
  },
  {
    name: "Services",
    icon: "💡",
    faqs: [
      {
        question: "What specific services do you offer?",
        answer: "We offer end-to-end services including Web & App Development, UI/UX Design, AI & Machine Learning solutions, Cloud & DevOps engineering, and Digital Marketing strategy."
      },
      {
        question: "Do you build mobile apps for both iOS and Android?",
        answer: "Yes, we specialize in cross-platform development using technologies like React Native and Flutter, allowing us to build and maintain a single codebase for both iOS and Android for faster delivery and lower costs."
      }
    ]
  },
  {
    name: "Process & Pricing",
    icon: "💰",
    faqs: [
      {
        question: "How much does a project typically cost?",
        answer: "Project costs vary depending on the scope, complexity, and timeline. We offer flexible engagement models, including fixed-price projects and dedicated team hires. We recommend scheduling a free consultation to get a detailed quote tailored to your needs."
      },
      {
        question: "How long does it take to build an app?",
        answer: "The timeline for building an app can range from a few weeks for a simple MVP to several months for a complex enterprise-level solution. After our initial discovery phase, we provide a detailed project roadmap with clear milestones and delivery dates."
      },
    ]
  },
  {
    name: "Support",
    icon: "🤝",
    faqs: [
      {
        question: "Do you provide post-launch support and maintenance?",
        answer: "Absolutely. We offer ongoing support and maintenance plans to ensure your product remains secure, up-to-date, and performs optimally. We believe in building long-term partnerships and helping you scale as your business grows."
      }
    ]
  }
];

const FaqItem = ({ item, isOpen, onToggle }: { item: { question: string; answer: string; }, isOpen: boolean, onToggle: () => void }) => (
  <div className="border-t border-white/10 first:border-t-0">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center text-left p-6 hover:bg-white/5 transition-colors duration-200"
    >
      <h3 className="text-md font-bold text-white">{item.question}</h3>
      <div className="text-brand">
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </div>
    </button>
    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
            <p className="text-white/60 px-6 pb-6 leading-relaxed">{item.answer}</p>
        </div>
    </div>
  </div>
);

export default function FaqClientPage() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].name);

  const handleToggle = (faqIndex: number) => {
    setOpenIndices(prev => prev.includes(faqIndex) ? prev.filter(i => i !== faqIndex) : [faqIndex]); // Only one open at a time
  };

  const currentFaqs = faqCategories.find(c => c.name === activeCategory)?.faqs || [];

  return (
    <div className="grid md:grid-cols-[280px_1fr] gap-12">
      <aside className="space-y-3">
        {faqCategories.map(cat => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`w-full flex items-center gap-3 p-4 rounded-xl text-left font-bold transition-all duration-300 ${activeCategory === cat.name ? 'bg-brand/10 border-brand/30 text-brand shadow-lg' : 'bg-white/5 border-transparent text-white/70 hover:bg-white/10'}`}
          >
            <span className="text-xl">{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </aside>
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        {currentFaqs.map((item, index) => (
          <FaqItem key={index} item={item} isOpen={openIndices.includes(index)} onToggle={() => handleToggle(index)} />
        ))}
      </div>
    </div>
  );
}