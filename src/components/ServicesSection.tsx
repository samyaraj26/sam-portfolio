import { LineChart, LayoutDashboard, Server, Zap, Database } from "lucide-react";

const services = [
  {
    title: "DATA ANALYSIS",
    description: "Transform raw data into actionable insights using Python, NumPy, and Pandas.",
    icon: LineChart,
    color: "bg-primary",
    rotation: -2,
  },
  {
    title: "VISUALIZATION",
    description: "Create stunning dashboards using Power BI, Tableau, and Python libraries.",
    icon: LayoutDashboard,
    color: "bg-secondary text-secondary-foreground",
    rotation: 1,
  },
  {
    title: "BACKEND DEV",
    description: "Build robust systems using Django, REST APIs, and modern practices.",
    icon: Server,
    color: "bg-accent",
    rotation: -1,
  },
  {
    title: "AUTOMATION",
    description: "Automate repetitive tasks with Python scripts to save time and reduce errors.",
    icon: Zap,
    color: "bg-graffiti-orange",
    rotation: 2,
  },
  {
    title: "DATABASES",
    description: "Design and manage databases using MySQL, Firebase, and AWS.",
    icon: Database,
    color: "bg-graffiti-purple",
    rotation: -1,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary opacity-5 rotate-45" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary opacity-10 -rotate-12" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block bg-graffiti-green text-foreground px-6 py-2 border-4 border-foreground shadow-[6px_6px_0px_hsl(var(--foreground))] -rotate-1 mb-4">
            <span className="font-display text-sm tracking-widest">WHAT I DO</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            MY <span className="text-secondary">SERVICES</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${service.color} p-6 border-4 border-foreground shadow-[8px_8px_0px_hsl(var(--foreground))] hover-lift`}
              style={{ transform: `rotate(${service.rotation}deg)` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-foreground/10 flex items-center justify-center mb-5">
                <service.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl tracking-wide mb-3">
                {service.title}
              </h3>
              <p className="opacity-90 text-sm leading-relaxed">
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
