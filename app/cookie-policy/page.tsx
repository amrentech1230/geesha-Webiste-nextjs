import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Cookie Policy | Geesha Solutions",
  description: "Read the Cookie Policy for Geesha Solutions to understand how we use cookies on our website.",
};

const LegalSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">{title}</h2>
    <div className="space-y-4 text-slate-600 leading-relaxed">
      {children}
    </div>
  </div>
);

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-36 overflow-hidden bg-[#060d1a] text-center">
        <div className="animate-blob absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-brand/25 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
            Cookie Policy
          </h1>
          <p className="mt-6 text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-light py-24">
        <div className="max-w-4xl mx-auto px-6">
          <LegalSection title="1. What Are Cookies?">
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
            </p>
          </LegalSection>

          <LegalSection title="2. How We Use Cookies">
            <p>
              We use cookies for various purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>To ensure the proper functioning of our website.</li>
              <li>To analyze how visitors use our site, which helps us improve its design and functionality.</li>
              <li>To personalize your experience, remembering your preferences and settings.</li>
              <li>For marketing and advertising purposes, to deliver relevant content to you.</li>
            </ul>
          </LegalSection>

          <LegalSection title="3. Types of Cookies We Use">
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <strong>Strictly Necessary Cookies:</strong> These are essential for you to browse the website and use its features. Without these cookies, services like shopping carts or e-billing cannot be provided.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These cookies collect information about how you use our website, e.g., which pages you visit most often. These cookies do not collect personally identifiable information. All information these cookies collect is aggregated and therefore anonymous.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These allow our website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features.
              </li>
              <li>
                <strong>Targeting/Advertising Cookies:</strong> These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="4. Third-Party Cookies">
            <p>
              In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
            </p>
          </LegalSection>

          <LegalSection title="5. Managing Cookies">
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by setting or amending your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
            </p>
            <p>
              Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">www.allaboutcookies.org</a>.
            </p>
          </LegalSection>

          <LegalSection title="6. Contact Us">
            <p>
              If you have any questions about this Cookie Policy, please contact us at:
            </p>
            <p className="font-semibold">
              Geesha Solutions Pvt. Ltd.<br />
              sales@geeshasolutions.com
            </p>
          </LegalSection>
        </div>
      </section>

      <CTASection />
    </>
  );
}