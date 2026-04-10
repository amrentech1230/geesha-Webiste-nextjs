import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#f43f5e";
const gradTo   = "#ec4899";
const grad     = "from-rose-400 to-pink-500";

export const metadata = {
  title: "Cloud Engineering Services | Geesha Solutions",
  description: "Scalable cloud infrastructure on AWS, GCP, and Azure with DevOps, Kubernetes, CI/CD, and 99.99% uptime.",
};

export default function CloudEngineeringPage() {
  return (
    <div>
      <ServiceHero
        label="Cloud Engineering"
        title="Infrastructure Built"
        highlight="to Last."
        desc="Scalable, secure cloud infrastructure on AWS, GCP, and Azure — with DevOps automation, Kubernetes orchestration, and 99.99% uptime SLAs that your business can rely on."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="☁️"
        badges={["AWS", "GCP", "Azure", "Kubernetes", "Terraform", "CI/CD", "Docker", "DevOps"]}
        stats={[
          { value: "99.99%", label: "Uptime Achieved" },
          { value: "40%",    label: "Avg Cost Savings" },
          { value: "10+",    label: "Cloud Migrations" },
          { value: "<5min",  label: "Incident Response" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Cloud & DevOps"
        serviceDesc="We design, build, and manage cloud infrastructure that scales with your business — from startup MVPs to enterprise-grade multi-region deployments."
        features={[
          { icon: "☁️", title: "AWS / GCP / Azure",          desc: "Multi-cloud architecture design and migration for any scale — startup to enterprise." },
          { icon: "🐳", title: "Docker & Kubernetes",         desc: "Containerized microservices with auto-scaling, self-healing, and zero-downtime deploys." },
          { icon: "🔄", title: "CI/CD Pipelines",             desc: "GitHub Actions, GitLab CI, and Jenkins pipelines for automated testing and deployment." },
          { icon: "🛡️", title: "Cloud Security",              desc: "IAM policies, VPC setup, secrets management, and compliance (SOC2, GDPR) configurations." },
          { icon: "📉", title: "Cost Optimisation",           desc: "Right-sizing, reserved instances, and FinOps practices to cut your cloud bill by up to 40%." },
          { icon: "📡", title: "Monitoring & Alerting",       desc: "Datadog, Grafana, and CloudWatch dashboards with PagerDuty alerting for 24/7 visibility." },
          { icon: "🏗️", title: "Infrastructure as Code",     desc: "Terraform and Pulumi for fully reproducible, version-controlled infrastructure." },
          { icon: "🔁", title: "Disaster Recovery",           desc: "Automated backups, multi-region failover, and tested recovery plans for zero data loss." },
        ]}
        tools={["AWS", "Google Cloud", "Azure", "Terraform", "Kubernetes", "Docker", "Helm", "GitHub Actions", "Datadog", "Grafana", "Prometheus", "Vault"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🔍", title: "Cloud Audit",        desc: "Assessment of your current infrastructure, costs, security posture, and bottlenecks." },
          { num: "02", icon: "🏗️", title: "Architecture Plan",  desc: "Detailed cloud architecture diagram, migration plan, and cost projection." },
          { num: "03", icon: "⚙️", title: "Build & Migrate",    desc: "Infrastructure-as-Code (Terraform) setup and zero-downtime migration execution." },
          { num: "04", icon: "📊", title: "Operate & Optimise", desc: "Ongoing monitoring, incident response, and monthly cost and performance reviews." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "🏆", title: "Certified Cloud Engineers",   desc: "AWS, GCP, and Azure certified engineers with 5+ years of production cloud experience." },
          { icon: "💰", title: "Cut Cloud Costs by 40%",      desc: "Our FinOps practices consistently reduce cloud spend without sacrificing performance." },
          { icon: "🔒", title: "Security-First Architecture", desc: "Zero-trust networking, encrypted storage, and compliance-ready configurations." },
          { icon: "⚡", title: "Zero-Downtime Deployments",   desc: "Blue-green and canary deployments ensure your users never experience downtime." },
          { icon: "📊", title: "Full Observability",          desc: "Metrics, logs, and traces across your entire stack with real-time alerting." },
          { icon: "🛡️", title: "24/7 Incident Response",     desc: "On-call engineers ready to respond to any incident within 5 minutes, around the clock." },
        ]}
        otherServices={[
          { label: "Web Design",        href: "/services/web-design",        icon: "🎨", grad: "from-sky-400 to-cyan-500" },
          { label: "Web Development",   href: "/services/web-development",   icon: "💻", grad: "from-blue-500 to-indigo-600" },
          { label: "App Development",   href: "/services/app-development",   icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "Digital Marketing", href: "/services/digital-marketing", icon: "📈", grad: "from-emerald-400 to-teal-500" },
          { label: "AI Solutions",      href: "/services/ai-solutions",      icon: "🤖", grad: "from-amber-400 to-orange-500" },
        ]}
      />
    </div>
  );
}
