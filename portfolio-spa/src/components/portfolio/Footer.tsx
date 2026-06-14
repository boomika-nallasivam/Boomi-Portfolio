import { Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p className="inline-flex items-center gap-1.5">
          Built with <Heart className="h-4 w-4 fill-primary text-primary" /> by Boomika Nallasivam · 2026
        </p>
        <a
          href="https://github.com/boomika-nallasivam"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
        >
          <Github className="h-4 w-4" /> @boomika-nallasivam
        </a>
      </div>
    </footer>
  );
}
