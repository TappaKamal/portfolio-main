import { useEffect, useRef, useState } from "react";

const technologies = [
  { name: "Next.js" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "MongoDB" },
  { name: "Tailwind CSS" },
  { name: "Docker" },
  { name: "Cloudinary" },
  { name: "Appwrite" },
  { name: "Hostinger" },
];

export const ArchiveSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
          <h2 className="text-4xl md:text-6xl font-light mb-6">Archive</h2>
          <p className="text-lg font-light text-muted-foreground mb-2">
            A curated stash of playful, bite-sized creations
          </p>
          <p className="text-sm text-muted-foreground font-light">
            too small for a project, but too good to keep hidden.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`aspect-square border border-border flex items-center justify-center p-8 hover:bg-foreground hover:text-background transition-all duration-300 cursor-pointer group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="text-center">
                <span className="editorial-text text-[10px] group-hover:text-background">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-light mt-2 group-hover:text-background">{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
