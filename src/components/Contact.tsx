import { Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-5xl md:text-7xl font-bold">
              <span className="text-gradient">Let's Work Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              <a href="mailto:kamalhussaintappa09@gmail.com">
                <Mail className="mr-2 w-5 h-5" />
                Send Email
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg"
            >
              <a
                href="https://www.linkedin.com/in/kamalhussain-t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 w-5 h-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>

          <div className="glass p-8 rounded-2xl inline-block">
            <p className="text-sm text-muted-foreground">
              kamalhussaintappa09@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
