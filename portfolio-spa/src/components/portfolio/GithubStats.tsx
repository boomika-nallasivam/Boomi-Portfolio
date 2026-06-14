import { Github, Linkedin, Trophy } from "lucide-react";
import { Reveal } from "./Reveal";

const journey = [
  {
    year: "2024",
    title: "Started Programming with Python.",
  },
  {
    year: "2025",
    title: "Started Programming",
    desc: "Began learning Java and problem solving.",
  },
  {
    year: "2025",
    title: "Built First Full-Stack Project",
    desc: "Started creating real-world web applications.",
  },
  {
    year: "2025",
    title: "Solved 100+ DSA Problems",
    desc: "Focused on algorithms and competitive programming.",
  },
  {
    year: "2026",
    title: "Participated in Hackathons",
    desc: "Worked on collaborative projects and AI-powered solutions.",
  },
  {
    year: "2026",
    title: "Built AI & Healthcare Applications",
    desc: "Developed QueryGenie and Hospital Queue Management System.",
  },
  {
    year: "2026",
    title: "Seeking SDE Opportunities",
    desc: "Actively looking for Software Development internships and roles.",
  },
];

export function GithubStats() {
  return (
    <section
      id="journey"
      className="relative mx-auto max-w-6xl px-6 py-28"
    >
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          04 — Developer Journey
        </p>

        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
          My Growth as a Developer
        </h2>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          A journey of learning, building, problem solving, and continuous
          improvement.
        </p>
      </Reveal>

      {/* Timeline */}
      <Reveal delay={100}>
        <div className="glass-card mt-12 p-8">
          <h3 className="mb-8 text-2xl font-semibold">
            Developer Timeline
          </h3>

          <div className="space-y-8">
            {journey.map((item) => (
              <div
                key={`${item.year}-${item.title}`}
                className="relative border-l border-primary/30 pl-8"
              >
                <div className="absolute -left-2 top-1 h-4 w-4 rounded-full bg-primary" />

                <div className="text-sm font-mono text-primary">
                  {item.year}
                </div>

                <h4 className="mt-1 text-lg font-semibold">
                  {item.title}
                </h4>

                <p className="mt-1 text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* GitHub Contribution Calendar */}
      <Reveal delay={200}>
        <div className="glass-card mt-8 p-8">
          <h3 className="text-2xl font-semibold">
            GitHub Contributions
          </h3>

          <p className="mt-2 text-muted-foreground">
            My coding consistency throughout the year.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <img
              src="https://ghchart.rshah.org/a78bfa/boomika-nallasivam"
              alt="GitHub Contribution Calendar"
              className="w-full"
            />
          </div>
        </div>
      </Reveal>

      {/* Coding Profiles */}
      <Reveal delay={300}>
        <div className="glass-card mt-8 p-8">
          <div className="flex items-center gap-3">
            <Trophy className="h-5 w-5 text-primary" />
            <h3 className="text-2xl font-semibold">
              Coding Profiles
            </h3>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://github.com/boomika-nallasivam"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 transition-colors hover:border-primary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>

            <a
              href="https://leetcode.com/u/boomika-nallasivam/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 transition-colors hover:border-primary"
            >
              🟡 LeetCode
            </a>

            <a
              href="https://codeforces.com/profile/boomika13"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 transition-colors hover:border-primary"
            >
              🔵 Codeforces
            </a>

            <a
              href="https://www.linkedin.com/in/boomika-nallasivam-79b324290"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 transition-colors hover:border-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-border p-4">
              <p className="text-sm text-muted-foreground">
                DSA Problems
              </p>
              <p className="mt-2 text-2xl font-bold text-primary">
                300+
              </p>
            </div>

            <div className="rounded-xl border border-border p-4">
              <p className="text-sm text-muted-foreground">
                Projects Built
              </p>
              <p className="mt-2 text-2xl font-bold text-primary">
                4+
              </p>
            </div>

            <div className="rounded-xl border border-border p-4">
              <p className="text-sm text-muted-foreground">
                Tech Stack
              </p>
              <p className="mt-2 text-2xl font-bold text-primary">
                10+
              </p>
            </div>

            <div className="rounded-xl border border-border p-4">
              <p className="text-sm text-muted-foreground">
                Status
              </p>
              <p className="mt-2 text-lg font-bold text-primary">
                Open to Work
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}