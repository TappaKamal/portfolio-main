// import { useEffect, useRef, useState } from "react";
// import { ArrowRight } from "lucide-react";

// const works = [
//   {
//     id: "01",
//     title: "NEXTTALK",
//     subtitle: "Video Streaming Platform",
//     year: "2025",
//     tags: ["Next.js", "TypeScript", "Convex", "Clerk", "Stream"],
//     description:
//       "A Platform that enables seamless video-call interviews, allowing users to connect, conduct meetings, and collaborate in real-time from anywhere.",
//     link: "https://next-talk-jade.vercel.app/",
//     image:
//       "https://plus.unsplash.com/premium_photo-1661661389828-3970a44524eb?fm=jpg&q=60&w=3000",
//   },
//   {
//     id: "02",
//     title: "MAP Traveller",
//     subtitle: "Interactive Map Application",
//     year: "2025",
//     tags: ["React", "Streaming", "Real-time", "WebRTC"],
//     description:
//       "A full-stack travel mapping app built with React and Node — enabling users to explore, plot, and manage locations effortlessly with Mapbox.",
//     link: "https://helper-tau-wine.vercel.app/",
//     image:
//       "https://plus.unsplash.com/premium_photo-1723867341274-da1f98ecd19e?q=60&w=600",
//   },
//   {
//     id: "03",
//     title: "TrueSpeak APP",
//     subtitle: "AI Voice & Text Translation",
//     year: "2024",
//     tags: ["Next.js", "Tailwind CSS", "AI", "Translation"],
//     description:
//       "An AI-powered voice and text translation platform enabling users to instantly translate and communicate across languages.",
//     link: "https://true-speak.vercel.app/",
//     image:
//       "https://www.addevice.io/storage/ckeditor/uploads/images/637ba6f15f60e_how.to.create.a.voice.translation.app.1920.1080.1.png",
//   },
// ];

// export const WorksSection = () => {
//   const [visibleWorks, setVisibleWorks] = useState<Set<number>>(new Set());
//   const workRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observers = workRefs.current.map((ref, index) => {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setVisibleWorks((prev) => new Set([...prev, index]));
//           }
//         },
//         { threshold: 0.2 }
//       );

//       if (ref) observer.observe(ref);
//       return observer;
//     });

//     return () => observers.forEach((observer) => observer.disconnect());
//   }, []);

//   return (
//     <section id="works" className="relative px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex items-center justify-between mb-20">
//           <h2 className="editorial-text text-xs">FEATURED WORK</h2>
//           <a
//             href="#works"
//             className="editorial-text text-[10px] flex items-center gap-2 hover:gap-3 transition-all">
//             SEE ALL WORKS <ArrowRight className="w-3 h-3" />
//           </a>
//         </div>

//         <div className="space-y-40">
//           {works.map((work, index) => (
//             <div
//               key={work.id}
//               ref={(el) => (workRefs.current[index] = el)}
//               className={`transition-all duration-1000 ${
//                 visibleWorks.has(index)
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-20"
//               }`}>
//               <div className="grid lg:grid-cols-2 gap-12 items-start mb-8">
//                 <div className="space-y-6">
//                   <div className="flex items-center gap-6">
//                     <span className="text-6xl font-light text-muted-foreground">
//                       {work.id}
//                     </span>
//                     <div>
//                       <p className="editorial-text text-[10px] text-muted-foreground mb-1">
//                         {work.subtitle}
//                       </p>
//                       <p className="text-sm text-muted-foreground">
//                         {work.year}
//                       </p>
//                     </div>
//                   </div>
//                   <h3 className="text-4xl md:text-5xl font-light">
//                     {work.title}
//                   </h3>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex flex-wrap gap-2">
//                     {work.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="editorial-text text-[9px] px-3 py-1 border border-border">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   <p className="text-sm leading-relaxed font-light text-muted-foreground">
//                     {work.description}
//                   </p>
//                   <a
//                     href={work.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="editorial-text text-[10px] inline-flex items-center gap-2 hover:gap-3 transition-all border-b border-foreground pb-1">
//                     VIEW PROJECT <ArrowRight className="w-3 h-3" />
//                   </a>
//                 </div>
//               </div>

//               <div className="relative overflow-hidden group">
//                 <img
//                   src={work.image}
//                   alt={work.title}
//                   className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const works = [
  {
    id: "01",
    title: "NEXTTALK",
    subtitle: "Video Streaming Platform",
    year: "2025",
    tags: ["Next.js", "TypeScript", "Convex", "Clerk", "Stream"],
    description:
      "A Platform that enables seamless video-call interviews, allowing users to connect, conduct meetings, and collaborate in real-time from anywhere.",
    link: "https://next-talk-jade.vercel.app/",
    image:
      "https://plus.unsplash.com/premium_photo-1661661389828-3970a44524eb?fm=jpg&q=60&w=3000",
  },
  {
    id: "02",
    title: "MAP Traveller",
    subtitle: "Interactive Map Application",
    year: "2025",
    tags: ["React", "Streaming", "Real-time", "WebRTC"],
    description:
      "A full-stack travel mapping app built with React and Node — enabling users to explore, plot, and manage locations effortlessly with Mapbox.",
    link: "https://helper-tau-wine.vercel.app/",
    image:
      "https://plus.unsplash.com/premium_photo-1723867341274-da1f98ecd19e?q=60&w=600",
  },
  {
    id: "03",
    title: "TrueSpeak APP",
    subtitle: "AI Voice & Text Translation",
    year: "2024",
    tags: ["Next.js", "Tailwind CSS", "AI", "Translation"],
    description:
      "An AI-powered voice and text translation platform enabling users to instantly translate and communicate across languages.",
    link: "https://true-speak.vercel.app/",
    image:
      "https://www.addevice.io/storage/ckeditor/uploads/images/637ba6f15f60e_how.to.create.a.voice.translation.app.1920.1080.1.png",
  },
];

export const WorksSection = () => {
  const [visibleWorks, setVisibleWorks] = useState<Set<number>>(new Set());
  const workRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = workRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleWorks((prev) => new Set([...prev, index]));
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
    <section id="works" className="relative px-8 py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-20">
          <h2 className="editorial-text text-xs tracking-widest">
            FEATURED WORK
          </h2>
          <a
            href="#works"
            className="editorial-text text-[10px] flex items-center gap-2 hover:gap-3 transition-all">
            SEE ALL WORKS <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="space-y-40">
          {works.map((work, index) => (
            <div
              key={work.id}
              ref={(el) => (workRefs.current[index] = el)}
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                visibleWorks.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              } ${index % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
              {/* Image Section */}
              <div
                className={`overflow-hidden rounded-2xl shadow-md ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}>
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-[400px] object-cover transition-all duration-700 grayscale hover:grayscale-0 scale-100 hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div
                className={`space-y-6 ${
                  index % 2 !== 0 ? "lg:order-1 lg:pl-10" : "lg:pr-10"
                }`}>
                <div className="flex items-center gap-6">
                  <span className="text-6xl font-light text-muted-foreground">
                    {work.id}
                  </span>
                  <div>
                    <p className="editorial-text text-[10px] text-muted-foreground mb-1">
                      {work.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground">{work.year}</p>
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold">{work.title}</h3>

                <p className="text-sm leading-relaxed font-light text-muted-foreground max-w-lg">
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="editorial-text text-[9px] px-3 py-1 border border-border rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-text text-[10px] inline-flex items-center gap-2 hover:gap-3 transition-all border-b border-foreground pb-1">
                  VIEW PROJECT <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
