import { useState } from "react";
import { MinimalNav } from "@/components/MinimalNav";
import { Hero3D } from "@/components/Hero3D";
import { AboutSection } from "@/components/AboutSection";
import { WorksSection } from "@/components/WorksSection";
import { ArchiveSection } from "@/components/ArchiveSection";
import { ContactSection } from "@/components/ContactSection";
import { Technologies } from "@/components/Technologies";
import { Certifications } from "@/components/Certifications";
import { Approach } from "@/components/ui/Approach";
import { Footer } from "@/components/ui/Footer";

const Index = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <MinimalNav onHoverSection={setHoveredSection} />
      <Hero3D hoveredSection={hoveredSection} />
      <AboutSection />
      <WorksSection />
      <Technologies />
      <Certifications />
      <Approach />

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
