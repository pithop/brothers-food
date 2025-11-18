import React from 'react';
import { Button } from './ui/button';
import { Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { restaurantInfo } from '../constants/menuData';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1634737119182-4d09e1305ba7)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-500/30"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(restaurantInfo.rating)
                        ? 'text-amber-500 fill-amber-500'
                        : 'text-gray-500'
                    }`}
                  />
                ))}
              </div>
              <span className="text-white font-semibold">
                {restaurantInfo.rating}/5 sur Google
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-500/30"
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span className="text-white font-semibold">Fait Maison</span>
            </motion.div>
          </div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
          >
            L'Alliance du Naan Indien
            <br />
            <span className="text-amber-500">et du Burger Gourmet</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {restaurantInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => scrollToSection('menu')}
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/50"
            >
              Découvrir la Carte
            </Button>
            <Button
              onClick={() => scrollToSection('location')}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Nous Trouver
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-amber-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
