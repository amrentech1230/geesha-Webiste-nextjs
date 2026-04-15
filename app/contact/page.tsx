import { Mail, Phone, MapPin, Building, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | Geesha Solutions",
  description: "Get in touch with Geesha Solutions. We're here to answer your questions about web development, AI solutions, and digital transformation. Reach out via email, phone, or our contact form.",
};

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    content: "Our team is ready to answer all your questions.",
    contact: "sales@geeshasolutions.com",
    href: "mailto:sales@geeshasolutions.com",
    grad: "from-sky-400 to-blue-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "Speak with our experts for a personalized consultation.",
    contact: "+91 9780804666",
    href: "tel:+919780804666",
    grad: "from-emerald-400 to-teal-500",
  },
  {
    icon: Building,
    title: "Our Office",
    content: "Plot D, 268 A, 4th Floor, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 140308",
    contact: "View on map",
    href: "https://www.google.com/maps/search/?api=1&query=Geesha+Solutions+Pvt.+Ltd.,+Plot+D,+268+A,+4th+Floor,+Phase+8B,+Industrial+Area,+Sector+74,+Sahibzada+Ajit+Singh+Nagar,+Punjab+140308",
    grad: "from-violet-500 to-purple-600",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-36 overflow-hidden bg-[#060d1a] text-center">
        <div className="animate-blob absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-brand/20 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="section-label label-blue inline-flex mb-6">
            ✦ Let's Connect
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
            Get in Touch
          </h1>
          <p className="mt-6 text-white/50 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Have a project in mind, a question about our services, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="relative py-28 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 dot-grid pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-brand/10 blur-[150px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Contact Details */}
            <div className="space-y-10">
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                Reach Out to Us
              </h2>
              <p className="text-lg text-slate-600 max-w-md">
                Whether you have a question, a project proposal, or just want to say hello, we're here to help.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {contactDetails.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-start p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group border border-slate-100"
                    >
                      <div
                        className={`shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${item.grad} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}
                      >
                        <Icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mt-4">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        {item.content}
                      </p>
                      <div
                        className={`mt-3 inline-block text-base font-semibold bg-gradient-to-r ${item.grad} bg-clip-text text-transparent group-hover:brightness-110 transition`}
                      >
                        {item.contact}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="card-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-slate-300/70 border border-slate-200/80 bg-white">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" placeholder="John Doe" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand focus:ring-brand transition p-3" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" placeholder="you@example.com" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand focus:ring-brand transition p-3" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" id="subject" placeholder="e.g., Project Inquiry" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand focus:ring-brand transition p-3" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={6} placeholder="Tell us about your project or inquiry..." className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand focus:ring-brand transition p-3"></textarea>
                </div>
                <button type="submit" className="shine-btn w-full py-3.5 bg-gradient-to-r from-brand to-sky-500 text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-28 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 dot-grid pointer-events-none" />
        <div className="max-w-full mx-auto px-0">
          <div className="text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Location</h2>
        <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
          Plot D, 268 A, 4th Floor, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 140308
        </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/70">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13723.031576114316!2d76.67380028128548!3d30.697087287237657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef45206c1e1b%3A0x891b3ebe01522a70!2sGeesha%20Solutions!5e0!3m2!1sen!2sin!4v1776086143423!5m2!1sen!2sin" 
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
