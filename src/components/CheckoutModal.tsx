import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, FileText, Phone, MapPin, Copy, MessageCircle, Clock, Gift } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onClearCart: () => void;
  onAddToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

type StepType = 'form' | 'processing' | 'success';

export default function CheckoutModal({
  isOpen,
  onClose,
  cart,
  onClearCart,
  onAddToast
}: CheckoutModalProps) {
  const [step, setStep] = useState<StepType>('form');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const paymentMethod = 'Nequi';

  // Timer countdown for simulated delivery
  const [secondsLeft, setSecondsLeft] = useState(1500); // 25 Min index
  const [progressStatusIndex, setProgressStatusIndex] = useState(0);

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const total = subtotal >= 35000 ? subtotal : subtotal + 5000;

  const progressUpdates = [
    '🛵 Seleccionando tus sabores y extrayendo tus tarros del ultra-congelador...',
    '🍨 Preparando embalaje aislante para resguardar la cremosidad...',
    '🛵 Repartidor asignado! El pedido está listo para salir...',
    '🏘️ En camino a tu dirección con la cadena de frío asegurada...',
    '🎉 Repartidor cerca de tu zona!'
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === 'success' && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => (prev - 1 > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, secondsLeft]);

  // Adjust status message according to timer
  useEffect(() => {
    if (step === 'success') {
      if (secondsLeft > 1200) setProgressStatusIndex(0);
      else if (secondsLeft > 900) setProgressStatusIndex(1);
      else if (secondsLeft > 600) setProgressStatusIndex(2);
      else if (secondsLeft > 300) setProgressStatusIndex(3);
      else setProgressStatusIndex(4);
    }
  }, [secondsLeft, step]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !address.trim() || !phone.trim()) {
      onAddToast('Por favor, completa los campos requeridos.', 'error');
      return;
    }

    setStep('processing');
    setTimeout(() => {
      setStep('success');
      onAddToast('🍨¡Pedido confirmado! Tu helado está en camino.', 'success');
    }, 2000);
  };

  const getFormattedTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  // Structured message for simulated WhatsApp dispatch
  const getWhatsAppMessage = () => {
    const itemsText = cart
      .map((item) => `• ${item.quantity}x ${item.product.name} (${item.product.size}) - $${(item.product.price * item.quantity).toLocaleString('es-CO')}`)
      .join('%0A');
    
    return `*NUEVO PEDIDO - HELADOS HELLEN*%0A%0A` +
      `*Cliente:* ${name}%0A` +
      `*Teléfono:* ${phone}%0A` +
      `*Dirección:* ${address}%0A` +
      `*Notas:* ${notes || 'Ninguna'}%0A%0A` +
      `*Detalle del Pedido:*%0A${itemsText}%0A%0A` +
      `*Método de Pago:* Nequi (+57 301 2436908)%0A` +
      `*Total a Pagar:* $${total.toLocaleString('es-CO')}`;
  };

  const copyTicketToClipboard = () => {
    const rawText = `NUEVO PEDIDO - HELADOS HELLEN\n\n` +
      `Cliente: ${name}\n` +
      `Teléfono: ${phone}\n` +
      `Dirección: ${address}\n` +
      `Notas: ${notes || 'Ninguna'}\n\n` +
      `Detalle del Pedido:\n` +
      cart.map((item) => `• ${item.quantity}x ${item.product.name} (${item.product.size})`).join('\n') + `\n\n` +
      `Método de Pago: Nequi (+57 301 2436908)\n` +
      `Total: $${total.toLocaleString('es-CO')}`;

    navigator.clipboard.writeText(rawText);
    onAddToast('📋 Ticket copiado al portapapeles con éxito.', 'info');
  };

  const handleCloseSuccess = () => {
    onClearCart();
    setStep('form');
    setName('');
    setAddress('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={step === 'success' ? handleCloseSuccess : onClose}
            className="fixed inset-0 bg-neutral-dark cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="bg-white rounded-[2.5rem] w-full max-w-lg shadow-2xl overflow-hidden relative z-50 border border-rose-100 flex flex-col max-h-[90vh]"
          >
            {/* Close Cross icon */}
            <button
              onClick={step === 'success' ? handleCloseSuccess : onClose}
              className="absolute right-6 top-6 p-2 rounded-full hover:bg-rose-50 text-neutral-muted transition-colors cursor-pointer z-20"
              aria-label="Cerrar modal"
            >
              <X size={18} />
            </button>

            {/* Step 1: Delivery Order Form details */}
            {step === 'form' && (
              <form onSubmit={handleSubmit} className="flex flex-col h-full overflow-hidden">
                <div className="p-8 pb-4">
                  <span className="text-primary font-bold text-xs uppercase tracking-wide">Finalizar Pedido</span>
                  <h3 className="font-display font-black text-2xl text-neutral-dark mt-1 flex items-center gap-1.5">
                    Detalles de Entrega
                  </h3>
                  <p className="text-stone-500 text-xs mt-1">
                    Garantizamos que tu helado llegará firme, compacto y frío en su tarro térmico.
                  </p>
                </div>

                {/* Form fields */}
                <div className="p-8 pt-2 pb-6 flex-grow overflow-y-auto space-y-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-dark mb-1.5 flex items-center gap-1">
                      <span>Nombre Completo *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ingrese su nombre completo"
                      className="w-full px-4 py-3 rounded-full border border-rose-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-neutral-dark bg-rose-50/10 placeholder-stone-400"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-dark mb-1.5 flex items-center gap-1">
                      <Phone size={12} className="text-primary" />
                      <span>Número de Teléfono/WhatsApp *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ej: +57 300 123 4567"
                      className="w-full px-4 py-3 rounded-full border border-rose-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-neutral-dark bg-rose-50/10 placeholder-stone-400"
                    />
                  </div>

                  {/* Address field */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-dark mb-1.5 flex items-center gap-1">
                      <MapPin size={12} className="text-primary" />
                      <span>Barrio y Dirección Exacta *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Ej: Calle 32 #12-40, Apto 4B, Manga"
                      className="w-full px-4 py-3 rounded-full border border-rose-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-neutral-dark bg-rose-50/10 placeholder-stone-400"
                    />
                  </div>

                  {/* Notes / indicaciones option */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Indicaciones Adicionales (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ej: Tocar el timbre del portón gris, apartamento de esquina, mandar cambio de $50.000..."
                      className="w-full px-4 py-3 rounded-2xl border border-rose-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-neutral-dark bg-rose-50/10 placeholder-stone-400 resize-none"
                    />
                  </div>

                  {/* Payment Method details */}
                  <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-100 flex flex-col gap-1">
                    <label className="block text-xs font-bold text-primary uppercase tracking-wider">
                      Método de Pago Único
                    </label>
                    <div className="flex items-start gap-2.5 mt-1">
                      <span className="text-xl shrink-0 mt-0.5">📲</span>
                      <div>
                        <p className="text-neutral-dark text-sm font-extrabold flex items-center gap-1.5">
                          <span>Nequi al +57 301 2436908</span>
                        </p>
                        <p className="text-stone-500 text-xs leading-relaxed mt-0.5">
                          Para resguardar el despacho express y la frescura, solo aceptamos transferencias por Nequi. Una vez confirmada tu orden, envíanos el comprobante de transferencia para despachar.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Confirm buttons drawer bottom */}
                <div className="p-8 pt-4 border-t border-rose-50 bg-stone-50/50 flex flex-col gap-3">
                  <div className="flex justify-between items-center text-sm px-1">
                    <span className="text-stone-500 font-bold">Total Final:</span>
                    <span className="font-display font-extrabold text-lg text-primary">${total.toLocaleString('es-CO')}</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-sans font-bold text-sm rounded-full shadow-lg transition-transform hover:scale-101 cursor-pointer text-center"
                  >
                    Confirmar Pedido 🛵
                  </button>
                </div>
              </form>
            )}

            {/* Step 2: Interactive loading loader icon during confirmation */}
            {step === 'processing' && (
              <div className="p-12 text-center flex flex-col items-center justify-center min-h-[360px]">
                {/* Simulated circle packaging load */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full border-4 border-rose-100 border-t-primary animate-spin"></div>
                  <Gift className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" size={20} />
                </div>
                <h4 className="font-display font-black text-xl text-neutral-dark mb-2">Garantizando la Consistencia</h4>
                <p className="text-stone-500 text-sm max-w-xs leading-relaxed">
                  Conectando con el repartidor express y consolidando la cadena de refrigeración de tu pack Hellen...
                </p>
              </div>
            )}

            {/* Step 3: Success countdown and simulated dispatch */}
            {step === 'success' && (
              <div className="p-8 text-center flex flex-col h-full overflow-hidden">
                <div className="p-4 flex-grow overflow-y-auto space-y-6">
                  {/* Success seal */}
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-secondary mx-auto border-2 border-emerald-100 mb-2">
                    <Check size={32} className="stroke-[2.5]" />
                  </div>

                  <div>
                    <h3 className="font-display font-black text-2xl text-neutral-dark">¡En Camino a Tu Casa!</h3>
                    <p className="text-stone-500 text-xs mt-1">
                      Tu orden ha sido clasificada con prioridad premium.
                    </p>
                  </div>

                  {/* COUNTDOWN TIMER COMPONENT */}
                  <div className="bg-rose-50/50 p-6 rounded-3xl border border-rose-100/50 space-y-2 select-none relative overflow-hidden">
                    <div className="absolute top-2 right-2 bg-emerald-100 text-secondary text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                      <span>En Vivo</span>
                    </div>

                    <p className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Tiempo Estimado de Llegada</p>
                    <div className="text-4xl font-mono font-extrabold text-primary flex items-center justify-center gap-1.5">
                      <Clock size={28} className="text-primary animate-pulse shrink-0" />
                      <span>{getFormattedTime(secondsLeft)}</span>
                    </div>
                    
                    <div className="pt-2 border-t border-rose-200/50">
                      <p className="text-xs text-stone-600 font-semibold italic min-h-[32px] flex items-center justify-center">
                        {progressUpdates[progressStatusIndex]}
                      </p>
                    </div>
                  </div>

                  {/* Simulated WhatsApp Ticket block */}
                  <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100/80 text-left space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-extrabold text-stone-400 tracking-wider flex items-center gap-1.5">
                        <FileText size={12} /> Ticket de Despacho
                      </span>
                      <button
                        onClick={copyTicketToClipboard}
                        className="text-[10px] font-bold text-primary hover:text-primary-hover flex items-center gap-1 focus:outline-none cursor-pointer"
                      >
                        <Copy size={11} /> Copiar Ticket
                      </button>
                    </div>
                    
                    {/* Ticket details list preview */}
                    <div className="text-xs font-mono text-stone-600 space-y-1">
                      <p><span className="text-stone-400">Cliente:</span> {name}</p>
                      <p className="truncate"><span className="text-stone-400">Dir:</span> {address}</p>
                      <p><span className="text-stone-400">Pago:</span> {paymentMethod}</p>
                      <div className="border-t border-stone-200/60 my-1 pb-1"></div>
                      {cart.map((item) => (
                        <p key={item.product.id} className="text-[11px] truncate">
                          {item.quantity}x {item.product.name}
                        </p>
                      ))}
                      <div className="border-t border-stone-200/60 my-1 pt-1 font-bold text-neutral-dark flex justify-between">
                        <span>Total:</span>
                        <span>${total.toLocaleString('es-CO')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Sandbox conformant dispatcher button */}
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/573012436908?text=${getWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-sans font-bold text-sm rounded-full shadow-lg transition-transform flex justify-center items-center gap-2 cursor-pointer"
                    >
                      <MessageCircle size={18} />
                      Enviar Orden por WhatsApp 💬
                    </a>
                    <p className="text-[10px] text-stone-400 mt-2 leading-relaxed">
                      Si el botón no abre automáticamente, copia el Ticket de Despacho y envíalo a nuestro chat. 🍨
                    </p>
                  </div>
                </div>

                {/* Done finish action button */}
                <div className="pt-4 border-t border-stone-100 mt-4">
                  <button
                    onClick={handleCloseSuccess}
                    className="w-full py-3 bg-neutral-dark hover:bg-neutral-800 text-white font-bold text-xs rounded-full transition-colors cursor-pointer"
                  >
                    Volver a la Heladería
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
