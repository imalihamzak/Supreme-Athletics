import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "./CountUp";

// CTA / Join Now Section with Hero-Style Background
function CTASection() {
  return (
    <section className="bg-neutral-900 py-4 md:py-6 relative overflow-hidden">
      {/* Diagonal Boxes + Texture Overlay */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rotate-12 rounded-[40px] border border-orange-500/20 bg-orange-500/10" />
      <div className="absolute -bottom-32 -right-28 h-96 w-96 -rotate-12 rounded-[52px] border border-white/10 bg-white/5" />

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-900">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 mb-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
            Limited Time Offer
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-black tracking-tight text-white leading-tight"
          >
            Ready to Transform Your Body?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-white/75 max-w-2xl mx-auto"
          >
            Join Supreme Athletics today and start your transformation. 
            No commitment, no pressure—just results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              to="/get-started"
              className="inline-flex items-center justify-center px-6 md:px-8 h-12 md:h-14 rounded-2xl bg-orange-500 text-black font-bold text-base md:text-lg hover:bg-orange-400 transition transform hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              Get Started
            </Link>
            
            <Link
              to="/program"
              className="inline-flex items-center justify-center px-6 md:px-8 h-12 md:h-14 rounded-2xl border-2 border-white/20 bg-white/5 text-white font-semibold text-base md:text-lg hover:bg-white/10 transition"
            >
              View Our Programs
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { value: "1000+", label: "Members Transformed" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "10+", label: "Years Experience" }
            ].map((stat, index) => {
              // Parse the value to extract number and suffix
              let endValue, suffix, decimals = 0;
              if (stat.value.includes("/")) {
                // Handle "4.9/5"
                const [num, denom] = stat.value.split("/");
                endValue = parseFloat(num);
                suffix = `/5`;
                decimals = 1;
              } else if (stat.value.includes("+")) {
                // Handle "1000+", "10+"
                endValue = parseInt(stat.value.replace("+", ""));
                suffix = "+";
              } else {
                endValue = parseFloat(stat.value);
                suffix = "";
              }

              return (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="text-3xl font-black text-orange-500">
                    <CountUp end={endValue} suffix={suffix} decimals={decimals} />
                  </div>
                  <div className="text-sm text-white/60 mt-1">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-5 text-sm text-white/50"
          >
            ✓ No credit card required • ✓ Cancel anytime • ✓ Results guaranteed
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;

