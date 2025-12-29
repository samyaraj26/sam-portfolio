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
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary neon-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full neon-border" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card rounded-xl p-6 neon-border hover:neon-border-strong transition-all duration-300 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
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
