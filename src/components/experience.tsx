import { Card, CardContent } from "../components/ui/card"

export function Experience() {
  const experiences = [
    {
      period: "2023 — Present",
      title: "Full Stack Developer",
      company: "Freelance",
      description:
        "Developing modern web applications using React, Node.js, and MongoDB. Creating responsive, user-friendly interfaces and robust backend systems for various clients.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    },
    {
      period: "2022 — 2023",
      title: "Frontend Developer",
      company: "Tech Startup",
      description:
        "Built and maintained user interfaces for web applications. Collaborated with design and backend teams to implement pixel-perfect, responsive designs.",
      technologies: ["JavaScript", "React", "CSS", "HTML", "Git"],
    },
    {
      period: "2021 — 2022",
      title: "Junior Web Developer",
      company: "Digital Agency",
      description:
        "Developed websites and web applications for clients. Gained experience in full-stack development and learned modern web development practices.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>

            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <Card
                  key={index}
                  className="bg-card border-border transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30 group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {experience.title}
                          </h3>
                          <p className="text-primary font-medium">{experience.company}</p>
                        </div>
                        <span className="text-sm text-muted-foreground font-mono">{experience.period}</span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{experience.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md transition-all duration-200 hover:bg-primary/20 hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
