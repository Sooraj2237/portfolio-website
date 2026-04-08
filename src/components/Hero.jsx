import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-blue-400 font-mono text-lg mb-4">
          Hi, my name is
        </p>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Sooraj S Kamath.
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-400 mb-6">
          I build things for the web.
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          I'm an Electrical Engineering student at IIT BHU and a Full-Stack Developer specializing in building exceptional digital experiences. 
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 w-full sm:w-auto"
          >
            View My Work
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 font-semibold rounded-lg transition duration-300 w-full sm:w-auto"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}