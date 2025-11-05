import { ArrowRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-32 px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <p className="editorial-text text-[10px]">LET'S WORK TOGETHER</p>
            <h2 className="text-5xl md:text-7xl font-light leading-tight">
              Ready to start
              <br />
              your next project?
            </h2>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <a
                href="mailto:kamalhussaintappa09@gmail.com"
                className="group block">
                <p className="editorial-text text-[10px] text-muted-foreground mb-2">
                  EMAIL
                </p>
                <p className="text-xl font-light flex items-center gap-2 group-hover:gap-4 transition-all">
                  kamalhussaintappa09@gmail.com
                  <ArrowRight className="w-5 h-5" />
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/kamalhussain-t"
                target="_blank"
                rel="noopener noreferrer"
                className="group block">
                <p className="editorial-text text-[10px] text-muted-foreground mb-2">
                  LINKEDIN
                </p>
                <p className="text-xl font-light flex items-center gap-2 group-hover:gap-4 transition-all">
                  linkedin.com/in/kamalhussain-t
                  <ArrowRight className="w-5 h-5" />
                </p>
              </a>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="editorial-text text-[10px] text-muted-foreground mb-4">
                CURRENTLY BASED IN
              </p>
              <p className="text-lg font-light">KL University, India</p>
              <p className="text-sm text-muted-foreground font-mono mt-2">
                16.4435° N, 80.6217° E
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
