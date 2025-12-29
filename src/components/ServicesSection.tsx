import { LineChart, LayoutDashboard, Server, Zap, Database } from "lucide-react";

const services = [
  {
    title: "Data Analysis",
    description: "Transform raw data into actionable insights using Python, NumPy, and Pandas. Statistical analysis and data cleaning.",
    icon: LineChart,
  },
  {
    title: "Data Visualization",
    description: "Create stunning dashboards and visual reports using Power BI, Tableau, Matplotlib, and Seaborn.",
    icon: LayoutDashboard,
  },
  {
    title: "Backend Development",
    description: "Build robust and scalable backend systems using Django, REST APIs, and modern development practices.",
    icon: Server,
  },
  {
    title: "Automation",
    description: "Automate repetitive tasks and workflows using Python scripts to save time and reduce errors.",
    icon: Zap,
  },
  {
    title: "Database Management",
    description: "Design, optimize, and manage databases using MySQL, Firebase, and cloud solutions like AWS.",
    icon: Database,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary neon-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full neon-border" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            I offer a range of services to help businesses leverage data and technology for better decision-making and efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card rounded-xl p-6 neon-border hover:neon-border-strong transition-all duration-300 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors neon-border group-hover:animate-glow-pulse">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
