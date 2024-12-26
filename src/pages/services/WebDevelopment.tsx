import React from 'react';
import { Code, Database, Shield, Zap, Trophy, Users, Layout } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeature from '../../components/ServiceFeature';
import ProcessTimeline from '../../components/ProcessTimeline';
import WhyChooseUs from '../../components/WhyChooseUs';
import ServiceContact from '../../components/ServiceContact';

const WebDevelopment = () => {
  const processSteps = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Technical Planning",
      description: "We analyze your requirements and create a detailed technical architecture and development roadmap."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Development & Integration",
      description: "Our expert developers build your solution using modern technologies and best practices."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Testing & Security",
      description: "Rigorous testing and security measures ensure your application is robust and secure."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Deployment & Support",
      description: "Smooth deployment and ongoing support to keep your application running perfectly."
    }
  ];

  const reasons = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Technical Excellence",
      description: "Our developers are experts in modern web technologies and follow industry best practices."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Approach",
      description: "We work closely with you throughout the development process, ensuring your vision is realized."
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "Scalable Solutions",
      description: "Our applications are built to grow with your business, handling increased demands effortlessly."
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      <ServiceHero
        title="Web Development Services"
        description="Build powerful, scalable web applications using cutting-edge technologies."
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <ServiceFeature
          title="Full-Stack Development"
          description="We create comprehensive web solutions that seamlessly integrate front-end and back-end technologies."
          features={[
            "Custom API development and integration",
            "Database design and optimization",
            "Cloud infrastructure setup and management",
            "Performance optimization and scaling"
          ]}
          image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
        />

        <ServiceFeature
          title="Modern Technologies"
          description="We use the latest technologies and frameworks to build fast, reliable, and maintainable applications."
          features={[
            "React, Vue, and Angular expertise",
            "Node.js and Python backend development",
            "Progressive Web Apps (PWA)",
            "Microservices architecture"
          ]}
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
          reversed
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            Our Development Process
          </h2>
          <p className="text-gray-300">A systematic approach to building your web application</p>
        </div>
        <ProcessTimeline steps={processSteps} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-300">Partner with experts who understand your business needs</p>
        </div>
        <WhyChooseUs reasons={reasons} />
      </section>

      <ServiceContact service="Web Development" />
    </div>
  );
};

export default WebDevelopment;