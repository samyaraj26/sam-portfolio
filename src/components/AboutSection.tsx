import { GraduationCap, Award, Briefcase } from "lucide-react";

const education = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "Gauhati University",
  period: "2023 – 2027",
};

const certifications = [
  {
    title: "IT Trainee – Airport",
    period: "July – August 2025",
    icon: Briefcase,
  },
  {
    title: "100 Hours Cyber Security Training",
    institution: "NIELIT",
    period: "July – August 2024",
    icon: Award,
  },
  {
    title: "Machine Learning Certification",
    period: "May 2025",
    icon: Award,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary neon-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full neon-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate <span className="text-primary font-medium">Python Developer</span> and{" "}
              <span className="text-primary font-medium">Data Analyst</span> currently pursuing my
              B.Tech in Computer Science. I specialize in transforming raw data into actionable
              insights and building efficient backend solutions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With expertise in data visualization, machine learning, and web development, I create
              solutions that bridge the gap between complex data and meaningful business decisions.
              My goal is to leverage technology to solve real-world problems efficiently.
            </p>

            {/* Education Card */}
            <div className="glass-card rounded-xl p-6 neon-border mt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {education.degree}
                  </h3>
                  <p className="text-primary font-medium">{education.institution}</p>
                  <p className="text-muted-foreground text-sm mt-1">{education.period}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Training */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Training & Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-5 neon-border hover:neon-border-strong transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <cert.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      {cert.institution && (
                        <p className="text-muted-foreground text-sm">{cert.institution}</p>
                      )}
                      <p className="text-primary/70 text-sm mt-1">{cert.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
