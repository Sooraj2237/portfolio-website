import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 text-center border-t border-gray-800 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-200 mb-6">Get In Touch</h2>
        <p className="mb-8 max-w-lg mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        
        <div className="flex justify-center gap-8 mb-10">
          <a href="https://github.com/Sooraj2237" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors font-semibold">
            GitHub
          </a>
          <a href="https://linkedin.com/in/sooraj-s-kamath-080643343" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors font-semibold">
            LinkedIn
          </a>
          <a href="mailto:soorajskamath237@gmail.com" className="hover:text-blue-400 transition-colors font-semibold">
            Email Me
          </a>
        </div>
        
        <p className="text-sm font-mono text-gray-600">
          Designed & Built by Sooraj S Kamath
        </p>
      </div>
    </footer>
  );
}