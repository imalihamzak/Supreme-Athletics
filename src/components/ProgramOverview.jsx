import React from "react";
import oneOnOneImage from "../assets/one-on-one-image.png";
import groupTrainingImage from "../assets/group-training-image.png";
import groupCardioImage from "../assets/group-cardio-image.png";
import nutritionSupportImage from "../assets/nutrition-support-image.png";

// Program Overview Section with Hero-Style Background
function ProgramOverview() {
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
          <h2 className="text-3xl font-bold text-white">Our Programs</h2>
          <p className="mt-4 text-lg text-white/80">
            Designed to help you achieve your goals.
          </p>
        </div>

        {/* Program Cards */}
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* One-on-One Coaching */}
          <div className="flex flex-col bg-white/10 rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl h-full">
            <img
              src={oneOnOneImage}
              alt="One-on-One Coaching"
              className="w-full h-48 object-contain"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-white text-center">One-on-One Coaching</h3>
              <p className="mt-2 text-white/70 text-center flex-grow">
                Get personalized attention from expert trainers to reach your specific fitness goals.
              </p>
              <div className="mt-6 text-center">
                <a
                  href="/programs/one-on-one"
                  className="inline-block px-6 py-2 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Group Training */}
          <div className="flex flex-col bg-white/10 rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl h-full">
            <img
              src={groupTrainingImage}
              alt="Group Training"
              className="w-full h-48 object-contain"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-white text-center">Group Training</h3>
              <p className="mt-2 text-white/70 text-center flex-grow">
                Join high-energy group classes that keep you motivated while working towards your goals.
              </p>
              <div className="mt-6 text-center">
                <a
                  href="/programs/group-training"
                  className="inline-block px-6 py-2 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Group Cardio */}
          <div className="flex flex-col bg-white/10 rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl h-full">
            <img
              src={groupCardioImage}
              alt="Group Cardio"
              className="w-full h-48 object-contain"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-white text-center">Group Cardio</h3>
              <p className="mt-2 text-white/70 text-center flex-grow">
                Fun, heart-pumping cardio classes for endurance and fat loss.
              </p>
              <div className="mt-6 text-center">
                <a
                  href="/programs/group-cardio"
                  className="inline-block px-6 py-2 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Nutrition Support */}
          <div className="flex flex-col bg-white/10 rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl h-full">
            <img
              src={nutritionSupportImage}
              alt="Nutrition Support"
              className="w-full h-48 object-contain"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-white text-center">Nutrition Support</h3>
              <p className="mt-2 text-white/70 text-center flex-grow">
                Access personalized meal plans to fuel your body and maximize your results.
              </p>
              <div className="mt-6 text-center">
                <a
                  href="/programs/nutrition-support"
                  className="inline-block px-6 py-2 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramOverview;
