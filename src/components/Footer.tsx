import { Instagram, Smartphone, Clock, Award } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rose-50/20 border-t border-rose-100/40 relative overflow-hidden">
      
      {/* Decorative ice cream background blobs for consistency */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-radial-gradient from-rose-100/25 to-transparent rounded-full pointer-events-none blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-rose-100/50 pb-10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <h2 className="font-display text-2xl font-black text-primary">
              Helados Hellen
            </h2>
            <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed">
              La experiencia definitiva de heladería artesanal en Cartagena. Elaboramos frescura diaria en lotes pequeños directo a tu domicilio. Pide por WhatsApp al <strong>+57 301 2436908</strong>.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-stone-500 text-xs">
              <Award size={14} className="text-[#2f6a3f]" />
              <span>Garantía de Sabor Helados Hellen</span>
            </div>
          </div>

          {/* Timing details list */}
          <div className="md:col-span-4 flex items-center justify-center gap-3 bg-white p-4 rounded-2xl border border-rose-100/40 max-w-sm mx-auto md:mr-0 w-full">
            <Clock className="text-primary shrink-0" size={20} />
            <div className="text-left text-xs">
              <p className="font-sans font-extrabold text-neutral-dark">Horarios de Domicilio</p>
              <p className="text-stone-500 mt-0.5">Lunes a Domingo: 11:30 AM — 9:30 PM</p>
              <p className="text-[10px] text-emerald-600 font-semibold">¡Abierto Hoy!</p>
            </div>
          </div>

          {/* Social links drawer */}
          <div className="md:col-span-3 flex justify-center md:justify-end gap-3">
            <a 
              href="https://wa.me/573012436908" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white hover:bg-rose-50 border border-rose-100/20 shadow-xs hover:shadow text-primary transition-all cursor-pointer"
              aria-label="Pedidos WhatsApp"
            >
              <Smartphone size={16} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-white hover:bg-rose-50 border border-rose-100/20 shadow-xs hover:shadow text-[#aa2e5e] transition-all cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        {/* Bottom row copyrights and links */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-xs text-stone-500 font-medium font-sans">
            © {currentYear} Helados Hellen. Creado para amantes del buen helado. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-xs text-stone-600 font-medium">
            <a href="https://wa.me/573012436908" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-bold text-primary">WhatsApp: +57 301 2436908</a>
            <a href="#cobertura" className="hover:text-primary transition-colors">Cobertura Express</a>
            <a href="https://wa.me/573012436908" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Contacto Directo</a>
          </div>
        </div>
        <div className="mt-6 text-[11px] text-stone-500 leading-relaxed text-center md:text-left">
          <a href="https://helados-hellen.vercel.app/" className="font-semibold text-primary hover:underline" target="_blank" rel="noreferrer">Helados Hellen</a> by <a href="https://github.com/Hoyuse" className="font-semibold text-primary hover:underline" target="_blank" rel="noreferrer">Hellen Durango</a> is marked <a href="https://creativecommons.org/publicdomain/zero/1.0/" className="font-semibold text-primary hover:underline" target="_blank" rel="noreferrer">CC0 1.0</a>
          <span className="inline-flex items-center gap-2 ml-2">
            <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="CC" style={{ maxWidth: '1em', maxHeight: '1em' }} />
            <img src="https://mirrors.creativecommons.org/presskit/icons/zero.svg" alt="Zero" style={{ maxWidth: '1em', maxHeight: '1em' }} />
          </span>
        </div>
      </div>
    </footer>
  );
}
