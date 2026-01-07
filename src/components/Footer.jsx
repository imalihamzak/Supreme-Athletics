import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

// Footer Section
function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { label: "One-on-One Coaching", href: "/programs/one-on-one" },
      { label: "Group Training", href: "/programs/group-training" },
      { label: "Group Cardio", href: "/programs/group-cardio" },
      { label: "Nutrition Support", href: "/programs/nutrition" },
      { label: "Boxing Coaching", href: "/programs/boxing-coaching" }
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Trainers", href: "/trainers" },
      { label: "Testimonials", href: "/testimonials" },
      // { label: "Blog", href: "/blog" }
    ],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Pricing", href: "/pricing" },
      { label: "Membership", href: "/membership" }
    ]
  };


  return (
    <footer className="bg-neutral-900 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
      
      <div className="max-w-7xl mx-auto px-4 py-12 z-10 relative">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="mb-4">
              <Link to="/">
                <img
                  src="/logo.png"
                  alt="Supreme Athletics"
                  className="h-30 w-auto object-contain mb-4"
                />
              </Link>
            </div>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-orange-500 mt-0.5 flex-shrink-0" size={16} />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=8648+Dakota+Dr,+Gaithersburg,+MD+20877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition cursor-pointer"
                >
                  8648 Dakota Dr., Gaithersburg, MD 20877
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-orange-500 flex-shrink-0" size={16} />
                <a href="tel:2408552744" className="hover:text-orange-500 transition">
                  (240) 855-2744
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-orange-500 flex-shrink-0" size={16} />
                <a href="mailto:RE@thesupremeathletics.com" className="hover:text-orange-500 transition">
                  RE@thesupremeathletics.com
                </a>
              </div>
            </div>
          </div>

          {/* Programs Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-sm hover:text-orange-500 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-sm hover:text-orange-500 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-sm hover:text-orange-500 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm">
            © {currentYear} Supreme Athletics. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-white/60 hover:text-orange-500 transition">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white/60 hover:text-orange-500 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

