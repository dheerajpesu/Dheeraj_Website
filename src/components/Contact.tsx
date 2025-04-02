import React, { useState } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

export function Contact() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50 flex justify-center perspective-1000">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10 animate-float">Contact Me</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6 text-lg transform-style-3d">
          {[
            {
              id: 'email',
              icon: Mail,
              content: 'dheerajhavale@gmail.com',
              href: 'mailto:dheerajhavale@gmail.com',
              color: 'text-indigo-600'
            },
            {
              id: 'phone',
              icon: Phone,
              content: '7795098597',
              color: 'text-gray-700'
            },
            {
              id: 'linkedin',
              icon: Linkedin,
              content: 'linkedin.com/in/dheeraj-havale-72199a223/',
              href: 'https://www.linkedin.com/in/dheeraj-havale-72199a223/',
              color: 'text-indigo-600'
            }
          ].map((item) => (
            <div
              key={item.id}
              className={`
                flex items-center justify-center space-x-4
                transform-gpu transition-all duration-300
                ${hoveredItem === item.id ? 'scale-105 translate-z-10' : ''}
              `}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <item.icon className={`
                w-6 h-6 transition-all duration-300
                ${item.color}
                ${hoveredItem === item.id ? 'scale-110 rotate-12' : ''}
              `} />
              {item.href ? (
                <a
                  href={item.href}
                  target={item.id === 'linkedin' ? '_blank' : undefined}
                  rel={item.id === 'linkedin' ? 'noopener noreferrer' : undefined}
                  className={`
                    hover:underline text-xl transition-all duration-300
                    ${item.color}
                    ${hoveredItem === item.id ? 'translate-x-2' : ''}
                  `}
                >
                  {item.content}
                </a>
              ) : (
                <span className={`
                  text-xl transition-all duration-300
                  ${item.color}
                  ${hoveredItem === item.id ? 'translate-x-2' : ''}
                `}>
                  {item.content}
                </span>
              )}
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
        
        .translate-z-10 {
          transform: translateZ(10px);
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