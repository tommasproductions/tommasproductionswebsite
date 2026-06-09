"use client";

import FadeUp from "./FadeUp";

const EMAIL = "tommasproductions@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/tommasproductions/";
const YOUTUBE_URL = "https://www.youtube.com/@TommasProductions";

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

const contactLinks = [
  {
    icon: <EmailIcon />,
    label: EMAIL,
    href: `mailto:${EMAIL}`,
    sublabel: "Email",
  },
  {
    icon: <InstagramIcon />,
    label: "@tommasproductions",
    href: INSTAGRAM_URL,
    sublabel: "Instagram",
  },
  {
    icon: <YoutubeIcon />,
    label: "@TommasProductions",
    href: YOUTUBE_URL,
    sublabel: "YouTube",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-36 md:py-52">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <FadeUp>
          <h2
            className="font-montserrat font-bold text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", letterSpacing: "-0.02em" }}
          >
            Let&rsquo;s build your legacy, together.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="font-poppins text-white/40 tracking-[0.35em] uppercase text-sm mb-14">
            Beyond The Frame.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-3 border border-white/70 text-white font-poppins text-sm tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300 hover:bg-white hover:text-black mb-16"
          >
            Get in Touch
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </FadeUp>

        {/* Contact links */}
        <FadeUp delay={0.3}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {contactLinks.map(({ icon, label, href, sublabel }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex flex-col items-center gap-2"
              >
                <span className="text-white/30 group-hover:text-white transition-colors duration-200">
                  {icon}
                </span>
                <span className="font-poppins text-white/25 text-[10px] tracking-[0.3em] uppercase group-hover:text-white/50 transition-colors duration-200">
                  {sublabel}
                </span>
                <span className="font-poppins text-white/40 text-sm tracking-wide group-hover:text-white/80 transition-colors duration-200 border-b border-transparent group-hover:border-white/30 pb-px">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
