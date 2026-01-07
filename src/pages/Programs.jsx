import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import oneOnOneImage from "../assets/one-on-one-image.png";
import groupTrainingImage from "../assets/group-training-image.png";
import groupCardioImage from "../assets/group-cardio-image.png";
import nutritionSupportImage from "../assets/nutrition-support-image.png";
import boxingImage from "../assets/boxing.png";
import { FaCheckCircle, FaClock, FaDumbbell, FaUsers, FaChartLine } from "react-icons/fa";

function Programs() {
  const programs = [
    {
      id: "one-on-one",
      title: "One-on-One Coaching",
      subtitle: "Personalized Training Excellence",
      image: oneOnOneImage,
      description: "Experience the ultimate in personalized fitness coaching. Work directly with expert trainers who design custom programs tailored to your specific goals, schedule, and fitness level.",
      highlights: [
        "1-on-1 attention from certified trainers",
        "Customized workout plans for your goals",
        "Flexible scheduling around your life",
        "Form correction and injury prevention",
        "Goal-specific programming",
        "Progress tracking and adjustments"
      ],
      features: [
        { icon: FaDumbbell, text: "Strength & Conditioning Focus" },
        { icon: FaChartLine, text: "Progress Tracking" },
        { icon: FaClock, text: "Flexible Scheduling" },
      ],
      cta: "Start Your Personal Journey"
    },
    {
      id: "group-training",
      title: "Group Training",
      subtitle: "High-Energy Group Sessions",
      image: groupTrainingImage,
      description: "Join dynamic group classes that combine strength training, conditioning, and high-intensity workouts. Push your limits alongside motivated members in a supportive, high-energy environment.",
      highlights: [
        "High-energy group atmosphere",
        "Expert-led structured workouts",
        "Accountability and motivation",
        "Cost-effective training option",
        "Variety of class formats",
        "Community support and camaraderie"
      ],
      features: [
        { icon: FaUsers, text: "Group Dynamics" },
        { icon: FaDumbbell, text: "Full-Body Workouts" },
        { icon: FaClock, text: "Structured Schedule" },
      ],
      cta: "Join a Group Class"
    },
    {
      id: "group-cardio",
      title: "Group Cardio",
      subtitle: "Heart-Pumping Cardio Sessions",
      image: groupCardioImage,
      description: "Burn calories, build endurance, and improve cardiovascular health with our fun, heart-pumping cardio classes. Perfect for fat loss, stamina building, and staying active.",
      highlights: [
        "High-intensity cardio workouts",
        "Fat loss and endurance focus",
        "Fun, motivating class formats",
        "Suitable for all fitness levels",
        "Social and energetic atmosphere",
        "Regular class schedule"
      ],
      features: [
        { icon: FaChartLine, text: "Cardio Focus" },
        { icon: FaUsers, text: "Group Motivation" },
        { icon: FaClock, text: "Regular Classes" },
      ],
      cta: "Start Cardio Training"
    },
    {
      id: "nutrition",
      title: "Nutrition Support",
      subtitle: "Fuel Your Performance",
      image: nutritionSupportImage,
      description: "Optimize your results with personalized nutrition guidance. Learn how to fuel your body properly with meal plans, nutritional strategies, and ongoing support from our experts.",
      highlights: [
        "Personalized meal planning",
        "Nutrition education and guidance",
        "Macro and calorie tracking support",
        "Pre and post-workout nutrition",
        "Habit building strategies",
        "Ongoing nutrition coaching"
      ],
      features: [
        { icon: FaChartLine, text: "Meal Planning" },
        { icon: FaCheckCircle, text: "Nutrition Coaching" },
        { icon: FaClock, text: "Ongoing Support" },
      ],
      cta: "Get Nutrition Support"
    },
    {
      id: "boxing-coaching",
      title: "Boxing Coaching",
      subtitle: "Fight Fit & Confident",
      image: boxingImage,
      description: "Learn proper technique, improve fitness, and build confidence with expert boxing coaching. Whether you're looking to compete, get in shape, or learn self-defense, our certified boxing coaches will guide you every step of the way.",
      highlights: [
        "Expert boxing technique instruction",
        "Cardio and strength conditioning",
        "Bag work and pad training",
        "Footwork and defensive skills",
        "Sparring sessions (optional)",
        "Confidence and discipline building"
      ],
      features: [
        { icon: FaDumbbell, text: "Boxing Technique" },
        { icon: FaChartLine, text: "Full-Body Conditioning" },
        { icon: FaUsers, text: "Individual or Group" },
      ],
      cta: "Start Boxing Training"
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
              <FaDumbbell className="text-orange-500" size={12} />
              Our Programs
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-6"
            >
              Choose Your <span className="text-orange-500">Path</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/75 max-w-3xl mx-auto"
            >
              From personalized coaching to high-energy group sessions, we have the perfect program to help you achieve your fitness goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white/5 rounded-3xl p-8 border border-white/10`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-500 mb-3">
                    {program.subtitle}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {program.title}
                  </h2>
                  <p className="text-lg text-white/70">
                    {program.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-4">
                  {program.features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10"
                      >
                        <Icon className="text-orange-500" size={16} />
                        <span className="text-white/80 text-sm">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {program.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <FaCheckCircle className="text-orange-500 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-white/80 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-white/10">
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-white">Talk to a trainer for personalized pricing.</div>
                    <div className="text-sm text-white/60">Get started to receive your custom plan and rate.</div>
                  </div>
                  <Link
                    to="/get-started"
                    className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-black font-semibold rounded-xl hover:bg-orange-400 transition"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rotate-12 rounded-[40px] border border-orange-500/20 bg-orange-500/10" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Not Sure Which Program is Right for You?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/70 mb-8"
          >
            Not sure which program is right for you? Explore our options and find the perfect fit for your goals and schedule.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/membership"
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

export default Programs;

