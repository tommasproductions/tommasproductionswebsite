"use client";

import FadeUp from "./FadeUp";

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
            href="mailto:tommasproductions@example.com"
            className="group inline-flex items-center gap-3 border border-white/70 text-white font-poppins text-sm tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300 hover:bg-white hover:text-black mb-12"
          >
            Get in Touch
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </FadeUp>

        <FadeUp delay={0.3}>
          <a
            href="mailto:tommasproductions@example.com"
            className="block font-poppins text-white/35 text-sm tracking-wider hover:text-white/80 transition-colors duration-200"
          >
            tommasproductions@example.com
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
