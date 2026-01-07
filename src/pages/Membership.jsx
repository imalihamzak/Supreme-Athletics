import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaStar } from "react-icons/fa";

function Membership() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-900 pt-6 pb-12">
        <div className="absolute -top-24 -right-24 h-72 w-72 rotate-12 rounded-[40px] border border-white/10 bg-white/5" />
        <div className="absolute -bottom-32 -left-28 h-96 w-96 -rotate-12 rounded-[52px] border border-orange-500/20 bg-orange-500/10" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-900">
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs text-orange-500 mb-4"
            >
              <FaStar className="text-orange-500" size={12} />
              Free Assessment Included
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-4"
            >
              Start Your <span className="text-orange-500">Transformation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/75 max-w-3xl mx-auto"
            >
              Join Supreme Athletics today and get started with a free assessment. No commitment, no pressure—just results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 overflow-hidden bg-neutral-900">
        <div className="absolute -top-24 -left-24 h-72 w-72 rotate-12 rounded-[40px] border border-orange-500/20 bg-orange-500/10" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl font-semibold text-white mb-6"
            >
              Talk to a trainer to get your personalized pricing.
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 mb-8 text-lg"
            >
              Ready to get started? Join Supreme Athletics and begin your fitness journey today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/get-started"
                className="inline-flex items-center justify-center px-8 h-14 rounded-xl bg-orange-500 text-black font-bold text-lg hover:bg-orange-400 transition transform hover:scale-[1.02]"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative py-12 overflow-hidden bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-black text-orange-500 mb-2">30-Day</div>
              <div className="text-white/70">Money-Back Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-500 mb-2">No</div>
              <div className="text-white/70">Long-Term Contracts</div>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-500 mb-2">Free</div>
              <div className="text-white/70">Initial Assessment</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Membership;

