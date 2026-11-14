import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";
import { ThemeToggle } from "./ThemeToggle";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Close when window resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { label: "Inicio", href: "#top" },
    { label: "Servicios", href: "#servicios" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <div className="md:hidden flex items-center gap-2">
      <ThemeToggle />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-card text-foreground hover:bg-accent transition-colors"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú de navegación"}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Backdrop & Drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-background/95 backdrop-blur-lg flex flex-col justify-between p-6 animate-in fade-in slide-in-from-top-4 duration-200 overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 px-4 rounded-xl text-lg font-semibold text-foreground hover:bg-accent hover:text-primary transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-muted-foreground text-xs uppercase tracking-widest font-mono">Ir</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-border space-y-4">
            <a
              href={`${SITE_CONFIG.whatsappBaseUrl}?text=Hola%20Hardware%20%26%20Soluciones,%20deseo%20hacer%20una%20consulta.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              <span>Cotizar por WhatsApp</span>
            </a>

            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>{SITE_CONFIG.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span>{SITE_CONFIG.hours}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
