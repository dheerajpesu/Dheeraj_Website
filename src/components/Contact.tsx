import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 bg-gray-50 flex justify-center">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10">Contact Me</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6 text-lg">
          <div className="flex items-center justify-center space-x-4">
            <Mail className="text-indigo-600 w-6 h-6" />
            <a href="mailto:dheerajhavale@gmail.com" className="text-indigo-600 hover:underline text-xl">
              dheerajhavale@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Phone className="text-indigo-600 w-6 h-6" />
            <span className="text-gray-700 text-xl">7795098597</span>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Linkedin className="text-indigo-600 w-6 h-6" />
            <a
              href="https://www.linkedin.com/in/dheeraj-havale-72199a223/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline text-xl"
            >
              linkedin.com/in/dheeraj-havale-72199a223/
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
