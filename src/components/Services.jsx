import React from 'react';
import { motion } from 'framer-motion';
import { ServerCog, Database, Brain, Zap, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Backend Development',
      shortDesc: 'Scalable server-side solutions',
      description: 'Building robust RESTful APIs and microservices using Django, Flask, and FastAPI. Focus on performance, security, and scalability.',
      icon: <ServerCog size={40} />,
      features: ['RESTful APIs', 'Django/Flask', 'Microservices', 'Authentication'],
    },
    {
      title: 'Database Architecture',
      shortDesc: 'Efficient data systems',
      description: 'Designing optimized database schemas, writing complex queries, and ensuring data integrity across platforms.',
      icon: <Database size={40} />,
      features: ['PostgreSQL', 'Data Modeling', 'Query Optimization', 'Caching'],
    },
    {
      title: 'AI Integration',
      shortDesc: 'Smart automation solutions',
      description: 'Integrating machine learning models and creating AI workflows to solve complex business problems intelligently.',
      icon: <Brain size={40} />,
      features: ['LLM Integration', 'NLP', 'Automation', 'Smart APIs'],
    },
  ];

  return (
    <section id="services" className="section bg-gray-50 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-white font-bold text-sm rounded-full mb-6">
            <Zap size={16} />
            <span>Services</span>
          </span>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            What I <span className="text-yellow-500">Offer</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering high-performance backend solutions and intelligent system architectures tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white">{service.icon}</span>
              </div>

              <span className="text-sm font-medium text-gray-500">{service.shortDesc}</span>
              <h3 className="text-xl font-bold font-heading mt-2 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, fIdx) => (
                  <span key={fIdx} className="px-3 py-1 bg-gray-100 text-sm font-medium rounded-full">
                    {feature}
                  </span>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:gap-3 transition-all">
                <span>Learn more</span>
                <ChevronRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;