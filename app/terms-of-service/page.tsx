import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Terms of Service | Geesha Solutions",
  description: "Please read our Terms of Service carefully before using our website and services provided by Geesha Solutions.",
};

const LegalSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">{title}</h2>
    <div className="space-y-4 text-slate-600 leading-relaxed">
      {children}
    </div>
  </div>
);

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-36 overflow-hidden bg-[#060d1a] text-center">
        <div className="animate-blob absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-brand/25 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
            Terms of Service
          </h1>
          <p className="mt-6 text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-light py-24">
        <div className="max-w-4xl mx-auto px-6">
          <LegalSection title="1. Agreement to Terms">
            <p>
              By accessing our website and using our services, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </LegalSection>

          <LegalSection title="2. Use License">
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Geesha Solutions' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>Attempt to decompile or reverse engineer any software contained on Geesha Solutions' website;</li>
              <li>Remove any copyright or other proprietary notations from the materials.</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by Geesha Solutions at any time.
            </p>
          </LegalSection>

          <LegalSection title="3. Disclaimer">
            <p>
              The materials on Geesha Solutions' website are provided on an 'as is' basis. Geesha Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </LegalSection>

          <LegalSection title="4. Limitations">
            <p>
              In no event shall Geesha Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Geesha Solutions' website, even if Geesha Solutions or a Geesha Solutions authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </LegalSection>

          <LegalSection title="5. Governing Law">
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Punjab, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </LegalSection>

          <LegalSection title="6. Contact Us">
            <p>
              If you have any questions about these Terms, please contact us at:
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