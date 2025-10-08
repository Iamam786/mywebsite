import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { About } from "../components/about"
import { Skills } from "../components/skills"
import { Languages } from "../components/languages"
import { Projects } from "../components/projects"
import { Experience } from "../components/experience"
import { Education } from "../components/education"
import { Contact } from "../components/contact"
import { ScrollReveal } from "../components/scroll-reveal"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ScrollReveal direction="left">
          <About />
        </ScrollReveal>
        <ScrollReveal direction="right" delay={100}>
          <Skills />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={100}>
          <Projects />
        </ScrollReveal>
        <ScrollReveal direction="right" delay={200}>
          <Languages />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={150}>
          <Experience />
        </ScrollReveal>
        <ScrollReveal direction="right" delay={100}>
          <Education />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={200}>
          <Contact />
        </ScrollReveal>
      </main>
    </div>
  )
}
