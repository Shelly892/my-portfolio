"use client";

import { useState, useRef, useEffect } from "react";
import { personalInfo } from "@/data/resume";

export default function EmailContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const webmailLinks = [
    {
      name: "Default Mail App",
      url: `mailto:${personalInfo.email}`,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: "Gmail",
      url: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`,
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
        </svg>
      )
    },
    {
      name: "Outlook",
      url: `https://outlook.live.com/owa/?path=/mail/action/compose&to=${personalInfo.email}`,
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1 17L6 22L1 24L0 12L1 0L7.5 2L6 8L1 9V17ZM24 9V19C24 20.65 22.65 22 21 22H14.5V11L24 7V9ZM6 22H14.5V11L6 8V22ZM24 2L14.5 6L6 2L8.5 0.5L21.5 1C22.6 1 24 2.2 24 4V2Z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#a1a1aa] hover:text-white transition-colors text-sm flex items-center gap-2 cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Email
        <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 left-0 w-56 bg-[#18181b] border border-[rgba(255,255,255,0.1)] rounded-lg shadow-xl overflow-hidden backdrop-blur-xl z-50 animate-in fade-in slide-in-from-bottom-2">
          <div className="p-2 border-b border-[rgba(255,255,255,0.05)]">
             <p className="text-xs text-[#a1a1aa] px-3 py-1">Choose email method:</p>
          </div>
          <div className="p-1">
            {webmailLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-sm text-[#e4e4e7] hover:bg-[rgba(255,255,255,0.05)] rounded-md transition-colors"
              >
                <span className="text-[#a1a1aa] group-hover:text-[#00d4ff]">{link.icon}</span>
                {link.name}
              </a>
            ))}
            <button
              onClick={handleCopy}
              className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[#e4e4e7] hover:bg-[rgba(255,255,255,0.05)] rounded-md transition-colors text-left"
            >
              <svg className={`w-4 h-4 ${copied ? 'text-green-400' : 'text-[#a1a1aa]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {copied ? (
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                ) : (
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                )}
              </svg>
              {copied ? "Copied!" : "Copy Address"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
