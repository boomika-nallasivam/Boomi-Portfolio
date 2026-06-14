import { useState } from "react";
import { Github, Mail, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = schema.safeParse(form);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }

    try {
      setSubmitting(true);

      await emailjs.send(
        "service_oqphjq5",
        "template_nca178l",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "AfB7_ZpY0mVDc7_Ow"
      );

      toast.success("Thank you for reaching out! I'll get back to you soon.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: any) {
  console.log("STATUS:", error?.status);
  console.log("TEXT:", error?.text);
  toast.error(error?.text || "Failed to send message");
  } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          05 — Contact
        </p>

        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
          Let's build something
        </h2>

        <p className="mt-3 max-w-xl text-muted-foreground">
          Got an idea, an internship, or just want to say hi? Drop a message.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <Reveal delay={100}>
          <div className="space-y-4">
            <a
              href="https://github.com/boomika-nallasivam"
              target="_blank"
              rel="noreferrer"
              className="glass-card glow-hover flex items-center gap-4 p-5"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-primary/10 text-primary">
                <Github className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  GitHub
                </p>
                <p className="font-mono text-sm">@boomika-nallasivam</p>
              </div>
            </a>

            <a
              href="mailto:boomika.nallasivam@gmail.com"
              className="glass-card glow-hover flex items-center gap-4 p-5"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </p>
                <p className="font-mono text-sm">
                  knallasivam1981ed@gmail.com
                </p>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <form onSubmit={onSubmit} className="glass-card space-y-4 p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name">
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  maxLength={100}
                  className="input"
                  placeholder="Your name"
                />
              </Field>

              <Field label="Email">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  maxLength={255}
                  className="input"
                  placeholder="you@example.com"
                />
              </Field>
            </div>

            <Field label="Message">
              <textarea
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                maxLength={1000}
                rows={5}
                className="input resize-none"
                placeholder="What's on your mind?"
              />
            </Field>

            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Message"}

              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </Reveal>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: oklch(1 0 0 / 0.04);
          border: 1px solid var(--color-border);
          border-radius: 0.5rem;
          padding: 0.7rem 0.9rem;
          font-size: 0.875rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .input::placeholder {
          color: var(--color-muted-foreground);
        }

        .input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px oklch(0.58 0.24 295 / 0.2);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}