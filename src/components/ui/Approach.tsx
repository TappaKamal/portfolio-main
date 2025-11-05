import { useEffect, useRef, useState } from "react";

const phases = [
  {
    title: "Planning & Strategy",
    hoverText:
      "Define project goals, target audience, and key features. Plan the structure, navigation, and content layout.",
  },
  {
    title: "Design & Prototyping",
    hoverText:
      "Create wireframes and mockups to visualize the user interface. Develop a prototype for initial feedback.",
  },
  {
    title: "Development & Launch",
    hoverText:
      "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
  },
];

export const Approach = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-black text-white font-['Space_Grotesk']">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-left md:text-center mb-20">
          <p className="text-xs text-gray-400 tracking-widest mb-3 uppercase"></p>
          <h2 className="text-6xl md:text-7xl font-light text-white tracking-tight">
            My <span className="text-gray-400">Approach</span>
          </h2>
        </div>

        {/* Phases Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {phases.map((phase, index) => (
            <div
              key={phase.title}
              className={`relative group border border-white/10 rounded-3xl min-h-[400px] flex flex-col justify-center items-center text-center transition-all duration-700 hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}>
              {/* Default Title */}
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 group-hover:opacity-0">
                <p className="text-lg md:text-xl font-light tracking-wide px-4 py-2 border border-white/20 rounded-full text-white/90">
                  {phase.title}
                </p>
              </div>

              {/* Hover Text */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-5 group-hover:translate-y-0 px-8">
                <p className="text-sm font-light text-gray-300 leading-relaxed tracking-wide text-left md:text-center">
                  {phase.hoverText}
                </p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-white/10"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/10"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/10"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-white/10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
