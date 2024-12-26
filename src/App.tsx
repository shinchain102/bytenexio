import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import WebDesign from './pages/services/WebDesign';
import WebDevelopment from './pages/services/WebDevelopment';
import PerformanceMarketing from './pages/services/PerformanceMarketing';
import WhatsAppMarketing from './pages/services/WhatsAppMarketing';
import SocialMediaMarketing from './pages/services/SocialMediaMarketing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
          <Route path="/services/whatsapp-marketing" element={<WhatsAppMarketing />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;