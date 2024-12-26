import React from 'react';
import { Share2, Users, TrendingUp, Zap, Trophy, Layout, MessageSquare } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeature from '../../components/ServiceFeature';
import ProcessTimeline from '../../components/ProcessTimeline';
import WhyChooseUs from '../../components/WhyChooseUs';
import ServiceContact from '../../components/ServiceContact';

const SocialMediaMarketing = () => {
  const processSteps = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Audience Analysis",
      description: "Understanding your target audience and their social media behavior."
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Content Strategy",
      description: "Developing engaging content strategies tailored to each platform."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Engagement & Growth",
      description: "Implementing tactics to increase engagement and grow your following."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Monitor & Optimize",
      description: "Continuous monitoring and optimization of social media performance."
    }
  ];

  const reasons = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Platform Expertise",
      description: "Deep understanding of all major social media platforms and their unique requirements."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Engaging Content",
      description: "Creative content that resonates with your audience and drives engagement."
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "Strategic Approach",
      description: "Data-driven strategies that align with your business objectives."
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      <ServiceHero
        title="Social Media Marketing"
        description="Build your brand presence and engage with your audience across social platforms."
        image="https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <ServiceFeature
          title="Platform-Optimized Content"
          description="We create engaging content tailored to each social media platform's unique characteristics."
          features={[
            "Platform-specific content strategy",
            "Visual content creation",
            "Hashtag research and optimization",
            "Engagement-focused copywriting"
          ]}
          image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
        />

        <ServiceFeature
          title="Community Management"
          description="Build and nurture an engaged community around your brand on social media."
          features={[
            "Active community engagement",
            "Response management",
            "Brand voice development",
            "Crisis management planning"
          ]}
          image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
          reversed
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            Our Social Media Process
          </h2>
          <p className="text-gray-300">Building your brand's social media presence step by step</p>
        </div>
        <ProcessTimeline steps={processSteps} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-300">Partner with social media experts who understand your brand</p>
        </div>
        <WhyChooseUs reasons={reasons} />
      </section>

      <ServiceContact service="Social Media Marketing" />
    </div>
  );
};

export default SocialMediaMarketing;