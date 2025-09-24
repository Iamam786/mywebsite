import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "ClickInPedia",
      description:
        "A comprehensive knowledge platform built with React and Tailwind CSS, featuring interactive content and modern UI design.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://clickinpedia.com",
      githubUrl: "#",
    },
    {
      title: "Assignment Writer",
      description:
        "An academic writing assistance platform developed with React and modern web technologies, helping students with their assignments.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "Material UI"],
      liveUrl: "https://assignmentwriter.au",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing my skills and projects, built with modern web technologies.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
      liveUrl: "https://my-portfolio-seven-sigma-80.vercel.app/",
      githubUrl: "https://github.com/Iamam786/my-portfolio",
    },
    {
      title: "Weather App",
      description:
        "A modern weather application developed using Create React App, React, CSS, and external APIs. It provides real-time weather updates with a clean and responsive user interface.",
      technologies: ["React", "JavaScript", "CSS", "API", "Create React App"],
      liveUrl: "https://weather-app-two-amber-93.vercel.app/",
      githubUrl: "https://github.com/Iamam786/weather-task"
    },
    {
      title: "ToDo List JS",
      description:
        "A simple and intuitive ToDo List application built using only HTML, CSS, and JavaScript. It allows users to add, delete, and manage daily tasks efficiently with a clean user interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://iamam786.github.io/ToDoListJs/",
      githubUrl: "https://github.com/iamam786/ToDoListJs",

    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-card border-border group hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <CardHeader>
                    <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300"
                          style={{ transitionDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2 group-hover:translate-y-1 transition-transform duration-300">
                      <Button size="sm" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
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
