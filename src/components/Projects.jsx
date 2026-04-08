import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Developer Career OS",
      description: "A comprehensive frontend dashboard built to track coding skills, project milestones, and job application pipelines. Features full CRUD functionality, dynamic routing, and persistent data storage using localStorage.",
      tech: ["React", "Tailwind CSS", "localStorage", "Routing"],
      githubLink: "https://github.com/Sooraj2237/dev-career-os",
      liveLink: "https://sooraj2237.github.io/dev-career-os"
    },
    {
      title: "Gamified Study Planner",
      description: "A full-stack productivity web application that gamifies task management. Engineered with a custom leveling system, secure user authentication, and a dynamic backend database to track user progression.",
      tech: ["Python", "Flask", "Backend", "Authentication"],
      githubLink: "https://github.com/Sooraj2237/Gamify-Project---Gamified-Study-Planner",
      liveLink: "https://sooraj666.pythonanywhere.com/project1/"
    },
    {
      title: "FairShare Splitter",
      description: "A dynamic web application designed to calculate and settle shared group expenses. Built reusable UI components for individual expense tracking and managed state with React Hooks.",
      tech: ["React", "HTML/CSS", "Git", "Frontend"],
      githubLink: "https://github.com/Sooraj2237/hackoverflow",
      liveLink: "https://sooraj2237.github.io/hackoverflow/" 
    }
  ];

  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b border-gray-700 pb-4">
          Some Things I've Built
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-6 hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-mono bg-gray-700 text-blue-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-semibold hover:text-blue-400 transition-colors"
                >
                  GitHub Repo &rarr;
                </a>
                
                {/* This will only render if you provide a liveLink */}
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Live Demo &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}