import React, { useState } from 'react';
import { Eye, ArrowRight, ExternalLink } from 'lucide-react';

const ProjectCardModal = ({ title, description, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-fg/5 hover:bg-fg/10 text-fg/90 transition-colors duration-200"
        onClick={() => setIsOpen(true)}
      >
        <span className="text-sm">Details</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-lg bg-surface border border-fg/10 p-6 text-fg shadow-lg animate-slide-up sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 rounded-md p-2 hover:bg-fg/10 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Eye className="h-5 w-5" />
            </button>
            <h2 className="mb-4 text-2xl font-bold">{title}</h2>
            <p className="mb-6 text-gray-400">{description}</p>
            <div className="flex justify-end space-x-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Live Demo <ExternalLink className="ml-2 inline-block h-5 w-5" />
              </a>
              <button
                className="rounded-md bg-fg/10 px-4 py-2 font-medium hover:bg-fg/20 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCardModal;