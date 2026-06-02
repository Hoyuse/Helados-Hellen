import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, CheckCircle, Info, Sparkles } from 'lucide-react';

export interface ToastType {
  id: string;
  message: string;
  type?: 'success' | 'info' | 'error';
}

interface ToastContainerProps {
  toasts: ToastType[];
  onDismiss: (id: string) => void;
}

export default function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  return (
    <div id="toast-container" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.9, transition: { duration: 0.2 } }}
            layout
            onClick={() => onDismiss(toast.id)}
            className="pointer-events-auto bg-neutral-dark text-white rounded-full px-5 py-3 shadow-2xl flex items-center gap-3 cursor-pointer select-none text-sm font-semibold border border-white/10"
          >
            {toast.type === 'error' ? (
              <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                <Info size={14} />
              </div>
            ) : toast.type === 'info' ? (
              <div className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                <Sparkles size={14} />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-brand-secondary-container/20 text-secondary-container flex items-center justify-center shrink-0">
                <ShoppingBag size={14} className="text-[#a1e4ac]" />
              </div>
            )}
            <span className="flex-1">{toast.message}</span>
            <CheckCircle size={14} className="text-secondary-container opacity-50 ml-1" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
