import { ExternalLink, Github, Film, HeartPulse, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "IMDB MOVIE EDA",
    description: "Exploratory Data Analysis on IMDB movie dataset. Analyzed trends, ratings, and box office performance.",
    icon: Film,
    tags: ["Python", "Pandas", "Matplotlib", "EDA"],
    github: "https://github.com/samyaraj26/imdb-movie-eda",
    color: "bg-primary",
  },
  {
    title: "HEALTH DATA ANALYTICS",
    description: "Comprehensive health data analysis focusing on patient records and treatment outcomes.",
    icon: HeartPulse,
    tags: ["Python", "Data Analysis", "Healthcare"],
    github: "https://github.com/samyaraj26/health-data-analytics",
    color: "bg-accent",
  },
  {
    title: "E-COMMERCE SEGMENTATION",
    description: "Customer segmentation using clustering algorithms for targeted marketing strategies.",
    icon: ShoppingCart,
    tags: ["Python", "ML", "Clustering"],
    github: "https://github.com/samyaraj26/ecommerce-segmentation",
    color: "bg-secondary text-secondary-foreground",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 35px, hsl(var(--foreground)) 35px, hsl(var(--foreground)) 36px)`
      }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block bg-graffiti-purple text-foreground px-6 py-2 border-4 border-foreground shadow-[6px_6px_0px_hsl(var(--foreground))] rotate-1 mb-4">
            <span className="font-display text-sm tracking-widest">MY WORK</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            FEATURED <span className="text-accent">PROJECTS</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card border-4 border-foreground shadow-[8px_8px_0px_hsl(var(--foreground))] hover-lift overflow-hidden"
              style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
            >
              {/* Project Header */}
              <div className={`${project.color} p-6 flex items-center justify-center`}>
                <project.icon className="w-16 h-16" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl tracking-wide text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-bold bg-muted text-muted-foreground border-2 border-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 font-display tracking-wide bg-foreground text-background hover:bg-primary hover:text-primary-foreground border-2 border-foreground"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GITHUB
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground border-2 border-foreground"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="font-display text-xl tracking-wide bg-graffiti-orange text-foreground hover:bg-secondary hover:text-secondary-foreground border-4 border-foreground shadow-[6px_6px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          >
            <a href="https://github.com/samyaraj26/" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              VIEW MORE ON GITHUB
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
