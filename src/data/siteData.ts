export interface Product {
  id: string;
  name: string;
  category: "procesadores" | "graficas" | "memorias" | "almacenamiento" | "placas" | "fuentes";
  categoryLabel: string;
  specs: string[];
  price: number;
  priceFormatted: string;
  image: string;
  badge?: string;
  inStock: boolean;
  warranty: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: "Cpu" | "Wrench" | "Camera" | "Network";
  highlights: string[];
  image: string;
  ctaText: string;
}

export const SITE_CONFIG = {
  name: "Hardware & Soluciones",
  tagline: "Tecnología, Hardware y Seguridad Integral",
  description: "Venta de partes de cómputo, asesoramiento en software y hardware, mantenimiento de sistemas de videovigilancia CCTV y soluciones IoT para hogares, oficinas y empresas en Lima y Callao.",
  phone: "+51 981 083 288",
  phoneRaw: "51981083288",
  email: "mchavez1971@hotmail.com",
  emailAlt: "ventas@hardwareysoluciones.com",
  address: "Calle Pablo de Olavide 329, Urb. La Colonial, Callao, Perú",
  mapsUrl: "https://maps.google.com/?q=Calle+Pablo+de+Olavide+329+Callao+Peru",
  hours: "Lunes a Sábado · 9:00 a.m. - 7:00 p.m.",
  whatsappBaseUrl: "https://wa.me/51981083288",
};

