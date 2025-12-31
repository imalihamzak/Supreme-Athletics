import React from "react";
import groupTrainingImage from '../assets/group-training-image.png';

// Community & Social Proof Section with Hero-Style Background
function CommunitySocial() {
  const socialStats = [
    {
      platform: "Instagram",
      handle: "@supremeathletics",
      followers: "5.2K",
      engagement: "Active daily",
      color: "from-purple-500 to-pink-500"
    },
    {
      platform: "Facebook",
      handle: "Supreme Athletics MD",
      followers: "1.8K",
      engagement: "Community hub",
      color: "from-blue-500 to-blue-600"
    },
    {
      platform: "Google Reviews",
      handle: "Supreme Athletics",
      followers: "4.9★",
      engagement: "150+ reviews",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const communityFeatures = [
    {
      icon: "👥",
      title: "Active Community",
      description: "Join 1000+ members sharing wins, progress, and motivation daily"
    },
    {
      icon: "🏆",
      title: "Challenges & Events",
      description: "Monthly challenges, social events, and member competitions"
    },
    {
      icon: "📱",
      title: "Member App",
      description: "Track workouts, connect with trainers, and stay accountable"
    },
    {
      icon: "💪",
      title: "Success Stories",
      description: "Real transformations from real people in our community"
    }
  ];

  return (
    <section className="bg-neutral-950 py-8 relative overflow-hidden">
      {/* Diagonal Boxes + Texture Overlay */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rotate-12 rounded-[40px] border border-white/10 bg-white/5" />
      <div className="absolute -bottom-32 -left-28 h-96 w-96 -rotate-12 rounded-[52px] border border-orange-500/20 bg-orange-500/10" />

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/90 to-neutral-950">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Join Our Community</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            More than just a gym—we're a community of people committed to becoming their best selves.
          </p>
        </div>

        {/* Social Proof Stats */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {socialStats.map((stat) => (
            <div
              key={stat.platform}
              className="bg-white/10 rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                <span className="text-white text-xl font-bold">{stat.platform[0]}</span>
              </div>
              <h3 className="text-white font-semibold text-lg">{stat.platform}</h3>
              <p className="text-orange-500 text-sm mt-1">{stat.handle}</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl font-black text-white">{stat.followers}</span>
                <span className="text-white/60 text-sm">{stat.engagement}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Community Features */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {communityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/10 rounded-xl p-6 border border-white/10 text-center hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Community Image */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
          <img
            src={groupTrainingImage}
            alt="Supreme Athletics Community"
            className="w-full h-64 object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent flex items-end">
            <div className="p-8 w-full">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Join?</h3>
              <p className="text-white/80 mb-4">
                Experience the energy, support, and results that make Supreme Athletics special.
              </p>
              <a
                href="/membership"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-black font-semibold rounded-xl hover:bg-orange-400 transition"
              >
                Become a Member Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommunitySocial;

