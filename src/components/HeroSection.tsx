import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden spray-texture">
      {/* Colorblock Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary opacity-20 -skew-x-12" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-secondary opacity-20 skew-x-12" />
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-accent opacity-30 rotate-12" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-graffiti-green opacity-30 -rotate-6" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, hsl(var(--foreground)) 50px, hsl(var(--foreground)) 51px),
                          repeating-linear-gradient(90deg, transparent, transparent 50px, hsl(var(--foreground)) 50px, hsl(var(--foreground)) 51px)`
      }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Avatar */}
          <div className="relative animate-bounce-in">
            <div className="w-36 h-36 md:w-44 md:h-44 border-4 border-foreground bg-primary shadow-[8px_8px_0px_hsl(var(--foreground))] flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-300">
              <span className="font-display text-5xl md:text-6xl text-primary-foreground">
                SS
              </span>
            </div>
            {/* Status Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 border-2 border-foreground shadow-[3px_3px_0px_hsl(var(--foreground))] -rotate-2">
              <span className="font-display text-sm tracking-wide">OPEN TO WORK</span>
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-4 mt-8">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none">
              <span className="block text-foreground">SAMYARAJ</span>
              <span className="block text-stroke-pink md:text-stroke text-primary md:text-transparent">SARKAR</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-primary text-primary-foreground px-4 py-2 font-display text-xl md:text-2xl tracking-wide border-2 border-foreground shadow-[4px_4px_0px_hsl(var(--foreground))]">
                PYTHON DEVELOPER
              </span>
              <span className="bg-accent text-accent-foreground px-4 py-2 font-display text-xl md:text-2xl tracking-wide border-2 border-foreground shadow-[4px_4px_0px_hsl(var(--foreground))]">
                DATA ANALYST
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl font-medium">
            "Turning messy data into clean insights and ideas into working code."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => handleScrollTo("#projects")}
              className="font-display text-xl tracking-wide bg-secondary text-secondary-foreground hover:bg-graffiti-yellow border-4 border-foreground shadow-[6px_6px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all px-8"
            >
              VIEW PROJECTS
            </Button>
            <Button
              size="lg"
              onClick={() => handleScrollTo("#contact")}
              className="font-display text-xl tracking-wide bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground border-4 border-foreground shadow-[6px_6px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all px-8"
            >
              CONTACT ME
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/samyaraj-sarkar/", color: "hover:bg-accent" },
              { icon: Github, href: "https://github.com/samyaraj26/", color: "hover:bg-graffiti-purple" },
              { icon: Instagram, href: "https://www.instagram.com/_.sam.exe._/", color: "hover:bg-primary" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 border-3 border-foreground bg-card flex items-center justify-center text-foreground ${social.color} hover:text-primary-foreground transition-all shadow-[4px_4px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px]`}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => handleScrollTo("#about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground hover:text-primary transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={32} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
