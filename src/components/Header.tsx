import { ShoppingCart, Truck, Menu } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onCoverageClick: () => void;
  onMissionClick: () => void;
}

export default function Header({ cartCount, onCartClick, onCoverageClick, onMissionClick }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white/90 backdrop-blur-md w-full top-0 sticky border-b border-rose-100 shadow-sm z-40 transition-transform">
      <div className="flex justify-between items-center w-full px-4 md:px-10 py-4 max-w-7xl mx-auto">
        {/* Brand */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-2xl font-extrabold text-primary cursor-pointer hover:scale-102 transition-transform tracking-tight select-none"
        >
          Helados Hellen
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-on-surface-variant">
          <button 
            onClick={() => scrollToSection('sabores')}
            className="hover:text-primary transition-colors cursor-pointer border-b-2 border-transparent hover:border-primary py-1"
          >
            Sabores
          </button>
          <button 
            onClick={() => scrollToSection('cobertura')}
            className="hover:text-primary transition-colors cursor-pointer border-b-2 border-transparent hover:border-primary py-1"
          >
            Cobertura
          </button>
          <button 
            onClick={onMissionClick}
            className="hover:text-primary transition-colors cursor-pointer border-b-2 border-transparent hover:border-primary py-1"
          >
            Misión y Visión
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="hover:text-primary transition-colors cursor-pointer border-b-2 border-transparent hover:border-primary py-1"
          >
            Contacto
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 text-primary">
          {/* Cart Icon */}
          <button 
            onClick={onCartClick}
            aria-label="Carrito de Compras"
            className="p-3 rounded-full hover:bg-rose-50 transition-colors relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <ShoppingCart size={22} className="group-hover:scale-105 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Delivery quick checker */}
          <button 
            onClick={onCoverageClick}
            aria-label="Información de Envío"
            className="p-3 rounded-full hover:bg-emerald-50 text-secondary transition-colors relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary/20"
          >
            <Truck size={22} className="group-hover:scale-105 transition-transform" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white"></span>
          </button>

          {/* Mobile indicator for navigation */}
          <button 
            onClick={() => scrollToSection('sabores')}
            aria-label="Ver Sabores"
            className="md:hidden p-3 rounded-full hover:bg-rose-50 transition-colors cursor-pointer"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
