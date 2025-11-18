import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, AlertCircle, Phone } from 'lucide-react';
import { restaurantInfo } from '../constants/menuData';

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="location" ref={ref} className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-900/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Où Nous <span className="text-amber-500">Trouver ?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Critical Warning Card */}
            <div className="bg-red-900/20 border-2 border-red-500 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    ⚠️ Attention - Nouvelle Adresse !
                  </h3>
                  <p className="text-red-200 leading-relaxed">
                    Nous ne sommes plus à la <span className="font-bold line-through">{restaurantInfo.oldAddress}</span>. Notre nouveau restaurant se trouve désormais à la <span className="font-bold text-amber-500">Gare Saint-Roch</span>. Ne vous trompez pas d'adresse !
                  </p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Notre Adresse</h3>
                  <p className="text-3xl font-black text-amber-500 mb-2">
                    {restaurantInfo.address}
                  </p>
                  <p className="text-xl text-gray-300">
                    {restaurantInfo.postalCode} {restaurantInfo.city}
                  </p>
                  <p className="text-gray-400 mt-2">
                    {restaurantInfo.neighborhood}
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=4+Rue+Henri+René+34000+Montpellier"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 text-center"
              >
                Ouvrir dans Google Maps
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Horaires</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Lundi - Vendredi</p>
                      <p className="text-xl text-white font-semibold">{restaurantInfo.hours.weekdays}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Samedi - Dimanche</p>
                      <p className="text-xl text-white font-semibold">{restaurantInfo.hours.weekend}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <p className="text-amber-500 font-bold text-lg">Ouvert 7j/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Contact</h3>
                  <p className="text-xl text-gray-300">{restaurantInfo.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
              {/* Map Simulation */}
              <div className="relative h-[600px] bg-slate-800">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.1234567890!2d3.876944!3d43.604652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM2JzE2LjciTiAzwrA1Mic0OS4yIkU!5e0!3m2!1sen!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale contrast-125"
                />
                {/* Map Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/95 backdrop-blur-md border border-amber-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0" />
                    <div>
                      <p className="text-white font-bold">{restaurantInfo.address}</p>
                      <p className="text-gray-400 text-sm">{restaurantInfo.neighborhood}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
