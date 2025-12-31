import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

// Footer Section
function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { label: "One-on-One Coaching", href: "/programs/one-on-one" },
      { label: "Group Training", href: "/programs/group-training" },
      { label: "Group Cardio", href: "/programs/group-cardio" },
      { label: "Nutrition Support", href: "/programs/nutrition" }
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Trainers", href: "/trainers" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Blog", href: "/blog" }
    ],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Schedule", href: "/schedule" },
      { label: "Membership", href: "/membership" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", Icon: FaFacebook },
    { name: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
    { name: "Twitter", href: "https://twitter.com", Icon: FaXTwitter }
  ];

  return (
    <footer className="bg-neutral-950 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
      
      <div className="max-w-7xl mx-auto px-4 py-12 z-10 relative">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="text-orange-500 font-bold text-lg">SA</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Supreme Athletics</div>
                <div className="text-white/60 text-xs">Strength • Conditioning • Results</div>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Transform your body, transform your life. Located in Gaithersburg, MD.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-orange-500 mt-0.5 flex-shrink-0" size={16} />
                <span>8648 Dakota Dr., Gaithersburg, MD 20877</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-orange-500 flex-shrink-0" size={16} />
                <a href="tel:3013661839" className="hover:text-orange-500 transition">
                  (301) 366-1839
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-orange-500 flex-shrink-0" size={16} />
                <a href="mailto:info@supremeathletics.com" className="hover:text-orange-500 transition">
                  info@supremeathletics.com
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
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3 text-sm">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.Icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/30 transition group"
                      aria-label={social.name}
                    >
                      <IconComponent className="text-white/70 group-hover:text-orange-500 transition" size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
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

