import { useEffect, useState } from 'react';

const pageUrl = 'https://helados-hellen.vercel.app/';
const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(pageUrl)}`;

const slides = [
  {
    title: 'Sabores Artesanales',
    description: 'Cada tarro está hecho a mano con ingredientes locales frescos y recetas que resaltan el sabor caribeño.',
  },
  {
    title: 'Cadena de Frío Garantizada',
    description: 'Tu pedido llega frío y protegido, para que disfrutes el helado tal como fue preparado.',
  },
  {
    title: 'Entrega Express',
    description: 'Recibe tu helado en tiempo récord y listo para disfrutar en casa, perfecto para antojos rápidos.',
  },
];

export default function WelcomeSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="bg-white/95 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.6fr_1fr] items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] shadow-sm">
            Bienvenida
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-dark">
            Carrusel de diapositivas de bienvenida
          </h2>
          <p className="max-w-2xl text-on-surface-variant leading-relaxed text-base md:text-lg">
            Descubre en pocos segundos la magia de Helados Hellen: sabores artesanales, entrega fría y una experiencia pensada para disfrutar.
            Escanea el QR para ir directamente al sitio alojado.
          </p>

          <div className="rounded-[2rem] border border-rose-100 bg-rose-50 p-8 shadow-2xl">
            <div className="grid gap-4">
              <div className="rounded-[1.75rem] bg-white p-8 shadow-lg border border-rose-100">
                <p className="text-xs uppercase tracking-[0.28em] font-bold text-secondary">Diapositiva {activeSlide + 1} de {slides.length}</p>
                <h3 className="mt-4 text-3xl font-black text-neutral-dark">{slides[activeSlide].title}</h3>
                <p className="mt-4 text-base leading-relaxed text-on-surface-variant">{slides[activeSlide].description}</p>
              </div>
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="inline-flex items-center justify-center w-full rounded-full border border-rose-200 bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-rose-50 transition-colors"
                >
                  ‹ Anterior
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
                  className="inline-flex items-center justify-center w-full rounded-full border border-rose-200 bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover transition-colors"
                >
                  Siguiente ›
                </button>
              </div>
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-rose-100 bg-rose-50/90 p-8 shadow-2xl text-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
              Escanea el QR
            </div>
            <h3 className="text-2xl font-bold text-neutral-dark">Ir al sitio alojado</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              El código QR te lleva directamente a la web en Vercel de Helados Hellen.
            </p>
          </div>

          <div className="mx-auto mt-6 w-full max-w-xs rounded-[1.75rem] border border-white bg-white p-4 shadow-lg">
            <img
              src={qrUrl}
              alt="QR code para helados-hellen.vercel.app"
              className="w-full h-full rounded-[1.25rem] object-cover"
            />
          </div>

          <a
            href={pageUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary-hover transition-colors"
          >
            Ir al sitio ahora
          </a>
        </aside>
      </div>
    </section>
  );
}
