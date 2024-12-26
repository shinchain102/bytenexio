import React from 'react';
import { Target, TrendingUp, BarChart, Zap, Trophy, Users, Layout } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeature from '../../components/ServiceFeature';
import ProcessTimeline from '../../components/ProcessTimeline';
import WhyChooseUs from '../../components/WhyChooseUs';
import ServiceContact from '../../components/ServiceContact';

const PerformanceMarketing = () => {
  const processSteps = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Strategy Development",
      description: "We analyze your market, competitors, and target audience to create a data-driven marketing strategy."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Campaign Setup",
      description: "Setting up optimized campaigns across multiple channels with precise targeting and messaging."
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Performance Tracking",
      description: "Continuous monitoring and analysis of campaign metrics to ensure optimal performance."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Optimization & Scaling",
      description: "Data-driven optimization and strategic scaling of successful campaigns."
    }
  ];

  const reasons = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Results-Driven Approach",
      description: "We focus on measurable results and ROI, ensuring your marketing budget delivers maximum value."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Our certified marketing specialists stay ahead of industry trends and best practices."
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "Transparent Reporting",
      description: "Detailed performance reports and insights to keep you informed about campaign progress."
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      <ServiceHero
        title="Performance Marketing"
        description="Drive measurable results with data-driven marketing strategies."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <ServiceFeature
          title="Data-Driven Campaigns"
          description="We create and optimize marketing campaigns that deliver measurable results and maximize your ROI."
          features={[
            "Advanced audience targeting",
            "Multi-channel campaign management",
            "Conversion rate optimization",
            "Real-time performance tracking"
          ]}
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
        />

        <ServiceFeature
          title="Analytics & Optimization"
          description="Continuous monitoring and optimization of campaigns using advanced analytics and tracking tools."
          features={[
            "Custom performance dashboards",
            "A/B testing and optimization",
            "Attribution modeling",
            "ROI analysis and reporting"
          ]}
          image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
          reversed
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            Our Marketing Process
          </h2>
          <p className="text-gray-300">A systematic approach to achieving your marketing goals</p>
        </div>
        <ProcessTimeline steps={processSteps} />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-300">Partner with experts who understand performance marketing</p>
        </div>
        <WhyChooseUs reasons={reasons} />
      </section>

      <ServiceContact service="Performance Marketing" />
    </div>
  );
};

export default PerformanceMarketing;