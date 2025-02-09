import React from 'react';
import { Code2, Briefcase, Award } from 'lucide-react';

export function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Icons */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <Code2 className="h-8 w-8 text-indigo-600 animate-bounce" style={{ animationDelay: '0ms' }} />
          <Briefcase className="h-8 w-8 text-indigo-600 animate-bounce" style={{ animationDelay: '150ms' }} />
          <Award className="h-8 w-8 text-indigo-600 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        
        {/* Loading Text */}
        <div className="relative">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 animate-pulse">
            Loading
          </h2>
          
          {/* Animated Bar */}
          <div className="mt-4 h-1 w-48 mx-auto bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-600 animate-[loading_1.5s_ease-in-out_infinite]"></div>
          </div>
          
          <style>{`
            @keyframes loading {
              0% { width: 0%; transform: translateX(0); }
              50% { width: 100%; transform: translateX(0); }
              100% { width: 0%; transform: translateX(192px); }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}