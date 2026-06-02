import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Target, Eye, ShieldCheck, Sparkles } from 'lucide-react';

interface MissionVisionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MissionVisionModal({ isOpen, onClose }: MissionVisionModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-dark cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="bg-white rounded-[2.5rem] w-full max-w-2xl shadow-2xl overflow-hidden relative z-50 border border-rose-100 flex flex-col p-8 md:p-10"
          >
            {/* Close icon */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 p-2 rounded-full hover:bg-rose-50 text-neutral-muted transition-colors cursor-pointer z-25"
              aria-label="Cerrar modal"
            >
              <X size={18} />
            </button>

            {/* Title decor block */}
            <div className="mb-6">
              <span className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                <Sparkles size={12} />
                <span>Nuestros Fundamentos</span>
              </span>
              <h3 className="font-display font-black text-3xl text-neutral-dark mt-1">
                Misión y Visión
              </h3>
              <p className="text-stone-500 text-xs mt-1">
                Conoce la pasión, el compromiso y el norte que guían cada lote artesanal en Helados Hellen.
              </p>
            </div>

            {/* Split Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch my-2">
              
              {/* Mission Card */}
              <div className="bg-rose-50/30 border border-rose-100/40 rounded-3xl p-6 flex flex-col hover:bg-rose-50/50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Target size={24} />
                </div>
                <h4 className="font-display font-bold text-neutral-dark text-lg mb-2">Nuestra Misión</h4>
                <p className="text-stone-600 text-xs leading-relaxed flex-grow">
                  Creamos helados artesanales de la más alta calidad, elaborados diariamente con ingredientes locales, frescos y 100% naturales en Cartagena. Nos dedicamos a entregar felicidad cremosa y consistente directo a la puerta de tu hogar, garantizando la perfecta cadena de frío y un servicio excepcional que une a las familias del Caribe.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-emerald-50/10 border border-emerald-100/40 rounded-3xl p-6 flex flex-col hover:bg-emerald-50/20 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  <Eye size={24} />
                </div>
                <h4 className="font-display font-bold text-neutral-dark text-lg mb-2">Nuestra Visión</h4>
                <p className="text-stone-600 text-xs leading-relaxed flex-grow">
                  Para el año 2030, buscamos ser la heladería artesanal a domicilio líder y más querida de Cartagena, reconocida por la innovación constante en sabores de nuestra región caribeña, la sostenibilidad de nuestros procesos productivos y la excelencia inigualable de nuestra logística de entrega express refrigerada.
                </p>
              </div>

            </div>

            {/* Quality Guarantee indicator */}
            <div className="mt-6 p-4 rounded-2xl bg-neutral-light border border-stone-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-secondary flex items-center justify-center shrink-0">
                <ShieldCheck size={16} />
              </div>
              <div className="text-left text-[11px] text-stone-500">
                <p className="font-bold text-neutral-dark">Compromiso de frescura Hellen</p>
                <p>Ingredientes naturales, sin grasas trans, elaborados bajo estrictos estándares artesanales.</p>
              </div>
            </div>

            {/* Bottom action bar */}
            <div className="mt-8 pt-4 border-t border-stone-100 flex justify-end">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-neutral-dark hover:bg-neutral-850 text-white font-sans font-bold text-xs rounded-full shadow transition-all hover:shadow-md cursor-pointer"
              >
                Cerrar Ventana
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
