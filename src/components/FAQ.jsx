import React, { useState } from "react";

// FAQ Section with Hero-Style Background
function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What's included in the free assessment?",
      answer: "Your free assessment includes a movement screen, strength baseline, goal discussion, body composition analysis, and a personalized 30-day roadmap tailored to your specific needs and objectives."
    },
    {
      question: "Do I need to be in shape to join?",
      answer: "Absolutely not! We welcome people of all fitness levels. Our trainers specialize in working with beginners and will meet you exactly where you are. Every journey starts with a single step."
    },
    {
      question: "What's the difference between 1-on-1 coaching and group training?",
      answer: "1-on-1 coaching offers personalized attention, custom programming, and flexible scheduling. Group training provides high energy, accountability, motivation from peers, and lower cost. Many members combine both for optimal results."
    },
    {
      question: "How often should I train?",
      answer: "This depends on your goals, schedule, and current fitness level. Most members train 3-4 times per week. Your trainer will work with you to create a sustainable schedule that fits your life."
    },
    {
      question: "What if I have injuries or limitations?",
      answer: "Our trainers are experienced in working with injuries and physical limitations. We'll modify exercises, focus on proper form, and create a program that works around your specific needs while still helping you reach your goals."
    },
    {
      question: "Can I cancel my membership anytime?",
      answer: "Yes! We offer flexible month-to-month memberships with no long-term contracts. You can cancel at any time with 30 days notice. We're confident you'll love it, but we want you to feel comfortable."
    },
    {
      question: "Do you offer nutrition support?",
      answer: "Yes! We offer personalized meal planning, nutritional guidance, and ongoing support to help you fuel your body properly. Nutrition is a key component of achieving lasting results."
    },
    {
      question: "What are your operating hours?",
      answer: "We're open Monday-Friday 5:30am-9pm, Saturday 7am-2pm, and Sunday 9am-1pm. We offer flexible scheduling for personal training sessions to fit your busy lifestyle."
    }
  ];

  return (
    <section className="bg-neutral-900 py-4 md:py-6 relative overflow-hidden">
      {/* Diagonal Boxes + Texture Overlay */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rotate-12 rounded-[40px] border border-orange-500/20 bg-orange-500/10" />
      <div className="absolute -bottom-32 -right-28 h-96 w-96 -rotate-12 rounded-[52px] border border-white/10 bg-white/5" />

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-900">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 z-10 relative">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="mt-3 text-lg text-white/80">
            Everything you need to know about joining Supreme Athletics.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white/10 rounded-xl border border-white/10 overflow-hidden transition-all duration-300 ${
                  isOpen ? 'shadow-lg shadow-orange-500/10' : ''
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
                >
                  <span className="text-white font-semibold pr-4">{faq.question}</span>
                  <span
                    className={`text-orange-500 text-xl font-bold flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 pt-2">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 text-center">
          <p className="text-white/60 mb-3">Still have questions?</p>
          <a
            href="tel:2408552744"
            className="inline-flex items-center justify-center px-6 py-3 border border-white/20 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition"
          >
            Call Us: (240) 855-2744
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQ;

