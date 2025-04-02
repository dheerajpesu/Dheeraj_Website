import React, { useState } from 'react';
import { Code2, Server, Palette, Database, GitBranch, Terminal, Cloud, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React", logo: "https://cdn.simpleicons.org/react/00D8FF" },
      { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" }
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express", logo: "https://cdn.simpleicons.org/express/000000" },
      { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "REST API", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
    ]
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Redis", logo: "https://cdn.simpleicons.org/redis/DC382D" },
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
    ]
  },
  {
    title: "Artificial Intelligence",
    icon: Brain,
    skills: [
      { name: "YOLO", logo: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
    ]
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: [
      { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", logo: "https://cdn.simpleicons.org/github/181717" },
    ]
  },
  {
    title: "DevOps",
    icon: Terminal,
    skills: [
      { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/326CE5" },
      { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/232F3E" },
    ]
  }
];

export function Skills() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12 animate-float">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`
                transform-style-3d transition-transform duration-500 ease-out
                ${hoveredCard === index ? 'scale-105' : 'scale-100'}
                h-full
              `}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                bg-gradient-to-br from-white to-gray-50
                rounded-xl p-6 shadow-lg hover:shadow-2xl
                transform transition-all duration-300
                ${hoveredCard === index ? 'rotate-y-10 translate-z-20' : ''}
                relative overflow-hidden h-full flex flex-col
              `}>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center mb-4 transform-gpu">
                  <category.icon className={`
                    h-8 w-8 text-indigo-600 mr-3
                    transition-all duration-300
                    ${hoveredCard === index ? 'scale-110 rotate-12' : ''}
                  `} />
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-3 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`
                        flex items-center space-x-3 p-2 rounded-lg
                        hover:bg-white/80 backdrop-blur-sm
                        transform transition-all duration-300 ease-out
                        ${hoveredCard === index ? `translate-y-${skillIndex} translate-z-${skillIndex * 5}` : ''}
                      `}
                    >
                      <img 
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className={`
                          w-5 h-5 transition-transform duration-300
                          ${hoveredCard === index ? 'scale-110' : ''}
                        `}
                      />
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                    </div>
                  ))}
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