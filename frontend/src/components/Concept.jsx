import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Users, Heart } from 'lucide-react';

const Concept = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Flame,
      title: 'Naan Cuit Minute',
      description: 'Notre pain n\'est pas un bun industriel, mais un authentique Naan artisanal cuit sur place dans notre four Tandoor traditionnel.'
    },
    {
      icon: Users,
      title: 'Équipe Fraternelle',
      description: 'Chez Brother\'s & Food, nous sommes une vraie équipe de passionnés qui travaille comme une famille. Vous le sentirez dès votre première visite.'
    },
    {
      icon: Heart,
      title: 'Comme à la Maison',
      description: 'Recettes généreuses, produits frais, et une ambiance chaleureuse. Nous cuisinons avec amour pour vous offrir le meilleur du street-food.'
    }
  ];

  return (
    <section id="concept" ref={ref} className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Le <span className="text-amber-500">Concept</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Nous avons créé Brother's & Food avec une vision simple : combiner l'authenticité du pain Naan indien avec la générosité du burger gourmet. Chaque Naan est préparé à la commande et cuit dans notre four Tandoor, pour une fraîcheur et un goût incomparables.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Nos viandes sont sélectionnées avec soin, nos sauces sont maison, et nos recettes sont le fruit de mois de recherche pour vous offrir une expérience unique à Montpellier.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6419703/pexels-photo-6419703.jpeg"
                alt="Préparation Naan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-slate-900 px-8 py-4 rounded-2xl shadow-xl font-black text-lg">
              100% Fait Maison
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Concept;
