import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "../components/CountUp";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import lindseyImage from '../assets/lindsey-image.png';

function TestimonialsPage() {
  const featuredTestimonials = [
    {
      name: "Lindsey",
      rating: 5,
      role: "Parent, Member since 2019",
      quote: "My daughter started Mastery at age 3. Now approaching age 9 I truly can't imagine where she would be without it. Her confidence soars, she makes the right decisions and her 'yes I can' attitude will be with her forever.",
      imgSrc: lindseyImage,
      results: "5+ years of transformation"
    },
    {
      name: "Lori Jensen Colbert",
      rating: 5,
      role: "Member since 2018",
      quote: "We thought we joined a karate studio. Over the past 5 years I've realized we joined a personal development program that uses martial arts as a learning platform. It's so much more than karate.",
      imgSrc: lindseyImage,
      results: "5 years member"
    },
    {
      name: "Ken A.",
      rating: 5,
      role: "Parent, Member since 2020",
      quote: "Mastery helped my son, who struggled with extreme shyness, social anxiety, and low confidence. The encouragement and professionalism of the staff have enabled him to thrive in various aspects of life, including school and family relationships.",
      imgSrc: lindseyImage,
      results: "Complete transformation"
    },
    {
      name: "Jennifer Martinez",
      rating: 5,
      role: "Member since 2020",
      quote: "Supreme Athletics changed my life. The coaches genuinely care about your success, and the community support is incredible. I've lost 40 pounds and gained so much confidence.",
      imgSrc: lindseyImage,
      results: "40 lbs lost"
    },
    {
      name: "David Kim",
      rating: 5,
      role: "Member since 2018",
      quote: "The personalized approach here is unmatched. They took time to understand my goals and created a program that actually works with my lifestyle. Best investment I've made in myself.",
      imgSrc: lindseyImage,
      results: "Personal best achievements"
    },
    {
      name: "Amanda Thompson",
      rating: 5,
      role: "Member since 2021",
      quote: "As a busy professional, I needed efficiency. The trainers here maximize every minute of my workout. I'm stronger, faster, and more energized than I've ever been.",
      imgSrc: lindseyImage,
      results: "Peak performance"
    },
    {
      name: "Michael Chen",
      rating: 5,
      role: "Member since 2019",
      quote: "I came in with chronic back pain and low confidence. The trainers worked with my limitations and created a program that not only fixed my issues but made me stronger than before. Life-changing experience.",
      imgSrc: lindseyImage,
      results: "Injury recovery & strength gain"
    },
    {
      name: "Sarah Rodriguez",
      rating: 5,
      role: "Member since 2022",
      quote: "The nutrition coaching combined with the training program gave me results I never thought possible. I finally understand how to fuel my body properly, and I feel amazing.",
      imgSrc: lindseyImage,
      results: "Complete lifestyle change"
    },
    {
      name: "Robert Johnson",
      rating: 5,
      role: "Member since 2017",
      quote: "After trying multiple gyms, I found my home at Supreme Athletics. The community here is unlike anywhere else. Everyone supports each other, and the trainers truly know their craft.",
      imgSrc: lindseyImage,
      results: "7+ years of progress"
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Members" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Would Recommend" },
    { number: "150+", label: "5-Star Reviews" }
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-900 pt-8 pb-16">
        <div className="absolute -top-24 -right-24 h-72 w-72 rotate-12 rounded-[40px] border border-white/10 bg-white/5" />
        <div className="absolute -bottom-32 -left-28 h-96 w-96 -rotate-12 rounded-[52px] border border-orange-500/20 bg-orange-500/10" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-900">
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs text-orange-500 mb-6"
            >
              <FaStar className="text-orange-500" size={12} />
              Real Stories
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-6"
            >
              What Our <span className="text-orange-500">Members Say</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/75 max-w-3xl mx-auto mb-8"
            >
              Don't just take our word for it. Here's what real people are saying about their transformation journeys at Supreme Athletics.
            </motion.p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
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
                  // Handle "1000+", "150+"
                  endValue = parseInt(stat.number.replace("+", ""));
                  suffix = "+";
                } else if (stat.number.includes("%")) {
                  // Handle "98%"
                  endValue = parseInt(stat.number.replace("%", ""));
                  suffix = "%";
                } else {
                  endValue = parseFloat(stat.number);
                  suffix = "";
                }

                return (
                  <div
                    key={index}
                    className="text-center p-4 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <div className="text-3xl md:text-4xl font-black text-orange-500 mb-1">
                      <CountUp end={endValue} suffix={suffix} decimals={decimals} />
                    </div>
                    <div className="text-white/70 text-sm">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={18} />
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <FaQuoteLeft className="text-orange-500/50 mb-3" size={24} />
                  <p className="text-white/80 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-16 h-16 rounded-full border-4 border-orange-500 overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.imgSrc}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.role}</div>
                    <div className="text-orange-500 text-sm font-medium mt-1">
                      {testimonial.results}
                    </div>
                  </div>
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Start Your Transformation?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/70 mb-8"
          >
            Join hundreds of members who have already transformed their lives. Start with a free assessment today.
          </motion.p>
          <Link
            to="/get-started"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-black font-bold text-lg rounded-2xl hover:bg-orange-400 transition transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TestimonialsPage;

