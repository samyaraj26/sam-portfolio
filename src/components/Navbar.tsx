import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b-4 border-foreground"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-3xl md:text-4xl tracking-wider"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-primary">SAM</span>
            <span className="text-secondary">.</span>
            <span className="text-foreground">EXE</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="font-display text-lg text-foreground hover:text-primary transition-colors duration-200 tracking-wide"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("#contact")}
              className="font-display text-lg tracking-wide bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground border-4 border-foreground shadow-[4px_4px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              CONTACT ME
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 border-2 border-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-4 border-foreground shadow-[8px_8px_0px_hsl(var(--foreground))] mb-4">
            <div className="flex flex-col py-4">
              {navLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-display text-xl text-foreground hover:bg-primary hover:text-primary-foreground transition-colors py-3 px-6 text-left tracking-wide ${
                    index % 2 === 0 ? "hover:bg-primary" : "hover:bg-secondary hover:text-secondary-foreground"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="px-4 pt-4 border-t-2 border-foreground mt-2">
                <Button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full font-display text-lg bg-primary text-primary-foreground border-4 border-foreground shadow-[4px_4px_0px_hsl(var(--foreground))]"
                >
                  CONTACT ME
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
