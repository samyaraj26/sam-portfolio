import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const techLogos = [
  "Python", "Django", "Pandas", "Power BI", "MySQL", "AWS", "Git", "Tableau"
];

const HeroSection = () => {
  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-20">
      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-foreground leading-none">
              WE ARE{" "}
              <span className="inline-flex items-center">
                <TrendingUp className="w-10 h-10 md:w-14 md:h-14 text-primary mx-2" />
              </span>
              A POWERFUL
              <br />
              <span className="text-foreground">DATA ANALYST</span>
              <br />
              <span className="text-foreground">AGENCY</span>
            </h1>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hi, I'm Samyaraj — a data analyst & Python developer specializing in extracting insights from complex datasets to drive business decisions.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I believe in data-driven storytelling, creating clear visualizations that communicate insights for strategic decision-making.
              </p>
            </div>
          </div>

          {/* Right Stats */}
          <div className="flex justify-end gap-8 lg:gap-12">
            <div className="bg-primary px-6 py-4">
              <span className="font-display text-4xl md:text-5xl text-primary-foreground">10+</span>
              <p className="text-xs text-primary-foreground/80 mt-1">Projects<br />completed</p>
            </div>
            <div className="bg-secondary px-6 py-4 border border-border">
              <span className="font-display text-4xl md:text-5xl text-secondary-foreground">5+</span>
              <p className="text-xs text-muted-foreground mt-1">Clients<br />served</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Logos Marquee */}
      <div className="border-y border-border bg-card overflow-hidden py-4">
        <div className="flex marquee-track">
          {[...techLogos, ...techLogos].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-8 text-muted-foreground text-sm font-medium whitespace-nowrap"
            >
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Description Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed font-light">
            Your dynamically in{" "}
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary rounded-full mx-1">
              <span className="text-primary-foreground text-sm">✓</span>
            </span>{" "}
            navigating the digital landscape. We're more than an agency, we're passionate about turning complex{" "}
            <span className="inline-flex items-center justify-center w-8 h-8 bg-secondary border border-border mx-1">
              <span className="text-secondary-foreground text-sm">📁</span>
            </span>{" "}
            data into actionable insights{" "}
            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary mx-1">
              <span className="text-primary-foreground text-sm">📊</span>
            </span>{" "}
            for your success.
          </p>

          <div className="flex justify-between items-end mt-12">
            <div className="text-sm text-muted-foreground">
              <p>Based in Assam, India</p>
              <p className="text-foreground font-medium">samyaraj26@gmail.com</p>
            </div>
            <Button
              onClick={() => handleScrollTo("#projects")}
              className="group bg-transparent text-foreground border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              View Projects
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;