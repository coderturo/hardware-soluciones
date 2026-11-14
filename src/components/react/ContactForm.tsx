import React, { useState } from "react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { SITE_CONFIG } from "@/data/siteData";
import { MessageCircle, Send, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "partes-computo",
    mensaje: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const validate = (): boolean => {
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const fieldName = err.path[0] as keyof ContactFormData;
        if (fieldName && !fieldErrors[fieldName]) {
          fieldErrors[fieldName] = err.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Submit via Web form (simulated backend / webhook)
  const handleWebSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 1000);
  };

  // Submit directly to WhatsApp with prefilled formatted text
  const handleWhatsAppSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const serviceNames: Record<string, string> = {
      "partes-computo": "Venta de Partes de Cómputo",
      "asesoramiento": "Asesoramiento en Software y Hardware",
      "videovigilancia": "Mantenimiento e Instalación de Videovigilancia",
      "iot-redes": "Soluciones IoT y Redes de Datos",
      "otro": "Otra consulta técnica",
    };

    const text = encodeURIComponent(
      `*NUEVA SOLICITUD DE COTIZACIÓN - WEB*\n\n` +
      `👤 *Nombre:* ${formData.nombre}\n` +
      `📱 *Teléfono:* ${formData.telefono}\n` +
      `✉️ *Correo:* ${formData.email}\n` +
      `🛠️ *Servicio de Interés:* ${serviceNames[formData.servicio] || formData.servicio}\n\n` +
      `📝 *Mensaje:* ${formData.mensaje}\n\n` +
      `_Enviado desde el formulario web de Hardware & Soluciones_`
    );

    window.open(`${SITE_CONFIG.whatsappBaseUrl}?text=${text}`, "_blank");
    setSubmittedSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      servicio: "partes-computo",
      mensaje: "",
    });
    setErrors({});
    setSubmittedSuccess(false);
  };

  if (submittedSuccess) {
    return (
      <div className="bg-card border border-emerald-500/30 rounded-2xl p-8 text-center space-y-4 shadow-lg animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-foreground">¡Solicitud recibida con éxito!</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Gracias por contactar a <strong>Hardware & Soluciones</strong>. Nuestro equipo técnico revisará los detalles y te responderá en breve al teléfono o correo proporcionado.
        </p>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium hover:bg-accent transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleWebSubmit} className="space-y-5" noValidate>
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
          Nombre Completo <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ej. Juan Pérez"
          className={`w-full px-4 py-2.5 rounded-xl bg-background border text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:ring-2 ${
            errors.nombre
              ? "border-destructive focus:ring-destructive/30"
              : "border-border focus:ring-primary focus:border-transparent"
          }`}
        />
        {errors.nombre && (
          <p className="mt-1 text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.nombre}
          </p>
        )}
      </div>

      {/* Grid Email & Teléfono */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
            Correo Electrónico <span className="text-destructive">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
            className={`w-full px-4 py-2.5 rounded-xl bg-background border text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-destructive focus:ring-destructive/30"
                : "border-border focus:ring-primary focus:border-transparent"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-destructive flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="telefono" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
            Teléfono / Celular <span className="text-destructive">*</span>
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Ej. 981 083 288"
            className={`w-full px-4 py-2.5 rounded-xl bg-background border text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:ring-2 ${
              errors.telefono
                ? "border-destructive focus:ring-destructive/30"
                : "border-border focus:ring-primary focus:border-transparent"
            }`}
          />
          {errors.telefono && (
            <p className="mt-1 text-xs text-destructive flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.telefono}
            </p>
          )}
        </div>
      </div>

      {/* Servicio de Interés */}
      <div>
        <label htmlFor="servicio" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
          Servicio de Interés <span className="text-destructive">*</span>
        </label>
        <select
          id="servicio"
          name="servicio"
          value={formData.servicio}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer"
        >
          <option value="partes-computo">Venta de partes de cómputo (Procesadores, GPUs, RAM, etc.)</option>
          <option value="asesoramiento">Asesoramiento en software, licencias y armado a medida</option>
          <option value="videovigilancia">Mantenimiento e instalación de videovigilancia CCTV / IP</option>
          <option value="iot-redes">Soluciones IoT, domótica y cableado estructurado de redes</option>
          <option value="otro">Otro requerimiento técnico</option>
        </select>
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="mensaje" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
          Detalle de tu Requerimiento o Consulta <span className="text-destructive">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Cuéntanos qué componentes necesitas, el presupuesto que manejas o las cámaras que deseas instalar..."
          className={`w-full px-4 py-2.5 rounded-xl bg-background border text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:ring-2 resize-none ${
            errors.mensaje
              ? "border-destructive focus:ring-destructive/30"
              : "border-border focus:ring-primary focus:border-transparent"
          }`}
        />
        {errors.mensaje && (
          <p className="mt-1 text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.mensaje}
          </p>
        )}
      </div>

      {/* Submit Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row gap-3">
        {/* WhatsApp Primary Button */}
        <button
          type="button"
          onClick={handleWhatsAppSubmit}
          className="flex-1 inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 rounded-xl bg-[#0f766e] hover:bg-[#115e59] dark:bg-[#14b8a6] dark:hover:bg-[#0d9488] text-white dark:text-slate-950 font-bold text-sm shadow-xs transition-all active:scale-[0.99] cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-current stroke-none" />
          <span>Enviar por WhatsApp (Respuesta Inmediata)</span>
        </button>

        {/* Web Submit Secondary Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 rounded-xl bg-secondary hover:bg-accent text-secondary-foreground font-semibold text-sm border border-border transition-all active:scale-[0.99] disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
          <span>{isSubmitting ? "Enviando..." : "Enviar Formulario Web"}</span>
        </button>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        Tus datos están protegidos. Respuesta técnica garantizada en horario de atención.
      </p>
    </form>
  );
}
