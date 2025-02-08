import React from 'react';
import { HomeIcon, User, Briefcase, Award, Mail, Code } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'badges', icon: Award, label: 'Badges' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeSection === item.id
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}