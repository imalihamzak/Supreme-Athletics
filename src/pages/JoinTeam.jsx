import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheckCircle, FaDumbbell, FaUsers, FaChartLine, FaGraduationCap, FaHeart, FaDollarSign, FaClock, FaUser, FaEnvelope, FaPhone, FaFileAlt } from "react-icons/fa";

function JoinTeam() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    certification: "",
    experience: "",
    cprCertified: "",
    additionalInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("email", "RE@thesupremeathletics.com");
      formDataToSend.append("name", `${formData.firstName} ${formData.lastName}`);
      formDataToSend.append("replyto", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("certification", formData.certification);
      formDataToSend.append("experience", formData.experience);
      formDataToSend.append("cpr_certified", formData.cprCertified);
      formDataToSend.append("additional_info", formData.additionalInfo || "None");
      formDataToSend.append("subject", `New Trainer Application - ${formData.firstName} ${formData.lastName}`);
      formDataToSend.append("message", `
New Trainer Application

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Certification: ${formData.certification}
Years of Experience: ${formData.experience}
CPR/AED Certified: ${formData.cprCertified}

Additional Information:
${formData.additionalInfo || "None"}
      `);

      const response = await fetch("https://formsubmit.co/ajax/RE@thesupremeathletics.com", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        certification: "",
        experience: "",
        cprCertified: "",
        additionalInfo: "",
      });
    } catch (err) {
      console.error("Error sending email:", err);
      setError("Failed to submit application. Please try again or contact us directly at (240) 855-2744.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: FaDollarSign,
      title: "Competitive Compensation",
      description: "Earn what you're worth with competitive pay and bonus opportunities"
    },
    {
      icon: FaGraduationCap,
      title: "Continuing Education",
      description: "Ongoing training and certification support to advance your career"
    },
    {
      icon: FaUsers,
      title: "Supportive Team",
      description: "Work with a collaborative team of passionate fitness professionals"
    },
    {
      icon: FaHeart,
      title: "Make a Difference",
      description: "Transform lives and be part of members' fitness journeys"
    },
    {
      icon: FaChartLine,
      title: "Career Growth",
      description: "Advancement opportunities and career development pathways"
    },
    {
      icon: FaClock,
      title: "Flexible Schedule",
      description: "Work-life balance with flexible scheduling options"
    }
  ];

  const requirements = [
    "Nationally recognized personal training certification (NASM, ACE, ACSM, NSCA, etc.)",
    "CPR/AED certification",
    "Minimum 1 year of personal training experience",
    "Strong communication and interpersonal skills",
    "Passion for helping others achieve their fitness goals",
    "Knowledge of exercise science and program design",
    "Ability to motivate and inspire clients",
    "Professional appearance and demeanor"
  ];

  const whyJoin = [
    {
      title: "State-of-the-Art Facility",
      description: "Work in a modern, well-equipped facility with the latest training equipment"
    },
    {
      title: "Established Clientele",
      description: "Join a thriving gym with a strong member base and growth potential"
    },
    {
      title: "Marketing Support",
      description: "We handle marketing and lead generation so you can focus on training"
    },
    {
      title: "Positive Culture",
      description: "Be part of a positive, supportive team environment"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-900 pt-6 pb-8">
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
              <FaDumbbell className="text-orange-500" size={12} />
              Join Our Team
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-6"
            >
              Join the <span className="text-orange-500">Supreme</span> Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/75 max-w-3xl mx-auto"
            >
              Are you a passionate fitness professional looking to make a real impact? Join our team of expert trainers and help transform lives at Supreme Athletics.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Join Supreme Athletics?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We're looking for passionate trainers who share our commitment to excellence and member success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {whyJoin.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="relative py-16 overflow-hidden">
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
              What We Offer
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
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

      {/* Requirements */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6 text-center"
            >
              Requirements
            </motion.h2>
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-orange-500 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-white/80">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Application Form */}
      {!isSubmitted ? (
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
          
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Apply Now
              </h2>
              <p className="text-lg text-white/70">
                Fill out the form below to apply for a position on our training team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-white/90 font-medium mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white/90 font-medium mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-white/90 font-medium mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white/90 font-medium mb-2">
                      Phone *
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition"
                        placeholder="(240) 855-2744"
                      />
                    </div>
                  </div>
                </div>

                {/* Certification */}
                <div>
                  <label htmlFor="certification" className="block text-white/90 font-medium mb-2">
                    Personal Training Certification *
                  </label>
                  <div className="relative">
                    <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                    <select
                      id="certification"
                      name="certification"
                      value={formData.certification}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition appearance-none"
                    >
                      <option value="" className="bg-neutral-900">Select certification</option>
                      <option value="NASM" className="bg-neutral-900">NASM</option>
                      <option value="ACE" className="bg-neutral-900">ACE</option>
                      <option value="ACSM" className="bg-neutral-900">ACSM</option>
                      <option value="NSCA" className="bg-neutral-900">NSCA</option>
                      <option value="Other" className="bg-neutral-900">Other</option>
                    </select>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="block text-white/90 font-medium mb-2">
                    Years of Personal Training Experience *
                  </label>
                  <div className="relative">
                    <FaDumbbell className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition appearance-none"
                    >
                      <option value="" className="bg-neutral-900">Select experience</option>
                      <option value="1-2 years" className="bg-neutral-900">1-2 years</option>
                      <option value="3-5 years" className="bg-neutral-900">3-5 years</option>
                      <option value="6-10 years" className="bg-neutral-900">6-10 years</option>
                      <option value="10+ years" className="bg-neutral-900">10+ years</option>
                    </select>
                  </div>
                </div>

                {/* CPR Certification */}
                <div>
                  <label htmlFor="cprCertified" className="block text-white/90 font-medium mb-2">
                    CPR/AED Certified? *
                  </label>
                  <div className="relative">
                    <FaHeart className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                    <select
                      id="cprCertified"
                      name="cprCertified"
                      value={formData.cprCertified}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition appearance-none"
                    >
                      <option value="" className="bg-neutral-900">Select option</option>
                      <option value="Yes" className="bg-neutral-900">Yes</option>
                      <option value="No" className="bg-neutral-900">No</option>
                      <option value="Willing to obtain" className="bg-neutral-900">Willing to obtain</option>
                    </select>
                  </div>
                </div>

                {/* Additional Info */}
                <div>
                  <label htmlFor="additionalInfo" className="block text-white/90 font-medium mb-2">
                    Additional Information
                  </label>
                  <div className="relative">
                    <FaFileAlt className="absolute left-3 top-4 text-white/40" size={16} />
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition resize-none"
                      placeholder="Tell us about yourself, your training philosophy, and why you'd like to join our team..."
                    />
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-400">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full h-14 rounded-xl bg-orange-500 text-black font-bold text-lg hover:bg-orange-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      ) : (
        <section className="relative py-16 overflow-hidden">
          <div className="max-w-2xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 rounded-3xl p-12 border border-white/10 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-orange-500" size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Application Submitted!
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Thank you for your interest in joining our team. We've received your application and will review it shortly. We'll be in touch soon!
              </p>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default JoinTeam;

