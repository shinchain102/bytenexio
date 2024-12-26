import React from 'react';
import ContactForm from './ContactForm';
import { Rocket, CheckCircle, Clock, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceContactProps {
  service: string;
}

const benefits = [
  {
    icon: <Rocket className="h-5 w-5" />,
    text: "Fast turnaround times"
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    text: "Guaranteed satisfaction"
  },
  {
    icon: <Clock className="h-5 w-5" />,
    text: "24/7 support available"
  },
  {
    icon: <Users className="h-5 w-5" />,
    text: "Expert team at your service"
  }
];

const ServiceContact = ({ service }: ServiceContactProps) => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 lg:sticky lg:top-8"
          >
            <div>
              <h2 className="text-4xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
                Let's Create Something Amazing Together
              </h2>
              <p className="text-xl text-gray-300">
                Ready to transform your digital presence? Our team of experts is here to help you achieve your goals.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-300">
                Take the first step towards digital excellence. Whether you have a specific project in mind or need guidance, we're here to help you succeed.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-300 bg-gray-800/30 p-4 rounded-lg cyber-border"
                  >
                    <span className="text-indigo-400 bg-indigo-400/10 p-2 rounded-lg">
                      {benefit.icon}
                    </span>
                    <span className="font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="inline-flex items-center text-indigo-400 group"
                >
                  <span className="mr-2">Start your journey today</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="cyber-border backdrop-blur-sm bg-gray-900/40 p-6 sm:p-8 rounded-lg">
              <ContactForm service={service} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContact;