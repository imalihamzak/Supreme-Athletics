import React from "react";
import personalizedImage from '../assets/one-on-one-image.png';
import progressImage from '../assets/progress.png';
import communityImage from '../assets/group-training-image.png';

// Enhanced Features & Benefits Section with Hero-Style Background
function FeaturesBenefits() {
  const features = [
    {
      title: "Personalized Coaching",
      description:
        "Get a plan tailored to your goals and track progress every step of the way.",
      benefits: [
        "1-on-1 attention from expert trainers",
        "Customized workout plans",
        "Form correction and injury prevention",
        "Goal-specific programming"
      ],
      imgSrc: personalizedImage,
    },
    {
      title: "Progress Tracking",
      description:
        "We use technology to track your progress, so you can see the results in real-time.",
      benefits: [
        "Weekly measurements and assessments",
        "Real-time progress dashboards",
        "Photo and strength tracking",
        "Data-driven adjustments"
      ],
      imgSrc: progressImage,
    },
    {
      title: "Community",
      description:
        "Join a supportive community of like-minded individuals who push each other to succeed.",
      benefits: [
        "Accountability partners",
        "Group training sessions",
        "Social events and challenges",
        "Lifelong fitness friendships"
      ],
      imgSrc: communityImage,
    },
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
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Why Choose Us</h2>
          <p className="mt-4 text-lg text-white/80">
            We’re not just about workouts — we’re about results.
          </p>
        </div>

        <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col bg-white/10 rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl border border-white/10"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={feature.imgSrc}
                  alt={feature.title}
                  className="w-32 h-32 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl font-semibold text-white text-center">{feature.title}</h3>
              <p className="mt-3 text-white/70 text-center text-sm">{feature.description}</p>
              <ul className="mt-4 space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="text-orange-500 mt-0.5">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href="/programs"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition"
          >
            Explore Our Programs
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBenefits;
