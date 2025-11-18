import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { restaurantInfo } from '../constants/menuData';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black text-white mb-4">
              Brother's <span className="text-amber-500">&</span> Food
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              {restaurantInfo.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href={restaurantInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-slate-900 transition-colors" />
              </a>
              <a
                href={restaurantInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-slate-900 transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">
                    {restaurantInfo.address}<br />
                    {restaurantInfo.postalCode} {restaurantInfo.city}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm">{restaurantInfo.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm">{restaurantInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-4">Horaires</h4>
            <div className="space-y-2">
              <div>
                <p className="text-gray-500 text-xs">Lun - Ven</p>
                <p className="text-gray-400 text-sm">{restaurantInfo.hours.weekdays}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Sam - Dim</p>
                <p className="text-gray-400 text-sm">{restaurantInfo.hours.weekend}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Brother's & Food. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <button className="text-gray-500 hover:text-amber-500 text-sm transition-colors">
              Mentions Légales
            </button>
            <button className="text-gray-500 hover:text-amber-500 text-sm transition-colors">
              Politique de Confidentialité
            </button>
          </div>
        </div>

        {/* Service Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            🍴 Sur Place • 👜 À Emporter • 🚴 Livraison (UberEats / Deliveroo)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
