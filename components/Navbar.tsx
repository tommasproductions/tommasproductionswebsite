"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Services", "Values", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-500 ${
          scrolled ? "bg-black border-b border-white/10" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Home">
          <Image
            src="/tp-logo.svg"
            alt="Tommas Productions"
            width={80}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="font-poppins text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-200"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-end gap-[6px] w-8 h-8"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px bg-white transition-all duration-300 origin-right ${
              menuOpen ? "w-6 rotate-[-45deg] translate-y-[7px]" : "w-6"
            }`}
          />
          <span
            className={`block h-px bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0 w-4" : "w-4"
            }`}
          />
          <span
            className={`block h-px bg-white transition-all duration-300 origin-right ${
              menuOpen ? "w-6 rotate-[45deg] -translate-y-[7px]" : "w-6"
            }`}
          />
        </button>
      </nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-12"
          >
            {links.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                onClick={() => scrollTo(link)}
                className="font-montserrat text-5xl font-bold text-white tracking-tight"
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
