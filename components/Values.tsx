"use client";

import FadeUp from "./FadeUp";

const values = [
  {
    name: "Precision",
    descriptor: "We ensure every project feels like a masterpiece, regardless of the medium.",
  },
  {
    name: "Vision",
    descriptor: "We bridge the gap between abstract concepts and cinematic reality.",
  },
  {
    name: "Legacy",
    descriptor: "Let's build your legacy, together.",
  },
];

export default function Values() {
  return (
    <section id="values" className="bg-white text-black py-28 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeUp>
          <p className="font-poppins text-black/30 text-xs tracking-[0.45em] uppercase mb-16">
            Our Values
          </p>
        </FadeUp>

        <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-16 md:gap-24 items-start">
          {/* Decorative vertical text */}
          <div className="hidden md:flex items-center justify-center select-none" aria-hidden="true">
            <span
              className="text-vertical font-montserrat font-bold text-black/[0.045] tracking-[0.2em] uppercase"
              style={{ fontSize: "clamp(3rem, 5vw, 5rem)", lineHeight: 1 }}
            >
              TOMMAS
            </span>
          </div>

          {/* Values list */}
          <div className="flex flex-col">
            {values.map((value, i) => (
              <FadeUp key={value.name} delay={i * 0.1}>
                <div className={`py-10 ${i !== 0 ? "border-t border-black/10" : ""}`}>
                  <h3
                    className="font-montserrat font-bold text-black mb-3"
                    style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)" }}
                  >
                    {value.name}
                  </h3>
                  <p className="font-poppins text-black/55 text-base leading-relaxed max-w-xl">
                    {value.descriptor}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
