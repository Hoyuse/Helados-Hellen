import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingBag, Check, Star } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface FlavorsProps {
  onAddToCart: (product: Product) => void;
}

type CategoryFilter = 'Todos' | 'Clásicos' | 'Premium';

export default function Flavors({ onAddToCart }: FlavorsProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const handleAddClick = (product: Product) => {
    onAddToCart(product);
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.info.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 px-4 md:px-10 bg-rose-50/35" id="sabores">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Search and Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-primary font-bold text-sm tracking-wide uppercase">Heladería Gourmet</span>
            <h2 className="font-display text-3xl md:text-4xl text-neutral-dark font-extrabold mt-1 mb-2">
              Nuestros Sabores
            </h2>
            <p className="text-on-surface-variant text-sm md:text-base">
              Elaborados diariamente en lotes pequeños con ingredientes 100% naturales.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar sabor..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-rose-200 bg-white text-neutral-dark text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-shadow"
              />
              <Search className="absolute left-3.5 top-3 text-stone-400" size={16} />
            </div>

            {/* Filter Tabs */}
            <div className="flex bg-rose-100/50 p-1 rounded-full border border-rose-100/80 gap-1 overflow-x-auto no-scrollbar scroll-smooth">
              {(['Todos', 'Clásicos', 'Premium'] as CategoryFilter[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-xs md:text-sm font-bold rounded-full transition-all cursor-pointer whitespace-nowrap focus:outline-none ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-on-surface-variant hover:text-primary hover:bg-rose-100/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const isAdded = addedItems[product.id];
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl border border-rose-100/50 flex flex-col h-full group relative transitioning-all delicious-shadow-hover"
                >
                  {/* Favorite Badge */}
                  {product.isFavorite && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-[#aa2e5e] text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                        <Star size={10} className="fill-white stroke-none animate-pulse" />
                        <span>Favorito</span>
                      </span>
                    </div>
                  )}

                  {/* Top Bleed Flavor Background with overlapping 3D cup graphic */}
                  <div 
                    className="h-48 w-full relative pt-8 px-8 flex justify-center items-end overflow-visible select-none"
                    style={{ background: product.bleedColor }}
                  >
                    {/* Recreating HTML template cup graphic */}
                    <div 
                      className="w-32 h-40 bg-zinc-100 rounded-t-2xl rounded-b-lg shadow-xl border-4 border-white/90 relative z-10 transform translate-y-4 transition-transform duration-500 group-hover:scale-105"
                    >
                      {/* Premium Top Lid */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-36 h-3 bg-rose-200 border border-white rounded-full shadow-sm"></div>
                      
                      {/* Inner colorful packaging sticker */}
                      <div 
                        className="absolute inset-x-2 top-4 bottom-2 rounded-lg opacity-90 flex flex-col items-center justify-center text-center p-2 border-2 border-dashed border-white/40"
                        style={{ backgroundColor: product.tagColor }}
                      >
                        {/* Swatch name */}
                        <span 
                          className="font-display font-black text-xs leading-none tracking-tight select-none uppercase"
                          style={{ color: product.textColor }}
                        >
                          {product.label}
                        </span>
                        
                        {/* Mini packaging detail */}
                        <div className="w-8 h-[2px] bg-white/40 my-1"></div>
                        <span className="text-[7px] font-semibold opacity-85 tracking-widest uppercase text-stone-900 leading-none">
                          HELLEN
                        </span>
                      </div>
                    </div>

                    {/* Flavor highlight blob */}
                    <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/5 opacity-5 pointer-events-none"></div>
                  </div>

                  {/* Product Details Area */}
                  <div className="p-6 pt-10 flex-grow flex flex-col bg-white z-10">
                    <div className="flex justify-between items-start gap-2 mb-1.5">
                      <h3 className="font-display font-extrabold text-neutral-dark text-lg leading-snug group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <span className="font-display font-extrabold text-[#aa2e5e] text-lg shrink-0">
                        ${product.price.toLocaleString('es-CO')}
                      </span>
                    </div>

                    {/* Size marker badge */}
                    <p className="font-sans font-bold text-xs text-on-surface-variant/75 mb-3">
                      {product.size} • <span className="text-secondary">{product.info}</span>
                    </p>

                    {/* Description */}
                    <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow">
                      {product.description}
                    </p>

                    {/* Action Button */}
                    <button
                      onClick={() => handleAddClick(product)}
                      className={`w-full py-3 px-4 rounded-full font-sans font-bold text-sm transition-all flex justify-center items-center gap-2 focus:outline-none focus:ring-2 ${
                        isAdded 
                          ? 'bg-secondary text-white focus:ring-secondary/20' 
                          : 'bg-rose-50 text-primary hover:bg-primary hover:text-white focus:ring-primary/25 cursor-pointer'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={16} className="animate-bounce" />
                          <span>¡Agregado al Pedido!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={16} />
                          <span>Agregar al pedido</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-3xl border border-dashed border-rose-200 mt-8"
          >
            <p className="text-stone-500 font-bold text-lg mb-2">No encontramos ese sabor</p>
            <p className="text-stone-400 text-sm">Prueba buscando otro ingrediente, o cambia el filtro de categoría.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('Todos'); }}
              className="mt-4 px-6 py-2.5 bg-primary text-white font-bold rounded-full text-xs"
            >
              Restaurar Búsqueda
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
