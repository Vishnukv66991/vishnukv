import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-gray-50 relative">
      <div className="absolute top-20 -left-20 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-10 md:p-14"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Let's <span className="text-yellow-500">Connect</span>
            </h2>
            <p className="text-lg text-gray-600">
              Have a project in mind? Let's build something great together.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form target="_blank" action="https://formsubmit.co/vishnukvofficial1@gmail.com" method="POST" className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <input 
                    type="text" 
                    name="name" 
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-400/20 outline-none transition-all" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                <div className="flex-1">
                  <input 
                    type="email" 
                    name="email" 
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-400/20 outline-none transition-all" 
                    placeholder="Your Email" 
                    required 
                  />
                </div>
              </div>

              <textarea 
                name="message" 
                rows="5" 
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-400/20 outline-none transition-all resize-y"
                placeholder="Tell me about your project..."
                required
              ></textarea>

              <button 
                type="submit" 
                className="w-full md:w-auto md:self-center px-10 py-5 bg-yellow-400 text-white font-heading font-bold text-lg rounded-full shadow-lg hover:bg-yellow-500 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {[
              { icon: <Mail size={20} />, text: 'vishnukvofficial1@gmail.com', href: 'mailto:vishnukvofficial1@gmail.com' },
              { icon: <Phone size={20} />, text: '+91 95266 99147', href: 'tel:+919526699147' },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-center gap-3 text-gray-600 hover:text-yellow-500 transition-colors"
              >
                <span className="w-10 h-10 bg-yellow-400 text-white rounded-full flex items-center justify-center">
                  {item.icon}
                </span>
                <span className="font-medium">{item.text}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;