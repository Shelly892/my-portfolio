import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/data/resume";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            {/* Greeting */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] mb-8">
              <span className="w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse" />
              <span className="text-sm text-[#00d4ff]">Available for opportunities</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I&apos;m{" "}
              <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
            </h1>

            {/* Title */}
            <p className="text-xl md:text-2xl text-[#a1a1aa] mb-4">
              {personalInfo.title}
            </p>

            {/* Tagline */}
            <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto mb-12">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/projects" className="btn-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                View My Projects
              </Link>
              <Link href="/resume" className="btn-secondary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#a1a1aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="section-title">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="section-subtitle">
                A selection of my recent work in software engineering
              </p>
            </div>
            <Link href="/projects" className="hidden md:flex items-center gap-2 text-[#00d4ff] hover:gap-3 transition-all">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((project) => (
              <div key={project.id} className="glass-card overflow-hidden group hover:border-[#00d4ff]/30 transition-all duration-300">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent opacity-80" />
                  
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-xs text-[#00d4ff] font-medium bg-[#00d4ff]/10 px-2 py-1 rounded backdrop-blur-sm">
                         {project.date}
                       </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#00d4ff] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#a1a1aa] font-medium">{project.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-6 pt-4">
                  <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="skill-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-[#00d4ff] hover:text-white text-[#a1a1aa] transition-all"
                      title="View Code"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/projects" className="btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Quick About Preview */}
      <section className="py-24 px-6 bg-[rgba(18,18,26,0.5)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">
                From <span className="gradient-text">Architecture</span> to <span className="gradient-text">Code</span>
              </h2>
              <p className="text-[#a1a1aa] leading-relaxed mb-6">
                My journey from designing physical structures to crafting digital experiences has given me a unique perspective on software development. I bring architectural thinking like attention to detail, systematic design, and user-centered approach to every project I build.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(139,92,246,0.1)] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#8b5cf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <span className="text-sm">MSc Computer Science @ UCD</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(0,212,255,0.1)] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="text-sm">8+ Years in Architecture</span>
                </div>
              </div>
              <Link href="/about" className="btn-primary">
                Learn More About Me
              </Link>
            </div>
            
            {/* Stats/Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">4+</div>
                <div className="text-sm text-[#a1a1aa]">Full-Stack Projects</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3.81</div>
                <div className="text-sm text-[#a1a1aa]">GPA at UCD</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">20+</div>
                <div className="text-sm text-[#a1a1aa]">Technologies</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">∞</div>
                <div className="text-sm text-[#a1a1aa]">Passion for Learning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto mb-8">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology and design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </Link>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
