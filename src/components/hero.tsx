"use client";
import { Button } from "../components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { Typewriter } from 'react-simple-typewriter'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-10 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
                Hi, I'm Abdul Rahim a{' '}
                <Typewriter
                  words={['Full Stack', 'MERN', 'Frontend', 'Web']}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                /> Developer
              </h1>
              {/* <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">Full Stack Developer</h1> */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                I build accessible, pixel-perfect digital experiences for the web using modern technologies like React,
                Node.js, and MongoDB.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                Currently specializing in full-stack development, creating robust applications that blend thoughtful
                design with powerful engineering.
              </p>

              <p className="text-muted-foreground">
                In the past, I've had the opportunity to develop software across a variety of settings — from startups
                to established companies, building everything from web applications to complex database systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild className="hover:bg-white!">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Iamam786"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="www.linkedin.com/in/abdemustafa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:abdulrahimali1998@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="lg:flex justify-center hidden">
            <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
              <div className="w-64 h-64 bg-card rounded-full flex items-center justify-center border border-border">
                <div className="text-6xl font-mono text-primary">{"</>"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
