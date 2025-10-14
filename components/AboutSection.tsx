import { 
  Languages, 
  Image, 
  Volume2, 
  Copy, 
  Moon, 
  Globe,
  Users,
  GraduationCap,
  ArrowRight,
  CircleCheck,
  Upload,
  ScanText,
  FileText,
  Headphones
} from "lucide-react";
import { motion } from "framer-motion";

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";



const features = [
  {
    icon: Languages,
    title: "15+ Indian Scripts",
    description: "Support for Devanagari, Tamil, Telugu, Bengali, Malayalam, Kannada, and more",
  },
  {
    icon: Image,
    title: "Image-to-Text",
    description: "Advanced OCR technology to extract text from street signs and images",
  },
  {
    icon: Volume2,
    title: "Text-to-Speech",
    description: "Listen to transliterated text in your preferred language",
  },
  {
    icon: Copy,
    title: "Quick Copy",
    description: "One-click copy functionality for easy sharing and note-taking",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description: "Eye-friendly dark theme for comfortable usage anytime",
  },
  {
    icon: Globe,
    title: "Universal Access",
    description: "Web-based tool accessible from any device, anywhere",
  },
];

const flowSteps = [
  { icon: Upload, text: "Upload Image", color: "from-primary to-primary/80" },
  { icon: ScanText, text: "Detect Script", color: "from-secondary to-secondary/80" },
  { icon: FileText, text: "Transliterate", color: "from-accent to-accent/80" },
  { icon: Headphones, text: "Copy/Listen", color: "from-primary to-secondary" },
];

const useCases = [
  {
    icon: Users,
    title: "For Travelers",
    description: "Navigate India confidently by understanding street signs and local signage",
  },
  {
    icon: GraduationCap,
    title: "For Students",
    description: "Learn and compare different Indian scripts to enhance linguistic knowledge",
  },
  {
    icon: Globe,
    title: "For Enthusiasts",
    description: "Explore the rich diversity of Indian languages and writing systems",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto space-y-16 py-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="mb-4 bg-gradient-to-r from-primary via-secondary to-accent text-white border-none">
          About
        </Badge>
        <h2 className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Bridging Bharat through Scripts 🇮🇳
        </h2>
        <p className="max-w-3xl mx-auto text-muted-foreground">
          Indic Transliterator is a powerful tool that helps you read and understand Indian scripts 
          by capturing or uploading images of street signs, documents, or any text in Indian languages. 
          Convert text seamlessly between different scripts and break down language barriers across India.
        </p>
      </div>

      {/* Visual Flow */}
      <Card className="p-8 md:p-12 bg-gradient-to-br from-muted/30 to-muted/10 border-none shadow-lg">
        <h3 className="text-center mb-8">How It Works</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {flowSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                )}
              </motion.div>
              <p className="text-center">{step.text}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Key Features */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="mb-2">Key Features</h3>
          <p className="text-muted-foreground">Everything you need to bridge language barriers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow border-muted">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4>{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why It Matters */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="mb-2">Why It Matters</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            India's linguistic diversity is its strength. With 22 official languages and multiple scripts, 
            understanding signage across regions can be challenging. Our tool bridges these gaps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className="p-8 text-center space-y-4 bg-gradient-to-br from-card to-muted/20 border-muted hover:border-primary/30 transition-all"
            >
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h4>{useCase.title}</h4>
              <p className="text-muted-foreground text-sm">
                {useCase.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              15+
            </div>
            <p className="text-muted-foreground text-sm">Scripts Supported</p>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              22
            </div>
            <p className="text-muted-foreground text-sm">Official Languages</p>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              100%
            </div>
            <p className="text-muted-foreground text-sm">Free to Use</p>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              24/7
            </div>
            <p className="text-muted-foreground text-sm">Always Available</p>
          </div>
        </div>
      </Card>

      {/* Mission Statement */}
      <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-card to-muted/10 border-none shadow-lg">
        <div className="flex justify-center mb-6">
          <CircleCheck className="h-16 w-16 text-accent" />
        </div>
        <h3 className="mb-4">Our Mission</h3>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          To make India's rich linguistic heritage accessible to everyone by providing 
          a simple, free, and powerful tool that breaks down script barriers and promotes 
          unity in diversity. Whether you're traveling, learning, or exploring, we're here 
          to help you connect with the diverse languages of Bharat.
        </p>
      </Card>
    </section>
  );
}
