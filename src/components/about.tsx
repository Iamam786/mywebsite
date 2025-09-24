export function About() {
  return (
    <section id="about" className="py-10 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">About</h2>
              <div className="w-16 h-1 bg-primary"></div>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a passionate full-stack developer with expertise in modern web technologies. My journey in software
                development has led me to work with a diverse range of technologies, from frontend frameworks like React
                to backend systems using Node.js and Express.
              </p>

              <p>
                I believe in writing clean, maintainable code and creating user experiences that are both functional and
                delightful. My approach combines technical expertise with a keen eye for design, ensuring that every
                project I work on meets both user needs and business objectives.
              </p>

              <p>
                When I'm not coding, you can find me exploring new technologies. I'm always eager to take on new challenges and
                collaborate with like-minded professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
