import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "info@bytenex.io",
      description: "Send us an email anytime!"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "Dubai, UAE",
      description: "Visit our office"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "9:00 AM - 6:00 PM",
      description: "Sunday to Thursday"
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-purple-900/20 to-indigo-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300">
              Have a question or ready to start your project? We're here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cyber-border backdrop-blur-sm bg-gray-900/40 p-6 rounded-lg text-center"
              >
                <div className="text-indigo-400 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-indigo-400 font-medium mb-1">{info.details}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
                  Let's Create Something Amazing Together
                </h2>
                <p className="text-gray-300">
                  Whether you have a specific project in mind or need guidance, 
                  our team is here to help you achieve your digital goals.
                </p>
              </div>
              <div className="cyber-border backdrop-blur-sm bg-gray-900/40 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">What happens next?</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-400/20 text-indigo-400 text-sm mr-3 mt-0.5">
                      1
                    </span>
                    <p className="text-gray-300">We'll contact you within 24 hours to discuss your needs</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-400/20 text-indigo-400 text-sm mr-3 mt-0.5">
                      2
                    </span>
                    <p className="text-gray-300">Our team will assess your requirements and propose solutions</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-400/20 text-indigo-400 text-sm mr-3 mt-0.5">
                      3
                    </span>
                    <p className="text-gray-300">We'll provide a detailed proposal and timeline</p>
                  </li>
                </ol>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="cyber-border backdrop-blur-sm bg-gray-900/40 p-6 rounded-lg">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;