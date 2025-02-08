import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PageNavigationProps {
  prevSection: string | null;
  nextSection: string | null;
  setActiveSection: (section: string) => void;
}

export function PageNavigation({ prevSection, nextSection, setActiveSection }: PageNavigationProps) {
  return (
    <div className="fixed bottom-20 left-0 right-0 flex justify-center space-x-4 z-40">
      {prevSection && (
        <button
          onClick={() => setActiveSection(prevSection)}
          className="bg-white px-4 py-2 rounded-lg shadow-md flex items-center text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          {prevSection.charAt(0).toUpperCase() + prevSection.slice(1)}
        </button>
      )}
      {nextSection && (
        <button
          onClick={() => setActiveSection(nextSection)}
          className="bg-white px-4 py-2 rounded-lg shadow-md flex items-center text-gray-700 hover:bg-gray-50 transition-colors"
        >
          {nextSection.charAt(0).toUpperCase() + nextSection.slice(1)}
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      )}
    </div>
  );
}