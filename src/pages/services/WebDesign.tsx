import React from 'react';
import { Monitor, Palette, Layout, Zap, Trophy, Users, Lightbulb, PenTool, Smartphone } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeature from '../../components/ServiceFeature';
import ProcessTimeline from '../../components/ProcessTimeline';
import WhyChooseUs from '../../components/WhyChooseUs';

const WebDesign = () => {
  const processSteps = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Discovery & Research",
      description: "We dive deep into understanding your brand, target audience, and business goals to create a strategic design direction."
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Wireframing & Design",
      description: "Creating detailed wireframes and visual designs that align with your brand and provide exceptional user experience."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Development",
      description: "Building your design with pixel-perfect precision, ensuring it works flawlessly across all devices."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Testing & Launch",
      description: "Rigorous testing and optimization before launching your stunning new website to the world."
    }
  ];

  const reasons = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Award-Winning Designs",
      description: "Our designs have been recognized by leading industry awards for their innovation and effectiveness."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User-Centric Approach",
      description: "We prioritize user experience in every design decision to ensure maximum engagement and conversion."
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "Custom Solutions",
      description: "Every design is uniquely crafted to match your brand identity and business requirements."
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      <ServiceHero
        title="Web Design Services"
        description="Create stunning, user-friendly websites that leave a lasting impression on your visitors."
        image="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80"
      />

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <ServiceFeature
          title="Modern & Responsive Design"
          description="We create websites that look stunning and function flawlessly across all devices, from desktop to mobile."
          features={[
            "Responsive layouts that adapt to any screen size",
            "Modern design trends and animations",
            "Fast loading speeds and optimized performance",
            "Intuitive navigation and user experience"
          ]}
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
        />

        <ServiceFeature
          title="Brand-Focused Aesthetics"
          description="Your website will be designed to reflect your brand identity and connect with your target audience."
          features={[
            "Custom color schemes and typography",
            "Consistent brand messaging",
            "Engaging visual hierarchy",
            "Strategic call-to-actions"
          ]}
          image="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80"
          reversed
        />
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            Our Design Process
          </h2>
          <p className="text-gray-300">A systematic approach to creating your perfect website</p>
        </div>
        <ProcessTimeline steps={processSteps} />
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-300">Experience the difference of working with design experts</p>
        </div>
        <WhyChooseUs reasons={reasons} />
      </section>
    </div>
  );
};

export default WebDesign;