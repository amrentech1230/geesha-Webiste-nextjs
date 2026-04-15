import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import CTASection from "@/components/CTASection";
const gradFrom = "#dc2626"; // red-600
const gradTo = "#ef4444"; // red-500
const grad = "from-red-600 to-red-500";

export const metadata = {
title: "Magazine & Newspaper Solutions | Geesha Solutions",
description: "Digital publishing platforms, content management systems (CMS), subscription models, and ad-tech integration for modern media outlets.",
};

export default function MagazineNewspaperIndustryPage() {
return (
<div>
    <ServiceHero label="Marketing" title="Driving Digital Growth" highlight="with Smart IT Solutions."
        desc="We combine technology, creativity, and data to deliver high-impact digital marketing solutions. Our IT-driven marketing strategies help businesses scale faster, improve visibility, and maximize ROI across all digital channels."
        grad={grad} gradFrom={gradFrom} gradTo={gradTo} emoji="📈" badges={[ "SEO Optimization"
        , "Performance Marketing" , "Marketing Automation" , "Social Media Strategy" , "Lead Generation"
        , "Analytics & Insights" ]} stats={[ { value: "200+" , label: "Campaigns Delivered" }, { value: "5X" ,
        label: "ROI Growth" }, { value: "1M+" , label: "Leads Generated" }, { value: "90%" , label: "Client Retention"
        }, ]} />
    <ServiceFeatures grad={grad} gradFrom={gradFrom} gradTo={gradTo}
        serviceTitle="Comprehensive Digital Publishing Technology"
        serviceDesc="From content creation to reader engagement, we provide the tools for modern media companies to succeed in a competitive digital landscape."
        features={[ { icon: "🔍" , title: "Search Engine Optimization (SEO)" ,
        desc: "Improve your website visibility and rankings on search engines with advanced on-page, off-page, and technical SEO strategies."
        }, { icon: "📢" , title: "Performance Marketing" ,
        desc: "Run high-converting paid campaigns across Google Ads, Meta, and other platforms to maximize ROI and generate quality leads."
        }, { icon: "🤖" , title: "Marketing Automation" ,
        desc: "Automate repetitive marketing tasks like email campaigns, lead nurturing, and customer journeys using smart automation tools."
        }, { icon: "📱" , title: "Social Media Marketing" ,
        desc: "Build your brand presence and engage your audience across platforms like Instagram, LinkedIn, and Facebook with targeted strategies."
        }, { icon: "🎯" , title: "Lead Generation Systems" ,
        desc: "Design and implement conversion-focused funnels to capture, qualify, and convert high-quality leads efficiently."
        }, { icon: "📊" , title: "Analytics & Data Insights" ,
        desc: "Leverage real-time analytics and dashboards to track performance, optimize campaigns, and make data-driven decisions."
        }, { icon: "✉️" , title: "Email Marketing Campaigns" ,
        desc: "Create personalized and automated email campaigns that boost engagement, retention, and conversions." },
        { icon: "🌐" , title: "Conversion Rate Optimization (CRO)" ,
        desc: "Enhance user experience and optimize landing pages to increase conversion rates and maximize business growth."
        }, ]} tools={["Next.js", "Headless CMS" , "Stripe" , "Google Ad Manager" , "GraphQL" , "AMP" , "Firebase"
        , "Analytics Platforms" ]} />
    <ServiceProcess gradFrom={gradFrom} gradTo={gradTo} steps={[ { num: "01" , icon: "🎯" ,
        title: "Audience & Content Strategy" ,
        desc: "We analyze your readership and content goals to design a platform that enhances engagement and monetization."
        }, { num: "02" , icon: "🎨" , title: "UX for Readability" ,
        desc: "Designing clean, fast, and intuitive interfaces that prioritize the reading experience across all devices."
        }, { num: "03" , icon: "💻" , title: "CMS & Platform Development" ,
        desc: "Building the core publishing platform with a powerful CMS, and integrating subscription and ad-tech systems."
        }, { num: "04" , icon: "🚀" , title: "Launch & Performance Tuning" ,
        desc: "Deploying the platform with a focus on speed, SEO, and scalability, while providing ongoing support." },
        ]} />
    <CTASection />
</div>
);
}