export const SERVICES: Service[] = [
  {
    id: "partes-computo",
    title: "Venta de Partes de Cómputo",
    shortDesc: "Componentes originales y periféricos de alto rendimiento para armar o repotenciar tu equipo.",
    fullDesc: "Contamos con procesadores, placas madre, memorias RAM, tarjetas gráficas, discos SSD NVMe y fuentes de poder de las mejores marcas, 100% nuevos y con garantía oficial.",
    iconName: "Cpu",
    highlights: [
      "Procesadores AMD Ryzen e Intel Core",
      "Tarjetas gráficas NVIDIA GeForce RTX",
      "Memorias RAM DDR4 / DDR5 y SSD NVMe Gen4",
      "Fuentes certificadas 80+ y refrigeración líquida"
    ],
    image: "/images/service-hardware.webp",
    ctaText: "Consultar catálogo de partes"
  },
  {
    id: "asesoramiento",
    title: "Asesoramiento en Software y Hardware",
    shortDesc: "Armado de PCs a medida y optimización técnica sin gastar de más.",
    fullDesc: "Analizamos tu flujo de trabajo (gaming, edición de video, arquitectura o trabajo de oficina) para recomendarte la configuración exacta según tu presupuesto real.",
    iconName: "Wrench",
    highlights: [
      "Armado y ensamblaje profesional de computadoras",
      "Licencias oficiales de Windows y software productivo",
      "Optimización térmica, cambio de pasta y mantenimiento",
      "Diagnóstico y repotenciación de equipos lentos"
    ],
    image: "/images/service-software.webp",
    ctaText: "Solicitar asesoría técnica"
  },
  {
    id: "videovigilancia",
    title: "Mantenimiento e Instalación de Videovigilancia",
    shortDesc: "Seguridad electrónica para tu hogar o empresa con monitoreo remoto 24/7.",
    fullDesc: "Diseñamos e instalamos circuitos cerrados de televisión (CCTV) y cámaras IP de alta resolución con acceso en vivo desde tu celular en cualquier parte del mundo.",
    iconName: "Camera",
    highlights: [
      "Cámaras de seguridad IP y analógicas HD / 4K",
      "Grabadores DVR / NVR con respaldo seguro",
      "Configuración de app móvil para ver en vivo en tu teléfono",
      "Mantenimiento preventivo y correctivo de cableado"
    ],
    image: "/images/service-cctv.webp",
    ctaText: "Cotizar sistema de cámaras"
  },
  {
    id: "iot-redes",
    title: "Soluciones IoT y Redes de Datos",
    shortDesc: "Domótica, control de accesos y conectividad estable de alta velocidad.",
    fullDesc: "Automatiza y protege tus instalaciones con cerraduras inteligentes, sensores de presencia, alarmas y cableado estructurado para que tu red nunca falle.",
    iconName: "Network",
    highlights: [
      "Cerraduras digitales y control biométrico de acceso",
      "Sensores inteligentes de movimiento, humo y apertura",
      "Cableado estructurado Cat 6/6A y switches Gigabit",
      "Puntos de acceso WiFi de alta cobertura para empresas"
    ],
    image: "/images/service-iot.webp",
    ctaText: "Cotizar domótica y redes"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "ryzen-7-5700x",
    name: "Procesador AMD Ryzen 7 5700X",
    category: "procesadores",
    categoryLabel: "Procesadores",
    specs: ["8 Núcleos / 16 Hilos", "Socket AM4", "Hasta 4.6 GHz Max Boost", "32MB L3 Cache"],
    price: 749,
    priceFormatted: "S/. 749.00",
    image: "/images/prod-ryzen.webp",
    badge: "Más Vendido",
    inStock: true,
    warranty: "36 Meses de Garantía"
  },
  {
    id: "rtx-4060-8gb",
    name: "Tarjeta Gráfica GeForce RTX 4060 8GB",
    category: "graficas",
    categoryLabel: "Tarjetas Gráficas",
    specs: ["8GB GDDR6", "Ray Tracing & DLSS 3", "Arquitectura Ada Lovelace", "Ideal Gaming & Edición"],
    price: 1899,
    priceFormatted: "S/. 1,899.00",
    image: "/images/prod-rtx.webp",
    badge: "Alto Rendimiento",
    inStock: true,
    warranty: "24 Meses de Garantía"
  },
  {
    id: "ram-ddr4-16gb",
    name: "Memoria RAM DDR4 16GB 3200MHz",
    category: "memorias",
    categoryLabel: "Memorias RAM",
    specs: ["Capacidad: 16GB", "Velocidad: 3200MHz", "Disipador de Aluminio", "Soporte XMP 2.0"],
    price: 189,
    priceFormatted: "S/. 189.00",
    image: "/images/prod-ram.webp",
    badge: "Excelente Precio",
    inStock: true,
    warranty: "12 Meses de Garantía"
  },
  {
    id: "ssd-nvme-1tb-gen4",
    name: "SSD NVMe 1TB PCIe Gen4 x4",
    category: "almacenamiento",
    categoryLabel: "Almacenamiento",
    specs: ["Capacidad: 1TB", "Lectura hasta 7000 MB/s", "Formato M.2 2280", "Disipador térmico incluido"],
    price: 349,
    priceFormatted: "S/. 349.00",
    image: "/images/prod-ssd.webp",
    badge: "Ultra Rápido",
    inStock: true,
    warranty: "36 Meses de Garantía"
  },
  {
    id: "placa-b550-atx",
    name: "Placa Madre B550 ATX Ultra Durable",
    category: "placas",
    categoryLabel: "Placas Madre",
    specs: ["Socket AMD AM4", "Ranura PCIe 4.0 x16", "Doble Slot M.2 NVMe", "Audio HD 7.1 & LAN Gigabit"],
    price: 459,
    priceFormatted: "S/. 459.00",
    image: "/images/prod-b550.webp",
    badge: "Estabilidad Total",
    inStock: true,
    warranty: "24 Meses de Garantía"
  },
  {
    id: "fuente-750w-bronze",
    name: "Fuente de Poder 750W 80+ Bronze",
    category: "fuentes",
    categoryLabel: "Fuentes de Poder",
    specs: ["Potencia real: 750W", "Certificación 80+ Bronze", "Diseño Semi-Modular", "Protección OVP, UVP, SCP"],
    price: 279,
    priceFormatted: "S/. 279.00",
    image: "/images/prod-psu.webp",
    badge: "Energía Confiable",
    inStock: true,
    warranty: "24 Meses de Garantía"
  }
];

export const STATS = [
  { value: "+12", label: "Años de Experiencia", desc: "Trayectoria técnica comprobada en Lima y Callao" },
  { value: "+1,500", label: "Clientes Atendidos", desc: "Equipos armados y empresas aseguradas" },
  { value: "24/7", label: "Soporte y Monitoreo", desc: "Atención ágil ante cualquier eventualidad" },
  { value: "100%", label: "Garantía Escrita", desc: "En todos nuestros componentes y servicios" }
];

export const PILLARS = [
  {
    title: "Componentes 100% Originales",
    desc: "Trabajamos directamente con distribuidores autorizados. Todos los productos vienen en caja sellada con garantía escrita."
  },
  {
    title: "Asesoría a tu Medida",
    desc: "No te vendemos lo más caro, sino lo que verdaderamente necesitas para tu presupuesto y objetivo de uso."
  },
  {
    title: "Instalación y Respaldo Postventa",
    desc: "Te acompañamos desde la entrega hasta la puesta en marcha de tus cámaras o PCs, con soporte presencial y remoto."
  }
];
