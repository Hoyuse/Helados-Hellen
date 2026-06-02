import { motion } from 'motion/react';
import { Leaf, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  const scrollToFlavors = () => {
    const el = document.getElementById('sabores');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-rose-50/70 py-16 md:py-24 px-4 md:px-10 flex items-center justify-center min-h-[660px]">
      {/* Decorative Blur Blobs */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 75% 25%, #ffd9e1 0%, transparent 60%), 
            radial-gradient(circle at 20% 75%, #e9e3c6 0%, transparent 50%)
          `
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-rose-100/80">
            <Leaf size={16} className="text-secondary fill-secondary" />
            <span className="font-sans font-bold text-xs tracking-wide text-on-surface-variant uppercase">100% Artesanal</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-neutral-dark">
            El mejor helado artesanal, <br />
            <span className="text-primary mt-1 inline-block">del tarro a tu casa</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Disfruta de texturas cremosas y sabores intensos creados con ingredientes seleccionados. Pedidos fáciles y entrega directa a tu puerta.
          </p>

          {/* Action */}
          <div className="mt-4 w-full sm:w-auto">
            <button 
              onClick={scrollToFlavors}
              className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-center cursor-pointer delicious-button-glow"
            >
              Pedir a Domicilio
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Right Side Image Context */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[480px] aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50">
            <img 
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi0CibzModviSI9u9qlA_ypVKU-SNqd4g-9Q5NNzzSD5ktgZFS-DPvtwzT-3x5nz4CSosccLGRKGQYdzzrJx5E_00wkL0TfWPDR57Xmy6LGpB1Y6ZLP8wvoUNS1dkZwHtbx7hhU_k2kSWkUQvm_lHiuHdHMJXkycBuUAFMDNJXlYH0MEvrk60o_3kEnibscya8-KTcP_JQeQ3Mj4V0f1aMihlHMdRNqN2FhYW3fqSaDmBLt4O2u0QvjHh7z7R06OoXa56n9QfO3N7l" 
              alt="Tarros de helado artesanal gourmet de Helados Hellen" 
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
            {/* Top-Right Premium Star Badge */}
            <div className="absolute top-6 right-6 bg-white text-primary text-sm font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform rotate-3 select-none hover:rotate-0 transition-transform cursor-default">
              <Star size={16} className="text-secondary fill-secondary" />
              <span>Premium</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
