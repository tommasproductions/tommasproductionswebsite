"use client";

import FadeUp from "./FadeUp";

export default function Intro() {
  return (
    <section id="intro" className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-40">
        {/* Origin story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start mb-20 md:mb-28">
          <FadeUp delay={0}>
            <blockquote
              className="font-montserrat font-bold text-black leading-[1.1]"
              style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
            >
              &ldquo;It all started with a singular obsession: the gap between seeing a moment and feeling it.&rdquo;
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="font-poppins text-black/70 text-base md:text-[17px] leading-relaxed">
              Tommas Productions was born in the mind of a 16-year-old, in his own room. We exist to provide brands,
              artists, and visionaries with a visual language that transcends the screen. We&rsquo;re here to bridge
              the gap between abstract concepts and cinematic reality.
            </p>
          </FadeUp>
        </div>

        {/* Thin divider */}
        <div className="w-full h-px bg-black/8 mb-20 md:mb-28" />

        {/* Technical excellence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <FadeUp delay={0}>
            <p className="font-poppins text-black/30 text-xs tracking-[0.45em] uppercase mb-4">
              Technical Excellence
            </p>
            <h3
              className="font-montserrat font-bold text-black leading-[1.1]"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Professional-grade tools.
              <br />
              Uncompromising output.
            </h3>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="font-poppins text-black/70 text-base md:text-[17px] leading-relaxed">
              Every project is delivered in pristine <strong className="font-semibold text-black">4K / 60fps</strong>, mastered
              in <strong className="font-semibold text-black">DaVinci Resolve</strong> for cinema-grade color science and finished
              within the <strong className="font-semibold text-black">Adobe Creative Cloud</strong> ecosystem — Premiere Pro,
              After Effects, Audition. The result is work that holds up on any screen, at any size,
              without compromise.
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="w-full h-px bg-black/10" />
    </section>
  );
}
