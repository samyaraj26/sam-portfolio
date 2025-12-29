import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-bg animate-grid-move opacity-50" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-primary/30 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-1/3 right-10 w-32 h-32 border border-primary/20 rounded-full animate-float opacity-20" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-primary rounded-full animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1 neon-border-strong animate-glow-pulse">
              <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary neon-text">
                  SS
                </div>
              </div>
            </div>
            {/* Status Indicator */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-background px-3 py-1 rounded-full border border-primary/30 neon-border">
              <span className="text-xs text-primary font-medium">Available for work</span>
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-foreground">Samyaraj </span>
              <span className="text-primary neon-text">Sarkar</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Python Developer & Data Analyst
            </p>
          </div>

          {/* Tagline */}
          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            "Turning messy data into clean insights and ideas into working code."
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              onClick={() => handleScrollTo("#projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/80 neon-border text-base px-8"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleScrollTo("#contact")}
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary text-base px-8"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div 
            className="flex items-center gap-6 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="https://www.linkedin.com/in/samyaraj-sarkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/samyaraj26/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.instagram.com/_.sam.exe._/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => handleScrollTo("#about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
