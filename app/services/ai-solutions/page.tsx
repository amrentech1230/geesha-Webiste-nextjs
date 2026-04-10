import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#f59e0b";
const gradTo   = "#f97316";
const grad     = "from-amber-400 to-orange-500";

export const metadata = {
  title: "AI Solutions | Geesha Solutions",
  description: "Custom AI chatbots, ML models, computer vision, and process automation to transform your business operations.",
};

export default function AISolutionsPage() {
  return (
    <div>
      <ServiceHero
        label="AI Solutions"
        title="Intelligence That"
        highlight="Works."
        desc="Custom AI chatbots, machine learning models, and intelligent automation that eliminate bottlenecks, reduce costs, and unlock new growth opportunities for your business."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="🤖"
        badges={["GPT / LLMs", "Machine Learning", "Computer Vision", "NLP", "Python", "TensorFlow", "OpenAI", "LangChain"]}
        stats={[
          { value: "60%",  label: "Avg Cost Reduction" },
          { value: "10x",  label: "Faster Processing" },
          { value: "15+",  label: "AI Projects Shipped" },
          { value: "95%+", label: "Model Accuracy" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="AI & Machine Learning"
        serviceDesc="We build practical AI solutions that solve real business problems — from intelligent chatbots to custom ML models and full process automation pipelines."
        features={[
          { icon: "🤖", title: "AI Chatbots & Assistants",   desc: "GPT-powered chatbots for customer support, lead qualification, and internal automation." },
          { icon: "🧠", title: "Custom ML Models",            desc: "Trained machine learning models for prediction, classification, and recommendation engines." },
          { icon: "👁️", title: "Computer Vision",             desc: "Image recognition, object detection, and visual inspection systems for your industry." },
          { icon: "📝", title: "NLP & Text Analysis",         desc: "Sentiment analysis, document parsing, and intelligent search powered by NLP." },
          { icon: "⚙️", title: "Process Automation (RPA)",    desc: "Automate repetitive workflows with AI-driven bots that save hours every single day." },
          { icon: "📊", title: "Predictive Analytics",        desc: "Forecast sales, churn, and demand with models trained on your own business data." },
          { icon: "🔗", title: "LLM Integration",             desc: "Integrate OpenAI, Anthropic, or open-source LLMs directly into your existing products." },
          { icon: "🗣️", title: "Voice AI & Speech",          desc: "Speech-to-text, text-to-speech, and voice command systems for hands-free automation." },
        ]}
        tools={["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face", "scikit-learn", "FastAPI", "Pinecone", "Weaviate", "AWS SageMaker", "Google Vertex AI"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🔍", title: "Data Assessment",   desc: "We audit your data sources, quality, and readiness for AI implementation." },
          { num: "02", icon: "🏗️", title: "Model Design",     desc: "Architecture selection, training pipeline setup, and baseline benchmarking." },
          { num: "03", icon: "🧪", title: "Train & Validate",  desc: "Iterative training with validation datasets and rigorous performance tuning." },
          { num: "04", icon: "🚀", title: "Deploy & Monitor",  desc: "Production deployment with drift monitoring and continuous retraining pipelines." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "🧠", title: "Deep AI Expertise",           desc: "Our team includes ML engineers with experience across NLP, CV, and generative AI." },
          { icon: "🎯", title: "Business-First Approach",     desc: "We focus on ROI — every AI solution is tied to a measurable business outcome." },
          { icon: "🔒", title: "Data Privacy & Security",     desc: "Your data never leaves your infrastructure — we build with privacy by design." },
          { icon: "⚡", title: "Rapid Prototyping",           desc: "Working AI prototype in 2 weeks so you can validate before full investment." },
          { icon: "🔄", title: "Continuous Learning",         desc: "Models that improve over time with automated retraining and feedback loops." },
          { icon: "🛡️", title: "Explainable AI",             desc: "We build transparent models you can trust, audit, and explain to stakeholders." },
        ]}
        otherServices={[
          { label: "Web Design",        href: "/services/web-design",        icon: "🎨", grad: "from-sky-400 to-cyan-500" },
          { label: "Web Development",   href: "/services/web-development",   icon: "💻", grad: "from-blue-500 to-indigo-600" },
          { label: "App Development",   href: "/services/app-development",   icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "Digital Marketing", href: "/services/digital-marketing", icon: "📈", grad: "from-emerald-400 to-teal-500" },
          { label: "Cloud Engineering", href: "/services/cloud-engineering", icon: "☁️", grad: "from-rose-400 to-pink-500" },
        ]}
      />
    </div>
  );
}
