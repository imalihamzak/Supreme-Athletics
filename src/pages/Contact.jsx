import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      details: [
        "8648 Dakota Dr.",
        "Gaithersburg, MD 20877"
      ],
      link: null
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: ["(301) 366-1839"],
      link: "tel:3013661839"
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: ["info@supremeathletics.com"],
      link: "mailto:info@supremeathletics.com"
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
    <div className="min-h-screen bg-neutral-950">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-950 pt-8 pb-16">
        <div className="absolute -top-24 -right-24 h-72 w-72 rotate-12 rounded-[40px] border border-white/10 bg-white/5" />
        <div className="absolute -bottom-32 -left-28 h-96 w-96 -rotate-12 rounded-[52px] border border-orange-500/20 bg-orange-500/10" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/90 to-neutral-950">
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs text-orange-500 mb-6">
              <FaEnvelope className="text-orange-500" size={12} />
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-6">
              Contact <span className="text-orange-500">Us</span>
            </h1>
            <p className="text-xl text-white/75 max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-white/70 mb-8">
                  Whether you're ready to start your fitness journey or have questions about our programs, we're here to help.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const Component = info.link ? 'a' : 'div';
                  return (
                    <Component
                      key={index}
                      href={info.link || undefined}
                      className={`p-6 rounded-2xl bg-white/5 border border-white/10 ${info.link ? 'hover:bg-white/10 transition cursor-pointer' : ''}`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-4">
                        <Icon className="text-orange-500" size={20} />
                      </div>
                      <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-white/70 text-sm">
                          {detail}
                        </p>
                      ))}
                    </Component>
                  );
                })}
              </div>

              <div className="p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20">
                <h3 className="text-white font-semibold mb-2">Quick Response</h3>
                <p className="text-white/70 text-sm mb-4">
                  We typically respond to all inquiries within 24 hours. For immediate assistance, please call us.
                </p>
                <Link
                  to="/membership"
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-black font-semibold rounded-xl hover:bg-orange-400 transition"
                >
                  Book Free Assessment
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/80 mb-2 text-sm font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-12 rounded-xl bg-white/5 border border-white/12 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-12 rounded-xl bg-white/5 border border-white/12 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-12 rounded-xl bg-white/5 border border-white/12 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                      placeholder="(301) 555-1234"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 mb-2 text-sm font-medium">
                    Subject *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full h-12 rounded-xl bg-white/5 border border-white/12 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="programs">Program Questions</option>
                    <option value="training">Training Consultation</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 mb-2 text-sm font-medium">
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full rounded-xl bg-white/5 border border-white/12 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500/40 resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-14 rounded-xl bg-orange-500 text-black font-bold text-lg hover:bg-orange-400 transition transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Send Message <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;

