import React from "react";

// CTA / Join Now Section with Hero-Style Background
function CTASection() {
  return (
    <section className="bg-neutral-950 py-8 relative overflow-hidden">
      {/* Diagonal Boxes + Texture Overlay */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rotate-12 rounded-[40px] border border-orange-500/20 bg-orange-500/10" />
      <div className="absolute -bottom-32 -right-28 h-96 w-96 -rotate-12 rounded-[52px] border border-white/10 bg-white/5" />

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/90 to-neutral-950">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 z-10 relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
            Limited Time Offer
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Ready to Transform Your Body?
          </h2>
          
          <p className="mt-6 text-xl text-white/75 max-w-2xl mx-auto">
            Join Supreme Athletics today and get started with a <span className="text-orange-500 font-semibold">free assessment</span>. 
            No commitment, no pressure—just results.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/membership"
              className="inline-flex items-center justify-center px-8 h-14 rounded-2xl bg-orange-500 text-black font-bold text-lg hover:bg-orange-400 transition transform hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              Book Your Free Assessment
            </a>
            
            <a
              href="/program"
              className="inline-flex items-center justify-center px-8 h-14 rounded-2xl border-2 border-white/20 bg-white/5 text-white font-semibold text-lg hover:bg-white/10 transition"
            >
              View Our Programs
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-black text-orange-500">1000+</div>
              <div className="text-sm text-white/60 mt-1">Members Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-orange-500">4.9/5</div>
              <div className="text-sm text-white/60 mt-1">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-orange-500">10+</div>
              <div className="text-sm text-white/60 mt-1">Years Experience</div>
            </div>
          </div>

          <div className="mt-8 text-sm text-white/50">
            ✓ No credit card required • ✓ Cancel anytime • ✓ Results guaranteed
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

