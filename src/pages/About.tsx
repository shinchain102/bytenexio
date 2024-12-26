import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Mission",
      description: "To empower businesses with innovative solutions that drive customer acquisition, foster growth, and create lasting success."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer-Centric",
      description: "Your success is our priority. We tailor our services to meet your unique business goals and requirements."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation",
      description: "Stay ahead in the dynamic digital landscape with cutting-edge solutions crafted for your success."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Transparency",
      description: "We maintain complete transparency in our processes and communications, building lasting partnerships."
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-purple-900/20 to-indigo-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-6">
              About Bytenex
            </h1>
            <p className="text-xl text-gray-300">
              We are driven by a singular passion: helping businesses thrive through strategic customer acquisition. 
              Our journey began with a commitment to excellence and a vision to redefine industry standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
              Our Values
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The principles that guide us in delivering exceptional service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cyber-border backdrop-blur-sm bg-gray-900/40 p-6 rounded-lg"
              >
                <div className="text-indigo-400 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded with a vision to transform how businesses approach digital growth, 
                  Bytenex has evolved into a leading force in customer acquisition and digital marketing.
                </p>
                <p>
                  Our team of experts brings together years of experience across digital marketing, 
                  technology, and business strategy to deliver results that matter.
                </p>
                <p>
                  We believe in the power of innovation, data-driven decisions, and 
                  building lasting relationships with our clients.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="cyber-border rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Our team collaboration"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;