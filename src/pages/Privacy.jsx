import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Privacy() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-8"
          >
            Privacy Policy
          </motion.h1>
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p className="text-sm text-white/60">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, including when you create an account, book a session, or contact us for support.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information only as described in this policy.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:RE@thesupremeathletics.com" className="text-orange-500 hover:underline">RE@thesupremeathletics.com</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Privacy;

