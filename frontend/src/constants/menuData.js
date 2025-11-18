// Menu data for Brother's & Food restaurant

export const menuCategories = [
  {
    id: 'naan-burgers',
    label: 'Les Naan Burgers',
    description: 'Pain Naan cuit au four Tandoor minute'
  },
  {
    id: 'buns-gratines',
    label: 'Nos Bun\'s Gratinés',
    description: 'Spécialités d\'hiver gratinées au four'
  },
  {
    id: 'french-tacos',
    label: 'French Tacos',
    description: 'Sauce fromagère maison & gratiné inclus'
  },
  {
    id: 'finger-food',
    label: 'Finger Food',
    description: 'Pour accompagner votre repas'
  }
];

export const menuItems = {
  'naan-burgers': [
    {
      id: 1,
      name: 'Le Classic Naan Burger',
      description: 'Steak haché frais 180g, cheddar affiné, salade, tomates, oignons caramélisés, sauce maison',
      price: 11.90,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
      badge: 'Best-Seller'
    },
    {
      id: 2,
      name: 'Le Chicken Naan',
      description: 'Poulet mariné aux épices tandoori, cheddar, salade, tomates, sauce curry-coco',
      price: 11.50,
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d',
      badge: null
    },
    {
      id: 3,
      name: 'Le Végétarien Naan',
      description: 'Galette de légumes épicée, fromage paneer, salade, houmous maison, crudités',
      price: 10.90,
      image: 'https://images.unsplash.com/photo-1697155406014-04dc649b0953',
      badge: 'Végétarien'
    }
  ],
  'buns-gratines': [
    {
      id: 4,
      name: 'Le Montagnard',
      description: 'Raclette généreuse, lardons fumés, galette de pommes de terre, oignons fondants, gratiné au four',
      price: 12.90,
      image: 'https://images.unsplash.com/photo-1655017976621-e14398d85baa',
      badge: 'Spécialité Gratinée'
    },
    {
      id: 5,
      name: 'Le Suisse',
      description: 'Emmental et gruyère fondus, champignons de Paris poêlés, crème fraîche, gratiné à la perfection',
      price: 12.50,
      image: 'https://images.unsplash.com/photo-1628625768225-51e287465191',
      badge: 'Spécialité Gratinée'
    },
    {
      id: 6,
      name: 'Le Savoyard',
      description: 'Reblochon AOP, pommes de terre, jambon cru, crème épaisse, gratiné comme en montagne',
      price: 13.50,
      image: 'https://images.pexels.com/photos/17584225/pexels-photo-17584225.jpeg',
      badge: 'Spécialité Gratinée'
    }
  ],
  'french-tacos': [
    {
      id: 7,
      name: 'Tacos Poulet',
      description: 'Poulet mariné, frites maison, sauce fromagère signature, grillé à la plancha',
      price: 9.90,
      image: 'https://images.unsplash.com/photo-1615557960916-5f4791effe9d',
      badge: null
    },
    {
      id: 8,
      name: 'Tacos Viande Hachée',
      description: 'Viande hachée fraîche, frites, cheddar fondu, sauce fromagère maison, grillé',
      price: 9.90,
      image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg',
      badge: null
    },
    {
      id: 9,
      name: 'Tacos Mixte XL',
      description: 'Poulet + viande hachée, double frites, triple fromage, sauce fromagère XXL',
      price: 12.90,
      image: 'https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg',
      badge: 'XL'
    }
  ],
  'finger-food': [
    {
      id: 10,
      name: 'Samosas Poulet (4 pcs)',
      description: 'Chaussons croustillants farcis au poulet épicé, servis avec chutney de menthe',
      price: 5.50,
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
      badge: null
    },
    {
      id: 11,
      name: 'Naans Cheese (3 pcs)',
      description: 'Mini naans au fromage fondant, parfaits pour partager',
      price: 4.90,
      image: 'https://images.unsplash.com/photo-1655979284091-eea0e93405ee',
      badge: null
    },
    {
      id: 12,
      name: 'Onion Rings',
      description: 'Rondelles d\'oignons panées maison, croustillantes et dorées',
      price: 4.50,
      image: 'https://images.unsplash.com/photo-1674422753234-f2e1ce087e3a',
      badge: null
    },
    {
      id: 13,
      name: 'Frites Maison XXL',
      description: 'Frites fraîches coupées minute, portion généreuse',
      price: 4.00,
      image: 'https://images.unsplash.com/photo-1659292482339-4fe111483d1b',
      badge: null
    }
  ]
};

export const restaurantInfo = {
  name: 'Brother\'s & Food',
  tagline: 'L\'Alliance du Naan Indien et du Burger Gourmet',
  description: 'Viande fraîche, pain naan cuit au four Tandoor minute, et recettes généreuses. Le street-food n°1 à Montpellier.',
  address: '4 Rue Henri René',
  postalCode: '34000',
  city: 'Montpellier',
  neighborhood: 'Quartier Gare Saint-Roch',
  oldAddress: 'Place du Nombre d\'Or',
  phone: '04 XX XX XX XX',
  email: 'contact@brothersandfood.fr',
  rating: 4.7,
  reviewCount: 250,
  hours: {
    weekdays: '11h30 - 14h30 • 18h00 - 23h00',
    weekend: '11h30 - 23h00'
  },
  socialMedia: {
    instagram: 'https://instagram.com/brothersandfood',
    facebook: 'https://facebook.com/brothersandfood'
  },
  orderLinks: {
    ubereats: 'https://ubereats.com',
    deliveroo: 'https://deliveroo.fr'
  }
};
