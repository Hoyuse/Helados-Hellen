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
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;
        if (next >= 100) {
          setActiveSlide((current) => (current + 1) % slides.length);
          return 0;
        }
        return next;
      });
    }, 100);

    return () => window.clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    setProgress(0);
  }, [activeSlide]);

  const handlePrevious = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  return (
    <section className="bg-white/95 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.6fr_1fr] items-center">
        <div className="space-y-6 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] shadow-sm">
            Bienvenida
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-dark">
            Bienvenida
          </h2>
          <p className="max-w-2xl mx-auto text-on-surface-variant leading-relaxed text-base md:text-lg lg:mx-0">
            Disfruta una presentación animada que muestra lo mejor de Helados Hellen.
          </p>

          <div className="rounded-[2rem] border border-rose-100 bg-rose-50 p-8 shadow-2xl">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] font-bold text-secondary">Bienvenida</p>
                <p className="mt-2 text-sm text-on-surface-variant">Simula un video con controles de reproducción y línea de tiempo.</p>
              </div>
              <button
                onClick={() => setIsPlaying((prev) => !prev)}
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover transition-colors"
              >
                {isPlaying ? 'Pausar' : 'Reproducir'}
              </button>
            </div>
            <div className="relative overflow-hidden rounded-[1.75rem] bg-white p-8 shadow-lg border border-rose-100 min-h-[260px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.title}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${index === activeSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'} ${index !== activeSlide ? 'pointer-events-none' : ''}`}
                >
                  <p className="text-xs uppercase tracking-[0.28em] font-bold text-secondary">Bienvenida {index + 1} de {slides.length}</p>
                  <h3 className="mt-4 text-3xl font-black text-neutral-dark">{slide.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-on-surface-variant">{slide.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-500">
                <span>{isPlaying ? 'Reproduciendo' : 'Pausado'}</span>
                <span>{`00:${Math.floor((progress / 100) * 5).toString().padStart(2, '0')} / 00:05`}</span>
              </div>
              <div className="h-2 rounded-full bg-stone-200 overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={handlePrevious}
                  className="inline-flex items-center justify-center w-full rounded-full border border-rose-200 bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-rose-50 transition-colors"
                >
                  ‹ Anterior
                </button>
                <button
                  onClick={handleNext}
                  className="inline-flex items-center justify-center w-full rounded-full border border-rose-200 bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover transition-colors"
                >
                  Siguiente ›
                </button>
              </div>
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-rose-100 bg-rose-50/90 p-8 shadow-2xl text-center flex flex-col items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
              Escanea el QR
            </div>
            <h3 className="text-2xl font-bold text-neutral-dark">Ir al sitio alojado</h3>
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
