import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { menuCategories, menuItems } from '../constants/menuData';

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('naan-burgers');

  return (
    <section id="menu" ref={ref} className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-red-900/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Notre <span className="text-amber-500">Carte</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Des recettes généreuses préparées minute avec des produits frais
          </p>
        </motion.div>

        {/* Tabs Menu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-4 bg-transparent h-auto mb-12">
              {menuCategories.map((category, index) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 data-[state=active]:bg-amber-500 data-[state=active]:text-slate-900 data-[state=active]:border-amber-500 text-white py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 data-[state=active]:shadow-lg data-[state=active]:shadow-amber-500/50"
                >
                  <div className="text-left">
                    <div className="font-bold text-base">{category.label}</div>
                    <div className="text-xs opacity-80 mt-1">{category.description}</div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode="wait">
              {menuCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                    {menuItems[category.id].map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 overflow-hidden group hover:scale-105 hover:shadow-xl hover:shadow-amber-500/10">
                          {/* Image */}
                          <div className="relative h-56 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                            {item.badge && (
                              <Badge className="absolute top-4 right-4 bg-amber-500 text-slate-900 font-bold border-0">
                                {item.badge}
                              </Badge>
                            )}
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                              {item.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-black text-amber-500">
                                {item.price.toFixed(2)}€
                              </span>
                              <Button
                                size="sm"
                                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-full transition-all duration-300 hover:scale-110"
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
