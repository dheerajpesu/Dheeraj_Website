import React from 'react';

export function Home() {
  return (
    <section className="fixed inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block typing-effect">Hi, I'm Dheeraj M Havale</span>
            <span className="block text-indigo-600 typing-effect-2">Full Stack Developer</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl typing-effect-3">
            Passionate about crafting seamless user experiences and building scalable, performant web applications using the latest technologies.
          </p>
          <p className="mt-2 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl md:max-w-3xl typing-effect-4">
            Experienced in React, Node.js, Express, and MongoDB, with a strong focus on clean, maintainable code and best development practices.
          </p>
        </div>
      </div>

      <style>{`
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

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #4F46E5 }
        }

        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
      `}</style>
    </section>
  );
}