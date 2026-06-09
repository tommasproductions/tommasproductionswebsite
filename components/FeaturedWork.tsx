"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    category: "Commercial",
    title: "Brand Spot — Autumn Collection",
    aspect: "16/9",
  },
  {
    category: "Short Film",
    title: "Liminal",
    aspect: "16/9",
  },
  {
    category: "Music Video",
    title: "Still Waters",
    aspect: "16/9",
  },
  {
    category: "Documentary",
    title: "Makers of the City",
    aspect: "16/9",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group flex flex-col"
    >
      {/* Thumbnail placeholder */}
      <div
        className="relative w-full bg-gray-dark border border-white/10 overflow-hidden"
        style={{ aspectRatio: project.aspect }}
      >
        {/* Play icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-white/60 group-hover:scale-110">
            <svg
              className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors duration-300 translate-x-0.5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Subtle scan line effect */}
        <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,white_2px,white_3px)]" />
      </div>

      {/* Card info */}
      <div className="flex items-end justify-between mt-4">
        <div>
          <p className="font-poppins text-white/35 text-xs tracking-[0.3em] uppercase mb-1">
            {project.category}
          </p>
          <h3 className="font-montserrat font-bold text-white text-lg leading-tight">
            {project.title}
          </h3>
        </div>
        <button className="flex-shrink-0 font-poppins text-xs tracking-[0.2em] uppercase text-white/40 border-b border-white/20 pb-px hover:text-white hover:border-white transition-all duration-200 ml-6">
          View Project →
        </button>
      </div>
    </motion.div>
  );
}

export default function FeaturedWork() {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: "-60px" });

  return (
    <section id="featured-work" className="bg-black py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={labelRef}
          initial={{ opacity: 0 }}
          animate={labelInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <p className="font-poppins text-white/30 text-xs tracking-[0.45em] uppercase">
            Featured Work
          </p>
          <span className="font-poppins text-white/20 text-xs tracking-wider hidden md:block">
            Selected Projects
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
