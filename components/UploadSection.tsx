import { Camera, Upload, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { useState, useRef } from "react";

interface UploadSectionProps {
  onImageUpload: (file: File) => void;
  detectedScript: string;
  targetScript: string;
  onTargetScriptChange: (script: string) => void;
  onTransliterate: () => void;
  isProcessing: boolean;
  uploadedImageUrl: string | null;
  onDetectedScriptChange?: (script: string) => void;
}

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
  "Urdu",
];

export function UploadSection({
  onImageUpload,
  detectedScript,
  targetScript,
  onTargetScriptChange,
  onTransliterate,
  isProcessing,
  uploadedImageUrl,
  onDetectedScriptChange,
}: UploadSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Upload Area */}
      <Card className="border-2 border-dashed p-8 md:p-12 text-center hover:border-primary/50 transition-colors">
        {uploadedImageUrl ? (
          <div className="space-y-4">
            <img
              src={uploadedImageUrl}
              alt="Uploaded sign"
              className="max-h-64 mx-auto rounded-lg shadow-lg object-contain"
            />
            <Button
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              className="mt-4"
            >
              Change Image
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <Camera className="h-12 w-12 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="mb-2">Upload or Capture Signboard Image</h3>
              <p className="text-muted-foreground">
                Support for all Indian language scripts
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="gap-2"
              >
                <Upload className="h-5 w-5" />
                Upload Image
              </Button>
              <Button
                variant="secondary"
                onClick={() => cameraInputRef.current?.click()}
                className="gap-2"
              >
                <Camera className="h-5 w-5" />
                Take Photo
              </Button>
            </div>
          </div>
        )}
      </Card>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Script Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Detected Script (auto-detected)</Label>
          {onDetectedScriptChange ? (
            <Select value={detectedScript} onValueChange={onDetectedScriptChange}>
              <SelectTrigger>
                <SelectValue placeholder="Upload image to detect" />
              </SelectTrigger>
              <SelectContent>
                {scripts.map((script) => (
                  <SelectItem key={script} value={script}>
                    {script}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <div className="p-3 bg-muted rounded-lg border">
              <p className="text-primary">{detectedScript || "Upload image to detect"}</p>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label>Target Script</Label>
          <Select value={targetScript} onValueChange={onTargetScriptChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select target script" />
            </SelectTrigger>
            <SelectContent>
              {scripts.map((script) => (
                <SelectItem key={script} value={script}>
                  {script}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Transliterate Button */}
      <div className="flex justify-center">
        <Button
          size="lg"
          onClick={onTransliterate}
          disabled={!uploadedImageUrl || !targetScript || isProcessing}
          className="gap-2 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity px-8"
        >
          {isProcessing ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            "Transliterate"
          )}
        </Button>
      </div>
    </div>
  );
}
