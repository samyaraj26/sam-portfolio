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
    <section id="about" className="py-20 md:py-32 bg-card border-y border-border">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm text-muted-foreground mb-4">WHO I AM</p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground">
            ABOUT ME
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
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
            </p>

            {/* Education Card */}
            <div className="border border-border p-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground tracking-wide">
                    {education.degree}
                  </h3>
                  <p className="text-muted-foreground">{education.institution}</p>
                  <p className="text-sm text-primary mt-1">{education.period}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-foreground mb-6 tracking-wide">
              TRAINING & CERTIFICATIONS
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="border border-border p-5 hover:border-primary transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary flex items-center justify-center">
                      <cert.icon className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">
                        {cert.title}
                      </h4>
                      {cert.institution && (
                        <p className="text-sm text-muted-foreground">{cert.institution}</p>
                      )}
                      <p className="text-sm text-primary mt-1">{cert.period}</p>
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