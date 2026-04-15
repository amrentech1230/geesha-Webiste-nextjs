import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Privacy Policy | Geesha Solutions",
  description: "Read the Privacy Policy for Geesha Solutions to understand how we collect, use, and protect your data.",
};

const LegalSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">{title}</h2>
    <div className="space-y-4 text-slate-600 leading-relaxed">
      {children}
    </div>
  </div>
);

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-36 overflow-hidden bg-[#060d1a] text-center">
        <div className="animate-blob absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-brand/25 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-6 text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-light py-24">
        <div className="max-w-4xl mx-auto px-6">
          <LegalSection title="1. Introduction">
            <p>
              Welcome to Geesha Solutions. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </LegalSection>

          <LegalSection title="2. Collection of Your Information">
            <p>
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
              </li>
              <li>
                <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="3. Use of Your Information">
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Create and manage your account.</li>
              <li>Email you regarding your account or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            </ul>
          </LegalSection>

          <LegalSection title="4. Disclosure of Your Information">
            <p>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </li>
              <li>
                <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Security of Your Information">
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </LegalSection>

          <LegalSection title="6. Contact Us">
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
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