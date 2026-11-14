import React, { useState, useMemo } from "react";
import { PRODUCTS, SITE_CONFIG, type Product } from "@/data/siteData";
import { MessageCircle, Search, ShieldCheck, CheckCircle2, SlidersHorizontal, ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  { id: "todos", label: "Todos los Componentes" },
  { id: "procesadores", label: "Procesadores" },
  { id: "graficas", label: "Tarjetas Gráficas" },
  { id: "memorias", label: "Memorias RAM" },
  { id: "almacenamiento", label: "Almacenamiento" },
  { id: "placas", label: "Placas Madre" },
  { id: "fuentes", label: "Fuentes de Poder" },
];

export function CatalogueSection() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { todos: PRODUCTS.length };
    PRODUCTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "todos" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specs.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getWhatsAppProductUrl = (product: Product) => {
    const text = encodeURIComponent(
      `Hola Hardware & Soluciones, me interesa cotizar el producto: *${product.name}* (${product.priceFormatted}). ¿Tienen disponibilidad para Lima/Callao?`
    );
    return `${SITE_CONFIG.whatsappBaseUrl}?text=${text}`;
  };

  const customBuildUrl = encodeURIComponent(
    "Hola Hardware & Soluciones, tengo una lista de componentes para armar una computadora y deseo una cotización personalizada."
  );

  return (
    <div className="space-y-8">
      {/* Search and Filters Box */}
      <div className="bg-card p-4 sm:p-6 rounded-2xl border border-border shadow-xs space-y-4">
        {/* Row 1: Search input */}
        <div className="relative w-full max-w-md">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar procesador, tarjeta gráfica, memoria..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        {/* Row 2: Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = categoryCounts[cat.id] || 0;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer min-h-[38px] flex items-center gap-2 ${
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-mono ${
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-background/80 text-muted-foreground border border-border/50"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-card rounded-2xl border border-border p-8 space-y-3">
          <SlidersHorizontal className="w-10 h-10 text-muted-foreground mx-auto opacity-50" />
          <h3 className="text-lg font-bold text-foreground">No se encontraron productos</h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Podemos cotizarte cualquier pieza o modelo específico directamente con nuestros distribuidores mayoristas.
          </p>
          <div className="pt-2">
            <a
              href={`${SITE_CONFIG.whatsappBaseUrl}?text=${customBuildUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-card rounded-2xl border border-border hover:border-primary/50 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Product Image Box */}
              <div className="relative aspect-[4/3] bg-muted/40 overflow-hidden flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-background/95 text-foreground border border-border">
                    {product.categoryLabel}
                  </span>
                  {product.badge && (
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-primary text-primary-foreground">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-800 text-white dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-700 backdrop-blur-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    En Stock
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Specs list */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {product.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-md bg-muted text-foreground/80 font-mono"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="pt-3 border-t border-border flex flex-col gap-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold block">
                        Precio en Soles
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-foreground">
                        {product.priceFormatted}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                      <span>{product.warranty}</span>
                    </div>
                  </div>

                  {/* WhatsApp Direct Quote Button */}
                  <a
                    href={getWhatsAppProductUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-[#0f766e] hover:bg-[#115e59] dark:bg-[#14b8a6] dark:hover:bg-[#0d9488] text-white dark:text-slate-950 font-bold text-sm shadow-xs transition-all active:scale-[0.99] group/btn"
                  >
                    <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                    <span>Cotizar por WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Custom request CTA Banner */}
      <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <h4 className="text-lg sm:text-xl font-bold text-foreground">
            ¿Buscas un componente específico o una PC armada a medida?
          </h4>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Trabajamos con almacenes mayoristas en Lima. Envíanos tu lista o presupuesto y te armamos la cotización con el mejor rendimiento garantizado.
          </p>
        </div>
        <a
          href={`${SITE_CONFIG.whatsappBaseUrl}?text=${customBuildUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Cotizar Armado Personalizado</span>
        </a>
      </div>
    </div>
  );
}
