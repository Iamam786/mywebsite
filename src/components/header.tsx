"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground"><a href="/">Portfolio</a></div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("languages")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Languages
            </button>

            <button
              onClick={() => scrollToSection("experience")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("languages")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Languages
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
