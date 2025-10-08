import { Card, CardContent } from "../components/ui/card"

export function Experience() {
  const experiences = [
    {
      period: "Jun 2024 - Jul 2025",
      title: "Frontend Developer",
      company: "ClickinPedia",
      description:
        "Developing modern web applications using React, Node.js, and Tailwind Css. Creating responsive, user-friendly interfaces and robust backend systems for various clients.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      period: "Mar 2023 - Jun 2024",
      title: "Business Development Executive",
      company: "Next Business Media",
      description:
        "Managed client relationships through LinkedIn and email, leveraging Sales Navigator to identify prospects and nurture leads. Coordinated outreach campaigns and maintained communication to drive business growth.",
      technologies: ["LinkedIn", "Sales Navigator", "Email Outreach", "CRM", "Lead Generation"],
    },
    {
      period: "Oct 2022 - Feb 2023",
      title: "Full Stack Web Developer Intern",
      company: "Naresh i Technologies",
      description:
        "Assisted in designing and developing both frontend and backend components for web applications. Collaborated with senior developers to implement features, fix bugs, and optimize performance using modern web technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "Node", "Express", "MongoDB", "React", "Bootstrap", "JQuery", "Jquery UI"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
              <div className="w-38 h-1 bg-primary"></div>
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
