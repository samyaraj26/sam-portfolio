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
    color: "graffiti-card-pink",
  },
  {
    title: "100 Hours Cyber Security Training",
    institution: "NIELIT",
    period: "July – August 2024",
    icon: Award,
    color: "graffiti-card-blue",
  },
  {
    title: "Machine Learning Certification",
    period: "May 2025",
    icon: Award,
    color: "graffiti-card-yellow",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-secondary opacity-10 rotate-45" />
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-primary opacity-10 -rotate-12" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block bg-primary text-primary-foreground px-6 py-2 border-4 border-foreground shadow-[6px_6px_0px_hsl(var(--foreground))] -rotate-1 mb-4">
            <span className="font-display text-sm tracking-widest">WHO AM I?</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            ABOUT <span className="text-stroke-pink">ME</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio */}
          <div className="space-y-6">
            <div className="graffiti-card p-6 md:p-8 hover-lift">
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                I'm a passionate <span className="text-primary font-bold">Python Developer</span> and{" "}
                <span className="text-secondary font-bold">Data Analyst</span> currently pursuing my
                B.Tech in Computer Science. I specialize in transforming raw data into actionable
                insights and building efficient backend solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With expertise in data visualization, machine learning, and web development, I create
                solutions that bridge the gap between complex data and meaningful business decisions.
              </p>
            </div>

            {/* Education Card */}
            <div className="bg-accent text-accent-foreground p-6 border-4 border-foreground shadow-[8px_8px_0px_hsl(var(--foreground))] hover-lift rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-foreground/10">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wide mb-1">
                    {education.degree}
                  </h3>
                  <p className="font-bold">{education.institution}</p>
                  <p className="text-accent-foreground/80 text-sm mt-1">{education.period}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Training */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-foreground mb-6 inline-block bg-secondary text-secondary-foreground px-4 py-1 border-2 border-foreground shadow-[4px_4px_0px_hsl(var(--foreground))]">
              TRAINING & CERTS
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`${cert.color} p-5 hover-lift`}
                  style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-foreground/10">
                      <cert.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display text-lg tracking-wide text-foreground">
                        {cert.title}
                      </h4>
                      {cert.institution && (
                        <p className="text-muted-foreground text-sm">{cert.institution}</p>
                      )}
                      <p className="text-primary text-sm font-bold mt-1">{cert.period}</p>
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
