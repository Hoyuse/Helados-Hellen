import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Search, Compass, ShieldCheck, Bike, Star, MessageSquare } from 'lucide-react';
import { HOODS_COVERAGE, TESTIMONIALS } from '../data';

export default function CoverageMap() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<{
    found: boolean;
    name: string;
    status: 'Express' | 'Estándar' | 'No Disponible';
    time: string;
  } | null>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase().trim();
    const match = HOODS_COVERAGE.find((h) => 
      h.name.toLowerCase().includes(query) || query.includes(h.name.toLowerCase())
    );

    if (match) {
      setSearchResult({
        found: true,
        name: match.name,
        status: match.status === 'Súper Rápido' ? 'Express' : 'Estándar',
        time: match.status === 'Súper Rápido' ? '20-25 minutos' : '35-45 minutos'
      });
    } else {
      setSearchResult({
        found: false,
        name: searchQuery,
        status: 'No Disponible',
        time: ''
      });
    }
  };

  return (
    <section id="cobertura" className="py-20 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        
        {/* Coverage Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary font-bold text-sm tracking-wide uppercase">Envíos Rápidos</span>
          <h2 className="font-display text-3xl md:text-4xl text-neutral-dark font-extrabold mt-1 mb-3">
            Zonas de Cobertura
          </h2>
          <p className="text-on-surface-variant text-base">
            Servicio a domicilio refrigerado para garantizar que tu helado llegue con la cremosidad y temperatura perfectas. Elige tu zona y disfruta.
          </p>
        </div>

        {/* Layout Grid: Left Search & Neighborhoods, Right Animated Visual Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-24">
          
          {/* Left Finder panel */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-rose-50/20 p-8 rounded-[2rem] border border-rose-100/50">
            <div>
              <h3 className="font-display font-extrabold text-xl text-neutral-dark mb-4 flex items-center gap-2">
                <Compass className="text-primary animate-pulse" size={20} />
                ¿Llegamos a tu casa?
              </h3>
              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                Escribe el nombre de tu barrio o condominio para verificar de inmediato el tiempo estimado de entrega y tarifas de envío.
              </p>

              {/* Form Input */}
              <form onSubmit={handleVerify} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (!e.target.value) setSearchResult(null);
                    }}
                    placeholder="Ej. Manga, Bocagrande, Marbella..."
                    className="w-full pl-10 pr-4 py-3 rounded-full border border-rose-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-neutral-dark placeholder-stone-400"
                  />
                  <Search className="absolute left-3.5 top-3.5 text-stone-400" size={16} />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-secondary hover:bg-neutral-800 text-white font-sans font-bold text-sm rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
                >
                  Verificar Cobertura
                </button>
              </form>

              {/* Dynamic Answer Panel */}
              <AnimatePresence mode="wait">
                {searchResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-6 p-5 rounded-2xl border ${
                      searchResult.found 
                        ? 'bg-emerald-50/70 border-emerald-100 text-stone-800' 
                        : 'bg-rose-50/70 border-rose-100 text-stone-800'
                    }`}
                  >
                    {searchResult.found ? (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                          <h4 className="font-display font-black text-emerald-800 text-sm">
                            ¡Cobertura Confirmada!
                          </h4>
                        </div>
                        <p className="text-xs text-stone-600">
                          Llegamos a <span className="font-bold text-neutral-dark">{searchResult.name}</span> con envío <span className="font-semibold text-emerald-700">{searchResult.status}</span>.
                        </p>
                        <div className="flex items-center gap-2 pt-2 border-t border-emerald-100 text-emerald-700 font-sans font-bold text-xs">
                          <Bike size={16} />
                          <span>Tiempo estimado: {searchResult.time}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <h4 className="font-display font-black text-rose-800 text-sm">
                          Fuera de Rango Express
                        </h4>
                        <p className="text-xs text-stone-600">
                          Actualmente no operamos envíos rápidos automatizados a <span className="font-bold">"{searchResult.name}"</span>. 
                        </p>
                        <p className="text-xs text-stone-500 pt-1 border-t border-rose-100/80">
                          Escríbenos por WhatsApp para coordinar despachos especiales especiales.
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Micro details panel */}
            <div className="mt-8 pt-6 border-t border-rose-100/50 flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-emerald-100 text-[#2f6a3f]">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="font-sans font-bold text-xs text-stone-800">
                  Cadena de Frío Custodiada
                </p>
                <p className="text-[11px] text-stone-500">
                  Garantizamos que tu helado no perderá su punto de congelación en el trayecto.
                </p>
              </div>
            </div>
          </div>

          {/* Right Simulated Interactive Map Canvas */}
          <div className="lg:col-span-7 bg-rose-50/50 rounded-[2.5rem] border border-rose-100/30 p-4 md:p-6 flex flex-col justify-between overflow-hidden relative">
            
            {/* Soft grid map simulation */}
            <div className="rounded-2xl bg-white border border-rose-100/60 aspect-video lg:aspect-auto lg:h-[320px] relative overflow-hidden flex flex-col items-center justify-center p-4">
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none" 
                style={{
                  backgroundImage: `
                    radial-gradient(ellipse at center, rgba(170, 46, 94, 0.4) 0%, transparent 70%),
                    linear-gradient(rgba(170, 46, 94, 0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(170, 46, 94, 0.15) 1px, transparent 1px)
                  `,
                  backgroundSize: '100% 100%, 24px 24px, 24px 24px'
                }}
              />

              {/* Map beacons overlay mockup */}
              <div className="absolute top-1/4 left-1/3 text-primary animate-bounce delay-150">
                <MapPin size={24} className="fill-rose-200" />
                <span className="absolute -bottom-6 -left-4 font-mono font-bold text-[8px] tracking-wide text-neutral-dark bg-white border border-rose-100 px-1 py-0.5 rounded shadow">
                  Manga
                </span>
              </div>

              <div className="absolute bottom-1/3 right-1/4 text-secondary animate-bounce">
                <MapPin size={24} className="fill-emerald-200" />
                <span className="absolute -bottom-6 -left-8 font-mono font-bold text-[8px] tracking-wide text-neutral-dark bg-white border border-emerald-100 px-1.5 py-0.5 rounded shadow whitespace-nowrap">
                  Bocagrande
                </span>
              </div>

              <div className="absolute top-1/3 right-1/3 text-amber-600 animate-pulse">
                <MapPin size={24} className="fill-amber-100" />
                <span className="absolute -bottom-6 -left-6 font-mono font-bold text-[8px] tracking-wide text-on-surface-variant bg-white border border-amber-200 px-1 py-0.5 rounded shadow">
                  Centro Hist.
                </span>
              </div>

              <div className="absolute top-2/3 left-1/4 text-primary animate-bounce delay-300">
                <MapPin size={24} className="fill-rose-100" />
                <span className="absolute -bottom-6 -left-8 font-mono font-bold text-[8px] tracking-wide text-on-surface-variant bg-white border border-rose-100 px-1 py-0.5 rounded shadow whitespace-nowrap">
                  Castillogrande
                </span>
              </div>

              {/* Moped vector icon simulated line animation */}
              <motion.div 
                animate={{ x: [-80, 220, -80], y: [-60, 40, -60] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 border border-emerald-100 rounded-full p-2.5 shadow-md flex items-center justify-center text-secondary z-20 pointer-events-none"
              >
                <Bike size={18} className="animate-pulse" />
              </motion.div>

              {/* Central Map Target Ring */}
              <div className="relative z-10 text-center select-none">
                <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-primary border border-rose-100 animate-pulse shadow">
                  <Compass size={24} />
                </div>
                <p className="font-display font-black text-xs text-stone-800 mt-2">Zonas de Entregas Activas</p>
                <p className="text-[10px] text-stone-500">Mantenemos cubiertos los puntos neurálgicos de la ciudad</p>
              </div>
            </div>

            {/* List of prominent express locations */}
            <div className="mt-4 pt-2">
              <p className="text-[11px] uppercase tracking-wider font-extrabold text-stone-400 mb-2">Zonas Predilectas</p>
              <div className="flex flex-wrap gap-1.5">
                {HOODS_COVERAGE.map((hood) => (
                  <span 
                    key={hood.name}
                    onClick={() => {
                      setSearchQuery(hood.name);
                      setSearchResult({
                        found: true,
                        name: hood.name,
                        status: hood.status === 'Súper Rápido' ? 'Express' : 'Estándar',
                        time: hood.status === 'Súper Rápido' ? '20-25 minutos' : '35-45 minutos'
                      });
                    }}
                    className="text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full bg-white text-stone-600 hover:text-primary hover:bg-rose-50 border border-rose-100/40 shadow-xs cursor-pointer transition-colors"
                  >
                    {hood.name} • <span className="text-emerald-600">{hood.status === 'Súper Rápido' ? 'Express' : 'Std'}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonial Board block */}
        <div className="pt-8 border-t border-rose-100/80">
          <div className="flex items-center gap-2 mb-8 justify-center">
            <MessageSquare size={18} className="text-primary" />
            <h3 className="font-display font-black text-lg text-neutral-dark text-center">Nuestros Clientes Opinan</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-rose-50/20 p-6 rounded-2xl border border-rose-100/40 flex flex-col justify-between">
                <p className="text-stone-600 text-xs sm:text-sm italic leading-relaxed mb-4">
                  "{t.comment}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-sans font-bold text-xs text-stone-800">{t.user}</p>
                    <p className="text-[10px] text-stone-400">{t.date}</p>
                  </div>
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={10} className="fill-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
