import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCalendar, FaUser, FaArrowRight, FaBook } from "react-icons/fa";
import groupTrainingImage from "../assets/group-training-image.png";
import oneOnOneImage from "../assets/one-on-one-image.png";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Exercises for Building Core Strength",
      excerpt: "Discover the most effective exercises to strengthen your core and improve overall stability. These movements will help you build a solid foundation for all your other training.",
      author: "Sarah Mitchell",
      date: "March 15, 2024",
      category: "Training",
      readTime: "5 min read",
      featured: true,
      image: groupTrainingImage
    },
    {
      id: 2,
      title: "Nutrition Tips for Optimal Workout Recovery",
      excerpt: "Learn how to properly fuel your body post-workout to maximize recovery and muscle growth. Discover the best foods and timing strategies for your training schedule.",
      author: "Emily Chen",
      date: "March 10, 2024",
      category: "Nutrition",
      readTime: "7 min read",
      featured: false,
      image: oneOnOneImage
    },
    {
      id: 3,
      title: "How to Stay Motivated When Starting Your Fitness Journey",
      excerpt: "Starting a new fitness routine can be challenging. Here are proven strategies to maintain motivation and build lasting habits that stick.",
      author: "James Rodriguez",
      date: "March 5, 2024",
      category: "Motivation",
      readTime: "6 min read",
      featured: false,
      image: groupTrainingImage
    },
    {
      id: 4,
      title: "The Science Behind Progressive Overload",
      excerpt: "Understand the fundamental principle of progressive overload and how to apply it effectively to continuously improve your strength and fitness levels.",
      author: "Marcus Johnson",
      date: "February 28, 2024",
      category: "Training",
      readTime: "8 min read",
      featured: false,
      image: oneOnOneImage
    },
    {
      id: 5,
      title: "Building Healthy Habits: A Step-by-Step Guide",
      excerpt: "Transform your fitness goals into sustainable habits. Learn the psychology behind habit formation and practical strategies for long-term success.",
      author: "Sarah Mitchell",
      date: "February 20, 2024",
      category: "Lifestyle",
      readTime: "6 min read",
      featured: false,
      image: groupTrainingImage
    },
    {
      id: 6,
      title: "Pre-Workout Nutrition: What to Eat Before Training",
      excerpt: "Maximize your workout performance with the right pre-workout nutrition. Discover timing, macronutrients, and meal ideas that will fuel your training sessions.",
      author: "Emily Chen",
      date: "February 15, 2024",
      category: "Nutrition",
      readTime: "5 min read",
      featured: false,
      image: oneOnOneImage
    }
  ];

  const categories = ["All", "Training", "Nutrition", "Motivation", "Lifestyle"];

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
              <FaBook className="text-orange-500" size={12} />
              Fitness Blog
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-6">
              Latest <span className="text-orange-500">Insights</span>
            </h1>
            <p className="text-xl text-white/75 max-w-3xl mx-auto">
              Expert tips, training advice, nutrition guidance, and inspiration to help you achieve your fitness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4">
          {blogPosts.filter(post => post.featured).map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block group"
            >
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-500 text-xs font-semibold mb-4">
                      Featured Article
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-orange-500 transition">
                      {post.title}
                    </h2>
                    <p className="text-white/70 text-lg mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-white/60 text-sm mb-6">
                      <div className="flex items-center gap-2">
                        <FaUser size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-500 font-semibold">
                      Read More <FaArrowRight className="group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="block group"
              >
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold mb-3 self-start">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-white/60 text-xs pt-4 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <FaArrowRight className="group-hover:translate-x-1 transition text-orange-500" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rotate-12 rounded-[40px] border border-orange-500/20 bg-orange-500/10" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Get the latest fitness tips, training advice, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 rounded-xl bg-white/5 border border-white/12 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
              />
              <button className="h-12 px-8 bg-orange-500 text-black font-semibold rounded-xl hover:bg-orange-400 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blog;

