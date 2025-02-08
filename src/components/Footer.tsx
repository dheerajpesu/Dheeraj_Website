import React from 'react';
import { Github, Linkedin, Mail, Code, ChevronLeft, ChevronRight } from 'lucide-react';

interface FooterProps {
  prevSection: string | null;
  nextSection: string | null;
  setActiveSection: (section: string) => void;
}

export function Footer({ prevSection, nextSection, setActiveSection }: FooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 bg-gray-100 shadow-lg z-40">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-3 gap-4 items-center">
          {/* Previous Button (Left-aligned) */}
          <div className="flex justify-start">
            {prevSection && (
              <button
                onClick={() => setActiveSection(prevSection)}
                className="text-gray-600 hover:text-gray-900 flex items-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                <span className="text-sm font-medium">
                  {prevSection.charAt(0).toUpperCase() + prevSection.slice(1)}
                </span>
              </button>
            )}
          </div>

          {/* Social Links (Centered) */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/DHEERAJMH" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/dheeraj-havale-72199a223/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:dheerajhavale@gmail.com" className="text-gray-400 hover:text-gray-500">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://leetcode.com/u/dheeraj_havale/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
              <Code className="h-6 w-6" />
            </a>
          </div>

          {/* Next Button (Right-aligned) */}
          <div className="flex justify-end">
            {nextSection && (
              <button
                onClick={() => setActiveSection(nextSection)}
                className="text-gray-600 hover:text-gray-900 flex items-center transition-colors"
              >
                <span className="text-sm font-medium">
                  {nextSection.charAt(0).toUpperCase() + nextSection.slice(1)}
                </span>
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
