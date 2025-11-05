"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "NEXTTALK",
    description:
      "A platform that enables seamless video-call interviews, allowing users to connect, conduct meetings, and collaborate in real time from anywhere. Created by a B.Tech CSE student passionate about building efficient web experiences.",
    category: "Video Streaming Platform",
    year: "2025",
    tags: ["Next.js", "TypeScript", "Convex", "Clerk", "Stream"],
    link: "https://next-talk-jade.vercel.app/",
    image:
      "https://plus.unsplash.com/premium_photo-1661661389828-3970a44524eb?fm=jpg&q=60&w=3000",
  },
  {
    id: "02",
    title: "MAP Traveller",
    description:
      "A full-stack travel mapping app built with React and Node — enabling users to explore, plot, and manage locations effortlessly with Mapbox and real-time updates.",
    category: "Interactive Map Application",
    year: "2025",
    tags: ["React", "Streaming", "Real-time", "WebRTC"],
    link: "https://helper-tau-wine.vercel.app/",
    image:
      "https://plus.unsplash.com/premium_photo-1723867341274-da1f98ecd19e?auto=format&q=60&w=600",
  },
  {
    id: "03",
    title: "TrueSpeak APP",
    description:
      "An AI-powered voice and text translation platform built with Next.js, Tailwind CSS, and TypeScript — enabling users to instantly translate and communicate across languages.",
    category: "AI Voice & Text Translation",
    year: "2024",
    tags: ["Next.js", "Tailwind CSS", "Design", "Responsive"],
    link: "https://true-speak.vercel.app/",
    image:
      "https://www.addevice.io/storage/ckeditor/uploads/images/637ba6f15f60e_how.to.create.a.voice.translation.app.1920.1080.1.png",
  },
  {
    id: "04",
    title: "E-Commerce Website",
    description:
      "A modern AI-powered eCommerce platform offering personalized product recommendations, chatbot assistance, secure checkout, and real-time order tracking.",
    category: "Full Stack Project",
    year: "2024",
    tags: ["React", "MySQL", "Spring Boot", "Tailwind CSS"],
    link: "https://github.com/TappaKamal/ecommerce",
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQEEgw88WbbEiw/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1739243670204?e=1763596800&v=beta&t=a9lPZPgekcr941Yi6HfLLoE4QP3SM68DXszaZmCKP98",
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const projectRefs = useRef([]);

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => new Set([...prev, index]));
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
    <section id="projects" className="relative py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 text-[#FAE564]">
            Featured Work
          </h2>
          <p className="text-white/70 text-lg">
            Selected projects showcasing creativity, logic, and innovation.
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-40">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${
                visibleProjects.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}>
              {/* IMAGE SIDE */}
              <div
                className={`relative group ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* TEXT SIDE */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="flex items-start gap-6">
                  <span className="text-7xl font-bold text-white/10">
                    {project.id}
                  </span>
                  <div className="pt-2">
                    <p className="text-sm uppercase text-white/50 tracking-wider">
                      {project.category}
                    </p>
                    <p className="text-sm text-white/50">{project.year}</p>
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {project.title}
                </h3>

                <p className="text-base text-white/70 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-transparent hover:bg-white/5 text-white border border-white/20 rounded-none px-8 py-3 mt-4 font-medium transition-all">
                  VIEW PROJECT
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
