"use client";

import { personalInfo, skills, education, experience } from "@/data/resume";

export default function ResumePage() {
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
          <a 
            href="/resume.pdf" 
            download={`${personalInfo.name.replace(" ", "_")}_Resume.pdf`}
            className="btn-primary"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>
        </div>

        {/* Resume Preview */}
        <div
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

            {/* Projects Section */}
            <section>
              <h2 className="text-lg font-bold text-[#1a1a2e] border-b-2 border-[#1a1a2e] pb-1 mb-3">
                KEY PROJECTS
              </h2>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-base">CineQuest</h3>
                    <span className="text-gray-500 text-xs">Dec 2025</span>
                  </div>
                  <p className="text-gray-600 italic mb-1">A microservice-based movie discovery platform</p>
                  <p className="text-xs text-gray-500 mb-2 font-mono">
                    <span className="font-semibold">Tech Stack:</span> Java, Spring Boot, React, Docker, Kubernetes, Kafka, Redis, gRPC
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-1">
                    <li>Contributed to the design and implementation of a distributed microservice-based platform with clear service boundaries and architectural trade-off analysis</li>
                    <li>Developed the Movie Service integrating an external TMDB API with Redis caching to reduce latency and handle rate limits</li>
                    <li>Implemented the Notification Service, consuming Kafka events to deliver asynchronous email notifications without blocking core user workflows</li>
                    <li>Created the complete React frontend with responsive design, and integrated it with backend services via a centralized API Gateway</li>
                    <li>Participated in containerization and deployment using Docker and Kubernetes</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-base">SmartTrip NYC</h3>
                    <span className="text-gray-500 text-xs">Jul 2025</span>
                  </div>
                  <p className="text-gray-600 italic mb-1">Full-Stack Travel Itinerary Planner</p>
                  <p className="text-xs text-gray-500 mb-2 font-mono">
                    <span className="font-semibold">Tech Stack:</span> React, Spring Boot, Flask, PostgreSQL, Docker, Nginx
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-1">
                    <li>Led system maintenance phase, coordinating frontend, backend, and ML teams to ensure platform stability</li>
                    <li>Implemented frontend and backend changes to improve authentication flows, including JWT-based authentication and Google OAuth integration, while managing bug fixes, feature requests following agile practices</li>
                    <li>Managed production deployment using Docker Compose, Nginx, and automated CI/CD pipelines</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-base">Dublin BikeShare App</h3>
                    <span className="text-gray-500 text-xs">May 2025</span>
                  </div>
                  <p className="text-gray-600 italic mb-1">Real-time Availability & Predictive Dashboard</p>
                  <p className="text-xs text-gray-500 mb-2 font-mono">
                    <span className="font-semibold">Tech Stack:</span> Flask, JavaScript, HTML, CSS, AWS EC2/RDS, scikit-learn, Chart.js
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-1">
                    <li>Developed full-stack web application displaying real-time Dublin bike availability and weather conditions</li>
                    <li>Trained a Random Forest Regressor model to predict bike availability with R² score of 0.96</li>
                    <li>Visualized historical trends and predictions interacting with Google Maps overlays.</li>
                    <li>Deployed the web app on AWS EC2 successfully</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-base">Heart Disease Risk Analytics Dashboard</h3>
                    <span className="text-gray-500 text-xs">Nov 2025</span>
                  </div>
                  <p className="text-gray-600 italic mb-1">Big Data Processing & Visualization</p>
                  <p className="text-xs text-gray-500 mb-2 font-mono">
                    <span className="font-semibold">Tech Stack:</span> Hadoop, Hive, Docker, SQL, Python, JavaScript, HTML, CSS
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-1">
                    <li>Built a cloud-based data analytics pipeline using Hadoop HDFS and Hive to process and analyze clinical datasets</li>
                    <li>Implemented SQL-based data preprocessing and rule-based risk scoring to identify demographic and risk-level patterns in patient data</li>
                    <li>Developed an interactive web dashboard and risk calculator to visualize analysis results and provide real-time risk assessment for users</li>
                  </ul>
                </div>
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

