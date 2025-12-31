import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaClock, FaDumbbell, FaUsers, FaFire, FaCheckCircle } from "react-icons/fa";

function Schedule() {
  const classSchedule = [
    {
      day: "Monday",
      classes: [
        { time: "6:00 AM", name: "Morning HIIT", type: "Group Cardio", duration: "45 min", level: "Intermediate" },
        { time: "7:30 AM", name: "Strength Training", type: "Group Training", duration: "60 min", level: "All Levels" },
        { time: "9:00 AM", name: "Yoga Flow", type: "Recovery", duration: "60 min", level: "All Levels" },
        { time: "12:00 PM", name: "Lunch Break Cardio", type: "Group Cardio", duration: "30 min", level: "All Levels" },
        { time: "5:30 PM", name: "Evening Strength", type: "Group Training", duration: "60 min", level: "All Levels" },
        { time: "6:45 PM", name: "HIIT Blast", type: "Group Cardio", duration: "45 min", level: "Advanced" },
        { time: "8:00 PM", name: "Power Hour", type: "Group Training", duration: "60 min", level: "Intermediate+" }
      ]
    },
    {
      day: "Tuesday",
      classes: [
        { time: "6:00 AM", name: "Rise & Grind", type: "Group Training", duration: "45 min", level: "All Levels" },
        { time: "7:30 AM", name: "Cardio Kick", type: "Group Cardio", duration: "45 min", level: "All Levels" },
        { time: "9:00 AM", name: "Strength & Conditioning", type: "Group Training", duration: "60 min", level: "Intermediate" },
        { time: "12:00 PM", name: "Quick Burn", type: "Group Cardio", duration: "30 min", level: "All Levels" },
        { time: "5:30 PM", name: "Total Body Blast", type: "Group Training", duration: "60 min", level: "All Levels" },
        { time: "6:45 PM", name: "Metabolic Conditioning", type: "Group Cardio", duration: "45 min", level: "Intermediate+" },
        { time: "8:00 PM", name: "Strength Focus", type: "Group Training", duration: "60 min", level: "All Levels" }
      ]
    },
    {
      day: "Wednesday",
      classes: [
        { time: "6:00 AM", name: "Morning HIIT", type: "Group Cardio", duration: "45 min", level: "Intermediate" },
        { time: "7:30 AM", name: "Functional Fitness", type: "Group Training", duration: "60 min", level: "All Levels" },
        { time: "9:00 AM", name: "Pilates Core", type: "Recovery", duration: "45 min", level: "All Levels" },
        { time: "12:00 PM", name: "Lunch Break Cardio", type: "Group Cardio", duration: "30 min", level: "All Levels" },
        { time: "5:30 PM", name: "Evening Strength", type: "Group Training", duration: "60 min", level: "All Levels" },
        { time: "6:45 PM", name: "HIIT Blast", type: "Group Cardio", duration: "45 min", level: "Advanced" },
        { time: "8:00 PM", name: "Power Hour", type: "Group Training", duration: "60 min", level: "Intermediate+" }
      ]
    },
    {
      day: "Thursday",
      classes: [
        { time: "6:00 AM", name: "Rise & Grind", type: "Group Training", duration: "45 min", level: "All Levels" },
        { time: "7:30 AM", name: "Cardio Kick", type: "Group Cardio", duration: "45 min", level: "All Levels" },
        { time: "9:00 AM", name: "Strength & Conditioning", type: "Group Training", duration: "60 min", level: "Intermediate" },
        { time: "12:00 PM", name: "Quick Burn", type: "Group Cardio", duration: "30 min", level: "All Levels" },
        { time: "5:30 PM", name: "Total Body Blast", type: "Group Training", duration: "60 min", level: "All Levels" },
        { time: "6:45 PM", name: "Metabolic Conditioning", type: "Group Cardio", duration: "45 min", level: "Intermediate+" },
        { time: "8:00 PM", name: "Strength Focus", type: "Group Training", duration: "60 min", level: "All Levels" }
      ]
    },
    {
      day: "Friday",
      classes: [
        { time: "6:00 AM", name: "Morning HIIT", type: "Group Cardio", duration: "45 min", level: "Intermediate" },
        { time: "7:30 AM", name: "Strength Training", type: "Group Training", duration: "60 min", level: "All Levels" },
        { time: "9:00 AM", name: "Yoga Flow", type: "Recovery", duration: "60 min", level: "All Levels" },
        { time: "12:00 PM", name: "Lunch Break Cardio", type: "Group Cardio", duration: "30 min", level: "All Levels" },
        { time: "5:30 PM", name: "Friday Night Intensity", type: "Group Training", duration: "60 min", level: "All Levels" },
        { time: "6:45 PM", name: "Weekend Warrior Prep", type: "Group Cardio", duration: "45 min", level: "All Levels" }
      ]
    },
    {
      day: "Saturday",
      classes: [
        { time: "7:00 AM", name: "Weekend Warriors", type: "Group Training", duration: "60 min", level: "All Levels" },
        { time: "8:30 AM", name: "Saturday Sweat", type: "Group Cardio", duration: "45 min", level: "Intermediate" },
        { time: "10:00 AM", name: "Family Fitness", type: "Group Training", duration: "45 min", level: "All Levels" },
        { time: "11:30 AM", name: "Strength Session", type: "Group Training", duration: "60 min", level: "All Levels" },
        { time: "1:00 PM", name: "Cardio Blast", type: "Group Cardio", duration: "45 min", level: "All Levels" }
      ]
    },
    {
      day: "Sunday",
      classes: [
        { time: "9:00 AM", name: "Sunday Strength", type: "Group Training", duration: "60 min", level: "All Levels" },
        { time: "10:30 AM", name: "Active Recovery", type: "Recovery", duration: "45 min", level: "All Levels" },
        { time: "12:00 PM", name: "Yoga & Stretch", type: "Recovery", duration: "60 min", level: "All Levels" }
      ]
    }
  ];

  const classTypes = {
    "Group Training": { icon: FaDumbbell, color: "text-orange-500 bg-orange-500/20 border-orange-500/30" },
    "Group Cardio": { icon: FaFire, color: "text-red-500 bg-red-500/20 border-red-500/30" },
    "Recovery": { icon: FaUsers, color: "text-blue-500 bg-blue-500/20 border-blue-500/30" }
  };

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
              <FaClock className="text-orange-500" size={12} />
              Class Schedule
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-6">
              Weekly <span className="text-orange-500">Schedule</span>
            </h1>
            <p className="text-xl text-white/75 max-w-3xl mx-auto mb-8">
              Join our diverse range of group classes designed to challenge, motivate, and transform you.
            </p>
            
            {/* Schedule Legend */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.entries(classTypes).map(([type, info]) => {
                const Icon = info.icon;
                return (
                  <div key={type} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                    <Icon className={info.color.split(' ')[0]} size={16} />
                    <span className="text-white/80 text-sm">{type}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-6">
            {classSchedule.map((daySchedule, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
              >
                <div className="p-6 bg-white/5 border-b border-white/10">
                  <h2 className="text-2xl font-bold text-white">{daySchedule.day}</h2>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {daySchedule.classes.map((classItem, idx) => {
                      const typeInfo = classTypes[classItem.type];
                      const Icon = typeInfo.icon;
                      return (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-lg ${typeInfo.color} border text-xs font-semibold`}>
                              <Icon size={12} />
                              <span>{classItem.type}</span>
                            </div>
                            <span className="text-orange-500 font-semibold text-sm">
                              {classItem.time}
                            </span>
                          </div>
                          <h3 className="text-white font-semibold mb-2">{classItem.name}</h3>
                          <div className="flex items-center gap-3 text-white/60 text-xs">
                            <span className="flex items-center gap-1">
                              <FaClock size={10} />
                              {classItem.duration}
                            </span>
                            <span>•</span>
                            <span>{classItem.level}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <FaCheckCircle className="text-orange-500" />
                No Reservations Required
              </h3>
              <p className="text-white/70 text-sm">
                Drop in to any class that fits your schedule. All members have access to all group classes.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <FaCheckCircle className="text-orange-500" />
                All Levels Welcome
              </h3>
              <p className="text-white/70 text-sm">
                Our trainers provide modifications for all fitness levels. Whether you're a beginner or advanced, there's a class for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join a Class?
          </h2>
          <p className="text-lg text-white/70 mb-8">
            New members start with a free assessment and orientation.
          </p>
          <Link
            to="/membership"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-black font-bold text-lg rounded-2xl hover:bg-orange-400 transition transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Schedule;

