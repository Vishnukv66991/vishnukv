import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Sparkles, Database, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,204,21,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(250,204,21,0.08)_0%,transparent_50%)]"></div>

      <div className="hidden lg:flex flex-col items-center gap-4 absolute left-8 top-1/2 -translate-y-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col gap-3 bg-yellow-400 px-3 py-4 rounded-[30px] shadow-lg"
        >
          {[
            { icon: <Github size={20} />, href: 'https://github.com/Vishnukv66991', label: 'GitHub' },
            { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/vishnu-k-v-b6444a33b', label: 'LinkedIn' },
            { icon: <Mail size={20} />, href: 'mailto:vishnukvofficial1@gmail.com', label: 'Email' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 pt-24 lg:pt-0">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium text-sm mb-6"
          >
            <Sparkles size={16} />
            <span>Available for hire</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
            <span className="text-yellow-500">Python</span>
            <br />
            Developer
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8">
            Building scalable backend systems with Django & Flask. 
            Passionate about AI integration and delivering clean, 
            maintainable code.
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
            {['Backend Engineer', 'AI Enthusiast', 'Database Design'].map((tag, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="px-5 py-2.5 bg-yellow-400 text-gray-900 rounded-full shadow-sm text-sm font-semibold hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-yellow-400 text-gray-900 font-heading font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Hire Me Now
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 bg-white text-gray-900 font-heading font-semibold rounded-full shadow-md border-2 border-gray-200 hover:border-yellow-400 hover:-translate-y-1 transition-all"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-[320px] h-[400px] md:w-[450px] md:h-[550px]">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-[40%_60%_70%_30%/40%_50%_50%_60%] shadow-xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-white/20"></div>
              
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="text-white drop-shadow-lg"
              >
                <Terminal size={140} strokeWidth={1} />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center"
            >
              <Database size={36} className="text-yellow-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center"
            >
              <Code2 size={28} className="text-yellow-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.2, repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2">
          <motion.div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;