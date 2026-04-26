import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'TaskX - Task Manager',
      category: 'Full Stack App',
      description: 'A comprehensive task management system with real-time chat, space organization, and user management.',
      tech: ['Python', 'Flask', 'Supabase', 'HTML/CSS'],
      color: 'from-yellow-300 to-yellow-500',
    },
    {
      title: 'Enable Learning',
      category: 'EdTech Platform',
      description: 'Voice-assisted interface to improve engagement for students with learning challenges.',
      tech: ['HTML/CSS', 'JavaScript', 'Voice API'],
      color: 'from-gray-700 to-gray-900',
    },
    {
      title: 'Job Recommendation',
      category: 'Career Tech',
      description: 'Job-matching system based on skill mapping and role alignment with secure admin dashboards.',
      tech: ['Python', 'PostgreSQL', 'JavaScript'],
      color: 'from-blue-400 to-blue-600',
    },
  ];

  return (
    <section id="projects" className="section bg-white relative">
      <div className="absolute top-40 -left-20 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-white font-bold text-sm rounded-full mb-6">
            <ArrowRight size={16} />
            <span>Portfolio</span>
          </span>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-yellow-500">Projects</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in backend development, AI integration, and full-stack solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                <span className="text-white/30 text-6xl font-bold">{String.fromCharCode(65 + idx)}</span>
              </div>

              <div className="p-6">
                <span className="text-xs font-bold text-yellow-600 uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <a href="#" className="flex items-center gap-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700">
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-800">
                    <ExternalLink size={18} />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/Vishnukv66991" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all hover:scale-105">
            <Github size={20} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;