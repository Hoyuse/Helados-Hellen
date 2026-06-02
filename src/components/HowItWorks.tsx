import { motion } from 'motion/react';
import { IceCream, MapPin, Home } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Elige tus tarros',
      description: 'Selecciona tus sabores favoritos en presentaciones de 500ml o 1 Litro.',
      icon: IceCream,
      bgClass: 'bg-rose-100 text-primary',
    },
    {
      number: '2',
      title: 'Ingresa tu dirección',
      description: 'Confirma tu zona de cobertura para asegurar la entrega perfecta.',
      icon: MapPin,
      bgClass: 'bg-emerald-100 text-secondary',
    },
    {
      number: '3',
      title: 'Recibe y disfruta',
      description: 'Llegamos directo a tu puerta con la textura ideal para consumir.',
      icon: StarIcon, /* Custom inline or component standard */
      bgClass: 'bg-amber-100 text-amber-800',
    }
  ];

  return (
    <section className="py-20 px-4 md:px-10 bg-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-4xl text-neutral-dark font-extrabold mb-4"
          >
            ¿Cómo funciona?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-on-surface-variant"
          >
            Tu antojo en tres simples pasos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative mt-10">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-dashed border-t-2 border-dashed border-rose-200 z-0"></div>

          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center gap-4 relative z-10 group"
          >
            <div className="w-24 h-24 rounded-full bg-rose-50 border-2 border-rose-100 flex items-center justify-center text-primary mb-2 shadow-md group-hover:scale-105 transition-transform duration-300">
              <IceCream size={36} className="stroke-[1.5]" />
            </div>
            <h3 className="font-display font-bold text-neutral-dark text-lg md:text-xl">
              1. Elige tus tarros
            </h3>
            <p className="text-neutral-600 text-sm md:text-base max-w-xs leading-relaxed">
              Selecciona tus sabores favoritos en presentaciones de 500ml o 1 Litro.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center gap-4 relative z-10 group"
          >
            <div className="w-24 h-24 rounded-full bg-emerald-50 border-2 border-emerald-100 flex items-center justify-center text-secondary mb-2 shadow-md group-hover:scale-105 transition-transform duration-300">
              <MapPin size={36} className="stroke-[1.5]" />
            </div>
            <h3 className="font-display font-bold text-neutral-dark text-lg md:text-xl">
              2. Ingresa tu dirección
            </h3>
            <p className="text-neutral-600 text-sm md:text-base max-w-xs leading-relaxed">
              Confirma tu zona de cobertura para asegurar la entrega perfecta de tu pack helado.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center gap-4 relative z-10 group"
          >
            <div className="w-24 h-24 rounded-full bg-amber-50 border-2 border-amber-100 flex items-center justify-center text-amber-700 mb-2 shadow-md group-hover:scale-105 transition-transform duration-300">
              <Home size={36} className="stroke-[1.5]" />
            </div>
            <h3 className="font-display font-bold text-neutral-dark text-lg md:text-xl">
              3. Recibe y disfruta
            </h3>
            <p className="text-neutral-600 text-sm md:text-base max-w-xs leading-relaxed">
              Llegamos directo a tu puerta con la textura ideal para consumir inmediatamente.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Simple fallback helper component since standard SVG are required
function StarIcon(props: any) {
  return <Home {...props} />;
}
