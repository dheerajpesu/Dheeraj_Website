import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Skin Disease Detection",
    description: "Developed a deep learning-based skin disease detection system using VGG16 and ResNet50 for classification.",
    link: "https://github.com/DHEERAJMH/skin-disease-project",
    image: "/skin_disease.webp"
  },
  {
    title: "Online Book Store",
    description: "MERN project to buy books online",
    link: "https://github.com/DHEERAJMH/OnlineBookStoreApp",
    image: "https://media.istockphoto.com/id/1218656325/photo/laptop-with-online-library-realistic-3d-rendering.jpg?s=612x612&w=0&k=20&c=R9yd2DvnzDfmJvPEbpTznc89XwX7SD3k8kAeUU3UnMU="
  },
  {
    title: "Blood Bank Management System",
    description: "A project to manage blood bank using SQL",
    link: "https://github.com/DHEERAJMH/Blood-Bank-Management-System",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ5C3fOZcP4qW5mZbZlSxrcWxtPRDlwEpdyQ&s"
  },
  {
    title: "Password Manager",
    description: "A project to manage passwords using MERN stack",
    link: "https://github.com/DHEERAJMH/Password_Manager",
    image: "https://www.hungerford.tech/wp-content/uploads/2023/09/business-password-manager-grand-rapids-tech-support-800x445.jpg"
  }
];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50 perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8 animate-float">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                transform-style-3d transition-all duration-500
                ${hoveredProject === index ? 'scale-105' : 'scale-100'}
                h-full
              `}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`
                bg-white rounded-lg shadow-lg overflow-hidden
                transform transition-all duration-300
                ${hoveredProject === index ? 'rotate-y-10 translate-z-20' : ''}
                group relative h-full flex flex-col
              `}>
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img 
                    className={`
                      w-full h-full object-cover transition-transform duration-700
                      ${hoveredProject === index ? 'scale-110' : 'scale-100'}
                    `}
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between transform-gpu">
                  <div>
                    <h3 className={`
                      text-lg font-medium text-gray-900 mb-2 transition-transform duration-300
                      ${hoveredProject === index ? 'translate-z-10' : ''}
                    `}>{project.title}</h3>
                    <p className="mt-2 text-gray-500">{project.description}</p>
                  </div>
                  <a
                    href={project.link}
                    className={`
                      mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500
                      transition-all duration-300
                      ${hoveredProject === index ? 'translate-x-2' : ''}
                    `}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .rotate-y-10 {
          transform: rotateY(10deg);
        }
        
        .translate-z-10 {
          transform: translateZ(10px);
        }
        
        .translate-z-20 {
          transform: translateZ(20px);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}