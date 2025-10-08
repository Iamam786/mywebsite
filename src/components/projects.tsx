import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      img: "/clickinpedia_logo.jpg",
      title: "ClickInPedia",
      description:
        "I contributed to the front-end development of ClickinPedia, focusing on responsive design, user experience, and performance optimization. The company specializes in digital marketing and software development solutions. My role involved building clean, scalable UI components and ensuring cross-device compatibility",
      technologies: ["React", "Next.Js", "Tailwind CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://clickinpedia.com",
      githubUrl: "#",
    },
    {
      img: "/assignmentwriter_logo.jpg",
      title: "Assignment Writer",
      description:
        "Looking for top-quality assignment help in Australia? ✅ Get expert academic writing services from professional Aussie writers at Assignment Writers AU. Enjoy 100% plagiarism-free work, on-time delivery, and up to 50% OFF on your first order! Trusted by thousands of students nationwide.",
      technologies: ["React", "Next.Js", "Tailwind CSS", "Node.js", "Express", "Material UI"],
      liveUrl: "https://assignmentwriter.au",
      githubUrl: "#",
    },
    {
      img: "/weather.png",
      title: "Weather App",
      description:
        "A modern weather application developed using Create React App, React, CSS, and external APIs. It provides real-time weather updates with a clean and responsive user interface.",
      technologies: ["React", "JavaScript", "CSS", "API", "Create React App"],
      liveUrl: "https://weather-app-two-amber-93.vercel.app/",
      githubUrl: "https://github.com/Iamam786/weather-task"
    },
    // {
    //   img: "",
    //   title: "Portfolio Website",
    //   description:
    //     "A responsive portfolio website showcasing my skills and projects, built with modern web technologies.",
    //   technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
    //   liveUrl: "https://my-portfolio-seven-sigma-80.vercel.app/",
    //   githubUrl: "https://github.com/Iamam786/my-portfolio",
    // },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
              <div className="w-30 h-1 bg-primary"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-card border-border group hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="clickinpedia" className="object-fill rounded-t-4xl px-2 object-center h-full w-full" src={project.img} />
                  </div>

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
