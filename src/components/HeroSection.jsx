import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import heroImage from "../assets/hero1.png";

/**
 * Header + Hero (inspired by modern “performance gym” sites)
 * - Dark, premium, conversion-first
 * - Uses Supreme’s orange as an accent, but NOT the same glow/paint-stroke style as the reference site
 * - Split hero layout + diagonal/grid textures for a distinct look
 *
 * Tailwind required.
 * Replace LOGO_SRC and HERO_IMAGE with your real assets.
 */

const LOGO_SRC = "/logo-supreme.png"; // TODO: replace
const HERO_IMAGE = "/hero-supreme.jpg"; // TODO: replace

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Program", href: "/program" },
  { label: "About", href: "/about" },
  { label: "Join Our Training Team", href: "/join-team" },
  { label: "Become A Member", href: "/membership" },
  { label: "More", href: "/more" },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function IconHamburger(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M4 6.5h16a1 1 0 100-2H4a1 1 0 100 2zm16 5H4a1 1 0 100 2h16a1 1 0 100-2zm0 7H4a1 1 0 100 2h16a1 1 0 100-2z"
      />
    </svg>
  );
}

function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11L10.59 12 5.7 16.89a1 1 0 101.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z"
      />
    </svg>
  );
}

function Hero({
  title = "Train smarter. Get results.",
  highlight = "results",
  subtitle = "Strength + conditioning built for real life. Personalized coaching, measurable progress, and a community that keeps you consistent.",
  primaryCta = { label: "Book Free Assessment", href: "/membership" },
  secondaryCta = { label: "See Programs", href: "/program" },
  stats = [
    { label: "1:1 Coaching", value: "Personalized" },
    { label: "Group Training", value: "High energy" },
    { label: "Nutrition", value: "Support" },
  ],
  trust = [
    { label: "Goal-based plans", desc: "Strength, fat loss, performance" },
    { label: "Progress tracking", desc: "Weekly check-ins + metrics" },
    { label: "Coach-led sessions", desc: "Form-first, safe programming" },
  ],
  onLeadSubmit, // optional: (data) => void
}) {
  const richTitle = useMemo(() => {
    // simple highlight logic (keeps unique copy; not reference phrasing)
    const lower = title.toLowerCase();
    const h = highlight.toLowerCase();
    const idx = lower.indexOf(h);
    if (idx === -1) return { before: title, mid: "", after: "" };
    return {
      before: title.slice(0, idx),
      mid: title.slice(idx, idx + highlight.length),
      after: title.slice(idx + highlight.length),
    };
  }, [title, highlight]);

  return (
    <section className="relative overflow-hidden bg-neutral-950">
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover opacity-35"
          onError={(e) => {
            // If image missing, keep a clean gradient background
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-neutral-950" />

        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />

        {/* Diagonal “performance” lines */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rotate-12 rounded-[40px] border border-white/10 bg-white/5" />
        <div className="absolute -bottom-32 -left-28 h-96 w-96 -rotate-12 rounded-[52px] border border-orange-500/20 bg-orange-500/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-8 md:pt-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Gaithersburg Strength & Conditioning
              <span className="text-white/30">•</span>
              Bodies under construction
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.02]">
              {richTitle.before}
              {richTitle.mid && (
                <span className="text-orange-500">{richTitle.mid}</span>
              )}
              {richTitle.after}
            </h1>

            <p className="mt-5 text-lg text-white/75 max-w-2xl">
              {subtitle}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to={primaryCta.href}
                className="inline-flex items-center justify-center px-6 h-12 rounded-2xl bg-orange-500 text-black font-semibold hover:bg-orange-400 transition"
              >
                {primaryCta.label}
              </Link>

              <Link
                to={secondaryCta.href}
                className="inline-flex items-center justify-center px-6 h-12 rounded-2xl border border-white/12 bg-white/5 text-white/90 hover:bg-white/10 transition font-medium"
              >
                {secondaryCta.label}
              </Link>

              <div className="ml-1 text-sm text-white/60">
                <span className="text-white/80 font-medium">No guesswork.</span>{" "}
                Get a plan you can follow.
              </div>
            </div>

            {/* Stat chips */}
            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-xs text-white/60">{s.label}</div>
                  <div className="mt-1 text-white font-semibold">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust bullets */}
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {trust.map((t) => (
                <div key={t.label} className="flex gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {t.label}
                    </div>
                    <div className="text-white/60 text-sm">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt="Supreme Athletics - Training Excellence"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}

export default function SupremeHeaderHero() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />
      <Hero
        // Customize copy here if you want
        title="Train smarter. Get results."
        highlight="results"
        onLeadSubmit={(data) => {
          // Hook this into your backend / EmailJS / HubSpot / etc.
          console.log("Lead submitted:", data);
        }}
      />
    </div>
  );
}
