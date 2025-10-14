import { Volume2, Copy, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

interface OutputSectionProps {
  originalText: string;
  transliteratedText: string;
}

export function OutputSection({
  originalText,
  transliteratedText,
}: OutputSectionProps) {
  const [copiedOriginal, setCopiedOriginal] = useState(false);
  const [copiedTransliterated, setCopiedTransliterated] = useState(false);

  const handleCopy = async (text: string, type: "original" | "transliterated") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "original") {
        setCopiedOriginal(true);
        setTimeout(() => setCopiedOriginal(false), 2000);
      } else {
        setCopiedTransliterated(true);
        setTimeout(() => setCopiedTransliterated(false), 2000);
      }
      toast.success("Text copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy text");
    }
  };

  const handleSpeak = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
      toast.success("Playing audio...");
    } else {
      toast.error("Text-to-speech not supported in your browser");
    }
  };

  if (!originalText && !transliteratedText) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="p-6 md:p-8">
        <h3 className="mb-6 text-center">Translation Result</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Original Text */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Extracted Text</Label>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleSpeak(originalText)}
                  className="h-8 w-8"
                  title="Text-to-Speech"
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy(originalText, "original")}
                  className="h-8 w-8"
                  title="Copy text"
                >
                  {copiedOriginal ? (
                    <Check className="h-4 w-4 text-accent" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <Textarea
              value={originalText}
              readOnly
              className="min-h-[200px] resize-none bg-muted/50"
              placeholder="Original text will appear here..."
            />
          </div>

          {/* Transliterated Text */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Transliterated Text</Label>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleSpeak(transliteratedText)}
                  className="h-8 w-8"
                  title="Text-to-Speech"
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy(transliteratedText, "transliterated")}
                  className="h-8 w-8"
                  title="Copy text"
                >
                  {copiedTransliterated ? (
                    <Check className="h-4 w-4 text-accent" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <Textarea
              value={transliteratedText}
              readOnly
              className="min-h-[200px] resize-none bg-muted/50"
              placeholder="Transliterated text will appear here..."
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm text-muted-foreground">{children}</label>;
}
