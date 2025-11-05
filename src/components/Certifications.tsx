import { useEffect, useRef, useState } from "react";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "MongoDB Associate Database Administrator",
    level: "Associate",
    description:
      "Proven expertise in MongoDB administration, performance tuning, backup & recovery, and implementing secure, high-availability database environments.",
  },
  {
    title: "MongoDB Associate Developer JAVA",
    level: "ASSOCIATE",
    description:
      "Proficient in MongoDB Java development, schema design, CRUD operations, and performance optimization.",
  },
  {
    title: "Oracle Cloud Infrastructure Architect Associate",
    level: "CERTIFIED",
    description:
      "Skilled in architecting secure and scalable cloud solutions on OCI.",
  },
  {
    title: "Aviatrix Multicloud Network",
    level: "ASSOCIATE",
    description:
      "Skilled in designing and operating secure, scalable multi-cloud network architectures using Aviatrix across AWS, Azure, GCP, and OCI.",
  },
];

export const Certifications = () => {
  const [visibleCerts, setVisibleCerts] = useState<Set<number>>(new Set());
  const certRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = certRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCerts((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My credential collection
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              ref={(el) => (certRefs.current[index] = el)}
              className={`glass p-8 rounded-2xl space-y-4 group hover:border-primary/50 transition-all duration-700 ${
                visibleCerts.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-primary uppercase tracking-wider mb-2">
                    {cert.level}
                  </p>
                  <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
