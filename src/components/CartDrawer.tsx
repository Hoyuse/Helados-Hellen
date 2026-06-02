import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, ShoppingBag, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartDrawerProps) {
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const isFreeDelivery = subtotal >= 35000;
  const deliveryFee = subtotal === 0 ? 0 : isFreeDelivery ? 0 : 5000;
  const total = subtotal + deliveryFee;

  const freeDeliveryThreshold = 35000;
  const remainingForFree = Math.max(0, freeDeliveryThreshold - subtotal);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-dark z-50 cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[440px] bg-white z-50 shadow-2xl flex flex-col border-l border-rose-100"
          >
            {/* Header */}
            <div className="p-6 border-b border-rose-50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary">
                <ShoppingBag size={20} />
                <h3 className="font-display font-extrabold text-neutral-dark text-lg">Tu Pedido</h3>
                <span className="text-xs bg-rose-100 text-primary-hover font-bold px-2 py-0.5 rounded-full">
                  {cart.reduce((total, i) => total + i.quantity, 0)}
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="p-2 rounded-full hover:bg-rose-50 text-neutral-muted transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items Area */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-primary mb-4 opacity-75">
                    <ShoppingBag size={36} className="stroke-[1.5]" />
                  </div>
                  <h4 className="font-display font-bold text-neutral-dark text-lg mb-1">Tu carrito está vacío</h4>
                  <p className="text-stone-500 text-sm max-w-xs mb-6">
                    Añade deliciosos tarros de helado artesanal congelados y cremosos para comenzar tu pedido.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      const element = document.getElementById('sabores');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold text-sm rounded-full shadow-md cursor-pointer transition-colors"
                  >
                    Ver Sabores
                  </button>
                </div>
              ) : (
                <>
                  {/* Free Delivery Bar Progress */}
                  <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-100/50">
                    {isFreeDelivery ? (
                      <div className="flex items-center gap-2 text-secondary text-sm font-bold">
                        <Sparkles size={16} className="animate-spin text-emerald-500" />
                        <span>¡Genial! Tienes Envío Gratis para este pedido.</span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <p className="text-xs text-stone-600 font-medium">
                          Agrega <span className="font-bold text-primary">${remainingForFree.toLocaleString('es-CO')}</span> más para obtener <span className="font-bold text-secondary">Envío Express Gratis 🛵</span>
                        </p>
                        <div className="w-full bg-stone-200/60 h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-primary h-full rounded-full transition-all duration-300" 
                            style={{ width: `${Math.min(100, (subtotal / freeDeliveryThreshold) * 100)}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Items List */}
                  <div className="space-y-4 pt-2">
                    {cart.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex gap-4 p-3 bg-rose-50/20 hover:bg-rose-50/40 border border-rose-100/30 rounded-2xl transition-all"
                      >
                        {/* Packaging Sticker Mockup Mini representation */}
                        <div 
                          className="w-14 h-16 rounded-lg shadow-sm border border-white shrink-0 flex items-center justify-center p-1 select-none"
                          style={{ background: item.product.bleedColor }}
                        >
                          <div 
                            className="w-full h-full rounded-md flex flex-col items-center justify-center text-[6px] font-bold leading-tight uppercase font-display"
                            style={{ backgroundColor: item.product.tagColor, color: item.product.textColor }}
                          >
                            <span>{item.product.name.split(' ')[0]}</span>
                          </div>
                        </div>

                        {/* Text and Actions */}
                        <div className="flex-grow min-w-0">
                          <div className="flex justify-between items-start">
                            <h4 className="font-display font-black text-sm text-neutral-dark truncate pr-2">
                              {item.product.name}
                            </h4>
                            <span className="font-display font-extrabold text-sm text-primary">
                              ${(item.product.price * item.quantity).toLocaleString('es-CO')}
                            </span>
                          </div>
                          <p className="text-[11px] text-stone-500 font-bold mb-2">
                            {item.product.size}
                          </p>

                          {/* Controls Row */}
                          <div className="flex justify-between items-center">
                            <div className="flex items-center bg-white border border-rose-100 rounded-full py-0.5 px-2 font-mono text-sm shadow-sm gap-2">
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, -1)}
                                className="p-1 text-stone-400 hover:text-primary transition-colors cursor-pointer"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="font-bold text-neutral-dark min-w-4 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, 1)}
                                className="p-1 text-stone-400 hover:text-primary transition-colors cursor-pointer"
                              >
                                <Plus size={12} />
                              </button>
                            </div>

                            <button
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-stone-400 hover:text-rose-500 p-1.5 rounded-full hover:bg-rose-100/30 transition-all cursor-pointer"
                              aria-label="Eliminar item"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Footer Summary (Sticky bottom) */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-rose-50 bg-stone-50/50 space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-stone-500 font-medium">
                    <span>Subtotal:</span>
                    <span>${subtotal.toLocaleString('es-CO')}</span>
                  </div>
                  <div className="flex justify-between text-stone-500 font-medium">
                    <span>Domicilio:</span>
                    {isFreeDelivery ? (
                      <span className="text-secondary font-bold">¡Gratis!</span>
                    ) : (
                      <span>${deliveryFee.toLocaleString('es-CO')}</span>
                    )}
                  </div>
                  <div className="pt-2 border-t border-dashed border-rose-200/80 flex justify-between text-neutral-dark font-display font-extrabold text-base">
                    <span>Total Estimado:</span>
                    <span className="text-primary">${total.toLocaleString('es-CO')}</span>
                  </div>
                </div>

                <button
                  onClick={onCheckout}
                  className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-sans font-bold text-sm rounded-full shadow-lg transition-colors flex justify-center items-center gap-2 cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary/20"
                >
                  Continuar con el Pedido 🛵
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
