"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    name: "Cinematography",
    descriptor: "Short films, high-concept music videos, and cinematic commercials.",
  },
  {
    number: "02",
    name: "Post-Production",
    descriptor: "Advanced color grading, sound design, and VFX that feel invisible.",
  },
  {
    number: "03",
    name: "Design & Art Direction",
    descriptor: "Movie poster design, brand identities for creators, and motion graphics.",
  },
  {
    number: "04",
    name: "Brand Strategy",
    descriptor: "Helping companies find their “cinematic voice” in a crowded digital landscape.",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group border border-white/15 p-8 md:p-10 transition-all duration-300 hover:border-white/60 hover:-translate-y-1"
    >
      <span className="font-montserrat font-bold text-white/30 text-sm tracking-widest block mb-6">
        {service.number}
      </span>
      <h3
        className="font-montserrat font-bold text-white mb-4"
        style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)" }}
      >
        {service.name}
      </h3>
      <p className="font-poppins text-white/50 text-sm md:text-base leading-relaxed">
        {service.descriptor}
      </p>
    </motion.div>
  );
}

export default function Services() {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: "-60px" });

  return (
    <section id="services" className="bg-black py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          ref={labelRef}
          initial={{ opacity: 0 }}
          animate={labelInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-poppins text-white/30 text-xs tracking-[0.45em] uppercase mb-16"
        >
          Our Services
        </motion.p>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {services.map((service, i) => (
            <div key={service.number} className="bg-black">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
