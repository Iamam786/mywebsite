import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
              <div className="w-16 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                I'm always interested in new opportunities and collaborations. Whether you have a project in mind or
                just want to chat about technology, feel free to reach out!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a
                          href="mailto:abdulrahimali1998@gmal.com"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          abdulrahimali1998@gmal.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a href="tel:+966594859387" className="text-foreground hover:text-primary transition-colors">
                          +966 594859387
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="text-foreground">Kushinagar, UP India</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">My currently Location</p>
                        <p className="text-foreground">Al Khobar, Saudi Arabia</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/Iamam786"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href="www.linkedin.com/in/abdemustafa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Let's Work Together</h3>

                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      I'm currently available for freelance projects and full-time opportunities. If you have a project
                      that you want to get started, think you need my help with something, or just fancy saying hey,
                      then get in touch.
                    </p>

                    <div className="flex flex-col gap-3 pt-4">
                      <Button asChild className="flex-1 transition delay-150 duration-300 ease-in-out hover:bg-black hover:text-white">
                        <a href="mailto:abdulrahimali1998@gmal.com">Send Email</a>
                      </Button>
                      <Button variant="outline" asChild className="flex-1 bg-blue-200! text-black transition delay-150 duration-300 ease-in-out hover:bg-white! hover:text-black">
                        <a href="/Abdul_Rahim_Resume_Portfolio.pdf" download="Abdul_Resume.pdf" target="_blank" rel="noopener noreferrer">
                          Download Resume
                        </a>
                      </Button>
                      <Button variant="outline" asChild className="flex-1 bg-blue-200! text-black transition delay-150 duration-300 ease-in-out hover:bg-white! hover:text-black">
                        <a href="/Abdul_Rahim_Resume_Portfolio.pdf" target="_blank" rel="noopener noreferrer">
                          View Resume
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
