import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaDumbbell, FaGraduationCap, FaStar, FaQuoteLeft, FaCheckCircle, FaUsers } from "react-icons/fa";

function Trainers() {
  const trainers = [
    {
      name: "Sarah Mitchell",
      role: "Head Coach & Founder",
      specialties: ["Strength Training", "Athletic Performance", "Movement Correction"],
      experience: "15+ years",
      certifications: ["NASM", "CSCS", "Precision Nutrition Level 1"],
      bio: "Sarah founded Supreme Athletics with a vision to make world-class coaching accessible to everyone. With over 15 years of experience, she specializes in helping athletes and fitness enthusiasts reach peak performance through science-based training methods.",
      quote: "Fitness isn't just about the body—it's about building confidence that extends to every area of life.",
      achievements: ["3x Powerlifting Champion", "Trainer of the Year 2022", "1000+ Clients Trained"]
    },
    {
      name: "Marcus Johnson",
      role: "Lead Performance Coach",
      specialties: ["Powerlifting", "Movement Correction", "Injury Rehabilitation"],
      experience: "12+ years",
      certifications: ["NASM", "FMS", "USAW", "CES"],
      bio: "Marcus brings a wealth of knowledge in corrective exercise and performance enhancement. His systematic approach to training has helped hundreds of clients overcome limitations and achieve their strength goals.",
      quote: "Every person has untapped potential. Our job is to help them discover it.",
      achievements: ["Master Trainer Certification", "Published Research", "Elite Coach Recognition"]
    },
    {
      name: "Emily Chen",
      role: "Nutrition & Wellness Director",
      specialties: ["Sports Nutrition", "Weight Management", "Metabolic Health"],
      experience: "10+ years",
      certifications: ["RD", "CSSD", "PN Level 2", "IFMCP"],
      bio: "Emily combines clinical nutrition expertise with practical coaching to help clients fuel their bodies for optimal performance. Her holistic approach addresses both nutrition and lifestyle factors.",
      quote: "Nutrition is the foundation of performance. Fuel your body right, and everything else follows.",
      achievements: ["Registered Dietitian", "Board Certified Specialist", "Author & Speaker"]
    },
    {
      name: "James Rodriguez",
      role: "Group Training Specialist",
      specialties: ["HIIT", "Functional Training", "Endurance"],
      experience: "8+ years",
      certifications: ["ACE", "TRX", "CrossFit L2", "Kettlebell"],
      bio: "James creates high-energy group training experiences that make fitness fun and effective. His infectious enthusiasm motivates members to push beyond their limits in a supportive environment.",
      quote: "Group training creates an energy that's impossible to replicate. Together we're unstoppable.",
      achievements: ["Top Rated Coach", "Community Builder Award", "5-Star Reviews"]
    },
    {
      name: "Jessica Parker",
      role: "Youth & Beginner Specialist",
      specialties: ["Beginner Training", "Youth Fitness", "Injury Prevention"],
      experience: "6+ years",
      certifications: ["NASM", "Youth Fitness Specialist", "CPR/AED"],
      bio: "Jessica specializes in working with beginners and young athletes, making fitness accessible and enjoyable for everyone. Her patient, encouraging approach helps clients build confidence and establish healthy habits.",
      quote: "Every expert was once a beginner. The journey starts with a single step.",
      achievements: ["Youth Coach of the Year", "Beginner Program Creator", "High Client Retention"]
    },
    {
      name: "David Kim",
      role: "Senior Strength Coach",
      specialties: ["Powerlifting", "Bodybuilding", "Hypertrophy"],
      experience: "10+ years",
      certifications: ["CSCS", "NASM", "PN Level 1"],
      bio: "David's passion for strength training is matched only by his dedication to helping clients build muscle and strength safely and effectively. His systematic approach to programming delivers consistent results.",
      quote: "Strength is a skill. With proper technique and consistent practice, everyone can get stronger.",
      achievements: ["Elite Powerlifter", "Certified Strength Coach", "500+ Transformations"]
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
              <FaUsers className="text-orange-500" size={12} />
              Our Team
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-6">
              Meet Our <span className="text-orange-500">Expert Trainers</span>
            </h1>
            <p className="text-xl text-white/75 max-w-3xl mx-auto">
              Certified professionals dedicated to your success. Each trainer brings years of experience, passion, and proven results.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition"
              >
                <div className="p-8">
                  {/* Trainer Header */}
                  <div className="mb-6">
                    <div className="w-24 h-24 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-4">
                      <span className="text-orange-500 font-bold text-3xl">
                        {trainer.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {trainer.name}
                    </h3>
                    <p className="text-orange-500 font-semibold mb-3">
                      {trainer.role}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
                      <FaGraduationCap className="text-orange-500" size={14} />
                      <span>{trainer.experience}</span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mb-6 pl-4 border-l-2 border-orange-500/30">
                    <FaQuoteLeft className="text-orange-500/50 mb-2" size={16} />
                    <p className="text-white/80 italic text-sm">
                      "{trainer.quote}"
                    </p>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold text-sm mb-3">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-white/70"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold text-sm mb-2">Certifications:</h4>
                    <div className="space-y-1">
                      {trainer.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <FaCheckCircle className="text-orange-500" size={12} />
                          <span className="text-white/70 text-sm">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-2">Achievements:</h4>
                    <ul className="space-y-1">
                      {trainer.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <FaStar className="text-orange-500 mt-0.5 flex-shrink-0" size={12} />
                          <span className="text-white/70 text-sm">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bio Section */}
                <div className="p-8 pt-0">
                  <p className="text-white/70 text-sm leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Our Team?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Book a free assessment and we'll match you with the perfect trainer for your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/membership"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-black font-bold text-lg rounded-2xl hover:bg-orange-400 transition transform hover:scale-105"
            >
              Book Free Assessment
            </Link>
            <Link
              to="/join-team"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 bg-white/5 text-white font-semibold text-lg rounded-2xl hover:bg-white/10 transition"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Trainers;

