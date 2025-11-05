"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

interface Hero3DProps {
  hoveredSection: string | null;
}

export const Hero3D = ({ hoveredSection }: Hero3DProps) => {
  const getContent = () => {
    switch (hoveredSection) {
      case "about":
        return {
          title: "ABOUT ME",
          description:
            "Full-stack Next.js developer passionate about AI & Data Science. Merging modern web development with machine learning innovation",
        };
      case "works":
        return {
          title: "MY WORKS",
          description:
            "A curated selection of projects and learning experiences by — exploring design, code, and creative technology through immersive web development.",
        };
      case "contact":
        return {
          title: "GET IN TOUCH",
          description:
            "Let’s collaborate and build something remarkable together. Open to freelance and full-time opportunities.",
        };
      default:
        return null;
    }
  };

  const content = getContent();

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* ✴️ 3D Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 70, density: { enable: true, area: 900 } },
            color: { value: "#ffffff" },
            opacity: {
              value: { min: 0.3, max: 0.6 },
              animation: { enable: true, speed: 0.5, sync: false },
            },
            size: {
              value: { min: 1, max: 3 },
              animation: { enable: true, speed: 3, sync: false },
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
              attract: { enable: true, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "bubble" },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              bubble: { distance: 120, duration: 1, size: 4, opacity: 0.8 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* 🧠 Hero Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center space-y-3 md:space-y-5">
        {/* Main Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-extrabold text-[36px] md:text-[72px] lg:text-[100px] tracking-tight leading-none">
          <span className="text-[#FFFFFF]">KAMAL</span>
          <span className="text-[#FAE564]">HUSSAIN</span>
        </motion.h1>

        {/* Subtitles below main name */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-sm md:text-base text-white/70 tracking-widest">
          A COLLECTION OF VISUAL WORKS
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xs md:text-sm text-white/60 tracking-widest">
          KAMALHSN 2025
        </motion.p>
      </motion.div>

      {/* Overlay for hovered sections */}
      {content && (
        <motion.div
          key={content.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-black/90 z-20 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="editorial-text text-4xl md:text-5xl font-light mb-6 text-white">
              {content.title}
            </motion.h2>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="editorial-text text-sm md:text-base max-w-2xl mx-auto text-white/70">
              {content.description}
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Scroll Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 editorial-text text-[10px] text-white/70 z-10">
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
