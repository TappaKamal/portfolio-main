import { useEffect, useRef, useState } from "react";

const technologies = [
  {
    name: "Hostinger",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hostinger.svg",
  },
  {
    name: "Stream",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/streamlit.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg",
  },
];

export const Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">Tools and Platforms</span>
            <br />
            <span className="text-gradient">I've worked with</span>
          </h2>
        </div>

        {/* Tech Grid */}
        <div className="flex flex-wrap justify-center gap-10">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`glass h-full p-8 rounded-2xl flex flex-col justify-center items-center gap-6 group hover:border-primary/50 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="relative flex items-center justify-center w-20 h-20 group-hover:scale-110 transition-transform duration-500">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm font-medium text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
