import { Mail, Github, Twitter, Linkedin, MessageSquare, Heart } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "hello@indictransliterator.com",
    link: "mailto:hello@indictransliterator.com",
    color: "from-primary to-primary/80",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Contribute to our open-source project",
    link: "#",
    color: "from-secondary to-secondary/80",
  },
  {
    icon: Twitter,
    title: "Twitter",
    description: "Follow us for updates",
    link: "#",
    color: "from-accent to-accent/80",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect with our team",
    link: "#",
    color: "from-primary via-secondary to-accent",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="w-full max-w-6xl mx-auto space-y-12 py-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="mb-4 bg-gradient-to-r from-primary via-secondary to-accent text-white border-none">
          Contact
        </Badge>
        <h2 className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Have questions, feedback, or suggestions? We'd love to hear from you. 
          Reach out through any of these channels.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.link}
            className="block group"
          >
            <Card className="p-6 h-full text-center space-y-4 hover:shadow-lg transition-all border-muted hover:border-primary/30">
              <div className="flex justify-center">
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <method.icon className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <h4 className="mb-2">{method.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </div>
            </Card>
          </a>
        ))}
      </div>

      {/* Feedback Card */}
      <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20">
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1 space-y-2">
            <h3>We Value Your Feedback</h3>
            <p className="text-muted-foreground">
              Your input helps us improve Indic Transliterator for everyone. 
              Share your experience, report issues, or suggest new features.
            </p>
          </div>
          <a
            href="mailto:feedback@indictransliterator.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent text-white hover:opacity-90 transition-opacity shrink-0"
          >
            Send Feedback
          </a>
        </div>
      </Card>

      {/* Acknowledgment */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Heart className="h-8 w-8 text-primary fill-primary/20" />
        </div>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Built with love for Bharat's linguistic diversity. 
          Supported by AICTE IKS initiative to preserve and promote Indian Knowledge Systems.
        </p>
      </div>
    </section>
  );
}
