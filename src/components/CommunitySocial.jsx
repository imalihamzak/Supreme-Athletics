import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "./CountUp";
import { FaUsers, FaTrophy, FaMobileAlt, FaDumbbell, FaStar, FaAward, FaChartLine } from "react-icons/fa";
import groupTrainingImage from '../assets/group-training-image.png';

// Community & Social Proof Section with Hero-Style Background
function CommunitySocial() {
  const gymStats = [
    {
      title: "Members Transformed",
      value: "1000+",
      description: "Lives changed",
      color: "from-orange-500 to-red-500",
      icon: FaUsers
    },
    {
      title: "Average Rating",
      value: "4.9",
      description: "Out of 5 stars",
      color: "from-yellow-400 to-orange-500",
      icon: FaStar
    },
    {
      title: "Years Experience",
      value: "10+",
      description: "Proven results",
      color: "from-blue-500 to-purple-500",
      icon: FaAward
    }
  ];

  const communityFeatures = [
    {
      icon: FaUsers,
      title: "Active Community",
      description: "Join 1000+ members sharing wins, progress, and motivation daily"
    },
    {
      icon: FaTrophy,
      title: "Challenges & Events",
      description: "Monthly challenges, social events, and member competitions"
    },
    {
      icon: FaMobileAlt,
      title: "Member App",
      description: "Track workouts, connect with trainers, and stay accountable"
    },
    {
      icon: FaDumbbell,
      title: "Success Stories",
      description: "Real transformations from real people in our community"
    }
  ];

  return (
    <section className="bg-neutral-900 py-4 md:py-6 relative overflow-hidden">
      {/* Diagonal Boxes + Texture Overlay */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rotate-12 rounded-[40px] border border-white/10 bg-white/5" />
      <div className="absolute -bottom-32 -left-28 h-96 w-96 -rotate-12 rounded-[52px] border border-orange-500/20 bg-orange-500/10" />

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-900">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Join Our Community</h2>
          <p className="mt-3 text-lg text-white/80 max-w-2xl mx-auto">
            More than just a gym—we're a community of people committed to becoming their best selves.
          </p>
        </motion.div>

        {/* Gym Stats */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {gymStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                  <Icon className="text-white text-xl" size={24} />
                </div>
                <h3 className="text-white font-semibold text-lg">{stat.title}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-2xl font-black text-white">
                    {stat.value.includes("+") ? (
                      <>
                        <CountUp end={parseInt(stat.value.replace("+", ""))} suffix="+" />
                    </>
                    ) : stat.value.includes(".") ? (
                          <>
                        <CountUp end={parseFloat(stat.value)} decimals={1} />
                          </>
                        ) : (
                      stat.value
                        )}
                      </span>
                  {stat.title === "Average Rating" && (
                    <FaStar className="text-yellow-400" size={20} />
                  )}
                </div>
                <p className="text-white/60 text-sm mt-2">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Community Features */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {communityFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white/10 rounded-xl p-6 border border-white/10 text-center hover:scale-105 transition-transform"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                    <Icon className="text-orange-500" size={32} />
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Featured Community Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5"
        >
          <img
            src={groupTrainingImage}
            alt="Supreme Athletics Community"
            className="w-full h-64 object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent flex items-end">
            <div className="p-8 w-full">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Join?</h3>
              <p className="text-white/80 mb-4">
                Experience the energy, support, and results that make Supreme Athletics special.
              </p>
              <Link
                to="/get-started"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-black font-semibold rounded-xl hover:bg-orange-400 transition"
              >
                Become a Member Today
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CommunitySocial;

