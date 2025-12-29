import { Code, BarChart3, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "PROGRAMMING",
    icon: Code,
    skills: ["Python", "Django", "NumPy", "Pandas", "Matplotlib", "Seaborn", "C/C++"],
    color: "bg-primary",
    shadowColor: "shadow-[8px_8px_0px_hsl(var(--color-pink))]",
  },
  {
    title: "DASHBOARDS",
    icon: BarChart3,
    skills: ["Power BI", "Tableau"],
    color: "bg-secondary",
    shadowColor: "shadow-[8px_8px_0px_hsl(var(--color-yellow))]",
  },
  {
    title: "DATABASES",
    icon: Database,
    skills: ["MySQL", "AWS", "Firebase", "Django ORM", "MS Excel"],
    color: "bg-accent",
    shadowColor: "shadow-[8px_8px_0px_hsl(var(--color-blue))]",
  },
  {
    title: "TOOLS",
    icon: Wrench,
    skills: ["Git", "VS Code", "Vercel AI"],
    color: "bg-graffiti-green",
    shadowColor: "shadow-[8px_8px_0px_hsl(var(--color-green))]",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--foreground)) 35px, hsl(var(--foreground)) 36px)`
      }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block bg-accent text-accent-foreground px-6 py-2 border-4 border-foreground shadow-[6px_6px_0px_hsl(var(--foreground))] rotate-1 mb-4">
            <span className="font-display text-sm tracking-widest">WHAT I KNOW</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            MY <span className="text-primary">SKILLS</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`${category.color} p-6 border-4 border-foreground ${category.shadowColor} hover-lift`}
              style={{ transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-foreground/10">
                  <category.icon className="w-6 h-6 text-foreground" />
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
                    className="px-3 py-1.5 text-sm font-bold bg-background text-foreground border-2 border-foreground"
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
