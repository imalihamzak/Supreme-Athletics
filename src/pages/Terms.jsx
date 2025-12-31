import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Terms() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />
      
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p className="text-sm text-white/60">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Membership Terms</h2>
              <p>Memberships are month-to-month and can be cancelled with 30 days notice. All members must complete a health screening before beginning training.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Cancellation Policy</h2>
              <p>Cancellations require 30 days written notice. Membership fees are non-refundable except as provided by law.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Liability Waiver</h2>
              <p>By participating in our programs, you acknowledge the risks associated with physical activity and agree to hold Supreme Athletics harmless for any injuries.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Code of Conduct</h2>
              <p>All members must respect facility rules, other members, and staff. Violations may result in membership termination.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
              <p>For questions about these terms, contact us at <a href="mailto:info@supremeathletics.com" className="text-orange-500 hover:underline">info@supremeathletics.com</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Terms;

