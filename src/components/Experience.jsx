import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const experienceItems = [
  {
    type: 'work',
    year: '2025 - Present',
    role: 'Full Stack Developer Intern',
    company: 'Riss Technologies',
    location: 'Kochi, Kerala',
    description: 'Building responsive web applications using Django and PostgreSQL. Collaborating on REST API integrations and optimizing system performance for enterprise clients.',
    skills: ['Django', 'PostgreSQL', 'REST API', 'Full Stack'],
  },
  {
    type: 'education',
    year: '2024 - 2026',
    role: 'Master of Computer Applications',
    company: 'Mahatma Gandhi University',
    location: 'Kerala',
    description: 'Advanced studies in computing, software engineering, algorithms, and full-stack development methodologies.',
    skills: ['MCA', 'Algorithms', 'Software Engineering'],
  },
  {
    type: 'education',
    year: '2021 - 2024',
    role: 'Bachelor of Computer Applications',
    company: 'Mahatma Gandhi University',
    location: 'Kerala',
    description: 'Foundation in programming, database management, web development, and software development lifecycle.',
    skills: ['BCA', 'Programming', 'Database', 'Web Dev'],
  },
];

const TimelineCard = ({ item, index, isLeft }) => {
  const isWork = item.type === 'work';

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center gap-8 mb-10 last:mb-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className={`hidden md:block w-[45%] h-0.5 ${isLeft ? 'border-t-2 border-dashed border-yellow-300' : ''}`}></div>
      
      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl z-10 ${
          isWork ? 'bg-yellow-400' : 'bg-white border-4 border-yellow-400'
        }`}>
          {isWork ? (
            <Briefcase size={24} className="text-white" />
          ) : (
            <GraduationCap size={24} className="text-yellow-500" />
          )}
        </div>
      </div>

      <div className={`w-full md:w-[45%] ${isLeft ? 'md:pl-12' : 'md:pr-12'} ml-12 md:ml-0`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-600 text-xs font-bold rounded-full mb-3">
                <Calendar size={12} />
                {item.year}
              </span>
              <h3 className="font-bold text-gray-800 text-xl leading-tight">{item.role}</h3>
            </div>
            <div className={`w-3 h-3 rounded-full ${isWork ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
          </div>

          <div className="flex items-center gap-4 mb-3">
            <p className="font-semibold text-yellow-600">{item.company}</p>
            {item.location && (
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <MapPin size={12} />
                {item.location}
              </span>
            )}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>

          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, sIdx) => (
              <span 
                key={sIdx} 
                className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section bg-gray-50 relative overflow-hidden py-20">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/3 left-0 w-60 h-60 bg-yellow-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-white font-bold text-sm rounded-full mb-6"
          >
            <Briefcase size={16} />
            Experience & Education
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            My <span className="text-yellow-500">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-xl mx-auto"
          >
            A timeline of my professional experience and academic background.
          </motion.p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-200"></div>

          {experienceItems.map((item, idx) => (
            <TimelineCard key={idx} item={item} index={idx} isLeft={idx % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;