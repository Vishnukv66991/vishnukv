import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Sparkles, GraduationCap, CheckCircle } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Python', desc: 'Core language', icon: <Code2 size={32} /> },
    { name: 'Django', desc: 'Web framework', icon: <Code2 size={32} /> },
    { name: 'PostgreSQL', desc: 'Database', icon: <Database size={32} /> },
    { name: 'AI/ML', desc: 'Integration', icon: <Brain size={32} /> },
  ];

  const highlights = [
    'Backend Development',
    'REST APIs',
    'Database Design',
    'AI Integration',
    'Clean Code',
    'Performance'
  ];

  return (
    <section id="about" className="section bg-white relative">
      <div className="absolute top-20 -left-20 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>About Me</span>
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Hello! I'm <span className="text-yellow-500">Vishnu</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              I'm a passionate Python Developer with expertise in building scalable backend systems. 
              Currently pursuing my Master's in Computer Applications while working as a Full Stack Developer Intern at Riss Technologies.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-2xl">
                <GraduationCap size={24} className="text-yellow-500 mb-2" />
                <h4 className="font-bold text-gray-800">MCA</h4>
                <p className="text-sm text-gray-500">Expected 2026</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl">
                <GraduationCap size={24} className="text-yellow-500 mb-2" />
                <h4 className="font-bold text-gray-800">BCA</h4>
                <p className="text-sm text-gray-500">Graduated 2024</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {highlights.map((item, idx) => (
                <span key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium">
                  <CheckCircle size={16} className="text-yellow-500" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-yellow-50 p-8 rounded-3xl text-center group hover:bg-yellow-100 transition-all"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-all">
                  <span className="text-yellow-600">{skill.icon}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">{skill.name}</h3>
                <p className="text-sm text-gray-500">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;