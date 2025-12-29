import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "samyaraj26@gmail.com",
    href: "mailto:samyaraj26@gmail.com",
    color: "bg-primary",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+91 9864923022",
    href: "tel:+919864923022",
    color: "bg-accent",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Assam, India",
    href: null,
    color: "bg-secondary text-secondary-foreground",
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/samyaraj-sarkar/", label: "LinkedIn", color: "bg-accent" },
  { icon: Github, href: "https://github.com/samyaraj26/", label: "GitHub", color: "bg-graffiti-purple" },
  { icon: Instagram, href: "https://www.instagram.com/_.sam.exe._/", label: "Instagram", color: "bg-primary" },
];

// EmailJS credentials - Replace these with your actual credentials
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
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
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Samyaraj",
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
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
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-graffiti-green opacity-10 rotate-12" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-primary opacity-10 -rotate-12" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block bg-graffiti-orange text-foreground px-6 py-2 border-4 border-foreground shadow-[6px_6px_0px_hsl(var(--foreground))] -rotate-1 mb-4">
            <span className="font-display text-sm tracking-widest">LET'S CONNECT</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="graffiti-card p-6 md:p-8">
            <h3 className="font-display text-2xl text-foreground mb-6 tracking-wide">
              SEND A MESSAGE
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  type="text"
                  placeholder="YOUR NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="font-display tracking-wide bg-muted border-2 border-foreground text-foreground placeholder:text-muted-foreground h-12"
                  maxLength={100}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="YOUR EMAIL"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="font-display tracking-wide bg-muted border-2 border-foreground text-foreground placeholder:text-muted-foreground h-12"
                  maxLength={255}
                />
              </div>
              <div>
                <Textarea
                  placeholder="YOUR MESSAGE"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="font-display tracking-wide bg-muted border-2 border-foreground text-foreground placeholder:text-muted-foreground min-h-[150px]"
                  maxLength={1000}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full font-display text-xl tracking-wide bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground border-4 border-foreground shadow-[6px_6px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                {isSubmitting ? (
                  "SENDING..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    SEND MESSAGE
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className={`${info.color} p-5 border-4 border-foreground shadow-[6px_6px_0px_hsl(var(--foreground))] hover-lift`}
                  style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-foreground/10">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-display text-sm tracking-widest opacity-80">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-bold text-lg hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-bold text-lg">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-display text-2xl text-foreground mb-6 tracking-wide inline-block bg-graffiti-green text-foreground px-4 py-1 border-2 border-foreground shadow-[4px_4px_0px_hsl(var(--foreground))]">
                FOLLOW ME
              </h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-14 h-14 ${social.color} border-4 border-foreground flex items-center justify-center text-foreground shadow-[4px_4px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_hsl(var(--foreground))] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
