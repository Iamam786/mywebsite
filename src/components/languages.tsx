import { Card, CardContent } from "../components/ui/card"
import { Globe } from "lucide-react"

export function Languages() {
  const languages = [
    {
      name: "English",
      level: "Fluent",
      proficiency: "Professional working proficiency",
    },
    {
      name: "Hindi",
      level: "Fluent",
      proficiency: "Native speaker",
    },
    {
      name: "Urdu",
      level: "Fluent",
      proficiency: "Native speaker",
    },
    {
      name: "Arabic",
      level: "Basic",
      proficiency: "Reading fluency",
    },
  ]

  return (
    <section id="languages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Globe className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Languages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multilingual communication skills enabling effective collaboration across diverse teams and markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((language, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 hover:rotate-1 cursor-pointer border-border hover:border-primary/30"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {language.name}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {language.level}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                  {language.proficiency}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
