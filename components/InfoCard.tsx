import { Card } from "./ui/card";
import { Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

const facts = [
  "Devanagari is used in over 120 languages of India!",
  "Tamil is one of the oldest living languages with a literary tradition spanning over 2000 years.",
  "Bengali script is used by more than 265 million people worldwide.",
  "Malayalam has 15 vowel letters and 36 consonant letters.",
  "Telugu script is known for its rounded shapes and is called 'Italian of the East' for its melodious sound.",
  "Gurmukhi was standardized by Guru Angad Dev, the second Sikh Guru.",
  "Gujarati script evolved from Devanagari and was standardized around the 17th century.",
  "Kannada script is an abugida writing system and shares similarities with Telugu script.",
  "Odia script is one of the official scripts of India and is used to write the Odia language.",
];

export function InfoCard() {
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
            <Lightbulb className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="mb-2 text-primary">Did You Know?</h3>
            <p className="text-muted-foreground">{facts[currentFact]}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
