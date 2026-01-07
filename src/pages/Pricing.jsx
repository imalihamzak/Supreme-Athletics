import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheckCircle, FaDumbbell, FaUsers, FaChartLine, FaHeart, FaStar, FaDollarSign } from "react-icons/fa";

function Pricing() {
  const membershipOptions = [
    {
      name: "Basic",
      description: "Perfect for getting started",
      features: [
        "Access to group training classes",
        "Facility access during business hours",
        "Progress tracking app",
        "Community support"
      ],
      cta: "Get Started",
      href: "/get-started"
    },
    {
      name: "Premium",
      description: "Most popular choice",
      popular: true,
      features: [
        "Everything in Basic",
        "2 personal training sessions/month",
        "Nutrition support & meal planning",
        "Priority scheduling",
        "Monthly body composition analysis"
      ],
      cta: "Get Started",
      href: "/get-started"
    },
    {
      name: "Elite",
      description: "Maximum results",
      features: [
        "Everything in Premium",
        "4 personal training sessions/month",
        "Customized nutrition coaching",
        "Unlimited priority scheduling",
        "Bi-weekly progress assessments",
        "Dedicated trainer support"
      ],
      cta: "Get Started",
      href: "/get-started"
    }
  ];

  const benefits = [
    {
      icon: FaDumbbell,
      title: "Expert Coaching",
      description: "Certified trainers dedicated to your success"
    },
    {
      icon: FaChartLine,
      title: "Track Progress",
      description: "Measure your improvements with our tracking system"
    },
    {
      icon: FaUsers,
      title: "Community Support",
      description: "Join a motivating community of like-minded individuals"
    },
    {
      icon: FaHeart,
      title: "Flexible Options",
      description: "Choose the plan that fits your lifestyle and goals"
    }
  ];

  const addOns = [
    {
      name: "Additional Personal Training",
      description: "Extra one-on-one sessions beyond your plan"
    },
    {
      name: "Nutrition Coaching Only",
      description: "Standalone nutrition support and meal planning"
    },
    {
      name: "Online Training",
      description: "Virtual coaching and workout programming"
    }
  ];

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
              <FaDollarSign className="text-orange-500" size={12} />
              Transparent Pricing
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-4"
            >
              Simple, <span className="text-orange-500">Flexible</span> Pricing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/75 max-w-3xl mx-auto"
            >
              Choose the membership plan that works for you. All plans include a free initial assessment. Pricing is personalized by your trainer—no hidden fees, cancel anytime.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="relative py-12 overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Membership
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Flexible plans designed to fit your goals and budget. All memberships include a free assessment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 border-2 ${
                  option.popular
                    ? "border-orange-500 bg-white/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {option.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  >
                    <span className="bg-orange-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </motion.div>
                )}
                
                <div className="text-center mb-8">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {option.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="text-white/60 text-sm mb-6"
                  >
                    {option.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="text-white/70 text-sm mb-4"
                  >
                    Personalized pricing available
                  </motion.div>
                </div>

                <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  className="space-y-4 mb-8"
                >
                  {option.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.4 + idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <FaCheckCircle className="text-orange-500 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-white/80">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                >
                  <Link
                    to={option.href}
                    className={`block w-full text-center py-4 rounded-xl font-semibold transition ${
                      option.popular
                        ? "bg-orange-500 text-black hover:bg-orange-400"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    {option.cta}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center text-white/60 text-sm">
            <p>All plans include a 30-day money-back guarantee. Cancel anytime with 30 days notice.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-12 overflow-hidden bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-orange-500/20 border border-orange-500/30 mb-4">
                    <Icon className="text-orange-500" size={28} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="relative py-12 overflow-hidden bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Add-On Services
            </h2>
            <p className="text-lg text-white/70">
              Enhance your membership with additional services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addOn, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                  className="text-white font-semibold text-lg mb-2"
                >
                  {addOn.name}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-sm font-semibold text-white mb-3"
                >
                  Pricing provided by your trainer.
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-white/70 text-sm"
                >
                  {addOn.description}
                </motion.p>
              </motion.div>
            ))}
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

      {/* CTA Section */}
      <section className="relative py-12 overflow-hidden bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white/5 rounded-3xl p-12 border border-white/10">
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
              className="text-lg text-white/70 mb-8"
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
                className="inline-flex items-center justify-center px-8 h-14 rounded-xl bg-orange-500 text-black font-bold text-lg hover:bg-orange-400 transition transform hover:scale-105"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Pricing;

