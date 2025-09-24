import { Card, CardContent } from "../components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "TypeScript", "Bootstrap"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Authentication"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Responsive Design", "Web Performance", "Postman"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className="bg-card border-border group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300"
                          style={{ transitionDelay: `${skillIndex * 50}ms` }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {skill}
                          </span>
                        </div>
                      ))}
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
