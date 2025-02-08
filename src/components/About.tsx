import React from 'react';

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              className="rounded-lg shadow-lg object-cover w-full h-96"
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
              alt="Profile"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-500 mb-4">
              I am currently pursuing a B.Tech in Computer Science and Engineering at PES University. I have a strong passion for problem-solving and enjoy tackling complex challenges with logical thinking and creativity.
            </p>
            <p className="text-lg text-gray-500 mb-4">
              My interests lie in web development and machine learning, where I love building scalable web applications and exploring data-driven solutions. I am always eager to learn new technologies and improve my skills in full-stack development and AI-driven applications.
            </p>
            <p className="text-lg text-gray-500">
              I am committed to writing clean, efficient code and continuously expanding my knowledge in software engineering to develop impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
