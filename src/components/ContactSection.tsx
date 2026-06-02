import { Smartphone, Instagram, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto rounded-[2.5rem] border border-rose-100/60 bg-rose-50/80 shadow-2xl overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] items-center p-8 md:p-12">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.24em]">
              Contacto Rápido
            </span>
            <h2 className="font-display text-4xl font-black text-neutral-dark leading-tight">
              Escríbenos y pide tu helado favorito
            </h2>
            <p className="max-w-xl text-on-surface-variant leading-relaxed text-base md:text-lg">
              Nuestro equipo está listo para recibir tu pedido por WhatsApp o Instagram. También puedes dejar un mensaje directo y te responderemos rápido.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="https://wa.me/573012436908?text=Hola%20Helados%20Hellen%2C%20quiero%20hacer%20un%20pedido"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-white px-6 py-4 text-sm font-semibold shadow-lg hover:bg-secondary-hover transition-colors"
              >
                <Smartphone size={18} /> WhatsApp
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary border border-primary/20 px-6 py-4 text-sm font-semibold shadow-sm hover:bg-primary/5 transition-colors"
              >
                <Instagram size={18} /> Instagram
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-rose-100 bg-white p-8 shadow-xl">
            <div className="mb-6 rounded-3xl bg-emerald-100/70 p-6 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-secondary">Atención</p>
              <p className="mt-3 text-neutral-dark text-sm leading-relaxed">
                Pedidos y consultas responden en menos de 10 minutos durante horario de atención.
              </p>
            </div>
            <div className="space-y-4 text-sm text-stone-600">
              <div className="rounded-3xl bg-rose-50 p-4">
                <div className="flex items-center gap-3 font-semibold text-neutral-dark">
                  <Mail size={16} /> <span>Correo</span>
                </div>
                <p className="mt-2 text-xs text-stone-500">contacto@heladoshellen.com</p>
              </div>
              <div className="rounded-3xl bg-rose-50 p-4">
                <div className="flex items-center gap-3 font-semibold text-neutral-dark">
                  <Smartphone size={16} /> <span>WhatsApp</span>
                </div>
                <p className="mt-2 text-xs text-stone-500">+57 301 2436908</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
