import { motion } from "motion/react";
import { Upload, ScanSearch, Languages, Download, Camera, Settings, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const steps = [
  {
    step: 1,
    icon: Camera,
    title: "Capture or Upload",
    description: "Take a photo of any street sign, menu, or document in an Indian script, or upload an existing image from your device.",
    color: "from-primary to-primary/80",
  },
  {
    step: 2,
    icon: ScanSearch,
    title: "Automatic Detection",
    description: "Our intelligent OCR system automatically detects and extracts text from the image, identifying the script used.",
    color: "from-secondary to-secondary/80",
  },
  {
    step: 3,
    icon: Settings,
    title: "Choose Target Script",
    description: "Select your preferred target script from our list of 15+ supported Indian writing systems.",
    color: "from-accent to-accent/80",
  },
  {
    step: 4,
    icon: Zap,
    title: "Instant Transliteration",
    description: "Get instant transliteration results that preserve the pronunciation while converting between scripts.",
    color: "from-primary via-secondary to-accent",
  },
  {
    step: 5,
    icon: Download,
    title: "Copy or Listen",
    description: "Copy the transliterated text to your clipboard or use text-to-speech to hear the pronunciation.",
    color: "from-accent to-primary",
  },
];

const tips = [
  "Ensure good lighting when capturing images for best results",
  "Hold your camera steady and keep text in focus",
  "Works with both digital and printed text",
  "Supports multiple text orientations",
  "No internet required for basic transliteration (coming soon)",
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full max-w-6xl mx-auto space-y-12 py-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="mb-4 bg-gradient-to-r from-primary via-secondary to-accent text-white border-none">
          How It Works
        </Badge>
        <h2 className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Simple, Fast & Accurate
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Our streamlined process makes transliterating Indian scripts effortless. 
          Follow these simple steps to get started.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-8">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 md:p-8 hover:shadow-lg transition-all border-muted">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Step Number & Icon */}
                <div className="flex items-center gap-4 md:gap-6 shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/30">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {item.step}
                    </span>
                  </div>
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <h3>{item.title}</h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Tips Section */}
      <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Languages className="h-5 w-5 text-white" />
            </div>
            <h3>Pro Tips for Best Results</h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <span className="text-muted-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <a
          href="#home"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent text-white hover:opacity-90 transition-opacity"
        >
          <Upload className="h-5 w-5" />
          Start Transliterating Now
        </a>
      </div>
    </section>
  );
}
