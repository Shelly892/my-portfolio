import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Shuangning Wei",
  description: "Portfolio projects showcasing full-stack development, microservices, and data analytics.",
};

export default function ProjectsPage() {
  return (
    <div className="page-transition py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="section-subtitle mx-auto">
            A collection of projects demonstrating my skills in full-stack development, 
            distributed systems, and data analytics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} id={project.id} className="scroll-mt-24">
              <ProjectCard project={project} index={index} />
              
              {/* Detailed highlights section */}
              <div className="glass-card p-6 mt-4">
                <h4 className="text-sm font-semibold text-[#00d4ff] mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#a1a1aa]">
                      <span className="text-[#00d4ff] mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Overview */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {Array.from(new Set(projects.flatMap((p) => p.techStack))).map((tech) => (
              <span key={tech} className="skill-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
