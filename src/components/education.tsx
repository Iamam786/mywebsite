import { Card, CardContent } from "../components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export function Education() {
  const education = [
    {
      "degree": "Bachelor of Computer Science & Engineering",
      "institution": "Dr APJ Abdul Kalam Technical University, Lucknow, India",
      "period": "2017 — 2022",
      "description": "Completed a rigorous curriculum emphasizing software engineering, data structures, web technologies, and database systems. Gained practical experience through lab work, mini projects, and a final-year capstone. Specialized in modern computing frameworks and graduated with honors."
    },
    {
      "degree": "Intermediate || HSC (PCM)",
      "institution": "Udit Narayan Intermediate College, Padrauna Kushi Nagar Uttar Pradesh, India",
      "period": "2014 — 2016",
      "description": "Completed Higher Secondary Certificate with a focus on Physics, Chemistry, and Mathematics. Developed a strong foundation in scientific principles and analytical thinking, achieving high academic performance."
    },
    {
      "degree": "High School || SSC (Science)",
      "institution": "QE Girls I C Guruwaliya, Kushi Nagar Uttar Pradesh, India",
      "period": "2012 — 2014",
      "description": "Completed Secondary School Certificate with a focus on Science subjects. Gained essential knowledge in core scientific disciplines, laying the groundwork for further studies in science and technology."

    },
  ]

  const certifications = [
    {
      name: "Full Stack Developer Certification",
      issuer: "NareshIT Hyderabad India",
      year: "2022",
    },
  ]

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education & Certifications</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Education</h3>
              </div>

              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-card border-border transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30 group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {edu.degree}
                          </h4>
                          <p className="text-primary font-medium">{edu.institution}</p>
                        </div>
                        <span className="text-sm text-muted-foreground font-mono">{edu.period}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="bg-card border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30 group cursor-pointer"
                  >
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300">
                          {cert.name}
                        </h4>
                        <div className="flex items-center justify-between">
                          <p className="text-primary text-sm">{cert.issuer}</p>
                          <span className="text-xs text-muted-foreground font-mono">{cert.year}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
