"use client";

import FadeUp from "./FadeUp";

export default function Intro() {
  return (
    <section id="intro" className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Pull quote */}
          <FadeUp delay={0}>
            <blockquote
              className="font-montserrat font-bold text-black leading-[1.1]"
              style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
            >
              &ldquo;It all started with a singular obsession: the gap between seeing a moment and feeling it.&rdquo;
            </blockquote>
          </FadeUp>

          {/* Body text */}
          <FadeUp delay={0.15}>
            <p className="font-poppins text-black/70 text-base md:text-[17px] leading-relaxed">
              Tommas Productions was born in the mind of a 16-year-old, in his own room. We exist to provide brands,
              artists, and visionaries with a visual language that transcends the screen. We&rsquo;re here to bridge
              the gap between abstract concepts and cinematic reality.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Thin separator */}
      <div className="w-full h-px bg-black/10" />
    </section>
  );
}
