import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';
import VantaBackground from './components/VantaBackground';

// Pages
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import VisionPage from './pages/VisionPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <ScrollManager>
      <main className="relative min-h-screen font-sans bg-[#050608]">
        {/* Vanta Animated Background (Bottom Layer z-[-2]) */}
        <VantaBackground />
        
        {/* Global Dark Gradient Overlay for Vignette Effect */}
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_center,rgba(0,40,120,0.15)_0%,rgba(5,6,8,0.9)_100%)] pointer-events-none" />
        
        <Navbar />
        
        {/* HTML Overlay Content */}
        <div className="relative z-10 flex flex-col min-h-screen pointer-events-none">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </ScrollManager>
  );
}

export default App;
