import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">01 — About</p>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">A bit about me</h2>
      </Reveal>

      <div className="mt-12 grid items-start gap-12 md:grid-cols-[280px_1fr]">
        <Reveal delay={100}>
          <div className="relative mx-auto h-64 w-64 md:h-72 md:w-72">
            <div className="absolute inset-0 rounded-full" style={{ background: "var(--gradient-primary)", filter: "blur(30px)", opacity: 0.4 }} />
            <div className="relative flex h-full w-full items-center justify-center rounded-full border border-border bg-card font-display text-7xl font-bold text-gradient">
              BN
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
            <p>
              Passionate IT student with hands-on experience in{" "}
              <span className="text-foreground font-medium">full-stack development</span>,{" "}
              <span className="text-foreground font-medium">AI-integrated web apps</span>, and{" "}
              <span className="text-foreground font-medium">competitive programming</span>.
            </p>
            <p className="text-muted-foreground">
             I have hands-on experience building web applications using Java, Spring Boot, React, MySQL, HTML, CSS, and JavaScript. Through academic projects and continuous learning, I have developed a solid understanding of backend development, REST APIs, database management, and software engineering principles.
            </p>
            <p className="text-muted-foreground">
             With 300+ DSA problems solved and multiple full-stack projects completed, I am actively seeking internship and entry-level Software Development opportunities where I can contribute, learn from experienced engineers, and grow as a developer.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
