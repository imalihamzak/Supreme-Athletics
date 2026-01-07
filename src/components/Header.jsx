import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const LOGO_SRC = "/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Program", href: "/program" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Videos", href: "/videos" },
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
  const location = useLocation();
  const navRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});

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

  // Update indicator position when route changes
  useEffect(() => {
    if (!navRef.current) return;
    
    const activeIndex = navLinks.findIndex(
      (l) => location.pathname === l.href || 
        (l.href !== "/" && location.pathname.startsWith(l.href + "/"))
    );
    
    if (activeIndex === -1) {
      setIndicatorStyle({ opacity: 0 });
      return;
    }

    const navItems = navRef.current.querySelectorAll('a');
    const activeItem = navItems[activeIndex];
    
    if (activeItem) {
      const navRect = navRef.current.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      
      setIndicatorStyle({
        left: `${itemRect.left - navRect.left}px`,
        width: `${itemRect.width}px`,
        opacity: 1,
      });
    }
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "transition-all",
          scrolled
            ? "bg-neutral-900/90 backdrop-blur border-b border-white/10"
            : "bg-neutral-900/40 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="h-16 flex items-center justify-between">
            {/* Brand */}
            <Link 
              to="/" 
              className="flex items-center"
            >
              <img
                src={LOGO_SRC}
                alt="Supreme Athletics"
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav ref={navRef} className="hidden lg:flex items-center gap-1 relative">
              {/* Sliding background indicator */}
              <div
                className="absolute h-8 bg-white/10 rounded-lg transition-all duration-300 ease-in-out"
                style={{
                  ...indicatorStyle,
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              />
              {navLinks.map((l) => {
                const isActive = location.pathname === l.href || 
                  (l.href !== "/" && location.pathname.startsWith(l.href + "/"));
                return (
                <Link
                  key={l.href}
                  to={l.href}
                    className={cn(
                      "px-3 py-2 text-sm rounded-lg transition-all duration-300 ease-in-out relative z-10",
                      isActive
                        ? "text-white font-medium"
                        : "text-white/75 hover:text-white hover:bg-white/5"
                    )}
                >
                  {l.label}
                </Link>
                );
              })}
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
                to="/get-started"
                className="hidden md:inline-flex items-center justify-center px-4 h-10 rounded-xl bg-orange-500 text-black font-semibold hover:bg-orange-400 transition text-sm"
              >
                Get Started
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
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[60] transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
          <div
          className={cn(
            "absolute inset-0 bg-black/70 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
            onClick={() => setOpen(false)}
          />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[86%] max-w-sm bg-neutral-900 border-l border-white/10 p-4 transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
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
            {navLinks.map((l, index) => {
              const isActive = location.pathname === l.href || 
                (l.href !== "/" && location.pathname.startsWith(l.href + "/"));
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className={cn(
                    "block px-3 py-3 rounded-xl transition-all duration-300 ease-in-out",
                    isActive
                      ? "text-white bg-white/10 font-medium"
                      : "text-white/80 hover:text-white hover:bg-white/5",
                    open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  )}
                  style={{
                    transitionDelay: open ? `${index * 50}ms` : `${index * 30}ms`
                  }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              );
            })}
            </div>

            <div className="mt-6 space-y-2">
              <Link
                to="/program"
              className={cn(
                "w-full inline-flex items-center justify-center px-4 h-11 rounded-xl border border-white/10 bg-white/5 text-white/90 hover:bg-white/10 transition-all duration-300 ease-in-out font-medium",
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              )}
              style={{
                transitionDelay: open ? `${navLinks.length * 50}ms` : `${navLinks.length * 30}ms`
              }}
                onClick={() => setOpen(false)}
              >
                View Programs
              </Link>
              <Link
                to="/get-started"
              className={cn(
                "w-full inline-flex items-center justify-center px-4 h-11 rounded-xl bg-orange-500 text-black font-semibold hover:bg-orange-400 transition-all duration-300 ease-in-out",
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              )}
              style={{
                transitionDelay: open ? `${(navLinks.length + 1) * 50}ms` : `${(navLinks.length + 1) * 30}ms`
              }}
                onClick={() => setOpen(false)}
              >
                Get Started
              </Link>

            <div className={cn(
              "pt-4 text-xs text-white/60 transition-all duration-300 ease-in-out",
              open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            )}
            style={{
              transitionDelay: open ? `${(navLinks.length + 2) * 50}ms` : `${(navLinks.length + 2) * 30}ms`
            }}>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=8648+Dakota+Dr,+Gaithersburg,+MD+20877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-orange-500 transition cursor-pointer mb-2"
                >
                  8648 Dakota Dr., Gaithersburg, MD 20877
                </a>
                <a className="hover:text-white" href="tel:2408552744">
                  (240) 855-2744
                </a>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
}

