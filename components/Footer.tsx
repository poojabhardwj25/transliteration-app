export function Footer() {
  return (
    <footer className="mt-auto border-t bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <a href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span className="hidden md:inline">|</span>
            <a href="#about-iks" className="hover:text-primary transition-colors">
              About AICTE IKS
            </a>
            <span className="hidden md:inline">|</span>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Bridging Bharat through Scripts</span>
            <span className="text-xl">🇮🇳</span>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-muted-foreground">
          <p>© 2025 Indic Transliterator. Empowering linguistic diversity.</p>
        </div>
      </div>
    </footer>
  );
}
