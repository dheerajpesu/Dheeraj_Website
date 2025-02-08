import React from 'react';

export function Home() {
  return (
    <section className="fixed inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Hi, I'm Dheeraj M Havale</span>
            <span className="block text-indigo-600">Full Stack Developer</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Passionate about crafting seamless user experiences and building scalable, performant web applications using the latest technologies.
          </p>
          <p className="mt-2 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl md:max-w-3xl">
            Experienced in React, Node.js, Express, and MongoDB, with a strong focus on clean, maintainable code and best development practices.
          </p>
        </div>
      </div>
    </section>
  );
}