import { ExternalLink, Github, Star } from "lucide-react";
import { Reveal } from "./Reveal";

type Project = {
  title: string;
  featured?: boolean;
  description: string;
  tech: string[];
  badges: string[];
  github?: string;
  live?: string;
  deployment?: string;
};

const projects: Project[] = [
  {
    title: "QueryGenie",
    featured: true,
    description:
      "AI-powered Natural Language & Voice to SQL web app. Users describe data needs in plain English or voice; the app generates and executes SQL on Supabase PostgreSQL. Features: NL-to-SQL, voice input (Whisper), query history, Excel/CSV upload & querying, Google OAuth, dark UI.",
    tech: ["React/Vite", "FastAPI", "Groq (LLaMA 3.3 70B)", "Whisper", "Supabase", "Python"],
    badges: ["Full Stack", "AI", "Voice"],
    github: "https://github.com/boomika-nallasivam/QueryGenie---NL2SQL",
    live: "https://query-genie-nl-2-sql.vercel.app/",
    deployment: "Render + Vercel",
  },
  {
    title: "Hospital Appointment & Live Queue Management System",
    description:
      "Developed a responsive frontend interface for a Hospital Appointment & Live Queue Management System that enables patients to book appointments, view doctor availability, and track real-time queue status. Collaborated with a senior developer who implemented the backend services and database integration.",
    tech: ["React","JavaScript","HTML","CSS","Tailwind CSS"],
    badges: ["COLLABORATIVE PROJECT", "Healthcare", "React", "Tailwind CSS","Collaboration","web App"],
    github: "https://github.com/boomika-nallasivam/Hospital-Appointment-Live-Queue-System-",
  },
  {
    title: "Patient Health Monitoring & Risk Prediction System",
    description:
      "A teaching & mentorship project — built alongside juniors to demonstrate how to develop and deploy a full web application using modern AI tools end-to-end. Covers patient vitals monitoring and health risk prediction, and served as a live workshop on AI-assisted development and cloud deployment.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    badges: ["Healthcare", "Mentorship", "AI Tools", "React"],
    github: "https://github.com/boomika-nallasivam/Patient-Health-Monitoring-Risk-Prediction-System",
    live: "https://vital-guardian-71.lovable.app/",
  },
  {
    title: "Waste-O-Meter",
    description:
      "Built during a Christmas AI Hackathon — a time-pressured challenge to create a functional website using AI tools. A smart waste tracking and measurement web app developed entirely with AI assistance during the hackathon.",
    tech: ["React", "JavaScript"],
    badges: ["Hackathon", "AI-Built", "React", "Christmas Code 2025"],
    github: "https://github.com/boomika-nallasivam/Waste-O-Meter",
  },
  
];

function Card({ p }: { p: Project }) {
  return (
    <article
      className={`glass-card glow-hover group relative flex h-full flex-col p-7 ${
        p.featured ? "lg:col-span-2" : ""
      }`}
    >
      {p.featured && (
        <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">
          <Star className="h-3 w-3 fill-current" /> Featured
        </div>
      )}

      <div className="flex flex-wrap gap-1.5">
        {p.badges.map((b) => (
          <span key={b} className="rounded-full border border-border bg-secondary/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
            {b}
          </span>
        ))}
      </div>

      <h3 className="mt-4 font-display text-2xl font-semibold transition-colors group-hover:text-primary">
        {p.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.tech.map((t) => (
          <span key={t} className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-mono text-primary/90">
            {t}
          </span>
        ))}
      </div>

      {p.deployment && (
        <p className="mt-4 text-xs text-muted-foreground">
          <span className="text-foreground/70">Deployed on:</span> {p.deployment}
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/90 transition-colors hover:text-primary"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        )}
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/90 transition-colors hover:text-primary"
          >
            <ExternalLink className="h-4 w-4" /> Live demo
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">03 — Projects</p>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Selected work</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          A mix of full-stack, AI, and algorithm-heavy projects I've shipped recently.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 80} className={p.featured ? "lg:col-span-2" : ""}>
            <Card p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
