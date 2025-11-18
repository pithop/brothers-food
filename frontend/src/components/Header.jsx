import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl md:text-3xl font-bold text-white">
              Brother's <span className="text-amber-500">&</span> Food
            </span>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-300 hover:text-amber-500 transition-colors duration-200 font-medium"
            >
              La Carte
            </button>
            <button
              onClick={() => scrollToSection('concept')}
              className="text-gray-300 hover:text-amber-500 transition-colors duration-200 font-medium"
            >
              L'Histoire
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-gray-300 hover:text-amber-500 transition-colors duration-200 font-medium"
            >
              Nous Trouver
            </button>
          </nav>

          {/* CTA Button */}
          <Button
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50"
            onClick={() => scrollToSection('order')}
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Commander
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
