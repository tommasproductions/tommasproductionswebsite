"use client";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-black border-t border-gray-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-poppins text-white/30 text-xs tracking-wide">
          © 2025 Tommas Productions. All rights reserved.
        </p>

        <p className="font-poppins text-white/20 text-xs tracking-[0.3em] uppercase">
          Beyond The Frame.
        </p>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 font-poppins text-white/30 text-xs tracking-[0.2em] uppercase hover:text-white transition-colors duration-200"
          aria-label="Back to top"
        >
          Back to Top
          <svg
            className="w-3 h-3 transition-transform duration-200 group-hover:-translate-y-0.5"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 10V2M2 6l4-4 4 4" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
