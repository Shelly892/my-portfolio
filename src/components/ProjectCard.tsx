"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [showAllTech, setShowAllTech] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const displayedTech = showAllTech ? project.techStack : project.techStack.slice(0, 4);
  const remainingTech = project.techStack.length - 4;

  return (
    <>
      <div
        className="glass-card p-6 group"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Project Image/Icon Area */}
        <div 
          className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-[rgba(0,212,255,0.1)] to-[rgba(139,92,246,0.1)] flex items-center justify-center border border-[rgba(255,255,255,0.05)] cursor-pointer"
          onClick={() => setShowPreview(true)}
        >
          {/* Main Project Preview Image (Background) */}
          <div className="absolute inset-0 opacity-50 group-hover:opacity-80 transition-opacity">
             <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
             />
          </div>

          {/* Centered Icon Overlay */}
          <div className="relative z-10 text-center p-4">
             <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                {/* Fallback to text initials if no icon, or specific SVG if provided later. For now, using a placeholder logic or keep customized SVGs if you have them. Here is a generic one for now.*/}
                {project.icon ? (
                   <div className="w-10 h-10 relative">
                     {/* Placeholder for custom icon file - ensures user knows where to put it */}
                     <Image src={project.icon} alt="icon" fill />
                     {/* <span className="font-bold text-xl text-white">{project.title.substring(0, 2)}</span> */}
                   </div>
                ) : (
                  <span className="font-bold text-xl text-white">{project.title.substring(0, 2)}</span>
                )}
             </div>
             <span className="text-sm font-medium text-white drop-shadow-md">{project.subtitle}</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <span className="text-xs text-[#00d4ff] font-medium">{project.date}</span>
            <h3 className="text-xl font-bold mt-1 group-hover:text-[#00d4ff] transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-[#a1a1aa] text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {displayedTech.map((tech) => (
              <span key={tech} className="skill-badge text-xs">
                {tech}
              </span>
            ))}
            {/* Show More */}
            {!showAllTech && remainingTech > 0 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowAllTech(true);
                }}
                className="text-xs text-[#00d4ff] hover:underline focus:outline-none"
              >
                +{remainingTech} more
              </button>
            )}

            {/* Show Less */}
            {showAllTech && project.techStack.length > 4 && (
               <button
                 onClick={(e) => {
                   e.preventDefault();
                   setShowAllTech(false);
                 }}
                 className="text-xs text-[#a1a1aa] hover:text-[#00d4ff] hover:underline focus:outline-none ml-1"
               >
                 Show Less
               </button>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-4 border-t border-[rgba(255,255,255,0.05)]">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-[#00d4ff] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            
            {/* View Details Link */}
            <a
              href={project.detailsUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1 text-sm text-[#00d4ff] hover:underline"
            >
              View Details 
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Image Preview Modal (Gallery) */}
      {showPreview && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in"
          onClick={() => setShowPreview(false)}
        >
          <div 
            className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.1)] bg-[#0a0a0f]"
            onClick={(e) => e.stopPropagation()}
          >
             {/* Gallery Logic */}
             {(project.gallery && project.gallery.length > 0) ? (
                <GalleryViewer images={project.gallery} title={project.title} />
             ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                  quality={100}
                />
             )}
             
             {/* Close Button */}
             <button 
               onClick={() => setShowPreview(false)}
               className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-[rgba(0,212,255,0.2)] transition-colors z-20"
             >
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </svg>
             </button>
          </div>
        </div>
      )}
    </>
  );
}

// Simple internal component for Gallery navigation
function GalleryViewer({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full group/gallery">
      <Image
        src={images[currentIndex]}
        alt={`${title} screenshot ${currentIndex + 1}`}
        fill
        className="object-contain transition-all duration-300"
        quality={100}
      />
      
      {/* Navigation - Only show if > 1 image */}
      {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-[#00d4ff]/20 text-white rounded-full transition-all opacity-0 group-hover/gallery:opacity-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-[#00d4ff]/20 text-white rounded-full transition-all opacity-0 group-hover/gallery:opacity-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === idx ? "bg-[#00d4ff] w-4" : "bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
