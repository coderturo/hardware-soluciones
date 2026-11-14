import { z } from "zod";

export const contactFormSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." })
    .max(80, { message: "El nombre no puede exceder 80 caracteres." }),
  email: z
    .string()
    .min(1, { message: "El correo electrónico es requerido." })
    .email({ message: "Por favor ingresa un correo electrónico válido." }),
  telefono: z
    .string()
    .min(9, { message: "El número debe tener al menos 9 dígitos." })
    .regex(/^(\+?51)?\s?9\d{2}[\s.-]?\d{3}[\s.-]?\d{3}$|^\d{9}$/, {
      message: "Ingresa un número telefónico válido (ej. 981 083 288)."
    }),
  servicio: z.enum([
    "partes-computo",
    "asesoramiento",
    "videovigilancia",
    "iot-redes",
    "otro"
  ], {
    errorMap: () => ({ message: "Por favor selecciona un servicio de interés." })
  }),
  mensaje: z
    .string()
    .min(10, { message: "El mensaje debe contener al menos 10 caracteres explicativos." })
    .max(1000, { message: "El mensaje no puede exceder los 1000 caracteres." })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
