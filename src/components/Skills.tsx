import React from 'react';
import { Code2, Server, Palette, Database, GitBranch, Terminal, Cloud } from 'lucide-react';

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
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <category.icon className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <img 
                      src={skill.logo} 
                      alt={`${skill.name} logo`} 
                      className="w-5 h-5"
                    />
                    <span className="text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}