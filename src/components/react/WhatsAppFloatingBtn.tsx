import React from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export function WhatsAppFloatingBtn() {
  const defaultMsg = encodeURIComponent(
    "Hola Hardware & Soluciones, visito su página web y deseo consultar sobre sus productos y servicios."
  );
  const waUrl = `${SITE_CONFIG.whatsappBaseUrl}?text=${defaultMsg}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 pointer-events-auto">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#0f766e] hover:bg-[#115e59] dark:bg-[#14b8a6] dark:hover:bg-[#0d9488] text-white dark:text-slate-950 px-4 py-3 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-teal-500/50"
        aria-label="Contactar a Hardware & Soluciones por WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current stroke-none shrink-0" />
        <span className="font-semibold text-xs sm:text-sm hidden sm:inline-block">Cotizar por WhatsApp</span>
      </a>
    </div>
  );
}
