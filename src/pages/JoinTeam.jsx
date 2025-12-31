import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheckCircle, FaDumbbell, FaUsers, FaChartLine, FaGraduationCap, FaHeart, FaDollarSign, FaClock } from "react-icons/fa";

function JoinTeam() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    certifications: "",
    specialty: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll review your application and get back to you soon.");
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
              <FaDumbbell className="text-orange-500" size={12} />
              Join Our Team
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-6">
              Join the <span className="text-orange-500">Supreme</span> Team
            </h1>
            <p className="text-xl text-white/75 max-w-3xl mx-auto">
              Are you a passionate fitness professional looking to make a real impact? Join our team of expert trainers and help transform lives at Supreme Athletics.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Join Supreme Athletics?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We're looking for passionate trainers who share our commitment to excellence and member success.
            </p>
          </div>

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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Offer
            </h2>
          </div>

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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Requirements
            </h2>
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
      <section className="relative py-16 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rotate-12 rounded-[40px] border border-orange-500/20 bg-orange-500/10" />
        
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Apply Now
              </h2>
              <p className="text-white/70">
                Fill out the form below and we'll get back to you within 48 hours.
              </p>
            </div>

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
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-12 rounded-xl bg-white/5 border border-white/12 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                  placeholder="(301) 555-1234"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Years of Experience *
                </label>
                <select
                  required
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full h-12 rounded-xl bg-white/5 border border-white/12 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                >
                  <option value="">Select experience level</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Certifications *
                </label>
                <input
                  type="text"
                  required
                  value={formData.certifications}
                  onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                  className="w-full h-12 rounded-xl bg-white/5 border border-white/12 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                  placeholder="NASM, ACE, ACSM, etc."
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Specialty / Areas of Focus
                </label>
                <input
                  type="text"
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="w-full h-12 rounded-xl bg-white/5 border border-white/12 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                  placeholder="Strength training, weight loss, athletic performance, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-orange-500 text-black font-bold text-lg hover:bg-orange-400 transition transform hover:scale-[1.02]"
              >
                Submit Application
              </button>

              <p className="text-center text-white/60 text-xs">
                We'll review your application and contact you within 48 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default JoinTeam;

