import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WelcomeSection from './components/WelcomeSection';
import HowItWorks from './components/HowItWorks';
import Flavors from './components/Flavors';
import CartDrawer from './components/CartDrawer';
import CoverageMap from './components/CoverageMap';
import CheckoutModal from './components/CheckoutModal';
import MissionVisionModal from './components/MissionVisionModal';
import ToastContainer, { ToastType } from './components/Toast';
import Footer from './components/Footer';
import { Product, CartItem } from './types';
import { Sparkles, Bike, Map } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('hellen-cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastType[]>([]);

  useEffect(() => {
    localStorage.setItem('hellen-cart', JSON.stringify(cart));
  }, [cart]);

  const addToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    
    // Auto clear after 3s
    setTimeout(() => {
      removeToast(id);
    }, 3200);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const match = prev.find((item) => item.product.id === product.id);
      if (match) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    addToast(`Tarro de "${product.name}" agregado a tu pedido 🛵`, 'success');
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const nextQuantity = item.quantity + delta;
            return { ...item, quantity: nextQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (productId: string) => {
    const item = cart.find((i) => i.product.id === productId);
    setCart((prev) => prev.filter((i) => i.product.id !== productId));
    if (item) {
      addToast(`Tarro de "${item.product.name}" removido de tu carrito.`, 'info');
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleScrollToCoverage = () => {
    const element = document.getElementById('cobertura');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-rose-200 selection:text-primary">
      {/* Dynamic Top Announcement Banner */}
      <div className="bg-primary text-white text-xs py-2 px-4 text-center font-sans font-bold tracking-wide flex items-center justify-center gap-2 relative z-30 select-none">
        <Sparkles size={14} className="animate-spin text-amber-200" />
        <span>¡Envío Express Gratis en todos tus pedidos mayores a $35.000! 🛵 Con cadena de frío resguardada.</span>
      </div>

      {/* Main App Navigation and Headers */}
      <Header
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onCoverageClick={handleScrollToCoverage}
        onMissionClick={() => setIsMissionOpen(true)}
      />

      <main>
        {/* Intuitively designed view panels */}
        <Hero />
        <WelcomeSection />
        
        <HowItWorks />
        
        <Flavors onAddToCart={handleAddToCart} />

        {/* Dynamic Coverage Sticky Panel strip based on layout instructions */}
        <section className="w-full bg-secondary-container/95 py-10 px-6 md:px-10 text-center shadow-inner relative overflow-hidden select-none border-y border-emerald-100">
          <div className="absolute inset-0 opacity-15 pointer-events-none" 
            style={{
              backgroundImage: 'radial-gradient(#00210b 2px, transparent 2px)',
              backgroundSize: '24px 24px'
            }} 
          />
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-5">
            <span className="p-3 bg-[#44a362]/10 rounded-full text-secondary">
              <Bike size={26} className="animate-bounce" />
            </span>
            <div className="text-center md:text-left">
              <h3 className="font-display font-extrabold text-lg text-emerald-900 leading-tight">
                Servicio exclusivo a domicilio refrigerado
              </h3>
              <p className="text-emerald-800 text-xs md:text-sm mt-1 max-w-xl">
                ¿Quieres saber si llegamos rápido a tu barrio? Haz clic en Ver Mapa, escribe tu dirección y compruébalo.
              </p>
            </div>
            <button
              onClick={handleScrollToCoverage}
              className="px-8 py-3 bg-neutral-dark hover:bg-neutral-800 text-white font-sans font-bold text-xs rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-2 ml-0 md:ml-4 group"
            >
              <Map size={14} className="group-hover:rotate-6 transition-transform" />
              <span>Ver Mapa</span>
            </button>
          </div>
        </section>

        {/* Coverage Verification Map / Reviews section */}
        <CoverageMap />
      </main>

      {/* Footer info panels */}
      <Footer />

      {/* Interactive drawers and Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onClearCart={handleClearCart}
        onAddToast={addToast}
      />

      <MissionVisionModal
        isOpen={isMissionOpen}
        onClose={() => setIsMissionOpen(false)}
      />

      {/* Universal notifications stack */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
