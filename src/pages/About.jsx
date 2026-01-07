import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "../components/CountUp";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaDumbbell, FaHeart, FaUsers, FaTrophy, FaMapMarkerAlt, FaClock, FaAward, FaStar, FaCheckCircle, FaQuoteLeft, FaInfoCircle } from "react-icons/fa";
import groupTrainingImage from "../assets/group-training-image.png";
import oneOnOneImage from "../assets/one-on-one-image.png";

function About() {
  const values = [
    {
      icon: FaHeart,
      title: "Commitment to Results",
      description: "We're not satisfied until you achieve your goals. Every program, every session, every interaction is designed to move you closer to success."
    },
    {
      icon: FaUsers,
      title: "Community First",
      description: "We believe transformation happens best in community. Our members support, motivate, and celebrate each other's wins."
    },
    {
      icon: FaDumbbell,
      title: "Science-Based Training",
      description: "Our methods are backed by exercise science and proven results. No gimmicks, no shortcuts—just effective, sustainable training."
    },
    {
      icon: FaTrophy,
      title: "Excellence in Coaching",
      description: "Our trainers are certified professionals who continue their education to bring you the latest, most effective training techniques."
    }
  ];

  const stats = [
    { number: "1000+", label: "Members Transformed" },
    { number: "10+", label: "Years of Excellence" },
    { number: "50+", label: "Certified Trainers" },
    { number: "4.9/5", label: "Average Rating" }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Head Coach & Founder",
      specialties: ["Strength Training", "Athletic Performance"],
      experience: "15+ years",
      certifications: "NASM, CSCS, Precision Nutrition",
      quote: "Fitness isn't just about the body—it's about building confidence that extends to every area of life."
    },
    {
      name: "Marcus Johnson",
      role: "Lead Performance Coach",
      specialties: ["Powerlifting", "Movement Correction"],
      experience: "12+ years",
      certifications: "NASM, FMS, USAW",
      quote: "Every person has untapped potential. Our job is to help them discover it."
    },
    {
      name: "Emily Chen",
      role: "Nutrition & Wellness Director",
      specialties: ["Sports Nutrition", "Weight Management"],
      experience: "10+ years",
      certifications: "RD, CSSD, PN Level 2",
      quote: "Nutrition is the foundation of performance. Fuel your body right, and everything else follows."
    },
    {
      name: "James Rodriguez",
      role: "Group Training Specialist",
      specialties: ["HIIT", "Functional Training"],
      experience: "8+ years",
      certifications: "ACE, TRX, CrossFit L2",
      quote: "Group training creates an energy that's impossible to replicate. Together we're unstoppable."
    }
  ];

  const achievements = [
    { icon: FaTrophy, title: "Best Gym Award", description: "Gaithersburg Community Choice 2022-2024" },
    { icon: FaStar, title: "5-Star Rating", description: "Consistently rated 4.9+ stars across all platforms" },
    { icon: FaUsers, title: "Community Impact", description: "1,000+ successful transformations since 2014" },
    { icon: FaAward, title: "Training Excellence", description: "Certified trainers with ongoing education" }
  ];

  const memberTestimonials = [
    {
      name: "Jennifer Martinez",
      role: "Member since 2020",
      quote: "Supreme Athletics changed my life. The coaches genuinely care about your success, and the community support is incredible. I've lost 40 pounds and gained so much confidence.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Member since 2018",
      quote: "The personalized approach here is unmatched. They took time to understand my goals and created a program that actually works with my lifestyle. Best investment I've made in myself.",
      rating: 5
    },
    {
      name: "Amanda Thompson",
      role: "Member since 2021",
      quote: "As a busy professional, I needed efficiency. The trainers here maximize every minute of my workout. I'm stronger, faster, and more energized than I've ever been.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-900 pt-6 pb-16">
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
              <FaInfoCircle className="text-orange-500" size={12} />
              About Us
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-6"
            >
              More Than a Gym.<br />
              <span className="text-orange-500">A Movement.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/75 max-w-3xl mx-auto"
            >
              At Supreme Athletics, we're dedicated to transforming lives through strength, conditioning, and unwavering commitment to your success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              // Parse the value to extract number and suffix
              let endValue, suffix, decimals = 0;
              if (stat.number.includes("/")) {
                // Handle "4.9/5"
                const [num, denom] = stat.number.split("/");
                endValue = parseFloat(num);
                suffix = `/5`;
                decimals = 1;
              } else if (stat.number.includes("+")) {
                // Handle "1000+", "10+", "50+"
                endValue = parseInt(stat.number.replace("+", ""));
                suffix = "+";
              } else {
                endValue = parseFloat(stat.number);
                suffix = "";
              }

              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">
                    <CountUp end={endValue} suffix={suffix} decimals={decimals} />
                  </div>
                  <div className="text-white/70 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                  <FaHeart className="text-orange-500" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-white/80 leading-relaxed">
                To empower every individual to discover their strength, achieve their goals, and transform their lives through expert coaching, proven methodologies, and unwavering support. We believe <span className="text-orange-500 font-semibold">fitness is for everyone</span>, regardless of where you're starting from.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                  <FaTrophy className="text-orange-500" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-white/80 leading-relaxed">
                To be the premier destination for fitness transformation in the region, recognized for our commitment to excellence, innovative training methods, and the profound impact we have on our community. We envision a future where <span className="text-orange-500 font-semibold">everyone has access</span> to the tools and support they need to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rotate-12 rounded-[40px] border border-orange-500/20 bg-orange-500/10" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Story
            </h2>
          </motion.div>
          
          <div className="space-y-6 text-lg text-white/70 leading-relaxed">
            <p>
              Supreme Athletics was born from a simple belief: <span className="text-white font-semibold">everyone deserves access to world-class fitness coaching</span>. What started as a small training facility has grown into a thriving community of over 1,000 members who are committed to becoming their best selves.
            </p>
            <p>
              Located in Gaithersburg, MD, we've spent over a decade helping people from all walks of life achieve their fitness goals. Whether you're training for your first 5K, looking to lose weight, building strength, or competing at an elite level, we have the expertise and community support to help you succeed.
            </p>
            <p>
              Our approach combines <span className="text-orange-500 font-semibold">science-based training methods</span> with personalized coaching and an unwavering commitment to your success. We're not here to sell you supplements or quick fixes. We're here to build lasting habits, genuine strength, and a community that supports you every step of the way.
            </p>
            <p>
              When you join Supreme Athletics, you're not just joining a gym—you're joining a movement of people who refuse to settle for average. Welcome to your transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rotate-12 rounded-[40px] border border-white/10 bg-white/5" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our core values guide everything we do and every interaction we have with our members.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute -bottom-32 -right-28 h-96 w-96 -rotate-12 rounded-[52px] border border-white/10 bg-white/5" />
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
              Meet Our Team
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Passionate experts dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <div className="flex items-start gap-6 mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-500 font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-orange-500 text-sm font-semibold mb-2">
                      {member.role}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {member.specialties.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-white/70"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                    <p className="text-white/60 text-sm">
                      {member.experience} • {member.certifications}
                    </p>
                  </div>
                </div>
                <div className="pl-2 border-l-2 border-orange-500/30">
                  <FaQuoteLeft className="text-orange-500/50 mb-2" size={16} />
                  <p className="text-white/80 italic">
                    "{member.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/join-team"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/20 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements & Recognition */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recognition & Achievements
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our commitment to excellence hasn't gone unnoticed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-orange-500/20 border border-orange-500/30 mb-4">
                    <Icon className="text-orange-500" size={28} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{achievement.title}</h3>
                  <p className="text-white/70 text-sm">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rotate-12 rounded-[40px] border border-white/10 bg-white/5" />
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
              What Our Members Say
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Real stories from real people who've transformed their lives with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {memberTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Highlights */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Facility
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              State-of-the-art equipment in a welcoming, motivating environment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={groupTrainingImage}
                alt="Group Training Facility"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={oneOnOneImage}
                alt="Personal Training Space"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "10,000+ sq ft training space",
              "Premium strength equipment",
              "Functional training zones",
              "Cardio & conditioning area",
              "Recovery & stretching space",
              "Locker rooms & amenities"
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <FaCheckCircle className="text-orange-500 flex-shrink-0" size={18} />
                <span className="text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Location */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-orange-500" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white">Visit Us</h3>
              </div>
              <div className="space-y-3 text-white/70">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=8648+Dakota+Dr,+Gaithersburg,+MD+20877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg hover:text-orange-500 transition cursor-pointer"
                >
                  <p className="text-lg">8648 Dakota Dr.</p>
                  <p className="text-lg">Gaithersburg, MD 20877</p>
                </a>
                <a
                  href="tel:2408552744"
                  className="block text-orange-500 hover:text-orange-400 transition"
                >
                  (240) 855-2744
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                  <FaClock className="text-orange-500" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white">Hours</h3>
              </div>
              <div className="space-y-2 text-white/70">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white">5:30am - 9pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">7am - 2pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white">9am - 1pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Join Our Community?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/70 mb-8"
          >
            Start your transformation today. Join our community and achieve your fitness goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/get-started"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-black font-bold text-lg rounded-2xl hover:bg-orange-400 transition transform hover:scale-105"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;

