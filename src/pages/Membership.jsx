import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheckCircle, FaDumbbell, FaUsers, FaChartLine, FaHeart, FaStar } from "react-icons/fa";

function Membership() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    preferredTime: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you soon to schedule your free assessment.");
  };

  const membershipOptions = [
    {
      name: "Basic",
      price: "$79",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "Access to group training classes",
        "Facility access during business hours",
        "Progress tracking app",
        "Community support"
      ],
      cta: "Start Basic"
    },
    {
      name: "Premium",
      price: "$149",
      period: "/month",
      description: "Most popular choice",
      popular: true,
      features: [
        "Everything in Basic",
        "2 personal training sessions/month",
        "Nutrition support & meal planning",
        "Priority scheduling",
        "Monthly body composition analysis"
      ],
      cta: "Start Premium"
    },
    {
      name: "Elite",
      price: "$249",
      period: "/month",
      description: "Maximum results",
      features: [
        "Everything in Premium",
        "4 personal training sessions/month",
        "Customized nutrition coaching",
        "Unlimited priority scheduling",
        "Bi-weekly progress assessments",
        "Dedicated trainer support"
      ],
      cta: "Start Elite"
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
              <FaStar className="text-orange-500" size={12} />
              Free Assessment Included
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-6">
              Start Your <span className="text-orange-500">Transformation</span>
            </h1>
            <p className="text-xl text-white/75 max-w-3xl mx-auto">
              Join Supreme Athletics today and get started with a free assessment. No commitment, no pressure—just results.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
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

      {/* Pricing Plans */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Membership
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Flexible plans designed to fit your goals and budget. All memberships include a free assessment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipOptions.map((option, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 border-2 ${
                  option.popular
                    ? "border-orange-500 bg-white/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{option.name}</h3>
                  <p className="text-white/60 text-sm mb-6">{option.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-black text-white">{option.price}</span>
                    <span className="text-white/60">{option.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-orange-500 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#form"
                  className={`block w-full text-center py-4 rounded-xl font-semibold transition ${
                    option.popular
                      ? "bg-orange-500 text-black hover:bg-orange-400"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}
                >
                  {option.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-white/60 text-sm">
            <p>All plans include a 30-day money-back guarantee. Cancel anytime with 30 days notice.</p>
          </div>
        </div>
      </section>

      {/* Assessment Form */}
      <section id="form" className="relative py-16 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rotate-12 rounded-[40px] border border-orange-500/20 bg-orange-500/10" />
        
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Book Your Free Assessment
              </h2>
              <p className="text-white/70">
                Fill out the form below and we'll contact you within 24 hours to schedule your free assessment.
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
                  Primary Goal *
                </label>
                <select
                  required
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full h-12 rounded-xl bg-white/5 border border-white/12 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                >
                  <option value="">Select your goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="strength">Build Strength</option>
                  <option value="endurance">Improve Endurance</option>
                  <option value="general">General Fitness</option>
                  <option value="sport">Sport Performance</option>
                </select>
              </div>

              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  Preferred Training Time
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full h-12 rounded-xl bg-white/5 border border-white/12 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/40"
                >
                  <option value="">Select preferred time</option>
                  <option value="early-morning">Early Morning (5:30-8am)</option>
                  <option value="mid-morning">Mid Morning (8am-12pm)</option>
                  <option value="afternoon">Afternoon (12-5pm)</option>
                  <option value="evening">Evening (5-9pm)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-orange-500 text-black font-bold text-lg hover:bg-orange-400 transition transform hover:scale-[1.02]"
              >
                Book My Free Assessment
              </button>

              <p className="text-center text-white/60 text-xs">
                By submitting this form, you agree to be contacted about scheduling your free assessment.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative py-16 overflow-hidden">
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

