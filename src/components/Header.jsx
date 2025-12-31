import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LOGO_SRC = "/logo-supreme.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Program", href: "/program" },
  { label: "About", href: "/about" },
  { label: "Join Our Training Team", href: "/join-team" },
  { label: "Become A Member", href: "/membership" },
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

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "transition-all",
          scrolled
            ? "bg-neutral-950/90 backdrop-blur border-b border-white/10"
            : "bg-neutral-950/40 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="h-16 flex items-center justify-between">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
                <img
                  src={LOGO_SRC}
                  alt="Supreme Athletics"
                  className="h-10 w-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="leading-tight">
                <div className="text-white font-semibold tracking-tight">
                  Supreme Athletics
                </div>
                <div className="text-[11px] text-white/60">
                  Strength • Conditioning • Results
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="px-3 py-2 text-sm text-white/75 hover:text-white rounded-lg hover:bg-white/5 transition"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Link
                to="/program"
                className="hidden md:inline-flex items-center justify-center px-4 h-10 rounded-xl border border-white/10 bg-white/5 text-white/85 hover:bg-white/10 transition text-sm"
              >
                View Programs
              </Link>

              <Link
                to="/membership"
                className="hidden md:inline-flex items-center justify-center px-4 h-10 rounded-xl bg-orange-500 text-black font-semibold hover:bg-orange-400 transition text-sm"
              >
                Book Free Assessment
              </Link>

              {/* Mobile toggle */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
                aria-label="Open menu"
              >
                <IconHamburger className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-neutral-950 border-l border-white/10 p-4">
            <div className="flex items-center justify-between">
              <div className="text-white font-semibold">Menu</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
                aria-label="Close menu"
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 space-y-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="block px-3 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 space-y-2">
              <Link
                to="/program"
                className="w-full inline-flex items-center justify-center px-4 h-11 rounded-xl border border-white/10 bg-white/5 text-white/90 hover:bg-white/10 transition font-medium"
                onClick={() => setOpen(false)}
              >
                View Programs
              </Link>
              <Link
                to="/membership"
                className="w-full inline-flex items-center justify-center px-4 h-11 rounded-xl bg-orange-500 text-black font-semibold hover:bg-orange-400 transition"
                onClick={() => setOpen(false)}
              >
                Book Free Assessment
              </Link>

              <div className="pt-4 text-xs text-white/60">
                <div>8648 Dakota Dr., Gaithersburg, MD 20877</div>
                <a className="hover:text-white" href="tel:3013661839">
                  (301) 366-1839
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

