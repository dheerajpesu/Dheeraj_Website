import React from 'react';

export function Home() {
  const codeSnippets = [
    'const App = () => {',
    'function getData() {',
    'import React from "react";',
    'export default class {',
    'async function fetch()',
    '<div className="app">',
  ];

  return (
    <section className="fixed inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center overflow-hidden">
      {/* Animated Code Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeSnippets.map((snippet, index) => (
          <div
            key={index}
            className="absolute code-block"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`,
              transform: `scale(${0.8 + Math.random() * 0.4})`,
            }}
          >
            <div className="bg-gray-800/10 backdrop-blur-sm text-indigo-600/40 px-4 py-2 rounded-lg font-mono text-sm">
              {snippet}
            </div>
          </div>
        ))}
        
        {/* Matrix-like Binary Rain */}
        <div className="binary-rain">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="binary-column"
              style={{
                left: `${index * 5}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              01
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-center">
          {/* Text Content */}
          <div className="text-center space-y-8 max-w-3xl">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl perspective-text">
              <span className="block typing-effect transform hover:translate-z-20 transition-transform duration-300">
                Hi, I'm Dheeraj M Havale
              </span>
              <span className="block text-indigo-600 typing-effect-2 transform hover:translate-z-20 transition-transform duration-300">
                Full Stack Developer
              </span>
            </h1>

            <div className="space-y-4 perspective-1000">
              <p className="text-base text-gray-500 sm:text-lg md:text-xl typing-effect-3 transform hover:translate-z-10 transition-transform duration-300">
                Passionate about crafting seamless user experiences and building scalable, performant web applications using the latest technologies.
              </p>
              <p className="text-base text-gray-500 sm:text-lg md:text-xl typing-effect-4 transform hover:translate-z-10 transition-transform duration-300">
                Experienced in React, Node.js, Express, and MongoDB, with a strong focus on clean, maintainable code and best development practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .perspective-text {
          perspective: 1000px;
        }

        .translate-z-10 {
          transform: translateZ(10px);
        }

        .translate-z-20 {
          transform: translateZ(20px);
        }

        .typing-effect {
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid;
          animation: typing 2s steps(30, end), blink-caret .75s step-end infinite;
        }

        .typing-effect-2 {
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid;
          width: 0;
          animation: typing 2s steps(20, end) 2s forwards, blink-caret .75s step-end infinite;
        }

        .typing-effect-3 {
          opacity: 0;
          animation: fadeIn 1s ease-in 4s forwards;
        }

        .typing-effect-4 {
          opacity: 0;
          animation: fadeIn 1s ease-in 4.5s forwards;
        }

        .code-block {
          animation: float-rotate 10s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .binary-rain {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .binary-column {
          position: absolute;
          top: -20px;
          color: rgba(99, 102, 241, 0.1);
          font-family: monospace;
          font-size: 14px;
          animation: rain 2s linear infinite;
        }

        @keyframes rain {
          0% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        @keyframes float-rotate {
          0%, 100% {
            transform: translateY(0) rotateX(0) rotateY(0);
          }
          25% {
            transform: translateY(-20px) rotateX(10deg) rotateY(10deg);
          }
          50% {
            transform: translateY(0) rotateX(0) rotateY(0);
          }
          75% {
            transform: translateY(20px) rotateX(-10deg) rotateY(-10deg);
          }
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #4F46E5 }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}