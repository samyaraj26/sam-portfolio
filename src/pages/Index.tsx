import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Samyaraj Sarkar | Python Developer & Data Analyst</title>
        <meta
          name="description"
          content="Samyaraj Sarkar - Python Developer and Data Analyst specializing in data visualization, machine learning, and backend development. Turning messy data into clean insights."
        />
        <meta
          name="keywords"
          content="Samyaraj Sarkar, Python Developer, Data Analyst, Data Visualization, Machine Learning, Django, Power BI, Tableau"
        />
        <meta name="author" content="Samyaraj Sarkar" />
        <link rel="canonical" href="https://samyaraj.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Samyaraj Sarkar | Python Developer & Data Analyst" />
        <meta
          property="og:description"
          content="Python Developer and Data Analyst specializing in data visualization, machine learning, and backend development."
        />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Samyaraj Sarkar | Python Developer & Data Analyst" />
        <meta
          name="twitter:description"
          content="Python Developer and Data Analyst specializing in data visualization, machine learning, and backend development."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
