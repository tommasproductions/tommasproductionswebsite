"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="grain-overlay relative min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-poppins text-xs tracking-[0.4em] uppercase text-white/40 mb-8"
        >
          Tommas Productions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-montserrat font-bold text-white leading-[1.05] mb-8"
          style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)", letterSpacing: "-0.02em" }}
        >
          Transforming ideas into
          <br />
          reality through storytelling.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="font-poppins text-white/50 text-base md:text-lg tracking-widest uppercase mb-14"
        >
          Beyond The Frame.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <button
            onClick={scrollToContact}
            className="group relative inline-flex items-center gap-3 border border-white/70 text-white font-poppins text-sm tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300 hover:bg-white hover:text-black"
          >
            Start a Project
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator — line only, no text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
