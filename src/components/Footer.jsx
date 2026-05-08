import React from 'react';
import { Link } from 'react-router-dom';

// Social Icon SVGs (inline for zero extra dependencies)
const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const IconFacebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const IconYoutube = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const IconWhatsapp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const IconX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Airplane Logo SVG (matching the reference)
const AviationLogo = () => (
  <svg width="52" height="52" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M52 10L8 30l14 4 4 14 8-12 10 4L52 10z"
      fill="#f5a425"
      stroke="#f5a425"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M22 34l4 14"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Placement', to: '/placement' },
  //{ label: 'Our Team', to: '/team' },
  { label: 'Media Gallery', to: '/gallery' },
  { label: 'News & Updates', to: '/news' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

const socialLinks = [
  { icon: <IconFacebook />, href: 'https://www.facebook.com/profile.php?id=61574363164488#', label: 'Facebook' },
  { icon: <IconInstagram />, href: 'https://www.instagram.com/sara_aviation_/?next=%2Fsara_group_sara_tuitions%2F', label: 'Instagram' },
  { icon: <IconYoutube />, href: '#', label: 'YouTube' },
  { icon: <IconWhatsapp />, href: 'whatsapp://send?phone=+919187250470&text=Hello%2C%20I%20am%20interested%20in%20your%20courses.%20Can%20you%20provide%20more%20details%3F', label: 'WhatsApp' },
  { icon: <IconX />, href: '#', label: 'X (Twitter)' },
];

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-6">
      {/* Logo + Tagline */}
      <div className="flex flex-col items-center gap-3 mb-8">
        <img 
          src="/assets/logo/Sara Aviation Logo White Orange.png" 
          alt="Sara Aviation Academy" 
          className="h-20 md:h-28 w-auto object-contain"
        />
        <p className="text-white text-base text-center leading-relaxed tracking-wide">
          India's <strong className="font-bold">Most Trusted</strong>
          <br />
          Aviation Training Institute
        </p>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 px-4">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="text-white/70 text-sm hover:text-white transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-10">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-[#f5a425] flex items-center justify-center text-white hover:bg-[#d4891a] transition-colors duration-200"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mx-6 mb-5" />

      {/* Copyright */}
      <p className="text-center text-white/40 text-xs px-4">
        © 2026 Sara Aviation Academy. All Rights Reserved. Developed and managed by Studio Elemento.
      </p>
    </footer>
  );
};

export default Footer;
