import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow animation-delay-2000" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-[10%] w-20 h-20 border-2 border-primary/30 rotate-45 animate-float" />
      <div className="absolute bottom-40 right-[15%] w-16 h-16 border-2 border-secondary/30 animate-float-slow" />
      <div className="absolute top-1/2 right-[20%] w-12 h-12 bg-primary/10 rotate-12 animate-spin-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-slide-up">
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase animate-fade-in">
              Kamal Hussain 2025
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              <span className="text-gradient">KAMALHUSSAIN</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground tracking-wide">
              A COLLECTION OF VISUAL WORKS
            </p>
          </div>

          <div className="flex justify-center gap-4 pt-8">
            <div className="glass px-6 py-3 rounded-full">
              <p className="text-sm text-muted-foreground">Next.js Developer</p>
            </div>
            <div className="glass px-6 py-3 rounded-full">
              <p className="text-sm text-muted-foreground">Full Stack</p>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer animate-float"
        >
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};
