import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b border-gray-700 pb-4">
          Where I've Worked
        </h2>

        <div className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700 hover:border-gray-500 transition-colors duration-300">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-100">Tech Team Member</h3>
              <h4 className="text-xl text-blue-400 mt-1">Kashiyatra Cultural Fest, IIT BHU</h4>
            </div>
            <div className="text-gray-400 mt-2 md:mt-0 font-mono text-sm">
              October 2025
            </div>
          </div>

          <ul className="space-y-4 text-gray-300 list-disc list-inside marker:text-blue-500">
            <li>
              Built and set up the routing for key frontend pages, including the Competitions, Events, and Merch sections.
            </li>
            <li>
              Improved the website's UI by adding interactive elements like parallax hover effects, CSS animations, and footer updates.
            </li>
            <li>
              Sped up page load times by compressing large image assets and patched critical pre-launch bugs, including a broken logout flow and rendering issues on the teams page.
            </li>
          </ul>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <a
              href="https://github.com/SoorajBHU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-400 hover:text-blue-400 transition-colors"
            >
              View Commits (github.com/SoorajBHU) &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}