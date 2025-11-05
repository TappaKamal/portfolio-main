import { useEffect, useRef, useState } from "react";

export const About = () => {
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
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold">
                <span className="text-gradient">About</span>
              </h2>
              <p className="text-2xl md:text-3xl font-semibold">
                Kamal Hussain
              </p>
              <p className="text-lg text-primary font-mono">
                {"<"} next.js development {"/>"}
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed"></p>

            <div className="glass p-6 rounded-2xl space-y-3">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                Currently Based In
              </p>
              <p className="text-xl font-semibold">KL University, India</p>
            </div>
          </div>

          <div className="relative">
            <div className="glass p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
              <div className="relative space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm text-muted-foreground"></span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Node.js",
                      "MongoDB",
                      "Tailwind CSS",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm hover:bg-primary/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
