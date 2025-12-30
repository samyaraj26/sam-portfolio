import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
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
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <span className="font-display text-lg text-primary-foreground">S</span>
            </div>
            <span className="font-display text-xl text-foreground tracking-wide">SAMYARAJ</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:flex text-sm bg-transparent text-foreground border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          >
            Get started
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors py-3 px-6 text-left"
                >
                  {link.name}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-border mt-2">
                <Button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full text-sm bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Get started
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