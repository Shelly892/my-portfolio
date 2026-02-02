import { personalInfo, skills, education, experience } from "@/data/resume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Shuangning Wei",
  description: "Learn about Shuangning Wei's journey from architecture to software engineering.",
};

export default function AboutPage() {
  return (
    <div className="page-transition py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="section-subtitle mx-auto">
            From designing buildings to building software
          </p>
        </div>

        {/* Story Section */}
        <section className="glass-card p-8 mb-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 opacity-[0.05] pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" strokeWidth="0.5" />
              <path d="M50 10 L50 50 L90 70 M50 50 L10 70" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="2" fill="currentColor" />
              <path d="M50 50 L90 30" strokeWidth="0.5" strokeDasharray="2 2" />
              <path d="M50 50 L10 30" strokeWidth="0.5" strokeDasharray="2 2" />
              <path d="M10 30 H90 M10 70 H90" strokeWidth="0.2" opacity="0.5" />
              <path d="M30 20 V80 M70 20 V80" strokeWidth="0.2" opacity="0.5" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold mb-8">
            <span className="gradient-text">From Skylines to Servers</span>
          </h2>

          <div className="space-y-6 text-[#a1a1aa] leading-relaxed mb-10">
            <p>
              For nearly a decade, I shaped the physical world as an architect. I designed complex 
              hospital campuses and cultural centers, managing budgets, strict regulations, and 
              multifaceted teams. It was fulfilling work, but I found myself increasingly drawn to 
              the logic and speed of the digital tools we used.
            </p>
            <p>
              I realized that the principles of great architecture—<span className="text-white">structural integrity, 
              user-centric flow, and scalability</span>—translate perfectly to code. The difference? 
              In software, I can iterate in seconds, not years.
            </p>
            <p>
              Pivotting to Computer Science wasn't starting over; it was refactoring my career. 
              I brought my architectural rigor to the world of distributed systems. Now, instead of 
              blueprints, I draft system designs. Instead of concrete, I build with cloud infrastructure. 
              But the goal remains the same: <strong>building experiences that stand the test of time.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="p-4 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)]">
               <h3 className="text-[#00d4ff] font-semibold mb-3 flex items-center gap-2">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                 The Architect
               </h3>
               <ul className="space-y-2 text-sm text-[#a1a1aa]">
                 <li>• Blueprinting physical spaces</li>
                 <li>• Managing multi-year timelines</li>
                 <li>• Optimizing for occupant flow</li>
                 <li>• strict physical constraints</li>
               </ul>
             </div>
             <div className="p-4 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)]">
               <h3 className="text-[#8b5cf6] font-semibold mb-3 flex items-center gap-2">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                 The Software Engineer
               </h3>
               <ul className="space-y-2 text-sm text-[#a1a1aa]">
                 <li>• Architecting distributed systems</li>
                 <li>• Continuous Integration & Delivery</li>
                 <li>• Optimizing for user experience</li>
                 <li>• Infinite scalability potential</li>
               </ul>
             </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-[#00d4ff] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-[#00d4ff] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-[#00d4ff] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-[#00d4ff] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                DevOps & Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.devops.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-[#00d4ff] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Data & Analytics
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.dataAnalytics.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-[#00d4ff] mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Design & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item pb-6">
                <div className="glass-card p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-[#00d4ff]">{edu.period}</span>
                  </div>
                  <p className="text-[#a1a1aa] mb-2">{edu.institution} • {edu.location}</p>
                  {edu.gpa && (
                    <p className="text-sm text-[#a1a1aa] mb-3">GPA: {edu.gpa}</p>
                  )}
                  {edu.courses && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.courses.map((course) => (
                        <span key={course} className="text-xs px-2 py-1 bg-[rgba(255,255,255,0.05)] rounded text-[#a1a1aa]">
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                  {edu.highlight && (
                    <p className="text-sm text-[#a1a1aa] mt-3 italic">{edu.highlight}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item pb-6">
                <div className="glass-card p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <span className="text-sm text-[#00d4ff]">{exp.period}</span>
                  </div>
                  <p className="text-[#a1a1aa] mb-4">{exp.company} • {exp.location}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
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
        </section>

        {/* Core Values */}
        <section className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            What I <span className="gradient-text">Bring</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center">
                <svg className="w-8 h-8 text-[#0a0a0f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Design Thinking</h3>
              <p className="text-sm text-[#a1a1aa]">
                Years of architectural training refined my ability to approach problems holistically
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center">
                <svg className="w-8 h-8 text-[#0a0a0f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Cross-Cultural</h3>
              <p className="text-sm text-[#a1a1aa]">
                International experience in China, Germany, and Ireland enriches collaboration
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center">
                <svg className="w-8 h-8 text-[#0a0a0f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Fast Learner</h3>
              <p className="text-sm text-[#a1a1aa]">
                Transitioned to CS with a 3.81 GPA while mastering new technologies rapidly
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
