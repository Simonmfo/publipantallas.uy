import { BillboardScreen, PricingPlan } from '../types';

export const BILLBOARD_SCREENS: BillboardScreen[] = [
  {
    id: '18-de-julio-ejido',
    name: 'Pantalla Gigante 18 de Julio & Ejido',
    location: 'Avenida 18 de Julio & Ejido',
    zone: 'Centro',
    dailyAudience: '142.000 / día',
    audienceNumber: 142000,
    dimensions: '8m x 4m (32 m²)',
    frequency: 'Cada 60 seg',
    weeklyPriceUsd: 190,
    monthlyPriceUsd: 680,
    statusBadge: 'DISPONIBILIDAD INMEDIATA',
    statusColor: 'secondary',
    locationBadge: 'Avenida 18 de Julio & Ejido',
    categoryLabel: 'Centro • Alto Tráfico Peatonal y Vehicular',
    featureLabel: 'Spots de 10s • Full HD',
    description: 'El punto más icónico de la principal avenida comercial de la capital. Máxima atención en horarios bancarios y comerciales.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS_PMXGY13_mTWJGqnW19IPgfzLYOo_Sh3QCK_boKo5tH2rExv3jStulBJNP3Y2Ha5ALNn1Cxp6HB4ri4UHAK2ABPKqwmzc190ypaG6tMPHEx8Imb9giOaJahDl1fyk88saikcRkXml46riDaL12oSVQJhg4nF09yWCOfS_LwY7DZHrHpLBsh1RHJtj4J-VMsDXz0LyJWypJWcPBKFF0ATs1r09Y9jR4zdYa-VxI1R3YwzUzQ0Lf4r',
    aspectRatio: '16:9',
    resolution: '1920 x 1080 px (P4 Outdoor High Nit)',
    peakHours: '11:30 - 14:30 y 17:00 - 20:00',
    trafficType: 'Vehicular masivo + Peatonal bancario/comercial',
    coordinates: { lat: -34.9058, lng: -56.1862 }
  },
  {
    id: 'tres-cruces-shopping',
    name: 'Mega Pantalla Tres Cruces Shopping',
    location: 'Terminal Tres Cruces & Bv. Artigas',
    zone: 'Tres Cruces',
    dailyAudience: '195.000 / día',
    audienceNumber: 195000,
    dimensions: '10m x 4m (40 m²)',
    frequency: 'Cada 60 seg',
    weeklyPriceUsd: 220,
    monthlyPriceUsd: 790,
    statusBadge: 'ÚLTIMOS 2 CUPOS',
    statusColor: 'secondary',
    locationBadge: 'Terminal Tres Cruces & Bv. Artigas',
    categoryLabel: 'Acceso Principal • Terminal & Shopping',
    featureLabel: 'Gran Visibilidad Panorámica',
    description: 'Ubicada en la entrada de mayor movimiento vehicular del país. Impacta a residentes y viajeros interdepartamentales todos los días.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTGPR6BGo0uhqVuTT1OPYLU-EEP8yoF_Sj96CsowbgWRNxp4SH7vCu1B09JB57FIGbzjgZbpGZUS2h2OaFzlgm0PDKiHQxfqJw-XNBv0qVar1uf2tY4HvfsOLbSrnQmh2VTr0awjNyqQYZgl1muSihpIkkjQ2yhRvZ1HfeRQoKdMVBABzBwP_QRgNq-ZRQdqiAmWRZeDgC1ykZ4uiY-mdb3wEI7GPyAZ25zlQyDghHfKDR9FxmYxQI',
    aspectRatio: '16:9',
    resolution: '2560 x 1080 px (Ultra Wide Panorámica)',
    peakHours: '07:30 - 10:00 y 18:00 - 21:30',
    trafficType: 'Hub de transporte nacional + Shoppers',
    coordinates: { lat: -34.8931, lng: -56.1664 }
  },
  {
    id: 'pocitos-kibon',
    name: 'Totem Rambla Pocitos & Kibón',
    location: 'Rambla de Pocitos & Kibón',
    zone: 'Pocitos',
    dailyAudience: '88.500 / día',
    audienceNumber: 88500,
    dimensions: 'Formato Vertical 9:16',
    frequency: 'Cada 60 seg',
    weeklyPriceUsd: 160,
    monthlyPriceUsd: 590,
    statusBadge: 'ZONA RESIDENCIAL VIP',
    statusColor: 'primary',
    locationBadge: 'Rambla de Pocitos & Kibón',
    categoryLabel: 'Costanera • Público ABC1 de Alto Poder Adquisitivo',
    featureLabel: 'Resolución Crystal Ultra-Fine',
    description: 'Formato vertical moderno ideal para marcas de moda, gastronomía, eventos y servicios premium frente a la playa.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrqR-8OeWnY2STHT2outJ5OEEam0LGqvk00a0uedzkaH7zTlijyaWU_TwPXtL7BI3e8kc6pDTLvqPo2uGYhg3cdOsAAZk_fegWwLtNCl40nvEhMh_HiFMxDL9v3MQI2KE3Br7iOOGlGdZx0JzKa9igwFPWqHhcv3oVsaY3KFBEca0crx0ZT-xCz08cEn9vrFIoVZ3fB0kmnjIbYPJOom40iIiB-SnRHMD7XcADIgNeQNfwoy4P7eqV',
    aspectRatio: '9:16',
    resolution: '1080 x 1920 px Vertical 4K HDR',
    peakHours: '16:30 - 21:30 (Fines de semana 10:00 - 22:00)',
    trafficType: 'Peatonal costanero + Running + Vehicular paseo',
    coordinates: { lat: -34.9125, lng: -56.1364 }
  },
  {
    id: 'punta-carretas-shopping',
    name: 'Doble Pantalla Punta Carretas',
    location: 'Punta Carretas Shopping',
    zone: 'Punta Carretas',
    dailyAudience: '112.000 / día',
    audienceNumber: 112000,
    dimensions: '2X Pantallas Sincronizadas',
    frequency: 'Cada 60 seg',
    weeklyPriceUsd: 210,
    monthlyPriceUsd: 740,
    statusBadge: 'DOBLE IMPACTO SINCRONIZADO',
    statusColor: 'secondary',
    locationBadge: 'Punta Carretas Shopping',
    categoryLabel: 'Retail & Shopping • Circuito Comercial',
    featureLabel: 'Sincronización Total',
    description: 'Efecto visual sincronizado de 2 pantallas simultáneas que duplican la atención de clientes rumbo a compras y gastronomía.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZtl0HFOI78hbSXFtM21AYIkxC2mt_8EZYTtiQ3cWJnJx-HlkG4u1ctSswQYPAlOAie71gry1DGT7qNuSLJoA02UE_2FotLCQ5iZmJsNq466ehuAlT1uprYZx5f4RoJ9pIXeyMWnwp_UjjRiyqvWMseip-s0zBDXRfxjYzoP3JR560dabhIsH21Brzu6PVXjoQ-nSw4iO-Hk1M6_fxEfoigABXO23qCiuCup3Cyj9ei7CAq2Q2kZW5',
    aspectRatio: '16:9',
    resolution: '2x (1920 x 1080 px) Dual Display',
    peakHours: '12:00 - 15:00 y 18:00 - 22:00',
    trafficType: 'Consumidores shopping, familias y público joven ABC1',
    coordinates: { lat: -34.9242, lng: -56.1581 }
  },
  {
    id: 'wtc-buceo',
    name: 'Totem Digital World Trade Center',
    location: 'Luis Alberto de Herrera & 26 de Marzo',
    zone: 'Buceo / WTC',
    dailyAudience: '96.000 / día',
    audienceNumber: 96000,
    dimensions: '6m x 3m (18 m²)',
    frequency: 'Cada 60 seg',
    weeklyPriceUsd: 185,
    monthlyPriceUsd: 660,
    statusBadge: 'DISTRITO CORPORATIVO',
    statusColor: 'primary',
    locationBadge: 'WTC & Montevideo Shopping',
    categoryLabel: 'Finanzas & Empresas • Decision Makers',
    featureLabel: 'Alta Frecuencia Ejecutiva',
    description: 'Frente a las torres del World Trade Center y entrada a Montevideo Shopping. Audiencia ejecutiva y profesional con alto poder de compra.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTGPR6BGo0uhqVuTT1OPYLU-EEP8yoF_Sj96CsowbgWRNxp4SH7vCu1B09JB57FIGbzjgZbpGZUS2h2OaFzlgm0PDKiHQxfqJw-XNBv0qVar1uf2tY4HvfsOLbSrnQmh2VTr0awjNyqQYZgl1muSihpIkkjQ2yhRvZ1HfeRQoKdMVBABzBwP_QRgNq-ZRQdqiAmWRZeDgC1ykZ4uiY-mdb3wEI7GPyAZ25zlQyDghHfKDR9FxmYxQI',
    aspectRatio: '16:9',
    resolution: '1920 x 1080 px',
    peakHours: '08:30 - 10:30 y 17:30 - 19:30',
    trafficType: 'Corporativo, directivos, tecnología y finanzas',
    coordinates: { lat: -34.9038, lng: -56.1348 }
  },
  {
    id: 'portones-av-italia',
    name: 'Circuito Av. Italia & Portones',
    location: 'Av. Italia & Av. Bolivia',
    zone: 'Carrasco',
    dailyAudience: '135.000 / día',
    audienceNumber: 135000,
    dimensions: '9m x 3.5m (31.5 m²)',
    frequency: 'Cada 60 seg',
    weeklyPriceUsd: 200,
    monthlyPriceUsd: 710,
    statusBadge: 'CORREDOR ESTE / AEROPUERTO',
    statusColor: 'secondary',
    locationBadge: 'Portones Shopping & Av. Bolivia',
    categoryLabel: 'Acceso Este • Tránsito Carrasco y Canelones',
    featureLabel: 'Máxima Visibilidad Vehicular',
    description: 'Arteria principal que conecta el centro con Carrasco, Ciudad de la Costa y Aeropuerto de Carrasco. Tránsito fluido e ininterrumpido.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS_PMXGY13_mTWJGqnW19IPgfzLYOo_Sh3QCK_boKo5tH2rExv3jStulBJNP3Y2Ha5ALNn1Cxp6HB4ri4UHAK2ABPKqwmzc190ypaG6tMPHEx8Imb9giOaJahDl1fyk88saikcRkXml46riDaL12oSVQJhg4nF09yWCOfS_LwY7DZHrHpLBsh1RHJtj4J-VMsDXz0LyJWypJWcPBKFF0ATs1r09Y9jR4zdYa-VxI1R3YwzUzQ0Lf4r',
    aspectRatio: '16:9',
    resolution: '1920 x 1080 px',
    peakHours: '07:30 - 09:30 y 17:30 - 20:30',
    trafficType: 'Vehicular interurbano este + Shopping',
    coordinates: { lat: -34.8812, lng: -56.0886 }
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    tag: 'PLAN STARTER LOCAL',
    title: 'Para Comercios de Barrio',
    subtitle: 'Ideal para tiendas, clínicas, profesionales y lanzamientos barriales con presupuesto acotado.',
    usdPrice: 150,
    uyuPrice: 5800,
    features: [
      '1 Pantalla Premium a tu elección',
      '420 salidas diarias (cada 2 minutos)',
      'Asistencia gratuita para adaptar tu diseño',
      'Reporte mensual de emisiones'
    ],
    ctaLabel: 'Elegir Plan Starter'
  },
  {
    id: 'circuito-urbano',
    tag: 'PLAN CIRCUITO URBANO',
    title: 'Presencia Multizona Activa',
    subtitle: 'Combina avenidas principales y zonas comerciales para que tu marca esté presente en el día a día de la ciudad.',
    usdPrice: 490,
    uyuPrice: 19100,
    isPopular: true,
    savingsNote: 'Ahorro del 25% respecto a pantallas individuales',
    features: [
      '5 Pantallas Estratégicas en Montevideo',
      '2.100 salidas diarias combinadas',
      'Frecuencia de 1 spot cada 60 segundos',
      'Cambio de spot/anuncio ilimitado en el mes',
      'Soporte y gestor de cuenta dedicado'
    ],
    ctaLabel: 'Elegir Plan Circuito Urbano'
  },
  {
    id: 'cobertura-total',
    tag: 'PLAN COBERTURA TOTAL',
    title: 'Dominancia de Marca',
    subtitle: 'Red completa de 48 pantallas para grandes campañas institucionales, ferias y lanzamientos nacionales.',
    usdPrice: 'custom',
    savingsNote: 'Descuento por volumen y exclusividad de rubro',
    features: [
      'Red completa 48 pantallas en simultáneo',
      'Más de 1.800.000 impactos diarios potenciales',
      'Exclusividad horaria y bloqueo de competidores',
      'Certificación y auditoría fotográfica en vivo'
    ],
    ctaLabel: 'Hablar con un Asesor'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '1',
    title: 'Elige tus Pantallas o Zona',
    description: 'Selecciona el punto específico de la ciudad donde circula tu cliente ideal (Centro, Pocitos, Tres Cruces o toda la red).'
  },
  {
    step: '2',
    title: 'Envíanos tu Anuncio o Imagen',
    description: 'Sube tu video o imagen promocional. ¿No tienes diseño listo? Nuestro equipo adapta tu logo y ofertas sin costo adicional.'
  },
  {
    step: '3',
    title: '¡En Vivo en Menos de 24 Horas!',
    description: 'Tu campaña se activa en las pantallas seleccionadas. Recibes fotos y video comprobante de tu anuncio transmitiéndose.'
  }
];
