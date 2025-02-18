import React from 'react';
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
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-500">{project.description}</p>
                <a
                  href={project.link}
                  className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
