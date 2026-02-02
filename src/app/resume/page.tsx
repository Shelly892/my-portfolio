"use client";

import { personalInfo, skills, education, experience } from "@/data/resume";
import { useRef } from "react";

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (typeof window !== "undefined") {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = resumeRef.current;
      
      if (element) {
        const opt = {
          margin: [0.5, 0.5, 0.5, 0.5],
          filename: `${personalInfo.name.replace(" ", "_")}_Resume.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        };
        
        html2pdf().set(opt).from(element).save();
      }
    }
  };

  return (
    <div className="page-transition py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="section-title">
              My <span className="gradient-text">Resume</span>
            </h1>
            <p className="text-[#a1a1aa]">View online or download as PDF</p>
          </div>
          <button onClick={handleDownloadPDF} className="btn-primary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </button>
        </div>

        {/* Resume Preview */}
        <div
          ref={resumeRef}
          className="bg-white text-gray-900 rounded-lg shadow-2xl overflow-hidden"
          style={{ fontFamily: "system-ui, sans-serif" }}
        >
          {/* Resume Header */}
          <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white p-8">
            <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
            <p className="text-lg text-gray-300 mb-4">{personalInfo.title}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {personalInfo.location}
              </span>
            </div>
            <div className="flex gap-4 mt-4 text-sm">
              <a href={personalInfo.linkedin} className="text-cyan-400 hover:underline">LinkedIn</a>
              <a href={personalInfo.github} className="text-cyan-400 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Resume Content */}
          <div className="p-8 space-y-6">
            {/* Technical Skills */}
            <section>
              <h2 className="text-lg font-bold text-[#1a1a2e] border-b-2 border-[#1a1a2e] pb-1 mb-3">
                TECHNICAL EXPERTISE
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="font-semibold">Languages:</span>{" "}
                  <span className="text-gray-700">{skills.languages.join(", ")}</span>
                </div>
                <div>
                  <span className="font-semibold">Frameworks:</span>{" "}
                  <span className="text-gray-700">{skills.frameworks.join(", ")}</span>
                </div>
                <div>
                  <span className="font-semibold">Databases:</span>{" "}
                  <span className="text-gray-700">{skills.databases.join(", ")}</span>
                </div>
                <div>
                  <span className="font-semibold">DevOps/Cloud:</span>{" "}
                  <span className="text-gray-700">{skills.devops.join(", ")}</span>
                </div>
                <div>
                  <span className="font-semibold">Data & Analytics:</span>{" "}
                  <span className="text-gray-700">{skills.dataAnalytics.join(", ")}</span>
                </div>
                <div>
                  <span className="font-semibold">Tools:</span>{" "}
                  <span className="text-gray-700">{skills.tools.join(", ")}</span>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-lg font-bold text-[#1a1a2e] border-b-2 border-[#1a1a2e] pb-1 mb-3">
                EDUCATION
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-gray-600 text-sm">{edu.institution} | {edu.location}</p>
                      </div>
                      <span className="text-sm text-gray-500 whitespace-nowrap">{edu.period}</span>
                    </div>
                    {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                    {edu.courses && (
                      <p className="text-sm text-gray-600 mt-1">
                        Key Courses: {edu.courses.join(", ")}
                      </p>
                    )}
                    {edu.highlight && (
                      <p className="text-sm text-gray-600 italic mt-1">{edu.highlight}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-lg font-bold text-[#1a1a2e] border-b-2 border-[#1a1a2e] pb-1 mb-3">
                WORK EXPERIENCE
              </h2>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-gray-600 text-sm">{exp.company} | {exp.location}</p>
                      </div>
                      <span className="text-sm text-gray-500 whitespace-nowrap">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-lg font-bold text-[#1a1a2e] border-b-2 border-[#1a1a2e] pb-1 mb-3">
                KEY PROJECTS
              </h2>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-semibold">CineQuest (Microservices, Kubernetes, Kafka, gRPC)</h3>
                    <span className="text-gray-500">December 2025</span>
                  </div>
                  <p className="text-gray-700">Distributed microservice platform with React frontend, Redis caching, and Kafka event-driven notifications</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-semibold">SmartTrip NYC (React, Spring Boot, Flask, Docker)</h3>
                    <span className="text-gray-500">July 2025</span>
                  </div>
                  <p className="text-gray-700">Full-stack travel platform with JWT/OAuth authentication and CI/CD deployment</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-semibold">Dublin BikeShare (Flask, AWS, Chart.js)</h3>
                    <span className="text-gray-500">May 2025</span>
                  </div>
                  <p className="text-gray-700">Real-time bike availability web app with predictive analytics and Google Maps integration</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-semibold">Heart Disease Analytics (Hadoop, Hive, ML)</h3>
                    <span className="text-gray-500">November 2025</span>
                  </div>
                  <p className="text-gray-700">Big data analytics dashboard achieving 93% accuracy in risk prediction</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Online View Notice */}
        <div className="mt-8 text-center text-[#a1a1aa] text-sm">
          <p>This is an online preview of my resume. Click the download button above to get a PDF version.</p>
        </div>
      </div>
    </div>
  );
}
