import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Helmet>
        <title>Samyaraj Sarkar | Data Analyst & Python Developer</title>
        <meta
          name="description"
          content="Samyaraj Sarkar - Data Analyst and Python Developer specializing in data visualization, machine learning, and backend development. Transform your data into actionable insights."
        />
        <meta
          name="keywords"
          content="Data Analyst, Python Developer, Data Visualization, Power BI, Tableau, Machine Learning, Django"
        />
        <meta name="author" content="Samyaraj Sarkar" />
        <link rel="canonical" href="https://samyaraj.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Samyaraj Sarkar | Data Analyst & Python Developer" />
        <meta
          property="og:description"
          content="Data Analyst and Python Developer specializing in data visualization, machine learning, and backend development."
        />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Samyaraj Sarkar | Data Analyst & Python Developer" />
        <meta
          name="twitter:description"
          content="Data Analyst and Python Developer specializing in data visualization, machine learning, and backend development."
        />
      </Helmet>

      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
