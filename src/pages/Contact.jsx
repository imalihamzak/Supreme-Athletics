import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

function Contact() {

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      details: [
        "8648 Dakota Dr.",
        "Gaithersburg, MD 20877"
      ],
      link: "https://www.google.com/maps/search/?api=1&query=8648+Dakota+Dr,+Gaithersburg,+MD+20877"
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: ["(240) 855-2744"],
      link: "tel:2408552744"
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: ["RE@thesupremeathletics.com"],
      link: "mailto:RE@thesupremeathletics.com"
    },
    {
      icon: FaClock,
      title: "Hours",
      details: [
        "Mon-Fri: 5:30am - 9pm",
        "Sat: 7am - 2pm",
        "Sun: 9am - 1pm"
      ],
      link: null
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
              className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs text-orange-500 mb-6"
            >
              <FaEnvelope className="text-orange-500" size={12} />
              Get In Touch
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-6"
            >
              Contact <span className="text-orange-500">Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/75 max-w-3xl mx-auto"
            >
              Have questions? We're here to help. Reach out and we'll get back to you as soon as possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Whether you're ready to start your fitness journey or have questions about our programs, we're here to help.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const Component = info.link ? 'a' : 'div';
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Component
                    href={info.link || undefined}
                    className={`p-6 rounded-2xl bg-white/5 border border-white/10 h-full flex flex-col ${info.link ? 'hover:bg-white/10 transition cursor-pointer' : ''}`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-4">
                      <Icon className="text-orange-500" size={24} />
                    </div>
                    <h3 className="text-white font-semibold mb-3 text-lg">{info.title}</h3>
                    <div className="space-y-1 flex-grow">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-white/70 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </Component>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Response CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="p-8 rounded-3xl bg-orange-500/10 border border-orange-500/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Quick Response</h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                We typically respond to all inquiries within 24 hours. For immediate assistance, please call us at <a href="tel:2408552744" className="text-orange-500 hover:underline font-semibold">(240) 855-2744</a>.
              </p>
              <Link
                to="/get-started"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-black font-bold text-lg rounded-xl hover:bg-orange-400 transition transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;

