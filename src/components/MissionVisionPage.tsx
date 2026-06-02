import { ShieldCheck, Target, Eye, Sparkles } from 'lucide-react';

interface MissionVisionPageProps {
  onClose: () => void;
}

export default function MissionVisionPage({ onClose }: MissionVisionPageProps) {
  return (
    <section className="min-h-screen bg-background text-on-background">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-rose-50/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-10 py-10 md:py-16">
          <div className="flex items-center justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.24em]">
                Misión y Visión
              </span>
              <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-dark leading-tight">
                Conoce nuestro propósito y hacia dónde vamos.
              </h1>
              <p className="mt-4 max-w-2xl text-base md:text-lg text-on-surface-variant leading-relaxed">
                Una página completa dedicada a la esencia de Helados Hellen: sabor, frescura y servicio pensado para cada familia.
              </p>
            </div>
            <button
              onClick={onClose}
              className="rounded-full bg-neutral-dark px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-neutral-800 transition-colors"
            >
              Volver a la tienda
            </button>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-8">
              <div className="rounded-[2rem] bg-white/95 border border-rose-100 shadow-2xl p-8">
                <div className="inline-flex items-center justify-center rounded-3xl bg-primary/10 w-14 h-14 mb-6 text-primary">
                  <Target size={28} />
                </div>
                <h2 className="font-display text-3xl font-bold text-neutral-dark mb-3">Nuestra Misión</h2>
                <p className="text-stone-600 text-base leading-relaxed">
                  Crear helados artesanales de la más alta calidad con ingredientes locales, frescos y 100% naturales en Cartagena. Entregamos felicidad cremosa directo a tu hogar con la cadena de frío intacta y un servicio cálido que une a las familias del Caribe.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white/95 border border-emerald-100 shadow-2xl p-8">
                <div className="inline-flex items-center justify-center rounded-3xl bg-secondary/10 w-14 h-14 mb-6 text-secondary">
                  <Eye size={28} />
                </div>
                <h2 className="font-display text-3xl font-bold text-neutral-dark mb-3">Nuestra Visión</h2>
                <p className="text-stone-600 text-base leading-relaxed">
                  Ser la heladería artesanal a domicilio líder y más querida de Cartagena para 2030, destacando por sabores innovadores del Caribe, procesos sostenibles y entregas express refrigeradas con una experiencia inolvidable.
                </p>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] bg-white/95 border border-stone-200 shadow-2xl p-7">
                <div className="inline-flex items-center gap-3 text-secondary text-sm font-semibold uppercase tracking-[0.28em] mb-4">
                  <Sparkles size={18} />
                  Lo que nos define
                </div>
                <ul className="space-y-4 text-stone-600 text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    Productos frescos, naturales y hechos a mano.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    Servicio rápido y frío, con entrega segura en domicilio.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    Innovación constante con sabores caribeños auténticos.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                    Calidad y transparencia en cada paso de la producción.
                  </li>
                </ul>
              </div>
              <div className="rounded-[2rem] bg-secondary/10 border border-secondary/20 shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-3xl bg-secondary/20 text-secondary flex items-center justify-center">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] font-bold text-secondary">Garantía Hellen</p>
                    <p className="text-sm text-neutral-dark">Frescura, sabor y entrega fría garantizada.</p>
                  </div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Dedicados a una experiencia confiable y deliciosa: ingredientes locales, procesos artesanales y una logística que conserva cada sabor hasta tu puerta.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
