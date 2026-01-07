import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

function GetStarted() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    fitnessGoals: "",
    experienceLevel: "",
    preferredTime: "",
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
      // Using FormSubmit - simple email service (no API keys needed)
      const formDataToSend = new FormData();
      formDataToSend.append("email", "RE@thesupremeathletics.com"); // Your email to receive submissions
      formDataToSend.append("name", `${formData.firstName} ${formData.lastName}`);
      formDataToSend.append("replyto", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("address", formData.address || "Not provided");
      formDataToSend.append("fitness_goals", formData.fitnessGoals);
      formDataToSend.append("experience_level", formData.experienceLevel);
      formDataToSend.append("preferred_time", formData.preferredTime || "Not specified");
      formDataToSend.append("additional_info", formData.additionalInfo || "None");
      formDataToSend.append("subject", `New Membership Inquiry - ${formData.firstName} ${formData.lastName}`);
      formDataToSend.append("message", `
New Membership Inquiry

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address || "Not provided"}

Fitness Goals: ${formData.fitnessGoals}
Experience Level: ${formData.experienceLevel}
Preferred Time: ${formData.preferredTime || "Not specified"}

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
        address: "",
        fitnessGoals: "",
        experienceLevel: "",
        preferredTime: "",
        additionalInfo: "",
      });
    } catch (err) {
      console.error("Error sending email:", err);
      setError("Failed to submit form. Please try again or contact us directly at (240) 855-2744.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-neutral-900">
        <Header />
        <section className="relative overflow-hidden bg-neutral-900 pt-6 pb-16">
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
                Thank You!
              </h2>
              <p className="text-white/70 text-lg mb-8">
                We've received your information and will contact you shortly to get you started on your fitness journey.
              </p>
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 h-14 rounded-xl bg-orange-500 text-black font-bold text-lg hover:bg-orange-400 transition"
              >
                Return to Home
              </motion.a>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

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
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-4"
            >
              Get <span className="text-orange-500">Started</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-white/75 max-w-3xl mx-auto"
            >
              Fill out the form below and we'll get in touch with you to start your fitness journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-8 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
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

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-white/90 font-medium mb-2">
                  Address
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition"
                    placeholder="8648 Dakota Dr., Gaithersburg, MD 20877"
                  />
                </div>
              </div>

              {/* Fitness Goals */}
              <div>
                <label htmlFor="fitnessGoals" className="block text-white/90 font-medium mb-2">
                  Fitness Goals *
                </label>
                <textarea
                  id="fitnessGoals"
                  name="fitnessGoals"
                  value={formData.fitnessGoals}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition resize-none"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>

              {/* Experience Level */}
              <div>
                <label htmlFor="experienceLevel" className="block text-white/90 font-medium mb-2">
                  Experience Level *
                </label>
                <select
                  id="experienceLevel"
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition"
                >
                  <option value="" className="bg-neutral-900">Select your experience level</option>
                  <option value="beginner" className="bg-neutral-900">Beginner</option>
                  <option value="intermediate" className="bg-neutral-900">Intermediate</option>
                  <option value="advanced" className="bg-neutral-900">Advanced</option>
                </select>
              </div>

              {/* Preferred Time */}
              <div>
                <label htmlFor="preferredTime" className="block text-white/90 font-medium mb-2">
                  Preferred Training Time
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition"
                >
                  <option value="" className="bg-neutral-900">Select preferred time</option>
                  <option value="morning" className="bg-neutral-900">Morning (6 AM - 12 PM)</option>
                  <option value="afternoon" className="bg-neutral-900">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening" className="bg-neutral-900">Evening (5 PM - 9 PM)</option>
                  <option value="flexible" className="bg-neutral-900">Flexible</option>
                </select>
              </div>

              {/* Additional Info */}
              <div>
                <label htmlFor="additionalInfo" className="block text-white/90 font-medium mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition resize-none"
                  placeholder="Any additional information you'd like to share..."
                />
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
                {isSubmitting ? "Submitting..." : "Submit & Get Started"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default GetStarted;

