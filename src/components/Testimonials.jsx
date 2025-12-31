import React from "react";
import lindseyImage from '../assets/lindsey-image.png';

// Testimonials Section with Hero-Style Background
function Testimonials() {
  const testimonials = [
    {
      name: "Lindsey",
      rating: 5,
      quote:
        "My daughter started Mastery at age 3. Now approaching age 9 I truly can't imagine where she would be without it. Her confidence soars, she makes the right decisions and her 'yes I can' attitude will be with her forever.",
      imgSrc: lindseyImage,
    },
    {
      name: "Lori Jensen Colbert",
      rating: 5,
      quote:
        "We thought we joined a karate studio. Over the past 5 years I've realized we joined a personal development program that uses martial arts as a learning platform. It's so much more than karate.",
      imgSrc: lindseyImage,
    },
    {
      name: "Ken A.",
      rating: 5,
      quote:
        "Mastery helped my son, who struggled with extreme shyness, social anxiety, and low confidence. The encouragement and professionalism of the staff have enabled him to thrive in various aspects of life, including school and family relationships.",
      imgSrc: lindseyImage,
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
          <h2 className="text-3xl font-bold text-white">What Our Clients Are Saying</h2>
          <p className="mt-4 text-lg text-white/80">
            Real stories, real results.
          </p>
        </div>

        <div className="mt-6 space-y-8">
          {/* Testimonial Cards */}
          <div className="flex flex-wrap gap-8 justify-center">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col items-center bg-white/10 rounded-xl p-6 text-center w-full sm:w-80 transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-orange-500"
                />
                <h3 className="mt-4 text-xl font-semibold text-white">{testimonial.name}</h3>
                <div className="mt-2 text-yellow-400">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p className="mt-4 text-white/70">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/membership"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition"
          >
            Start Your Transformation Today
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
