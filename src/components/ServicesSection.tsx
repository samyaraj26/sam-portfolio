import { LineChart, LayoutDashboard, Server, Zap, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Marketing Research",
    subtitle: "Data Analysis",
    description: "Deep dive into marketing data to identify trends and optimize campaign performance.",
    icon: LineChart,
  },
  {
    title: "Marketing Data Analyst",
    subtitle: "Business Intelligence",
    description: "Research trends and strategies using marketing analytics to drive decisions.",
    icon: LayoutDashboard,
  },
  {
    title: "Campaign Monitoring",
    subtitle: "Real-time Tracking",
    description: "Track and optimize marketing campaigns for maximum ROI and engagement.",
    icon: Zap,
  },
  {
    title: "Report Generation and Insights",
    subtitle: "Data Visualization",
    description: "Generate comprehensive reports with actionable insights and clear visualizations.",
    icon: Server,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm text-muted-foreground mb-4">WHAT I DO</p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground">
            DATA AGENCY
            <br />
            SERVICES OVERVIEW
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-background p-8 md:p-12 group hover:bg-card transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{service.subtitle}</p>
                </div>
                <button className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-border mt-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;