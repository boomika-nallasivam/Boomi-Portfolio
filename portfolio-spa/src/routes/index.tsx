import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { GithubStats } from "@/components/portfolio/GithubStats";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/sonner";

const TITLE = "Boomika Nallasivam — Full Stack Developer & AI Enthusiast";
const DESC =
  "Portfolio of Boomika Nallasivam — 3rd year IT student building full-stack apps, AI-integrated tools, and competitive programming solutions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubStats />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
