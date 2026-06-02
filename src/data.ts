import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'vanilla-francesa',
    name: 'Vainilla Francesa',
    price: 12000,
    size: 'Tarro 500ml',
    description: 'Clásica y cremosa, elaborada con vainas de vainilla de Madagascar reales.',
    category: 'Clásicos',
    bleedColor: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 40%, #ffedf0 100%)',
    tagColor: '#ffd9e1',
    textColor: '#24181b',
    label: 'Vainilla\nFrancesa',
    info: 'Vainas de Madagascar',
    isFavorite: false
  },
  {
    id: 'choco-brownie',
    name: 'Choco-Brownie',
    price: 22000,
    size: 'Tarro 1 Litro',
    description: 'Chocolate belga intenso con trozos abundantes de brownie casero.',
    category: 'Premium',
    bleedColor: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 40%, #f3dde1 100%)',
    tagColor: '#564146',
    textColor: '#ffffff',
    label: 'Choco\nBrownie',
    info: 'Chocolate Belga 70%',
    isFavorite: true
  },
  {
    id: 'fresa-natural',
    name: 'Fresa Natural',
    price: 12000,
    size: 'Tarro 500ml',
    description: 'Refrescante base de crema con puré de fresas frescas de temporada.',
    category: 'Clásicos',
    bleedColor: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 40%, #ffd9e1 100%)',
    tagColor: '#f1a1b4',
    textColor: '#24181b',
    label: 'Fresa\nNatural',
    info: 'Fresas Orgánicas',
    isFavorite: false
  },
  {
    id: 'dulce-leche',
    name: 'Dulce de Leche',
    price: 20000,
    size: 'Tarro 1 Litro',
    description: 'Elaborado con dulce de leche artesanal y un toque de sal marina.',
    category: 'Premium',
    bleedColor: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 40%, #e9e3c6 100%)',
    tagColor: '#d4a373',
    textColor: '#ffffff',
    label: 'Dulce de\nLeche',
    info: 'Artesanal con Sal de Mar',
    isFavorite: false
  },
  {
    id: 'pistacho-real',
    name: 'Pistacho Real',
    price: 15000,
    size: 'Tarro 500ml',
    description: 'Pasta pura de pistachos tostados importados de Italia. Sabor premium.',
    category: 'Premium',
    bleedColor: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 40%, #b2f2bb 100%)',
    tagColor: '#a1e4ac',
    textColor: '#24181b',
    label: 'Pistacho\nReal',
    info: 'Importado de Italia',
    isFavorite: false
  },
  {
    id: 'menta-granizada',
    name: 'Menta Granizada',
    price: 12000,
    size: 'Tarro 500ml',
    description: 'Fresco sabor a menta natural con finas láminas de chocolate oscuro crujiente.',
    category: 'Clásicos',
    bleedColor: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 40%, #e1fae5 100%)',
    tagColor: '#d0f5d7',
    textColor: '#24181b',
    label: 'Menta\nGranizada',
    info: 'Con Chocolate Amargo',
    isFavorite: false
  }
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    user: 'Camila Torres',
    rating: 5,
    comment: '¡El helado de Choco-Brownie es de otro planeta! La textura es súper cremosa y llegó en perfectas condiciones gracias al empaque especial.',
    date: 'Hace 2 días'
  },
  {
    id: 'test-2',
    user: 'Andrés Mendoza',
    rating: 5,
    comment: 'Me encanta que usen ingredientes de verdad. El Pistacho Real sabe a pistacho italiano auténtico, no a esencia artificial. 10/10.',
    date: 'Hace 1 semana'
  },
  {
    id: 'test-3',
    user: 'Valeria Rojas',
    rating: 5,
    comment: 'Excelente servicio a domicilio. El envío es rápido y los tarros llegan completamente congelados. ¡Mi heladería elegida de ahora en adelante!',
    date: 'Hace 3 días'
  }
];

export const HOODS_COVERAGE = [
  { name: 'El Cabrero', status: 'Súper Rápido' },
  { name: 'Castillogrande', status: 'Súper Rápido' },
  { name: 'Bocagrande', status: 'Súper Rápido' },
  { name: 'Manga', status: 'Súper Rápido' },
  { name: 'Pie de la Popa', status: 'Estándar' },
  { name: 'Crespo', status: 'Estándar' },
  { name: 'Marbella', status: 'Súper Rápido' },
  { name: 'Centro Histórico', status: 'Súper Rápido' },
  { name: 'San Diego', status: 'Súper Rápido' }
];
