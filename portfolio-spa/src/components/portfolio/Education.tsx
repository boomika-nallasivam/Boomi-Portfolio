import { GraduationCap, School } from "lucide-react";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          04 — Education
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
          Education & Academic Journey
        </h2>
      </Reveal>

      <div className="mt-12 space-y-6">

        {/* College */}
        <Reveal delay={120}>
          <div className="glass-card glow-hover flex flex-col gap-5 p-7 sm:flex-row sm:items-center">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border bg-primary/10 text-primary">
              <GraduationCap className="h-7 w-7" />
            </div>

            <div className="flex-1">
              <h3 className="font-display text-xl font-semibold">
                Sri Shanmugha College of Engineering and Technology
              </h3>

              <p className="mt-1 text-muted-foreground">
                B.Tech, Information Technology
              </p>

              {/* Optional */}
              <p className="mt-1 text-sm text-primary">
                Pursuing
              </p>
            </div>

            <div className="font-mono text-sm text-primary">
              2023 — 2027
            </div>
          </div>
        </Reveal>

        {/* HSC */}
        <Reveal delay={180}>
          <div className="glass-card glow-hover flex flex-col gap-5 p-7 sm:flex-row sm:items-center">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border bg-primary/10 text-primary">
              <School className="h-7 w-7" />
            </div>

            <div className="flex-1">
              <h3 className="font-display text-xl font-semibold">
                Navarasam Matriculation Higher Secondary School
              </h3>

              <p className="mt-1 text-muted-foreground">
                Higher Secondary Certificate (HSC)
              </p>

              <p className="mt-1 text-sm text-primary">
                Percentage: 72%
              </p>
            </div>

            <div className="font-mono text-sm text-primary">
              2022 — 2023
            </div>
          </div>
        </Reveal>

        {/* SSLC */}
        <Reveal delay={240}>
          <div className="glass-card glow-hover flex flex-col gap-5 p-7 sm:flex-row sm:items-center">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border bg-primary/10 text-primary">
              <School className="h-7 w-7" />
            </div>

            <div className="flex-1">
              <h3 className="font-display text-xl font-semibold">
                Navarasam Matriculation Higher Secondary School
              </h3>

              <p className="mt-1 text-muted-foreground">
                Secondary School Leaving Certificate (SSLC)
              </p>

              <p className="mt-1 text-sm text-primary">
                Percentage: 100%
              </p>
            </div>

            <div className="font-mono text-sm text-primary">
              2020 — 2021
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}