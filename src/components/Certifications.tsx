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
  }
];

export function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Award className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-gray-900">Professional Certifications</h2>
          <p className="mt-4 text-lg text-gray-600">Validated expertise and professional achievements</p>
        </div>

        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:flex">
                <div 
                  className="md:flex-shrink-0 flex items-center justify-center p-6 bg-gradient-to-br from-indigo-50 to-white cursor-pointer"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <img
                    className="h-32 w-32 object-contain hover:scale-105 transition-transform duration-200"
                    src={cert.image}
                    alt={cert.name}
                  />
                </div>
                <div className="p-8 w-full">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                    <span className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {cert.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    Issued by: {cert.issuer}
                  </p>
                  
                  <p className="text-sm text-gray-500 mb-4">
                    Credential ID: <a href="https://www.hackerrank.com/certificates/iframe/0d478ab577d8" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">{cert.credentialId}</a>
                  </p>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Validated Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-700"
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
          ))}
        </div>
      </div>

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}