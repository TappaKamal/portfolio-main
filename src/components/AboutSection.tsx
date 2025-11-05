import { useEffect, useRef, useState } from "react";

export const AboutSection = () => {
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
      className="relative min-h-screen flex items-center py-32 px-8">
      <div
        className={`max-w-7xl mx-auto w-full transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}>
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div className="editorial-text text-[10px] mb-8">ABOUT</div>
            <h2 className="text-5xl md:text-7xl font-light mb-6">
              Kamal Hussain
            </h2>
            <p className="text-xl font-light mb-4">does</p>
            <p className="text-lg font-mono mb-12">
              {"<"} next.js development {"/>"}
            </p>
          </div>

          <div className="space-y-8">
            <p className="text-base md:text-lg leading-relaxed font-light text-muted-foreground text-justify">
              I'm an enthusiastic and multifaceted developer specializing in
              Next.js and full-stack development. Passionate about pushing
              creative boundaries and building modern, efficient web solutions.
              I continuously expand my expertise across diverse technologies to
              stay ahead of trends. Driven by curiosity, I transform ideas into
              seamless, user-focused digital experiences. I embrace every
              challenge with determination, adaptability, and a growth mindset.
              My ultimate goal is to create purposeful, scalable, and impactful
              technology.
            </p>

            <div className="space-y-4 pt-8">
              <p className="editorial-text text-[10px]">CURRENTLY BASED IN</p>
              <p className="text-xl font-light">KL UNIVERSITY, INDIA</p>
              <p className="text-sm text-muted-foreground font-mono">
                16.4435° N, 80.6217° E
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};
