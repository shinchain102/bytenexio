import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Award, ArrowRight, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const Portfolio = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Growth Strategy",
      category: "Performance Marketing",
      description: "Implemented a comprehensive digital marketing strategy that resulted in 150% increase in online sales.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
      link: "#"
    },
    {
      title: "Brand Transformation",
      category: "Web Design",
      description: "Complete brand overhaul including website redesign and digital presence optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      link: "#"
    },
    {
      title: "Lead Generation Campaign",
      category: "WhatsApp Marketing",
      description: "Developed and executed a WhatsApp marketing campaign that generated 500+ qualified leads.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80",
      link: "#"
    }
  ];

  const testimonials: Testimonial[] = [
    {
      content: "Bytenex transformed our digital presence completely. Their strategic approach and attention to detail led to remarkable results.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechCorp Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      content: "The team's expertise in WhatsApp marketing helped us reach our target audience effectively. Highly recommended!",
      author: "Mohammed Al-Rashid",
      position: "CEO",
      company: "Dubai Ventures",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      content: "Outstanding service and results. Our conversion rates improved significantly after implementing their strategies.",
      author: "Emily Chen",
      position: "E-commerce Manager",
      company: "Global Retail",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    }
  ];

  const stats = [
    { icon: <Star className="h-6 w-6" />, value: "98%", label: "Client Satisfaction" },
    { icon: <Users className="h-6 w-6" />, value: "500+", label: "Clients Served" },
    { icon: <Award className="h-6 w-6" />, value: "150+", label: "Projects Completed" }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/60 to-gray-900/90 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Explore our successful projects and see how we've helped businesses achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cyber-border backdrop-blur-sm bg-gray-900/40 p-6 rounded-lg text-center"
              >
                <div className="text-indigo-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-300">Showcasing our best work and success stories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cyber-border backdrop-blur-sm bg-gray-900/40 rounded-lg overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-indigo-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-300">What our clients say about working with us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cyber-border backdrop-blur-sm bg-gray-900/40 p-6 rounded-lg"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.position} at {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cyber-border backdrop-blur-sm bg-gray-900/40 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. Contact us today to discuss your project
              and see how we can help you achieve your goals.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg cyber-border text-white bg-indigo-600/20 hover:bg-indigo-600/30 transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;