import { ExternalLink, Github, Film, HeartPulse, ShoppingCart, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    title: "IMDB Movie EDA",
    description: "Exploratory Data Analysis on IMDB movie dataset. Analyzed trends, ratings, and box office performance using Python and visualization libraries.",
    icon: Film,
    tags: ["Python", "Pandas", "Matplotlib", "EDA"],
    github: "https://github.com/samyaraj26/imdb-movie-eda",
  },
  {
    title: "Health Data Analytics",
    description: "Comprehensive health data analysis focusing on patient records and treatment outcomes for better healthcare decision-making.",
    icon: HeartPulse,
    tags: ["Python", "Data Analysis", "Healthcare"],
    github: "https://github.com/samyaraj26/health-data-analytics",
  },
  {
    title: "E-Commerce Segmentation",
    description: "Customer segmentation using clustering algorithms for targeted marketing strategies and improved customer retention.",
    icon: ShoppingCart,
    tags: ["Python", "ML", "Clustering"],
    github: "https://github.com/samyaraj26/ecommerce-segmentation",
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-card border-y border-border">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-sm text-muted-foreground mb-4">MY WORK</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground">
              PRAISE FOR OUR DATA
              <br />
              AGENCY SERVICES
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={prevProject}
              className="w-12 h-12 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextProject}
              className="w-12 h-12 bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-background border border-border p-6 hover:border-primary transition-all group"
            >
              {/* Project Icon */}
              <div className="w-12 h-12 bg-primary flex items-center justify-center mb-6">
                <project.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl text-foreground tracking-wide mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground border border-border"
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
                  className="flex-1 bg-transparent text-foreground border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-transparent text-foreground border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          >
            <a href="https://github.com/samyaraj26/" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View more on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;