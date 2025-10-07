import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              Aspiring IT Professional
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I am currently pursuing a <span className="font-medium">B.Tech in Information Technology</span>, 
              where I have cultivated a strong foundation in computer science concepts and modern web technologies.  
              With a keen interest in software development, I enjoy designing solutions that are both functional 
              and user-centric.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My academic journey, complemented by practical projects, has equipped me with technical expertise, 
              analytical skills, and a collaborative mindset. I strive to approach every challenge with 
              professionalism, creativity, and a continuous eagerness to learn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-colors duration-300 hover:bg-primary/90">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/5 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Technical Skills</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Proficient in web development, programming, and working with 
                    modern frameworks to build efficient, responsive applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Academic Experience</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    As a B.Tech IT student, I have gained hands-on experience in 
                    software engineering, data structures, databases, and operating 
                    systems through coursework and projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Professional Aspirations</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I aim to contribute to the field of information technology by 
                    developing scalable, impactful solutions and continuously 
                    advancing my technical and professional skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
