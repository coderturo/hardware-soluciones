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
  // --- Procesadores ---
  {
    id: "ryzen-7-5700x",
    name: "Procesador AMD Ryzen 7 5700X",
    category: "procesadores",
    categoryLabel: "Procesadores",
    specs: ["8 Núcleos / 16 Hilos", "Socket AM4", "Hasta 4.6 GHz Max Boost", "32MB L3 Cache"],
    price: 749,
    priceFormatted: "S/. 749.00",
    image: "/images/prod-ryzen-5700x.webp",
    badge: "Más Vendido",
    inStock: true,
    warranty: "36 Meses de Garantía"
  },
  {
    id: "ryzen-5-5600x",
    name: "Procesador AMD Ryzen 5 5600X",
    category: "procesadores",
    categoryLabel: "Procesadores",
    specs: ["6 Núcleos / 12 Hilos", "Socket AM4", "Hasta 4.6 GHz Max Boost", "35MB GameCache"],
    price: 599,
    priceFormatted: "S/. 599.00",
    image: "/images/prod-ryzen-5600x.webp",
    badge: "Top Calidad / Precio",
    inStock: true,
    warranty: "36 Meses de Garantía"
  },
  {
    id: "intel-i7-13700k",
    name: "Procesador Intel Core i7-13700K",
    category: "procesadores",
    categoryLabel: "Procesadores",
    specs: ["16 Núcleos (8P+8E) / 24 Hilos", "Socket LGA 1700", "Hasta 5.4 GHz Turbo", "Intel UHD Graphics 770"],
    price: 1749,
    priceFormatted: "S/. 1,749.00",
    image: "/images/prod-intel-i7.webp",
    badge: "Alto Rendimiento",
    inStock: true,
    warranty: "36 Meses de Garantía"
  },

  // --- Tarjetas Gráficas ---
  {
    id: "rtx-4060-8gb",
    name: "Tarjeta Gráfica ASUS Dual GeForce RTX 4060 8GB",
    category: "graficas",
    categoryLabel: "Tarjetas Gráficas",
    specs: ["8GB GDDR6", "Ray Tracing & DLSS 3", "Arquitectura Ada Lovelace", "Ideal 1080p Ultra"],
    price: 1449,
    priceFormatted: "S/. 1,449.00",
    image: "/images/prod-rtx-4060.webp",
    badge: "Más Popular",
    inStock: true,
    warranty: "24 Meses de Garantía"
  },
  {
    id: "rtx-4070-aero-12gb",
    name: "Tarjeta Gráfica Gigabyte GeForce RTX 4070 Aero OC 12GB",
    category: "graficas",
    categoryLabel: "Tarjetas Gráficas",
    specs: ["12GB GDDR6X 192-bit", "DLSS 3 & Ray Tracing", "Triple Fan Windforce", "Gaming 1440p / 4K"],
    price: 2899,
    priceFormatted: "S/. 2,899.00",
    image: "/images/prod-rtx-4070.webp",
    badge: "Gama Alta",
    inStock: true,
    warranty: "24 Meses de Garantía"
  },
  {
    id: "rtx-3060-igame-12gb",
    name: "Tarjeta Gráfica Colorful iGame GeForce RTX 3060 Ultra 12GB",
    category: "graficas",
    categoryLabel: "Tarjetas Gráficas",
    specs: ["12GB GDDR6", "Triple Ventilador RGB", "Dual BIOS One-Key OC", "Ray Tracing & DLSS"],
    price: 1299,
    priceFormatted: "S/. 1,299.00",
    image: "/images/prod-rtx-3060.webp",
    badge: "Diseño Exclusivo",
    inStock: true,
    warranty: "24 Meses de Garantía"
  },

  // --- Memorias RAM ---
  {
    id: "ram-corsair-ddr5-32gb",
    name: "Memoria RAM Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz",
    category: "memorias",
    categoryLabel: "Memorias RAM",
    specs: ["Kit Dual Channel 32GB", "Velocidad: 6000MHz DDR5", "Iluminación RGB Dinámica", "Intel XMP 3.0 / AMD EXPO"],
    price: 489,
    priceFormatted: "S/. 489.00",
    image: "/images/prod-ram-corsair-ddr5.webp",
    badge: "DDR5 Gaming",
    inStock: true,
    warranty: "Garantía de por Vida"
  },
  {
    id: "ram-gskill-ripjaws-16gb",
    name: "Memoria RAM G.Skill Ripjaws V 16GB (2x8GB) DDR4 3200MHz",
    category: "memorias",
    categoryLabel: "Memorias RAM",
    specs: ["Kit Dual Channel 16GB", "Velocidad: 3200MHz CL16", "Disipador de Aluminio Rojo", "Optimizado Intel & AMD"],
    price: 199,
    priceFormatted: "S/. 199.00",
    image: "/images/prod-ram-gskill.webp",
    badge: "Económico Gamer",
    inStock: true,
    warranty: "Garantía de por Vida"
  },
  {
    id: "ram-crucial-ballistix-16gb",
    name: "Memoria RAM Crucial Ballistix Sport 16GB (2x8GB) DDR4 3200MHz",
    category: "memorias",
    categoryLabel: "Memorias RAM",
    specs: ["Capacidad: 16GB Kit", "Velocidad: 3200MHz", "Disipador de Perfil Bajo", "Soporte XMP 2.0 Plug & Play"],
    price: 189,
    priceFormatted: "S/. 189.00",
    image: "/images/prod-ram-crucial.webp",
    badge: "Máxima Estabilidad",
    inStock: true,
    warranty: "Garantía de por Vida"
  },

  // --- Almacenamiento ---
  {
    id: "ssd-kingston-nv2-1tb",
    name: "SSD M.2 NVMe Kingston NV2 1TB PCIe 4.0",
    category: "almacenamiento",
    categoryLabel: "Almacenamiento",
    specs: ["Capacidad: 1TB", "Lectura secuencial 3500 MB/s", "Formato M.2 2280", "Gen 4x4 NVMe de bajo consumo"],
    price: 269,
    priceFormatted: "S/. 269.00",
    image: "/images/prod-ssd-kingston.webp",
    badge: "Más Vendido",
    inStock: true,
    warranty: "36 Meses de Garantía"
  },
  {
    id: "ssd-samsung-980pro-1tb",
    name: "SSD Samsung 980 PRO 1TB PCIe 4.0 NVMe M.2",
    category: "almacenamiento",
    categoryLabel: "Almacenamiento",
    specs: ["Capacidad: 1TB", "Lectura extrema hasta 7000 MB/s", "Controlador Samsung Elpis", "Ideal para PS5 y PCs Gamer"],
    price: 439,
    priceFormatted: "S/. 439.00",
    image: "/images/prod-ssd-samsung-980.webp",
    badge: "Velocidad Pro",
    inStock: true,
    warranty: "60 Meses de Garantía"
  },
  {
    id: "ssd-samsung-870-1tb",
    name: "SSD SATA III Samsung 870 1TB 2.5\"",
    category: "almacenamiento",
    categoryLabel: "Almacenamiento",
    specs: ["Capacidad: 1TB", "Lectura secuencial hasta 560 MB/s", "Formato estándar 2.5 pulg.", "Ideal para revivir laptops y PCs"],
    price: 299,
    priceFormatted: "S/. 299.00",
    image: "/images/prod-ssd-samsung-870.webp",
    badge: "Upgrade Rápido",
    inStock: true,
    warranty: "36 Meses de Garantía"
  },

  // --- Placas Madre ---
  {
    id: "placa-asus-tuf-gaming",
    name: "Placa Madre ASUS TUF Gaming B450-PLUS ATX",
    category: "placas",
    categoryLabel: "Placas Madre",
    specs: ["Socket AMD AM4", "Protección TUF Grado Militar", "Slot M.2 NVMe PCIe", "Audio Gamer Realtek 7.1"],
    price: 479,
    priceFormatted: "S/. 479.00",
    image: "/images/prod-mb-asus-tuf.webp",
    badge: "Resistencia Militar",
    inStock: true,
    warranty: "36 Meses de Garantía"
  },
  {
    id: "placa-asus-prime-x570",
    name: "Placa Madre ASUS Prime X570-P AM4 PCIe 4.0",
    category: "placas",
    categoryLabel: "Placas Madre",
    specs: ["Socket AMD AM4 Ryzen", "Doble PCIe 4.0 M.2", "Disipador activo de Chipset", "Soporta hasta 128GB DDR4"],
    price: 659,
    priceFormatted: "S/. 659.00",
    image: "/images/prod-mb-asus-prime.webp",
    badge: "Chipset X570",
    inStock: true,
    warranty: "36 Meses de Garantía"
  },
  {
    id: "placa-asrock-matx",
    name: "Placa Madre ASRock AM4 Micro-ATX Ultra Durable",
    category: "placas",
    categoryLabel: "Placas Madre",
    specs: ["Formato Micro-ATX Compacto", "Socket AMD AM4", "Salidas HDMI & DVI", "Audio HD 7.1 canales"],
    price: 299,
    priceFormatted: "S/. 299.00",
    image: "/images/prod-mb-asrock.webp",
    badge: "Económica",
    inStock: true,
    warranty: "24 Meses de Garantía"
  },

  // --- Fuentes de Poder ---
  {
    id: "fuente-bequiet-straight-power",
    name: "Fuente de Poder Be quiet! Straight Power 12 850W 80+ Gold",
    category: "fuentes",
    categoryLabel: "Fuentes de Poder",
    specs: ["Potencia real: 850W", "Certificación 80+ Gold", "Ventilador Silent Wings ultrasilencioso", "Cables 100% Modulares"],
    price: 539,
    priceFormatted: "S/. 539.00",
    image: "/images/prod-psu-bequiet.webp",
    badge: "Ultra Silenciosa",
    inStock: true,
    warranty: "60 Meses de Garantía"
  },
  {
    id: "fuente-bequiet-pcie5",
    name: "Fuente de Poder 750W ATX 3.0 Modular PCIe 5.0 Ready",
    category: "fuentes",
    categoryLabel: "Fuentes de Poder",
    specs: ["Potencia real: 750W", "Certificación 80+ Gold", "Conector 12VHPWR PCIe 5.0 600W", "Eficiencia energética 90%+"],
    price: 449,
    priceFormatted: "S/. 449.00",
    image: "/images/prod-psu-pcie5.webp",
    badge: "PCIe 5.0 / RTX 40",
    inStock: true,
    warranty: "36 Meses de Garantía"
  },
  {
    id: "fuente-gamer-650w-bronze",
    name: "Fuente de Poder Gamer 650W 80 Plus Bronze",
    category: "fuentes",
    categoryLabel: "Fuentes de Poder",
    specs: ["Potencia real: 650W", "Certificación 80+ Bronze", "Ventilador silencioso de 120mm", "Protecciones OVP, UVP, SCP"],
    price: 269,
    priceFormatted: "S/. 269.00",
    image: "/images/prod-psu-gamer.webp",
    badge: "Confiable",
    inStock: true,
    warranty: "24 Meses de Garantía"
  }
];

export const STATS = [
  { value: "+12", label: "Años de Experiencia", desc: "Trayectoria técnica comprobada en Lima y Callao" },
  { value: "+150", label: "Productos Disponibles", desc: "Equipos armados y empresas aseguradas" },
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
