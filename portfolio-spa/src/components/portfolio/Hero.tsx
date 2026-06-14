import { ArrowRight, Github, FileDown, Linkedin } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";
import resumeAsset from "@/assets/Boomika_nallasivam resume.pdf";

const ROLES = [
  "Software Developer",
  "Java Full Stack Developer",
  "Problem Solver",
  "Competitive Programmer",
  "Aspiring SDE",
];

export function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="grid-bg pointer-events-none absolute inset-0" />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
        style={{ background: "var(--gradient-radial)" }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT SIDE */}
          <div className="max-w-2xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur animate-fade-in">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Open to Software Development Internships
            </div>

            <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl animate-fade-in">
              Boomika
              <br />
              <span className="text-gradient">Nallasivam</span>
            </h1>

            <div className="mt-6 flex min-h-[2.25rem] items-center text-xl text-foreground/90 sm:text-2xl">
              <span className="font-mono text-primary">&gt;</span>
              <span className="ml-3">{typed}</span>
              <span className="ml-1 inline-block h-6 w-[2px] bg-primary animate-blink" />
            </div>

            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Final Year Information Technology Student
              <br />
              Java Full Stack Developer
              <br />
              300+ DSA Problems Solved
              <br />
              Open to Internship & Full-Time Opportunities
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap items-center gap-3">

              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="https://github.com/boomika-nallasivam"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-primary hover:text-primary"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/boomika-nallasivam-79b324290"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>

              <a
                href={resumeAsset}
                target="_blank"
                rel="noreferrer"
                download="Boomika-Nallasivam-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-medium text-primary backdrop-blur transition-colors hover:bg-primary/20"
              >
                <FileDown className="h-4 w-4" />
                Download Resume
              </a>

            </div>

            {/* STATS */}
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">

              <div>
                <dt className="text-xs text-muted-foreground">
                  DSA Problems
                </dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-gradient">
                  300+
                </dd>
              </div>

              <div>
                <dt className="text-xs text-muted-foreground">
                  Projects Built
                </dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-gradient">
                  4+
                </dd>
              </div>

              <div>
                <dt className="text-xs text-muted-foreground">
                  Tech Stack
                </dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-gradient">
                  10+
                </dd>
              </div>

            </dl>

          </div>

          {/* RIGHT SIDE CODE EDITOR */}
          <div className="hidden lg:flex justify-end">

            <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card/50 shadow-xl backdrop-blur">

              {/* Window Header */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />

                <span className="ml-3 text-xs text-muted-foreground">
                  Boomika.java
                </span>
              </div>

              {/* Code */}
              <pre className="overflow-x-auto p-6 font-mono text-sm leading-8 text-primary">
{`public class Developer {
  public static void main(String[] args) {
    String name = "Boomika";
    String[] roles = { "Java Full Stack Developer" , "Aspiring SDE"};
    int dsaSolved = 300;
    String[] skills = {"Java" , "Spring Boot" , "React" , "MySQL" , "etc."};
    public void hireMe() {
      System.out.println("Let's build something amazing!");
    }
  }
}`}
              </pre>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}