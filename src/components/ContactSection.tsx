import { useState, FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/samyaraj-sarkar/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/samyaraj26/", label: "Github" },
  { icon: Instagram, href: "https://www.instagram.com/_.sam.exe._/", label: "Instagram" },
];

const footerLinks = {
  about: ["Overview", "Features", "Solutions", "Tutorials"],
  company: ["About us", "Careers", "Press", "News"],
  resource: ["Blog", "Newsletter", "Events", "Help centre"],
  social: ["Twitter", "LinkedIn", "Facebook", "GitHub"],
  legal: ["Terms", "Privacy", "Cookies", "Licenses"],
};

// EmailJS credentials - Replace these with your actual credentials
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email.",
        variant: "destructive",
      });
      return;
    }

    if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID") {
      toast({
        title: "EmailJS Not Configured",
        description: "Please configure EmailJS credentials to enable email functionality.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_email: email,
          message: "New contact request from portfolio",
          to_name: "Samyaraj",
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background">
      {/* CTA Section */}
      <div className="bg-primary py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6">
              Maximize Success
              <br />
              With Our Data Expertise
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Let's work together to transform your data into actionable insights that drive business growth.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-primary-foreground text-foreground border-0 placeholder:text-muted-foreground"
                maxLength={255}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-background text-foreground hover:bg-secondary"
              >
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
            {/* Logo */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary flex items-center justify-center">
                  <span className="font-display text-lg text-primary-foreground">S</span>
                </div>
                <span className="font-display text-xl text-foreground">SAMYARAJ</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Powerful, Innovative,
                <br />
                Data-Driven Solutions
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-4">About</h4>
              {footerLinks.about.map((link) => (
                <a key={link} href="#" className="block text-sm text-muted-foreground hover:text-foreground py-1">
                  {link}
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-4">Company</h4>
              {footerLinks.company.map((link) => (
                <a key={link} href="#" className="block text-sm text-muted-foreground hover:text-foreground py-1">
                  {link}
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-4">Resource</h4>
              {footerLinks.resource.map((link) => (
                <a key={link} href="#" className="block text-sm text-muted-foreground hover:text-foreground py-1">
                  {link}
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-4">Social</h4>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-foreground py-1"
                >
                  {social.label}
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-4">Legal</h4>
              {footerLinks.legal.map((link) => (
                <a key={link} href="#" className="block text-sm text-muted-foreground hover:text-foreground py-1">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Samyaraj Sarkar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;