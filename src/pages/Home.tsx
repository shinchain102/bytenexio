import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, MessageCircle, Palette, BarChart, Users, Megaphone, Repeat, DollarSign, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import ServiceCard from '../components/ServiceCard';
import ExpertiseCard from '../components/ExpertiseCard';
import VideoBackground from '../components/VideoBackground';

const Home = () => {
  const expertise = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "CAC's Optimization",
      description: "Unlock the full potential of your Customer Acquisition Costs with our data-driven strategies."
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "WhatsApp Marketing",
      description: "Connect with your audience where they are. Leverage WhatsApp for targeted campaigns."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Designing",
      description: "Make a lasting impression online with visually stunning and user-friendly websites."
    }
  ];

  const services = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'WhatsApp Marketing Services',
      description: 'Harness the potential of WhatsApp for effective communication and engagement.',
      link: '/services/web-design',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Facebook Advertising',
      description: 'Dominate the digital landscape with targeted Facebook advertising strategies.',
      link: '/services/facebook-advertising',
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Website Development',
      description: 'Your digital storefront matters. Let us create a website that captivates and converts.',
      link: '/services/web-development',
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: 'Sales Funnel Creation',
      description: 'Streamline your sales process with carefully crafted funnels for optimal conversion.',
      link: '/services/sales-funnel',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Lead Generation Funnel',
      description: 'Generate quality leads with our proven funnel strategies.',
      link: '/services/lead-generation',
    },
    {
      icon: <Repeat className="h-8 w-8" />,
      title: 'Remarketing Services',
      description: 'Stay top-of-mind with compelling remarketing campaigns.',
      link: '/services/remarketing',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/free-vector/abstract-vector-colorful-mesh-dark-background-futuristic-style-card-elegant-background-business-presentations-corrupted-point-sphere-chaos-aesthetics_1217-5361.jpg?t=st=1735196077~exp=1735199677~hmac=46257eedc3ca4ffe63082a14d0d9c9bc4d8027656eab0dc4daf2d9c7f43f9eeb&w=740"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Welcome to Bytenex.io
            </h1>
            <p className="text-xl text-gray-300 mt-8 mb-6 max-w-2xl">
              Your Gateway to Unparalleled Business Growth! At Bytenex.io, we specialize in strategic 
              Customer Acquisition and offer a suite of services designed to elevate your business to new heights.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-base font-medium cyber-border rounded-md text-white bg-indigo-600/30 hover:bg-indigo-600/40 transition backdrop-blur-sm"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>@@

      {/* Expertise Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 tech-grid opacity-20" />
          <img
            src="https://images.unsplash.com/photo-1557264322-b44d383a2906?auto=format&fit=crop&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/95" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white glow-text mb-4">
              Our Expertise
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover how our core competencies can drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <ExpertiseCard
                key={item.title}
                {...item}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 tech-grid opacity-20" />
          <img
            src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/95" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white glow-text mb-4">
              Explore Our Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive range of services tailored for your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 tech-grid opacity-30" />
          <img
            src="https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/95" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4 relative z-10">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
            Let's work together to create something extraordinary. Contact us today to discuss your
            project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 text-base font-medium cyber-border rounded-md text-white bg-indigo-600/20 hover:bg-indigo-600/30 transition backdrop-blur-sm"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
              Let's Start Your Digital Journey
            </h2>
            <p className="text-gray-300">
              Ready to transform your digital presence? Get in touch with us today and let's create something amazing together.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <div className="cyber-border backdrop-blur-sm bg-gray-900/40 p-6 rounded-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;