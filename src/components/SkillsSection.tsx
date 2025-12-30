import { Code, BarChart3, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "Django", "NumPy", "Pandas", "Matplotlib", "Seaborn", "C/C++"],
  },
  {
    title: "Dashboards",
    icon: BarChart3,
    skills: ["Power BI", "Tableau"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "AWS", "Firebase", "Django ORM", "MS Excel"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "VS Code", "Vercel AI"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm text-muted-foreground mb-4">EXPERTISE</p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground">
            MY SKILLS
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="border border-border p-6 hover:border-primary transition-all group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-secondary group-hover:bg-primary flex items-center justify-center transition-colors">
                  <category.icon className="w-5 h-5 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl tracking-wide text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;