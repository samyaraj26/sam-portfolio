import { ExternalLink, Github, Film, HeartPulse, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "IMDB Movie EDA",
    description: "Exploratory Data Analysis on IMDB movie dataset. Analyzed trends, ratings, genres, and box office performance using Python, Pandas, and visualization libraries.",
    icon: Film,
    tags: ["Python", "Pandas", "Matplotlib", "EDA"],
    github: "https://github.com/samyaraj26/imdb-movie-eda",
  },
  {
    title: "Health Data Analytics",
    description: "Comprehensive health data analysis project focusing on patient records, treatment outcomes, and healthcare trends using statistical methods.",
    icon: HeartPulse,
    tags: ["Python", "Data Analysis", "Healthcare", "Visualization"],
    github: "https://github.com/samyaraj26/health-data-analytics",
  },
  {
    title: "E-Commerce Customer Segmentation",
    description: "Customer segmentation analysis for e-commerce using clustering algorithms. Identified key customer groups for targeted marketing strategies.",
    icon: ShoppingCart,
    tags: ["Python", "Machine Learning", "Clustering", "Analytics"],
    github: "https://github.com/samyaraj26/ecommerce-segmentation",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary neon-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full neon-border" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my data analysis and development projects. Each project demonstrates my approach to solving real-world problems with data.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-xl overflow-hidden neon-border hover:neon-border-strong transition-all duration-300 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="h-40 bg-gradient-to-br from-primary/20 via-secondary to-primary/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <project.icon className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
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
                      className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 text-primary hover:bg-primary/10"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/80"
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
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
          >
            <a href="https://github.com/samyaraj26/" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
