import { Github, Linkedin, Instagram, Heart } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/samyaraj-sarkar/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/samyaraj26/", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/_.sam.exe._/", label: "Instagram" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t-4 border-foreground bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-3xl tracking-wider"
          >
            <span className="text-primary">SAM</span>
            <span className="text-secondary">.</span>
            <span className="text-foreground">EXE</span>
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-2 font-medium">
            © {currentYear} SAMYARAJ SARKAR • MADE WITH{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> IN INDIA
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 border-2 border-foreground bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all shadow-[3px_3px_0px_hsl(var(--foreground))] hover:shadow-[4px_4px_0px_hsl(var(--foreground))] hover:translate-x-[-1px] hover:translate-y-[-1px]"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
