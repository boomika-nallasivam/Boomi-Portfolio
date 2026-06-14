import { Code2, Server, Database, Brain, Wrench, Terminal } from "lucide-react";
import { Reveal } from "./Reveal";

const groups = [
  { icon: Code2, label: "Frontend", items: ["React", "JavaScript", "Vite", "Tailwind CSS", "HTML", "CSS"] },
  { icon: Server, label: "Backend", items: ["FastAPI","Java", "Python", "Node.js"] },
  { icon: Database, label: "Database", items: ["Supabase", "PostgreSQL", "SQL"] },
  { icon: Brain, label: "AI / ML", items: ["Groq API", "LLaMA 3.3 70B", "Whisper Large V3", "NLP"] },
  { icon: Wrench, label: "Tools & Platforms", items: ["Git", "GitHub", "Render", "Vercel","IntelliJ IDEA","VS Code" , "Antigravity","Wordpress"] },
  { icon: Terminal, label: "Languages", items: ["C++", "Python", "Java", "JavaScript"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">02 — Skills</p>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Tools of the trade</h2>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.label} delay={i * 60}>
            <div className="glass-card glow-hover h-full p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-primary/10 text-primary">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{g.label}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-foreground/90 transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
