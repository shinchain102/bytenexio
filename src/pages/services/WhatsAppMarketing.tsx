import React from 'react';
import { MessageCircle, Users, BarChart, Zap, Trophy, Layout, MessageSquare } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeature from '../../components/ServiceFeature';
import ProcessTimeline from '../../components/ProcessTimeline';
import WhyChooseUs from '../../components/WhyChooseUs';
import ServiceContact from '../../components/ServiceContact';

const WhatsAppMarketing = () => {
  const processSteps = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Audience Segmentation",
      description: "Creating targeted customer segments for personalized messaging campaigns."
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Campaign Creation",
      description: "Developing engaging WhatsApp campaigns with compelling content and clear CTAs."
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Performance Tracking",
      description: "Monitoring message delivery, open rates, and engagement metrics."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Optimization",
      description: "Continuous improvement based on campaign performance and customer feedback."
    }
  ];

  const reasons = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "WhatsApp Business Experts",
      description: "Certified WhatsApp Business solution providers with proven success records."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Engagement Focus",
      description: "Creating conversations that drive customer engagement and conversions."
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "Compliance First",
      description: "Full compliance with WhatsApp Business policies and data protection regulations."
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      <ServiceHero
        title="WhatsApp Marketing"
        description="Connect with your customers directly through WhatsApp business solutions."
        image="https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <ServiceFeature
          title="Business Messaging Solutions"
          description="Leverage WhatsApp's business features to connect with your customers effectively."
          features={[
            "Automated responses and chatbots",
            "Broadcast messaging campaigns",
            "Customer support integration",
            "Rich media message support"
          ]}
          image="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80"
        />

        <ServiceFeature
          title="Campaign Management"
          description="End-to-end management of your WhatsApp marketing campaigns."
          features={[
            "Message template creation",
            "Campaign scheduling",
            "Performance analytics",
            "A/B testing capabilities"
          ]}
          image="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
          reversed
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            Our WhatsApp Marketing Process
          </h2>
          <p className="text-gray-300">Strategic approach to WhatsApp business messaging</p>
        </div>
        <ProcessTimeline steps={processSteps} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-300">Partner with WhatsApp marketing experts</p>
        </div>
        <WhyChooseUs reasons={reasons} />
      </section>

      <ServiceContact service="WhatsApp Marketing" />
    </div>
  );
};

export default WhatsAppMarketing;