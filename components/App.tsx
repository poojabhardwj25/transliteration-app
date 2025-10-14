import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { UploadSection } from "./components/UploadSection";
import { OutputSection } from "./components/OutputSection";
import { InfoCard } from "./components/InfoCard";
import { AboutSection } from "./components/AboutSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ProcessingLoader } from "./components/ProcessingLoader";
import { Toaster } from "./components/ui/sonner";

// Mock data for demonstration
const mockTransliterations: { [key: string]: string } = {
  "Tamil": "வணக்கம், இந்த சாலை மூடப்பட்டுள்ளது",
  "Devanagari (Hindi, Sanskrit, Marathi)": "वनक्कम, इन्थ सालै मूडप्पट्टुळ्ळदु",
  "Telugu": "వనక్కం, ఇన్థ సాలై మూడప్పట్టుళ్ళదు",
  "Malayalam": "വനക്കം, ഇന്ത സാലൈ മൂഡപ്പട്ടുള്ളദു",
  "Kannada": "ವನಕ್ಕಂ, ಇಂಥ ಸಾಲೈ ಮೂಡಪ್ಪಟ್ಟುಳ್ಳದು",
  "Bengali": "ভনক্কম, ইন্থ সালৈ মুডপ্পট্টুল্লদু",
  "Gujarati": "વનક્કમ, ઇન્થ સાલૈ મૂડપ્પટ્ટુળ્ળદુ",
  "Punjabi (Gurmukhi)": "ਵਨਕ੍ਕਮ, ਇਨ੍ਥ ਸਾਲੈ ਮੂਡਪ੍ਪਟ੍ਟੁਲ਼੍ਲ਼ਦੁ",
  "Odia": "ଭନକ୍କମ, ଇନ୍ଥ ସାଲୈ ମୂଡପ୍ପଟ୍ଟୁଳ୍ଳଦୁ",
};

const mockOriginalText = "வணக்கம், இந்த சாலை மூடப்பட்டுள்ளது";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [detectedScript, setDetectedScript] = useState("");
  const [targetScript, setTargetScript] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [originalText, setOriginalText] = useState("");
  const [transliteratedText, setTransliteratedText] = useState("");

  useEffect(() => {
    // Check system preference for dark mode
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleImageUpload = (file: File) => {
    const url = URL.createObjectURL(file);
    setUploadedImageUrl(url);
    // Mock detection - in real app, this would use OCR
    // Randomly select a script to simulate detection
    const scripts = [
      "Devanagari (Hindi, Sanskrit, Marathi)",
      "Tamil",
      "Telugu",
      "Malayalam",
      "Kannada",
      "Bengali",
      "Gujarati",
      "Punjabi (Gurmukhi)",
      "Odia",
    ];
    const randomScript = scripts[Math.floor(Math.random() * scripts.length)];
    setDetectedScript(randomScript);
    // Reset outputs
    setOriginalText("");
    setTransliteratedText("");
  };

  const handleTransliterate = () => {
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setOriginalText(mockOriginalText);
      setTransliteratedText(
        mockTransliterations[targetScript] || "Transliteration result"
      );
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-center" />
      
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 space-y-12">
        {/* Hero Section */}
        <section id="home" className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Read any Indian script, anywhere.
          </h2>
          <p className="text-muted-foreground">
            Your travel companion for Indian signboards. Upload a photo of any street
            sign in an Indian language and see it transliterated into your preferred
            script instantly.
          </p>
        </section>

        {/* Upload Section */}
        <UploadSection
          onImageUpload={handleImageUpload}
          detectedScript={detectedScript}
          targetScript={targetScript}
          onTargetScriptChange={setTargetScript}
          onTransliterate={handleTransliterate}
          isProcessing={isProcessing}
          uploadedImageUrl={uploadedImageUrl}
          onDetectedScriptChange={setDetectedScript}
        />

        {/* Processing Loader */}
        {isProcessing && <ProcessingLoader />}

        {/* Output Section */}
        <OutputSection
          originalText={originalText}
          transliteratedText={transliteratedText}
        />

        {/* Info Card */}
        <InfoCard />

        {/* About Section */}
        <AboutSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
