import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

const gradFrom = "#f97316"; // orange-500
const gradTo = "#ef4444"; // red-500
const grad = "from-orange-500 to-red-500";

export const metadata = {
  title: "Restaurant Industry Solutions | Geesha Solutions",
  description: "Digital solutions for restaurants: online ordering, POS systems, table management, and customer loyalty programs.",
};

export default function RestaurantIndustryPage() {
  return (
    <div>
      <ServiceHero
        label="Restaurant Industry"
        title="Serving Up Digital"
        highlight="Dining Experiences."
        desc="We develop comprehensive digital solutions for the restaurant industry, from seamless online ordering and efficient POS systems to engaging loyalty programs, enhancing both operations and customer satisfaction."
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        emoji="🍽️"
        badges={["Online Ordering", "POS Systems", "Table Management", "Customer Loyalty", "Inventory Management", "Delivery Integration"]}
        stats={[
          { value: "100+", label: "Restaurants Served" },
          { value: "1M+", label: "Orders Processed" },
          { value: "25%", label: "Increased Efficiency" },
          { value: "95%", label: "Customer Satisfaction" },
        ]}
      />
      <ServiceFeatures
        grad={grad}
        gradFrom={gradFrom}
        gradTo={gradTo}
        serviceTitle="Integrated Restaurant Technology"
        serviceDesc="From kitchen to customer, we build technology that streamlines every aspect of your restaurant business, driving efficiency and enhancing the dining experience."
        features={[
          { icon: "📱", title: "Online Ordering & Delivery Platforms", desc: "Custom web and mobile platforms for direct online orders, pickup, and integration with third-party delivery services." },
          { icon: "💰", title: "Point of Sale (POS) Systems", desc: "Modern, intuitive POS solutions for order taking, payment processing, and sales reporting, optimized for speed and accuracy." },
          { icon: "🍽️", title: "Table & Reservation Management", desc: "Systems for managing table layouts, reservations, waitlists, and optimizing seating capacity." },
          { icon: "❤️", title: "Customer Loyalty Programs", desc: "Digital loyalty and rewards programs to encourage repeat business and build strong customer relationships." },
          { icon: "📦", title: "Inventory & Supply Chain Management", desc: "Real-time tracking of ingredients, automated reordering, and waste reduction to optimize costs." },
          { icon: "📊", title: "Kitchen Display Systems (KDS)", desc: "Digital screens for kitchen staff to manage orders, reduce errors, and improve food preparation times." },
          { icon: "📈", title: "Restaurant Analytics & Reporting", desc: "Comprehensive dashboards for insights into sales, popular dishes, staff performance, and customer trends." },
          { icon: "⚙️", title: "Staff Management & Scheduling", desc: "Tools for employee scheduling, time tracking, and communication to improve operational flow." },
        ]}
        tools={["React", "Node.js", "Python", "AWS/GCP", "Stripe", "Square API", "Toast API", "DoorDash API", "PostgreSQL", "MongoDB"]}
      />
      <ServiceProcess
        gradFrom={gradFrom}
        gradTo={gradTo}
        steps={[
          { num: "01", icon: "🎯", title: "Operational Analysis", desc: "We analyze your restaurant's workflow, menu, and customer journey to identify key areas for digital transformation." },
          { num: "02", icon: "🎨", title: "Solution Design", desc: "Designing intuitive interfaces for staff and customers, and architecting robust backend systems for seamless operations." },
          { num: "03", icon: "💻", title: "Agile Development & Integration", desc: "Building and integrating custom modules like POS, online ordering, and inventory with existing systems." },
          { num: "04", icon: "🚀", title: "Deployment & Training", desc: "Implementing the new systems with minimal disruption, followed by comprehensive staff training and ongoing support." },
        ]}
      />
      <ServiceCTA
        gradFrom={gradFrom}
        gradTo={gradTo}
        benefits={[
          { icon: "⚡", title: "Streamlined Operations", desc: "Automate tasks, reduce errors, and improve service speed from order to delivery." },
          { icon: "📈", title: "Increased Sales & Customer Loyalty", desc: "Boost online orders, enhance dining experiences, and build lasting customer relationships." },
          { icon: "💡", title: "Data-Driven Decision Making", desc: "Gain insights into sales trends, customer preferences, and operational performance." },
          { icon: "👥", title: "Enhanced Customer Experience", desc: "Offer convenient online ordering, personalized offers, and efficient service." },
          { icon: "🔧", title: "Scalable & Adaptable Solutions", desc: "Our platforms grow with your business and adapt to evolving industry demands." },
          { icon: "🤝", title: "Expert Hospitality Tech Partner", desc: "Partner with a team that understands the unique challenges and opportunities in the restaurant sector." },
        ]}
        otherServices={[
          { label: "ECommerce", href: "/industries/ecommerce", icon: "🛒", grad: "from-violet-500 to-purple-600" },
          { label: "App Development", href: "/services/app-development", icon: "📱", grad: "from-violet-500 to-purple-600" },
          { label: "AI Solutions", href: "/services/ai-solutions", icon: "🤖", grad: "from-amber-400 to-orange-500" },
          { label: "Digital Marketing", href: "/services/digital-marketing", icon: "📈", grad: "from-emerald-500 to-green-600" },
        ]}
      />
    </div>
  );
}