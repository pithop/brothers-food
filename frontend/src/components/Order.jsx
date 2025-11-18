import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';
import { ShoppingBag, Smartphone, Store } from 'lucide-react';
import { restaurantInfo } from '../constants/menuData';

const Order = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const orderMethods = [
    {
      icon: Store,
      title: 'Sur Place',
      description: 'Venez déguster nos spécialités dans notre restaurant chaleureux',
      badge: 'Recommandé'
    },
    {
      icon: ShoppingBag,
      title: 'À Emporter',
      description: 'Commandez en Click & Collect et venez récupérer votre commande',
      badge: 'Rapide'
    },
    {
      icon: Smartphone,
      title: 'Livraison',
      description: 'Faites-vous livrer via UberEats ou Deliveroo',
      badge: 'Confort'
    }
  ];

  return (
    <section id="order" ref={ref} className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Comment <span className="text-amber-500">Commander ?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choisissez votre mode de commande préféré
          </p>
        </motion.div>

        {/* Order Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {orderMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              >
                {/* Badge */}
                {method.badge && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                    {method.badge}
                  </div>
                )}

                {/* Icon */}
                <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                  <Icon className="w-8 h-8 text-amber-500" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">{method.title}</h3>
                <p className="text-gray-400 leading-relaxed">{method.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-br from-amber-500/10 via-slate-900/50 to-red-900/10 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
            Prêt à commander ?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Commandez maintenant et découvrez pourquoi nous sommes le street-food n°1 à Montpellier
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/50"
              onClick={() => window.open(restaurantInfo.orderLinks.ubereats, '_blank')}
            >
              Commander sur UberEats
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => window.open(restaurantInfo.orderLinks.deliveroo, '_blank')}
            >
              Commander sur Deliveroo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Order;
