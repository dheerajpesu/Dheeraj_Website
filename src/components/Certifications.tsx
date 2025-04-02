import React, { useState } from 'react';
import { Award, Calendar, CheckCircle2, X } from 'lucide-react';

const certifications = [
  {
    name: "Problem Solving (Intermediate) Certificate",
    issuer: "HackerRank",
    date: "25 March 2023",
    credentialId: "0d478ab577d8",
    image: "/HackerRankCertificate.jpg",
    skills: ["Problem Solving", "Algorithms", "Data Structures"]
  },
  {
    name: "C++ Practical - Organogram in C++",
    issuer: "Infosys Springboard",
    date: "13 Feb 2025",
    image: "/Infosys_springBoard_Cpp.jpg",
    skills: ["C++", "Object-Oriented Programming", "Data Structures"],
  },
  {
    name: "C++ Fundamentals",
    issuer: "Infosys Springboard",
    date: "14 Feb 2025",
    image: "/infosys_springBoard_fundamentals.cpp.jpg",
    skills: ["C++", "Object-Oriented Programming", "Data Structures"],
  },
  {
    name: "Git & GitHub: Introduction",
    issuer: "Infosys Springboard",
    date: "15 Feb 2025",
    image: "/git_github_infosys_springboard.jpg",
    skills: ["git", "github"],
  },
  {
    name: "Python Coder",
    issuer: "Kaggle",
    date: "15 April 2024",
    image: "/Python_Coder.png",
    skills: ["Python"],
  },
];

export function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Award className="h-12 w-12 text-indigo-600 mx-auto mb-4 animate-float" />
          <h2 className="text-3xl font-extrabold text-gray-900 animate-float-delayed">Professional Certifications</h2>
          <p className="mt-4 text-lg text-gray-600 animate-float-more-delayed">Validated expertise and professional achievements</p>
        </div>

        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`
                transform-style-3d transition-all duration-500
                ${hoveredCert === index ? 'scale-105' : 'scale-100'}
              `}
              onMouseEnter={() => setHoveredCert(index)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              <div className={`
                bg-white rounded-xl shadow-lg overflow-hidden
                transform transition-all duration-300
                ${hoveredCert === index ? 'rotate-y-10 translate-z-20' : ''}
                relative group
              `}>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="md:flex">
                  <div 
                    className="md:flex-shrink-0 flex items-center justify-center p-6 bg-gradient-to-br from-indigo-50 to-white cursor-pointer transform-gpu"
                    onClick={() => setSelectedImage(cert.image)}
                  >
                    <img
                      className={`
                        h-32 w-32 object-contain transition-all duration-300
                        ${hoveredCert === index ? 'scale-110 rotate-3' : ''}
                      `}
                      src={cert.image}
                      alt={cert.name}
                    />
                  </div>
                  <div className="p-8 w-full transform-gpu">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`
                        text-xl font-bold text-gray-900 transition-transform duration-300
                        ${hoveredCert === index ? 'translate-z-10' : ''}
                      `}>{cert.name}</h3>
                      <span className="flex items-center text-sm text-gray-500">
                        <Calendar className={`
                          h-4 w-4 mr-1 transition-transform duration-300
                          ${hoveredCert === index ? 'rotate-12' : ''}
                        `} />
                        {cert.date}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      Issued by: {cert.issuer}
                    </p>
                    
                    <p className="text-sm text-gray-500 mb-4">
                      Credential ID: <a href={`https://www.hackerrank.com/certificates/iframe/${cert.credentialId}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">{cert.credentialId}</a>
                    </p>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Validated Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`
                              inline-flex items-center px-3 py-1 rounded-full text-sm
                              bg-indigo-50 text-indigo-700 transition-all duration-300
                              ${hoveredCert === index ? `translate-y-${skillIndex} translate-z-${skillIndex * 5}` : ''}
                            `}
                          >
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full transform-gpu">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto rounded-lg shadow-2xl animate-zoom-in"
            />
          </div>
        </div>
      )}

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
        
        .animate-float-delayed {
          animation: float 3s ease-in-out 0.5s infinite;
        }
        
        .animate-float-more-delayed {
          animation: float 3s ease-in-out 1s infinite;
        }
        
        @keyframes zoomIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-zoom-in {
          animation: zoomIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}