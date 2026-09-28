import { BillboardScreen, PricingPlan } from '../types';

export const BILLBOARD_SCREENS: BillboardScreen[] = [];


export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    tag: 'PLAN STARTER LOCAL',
    title: 'Comercios & Profesionales',
    subtitle: 'Ideal para tiendas, clínicas, profesionales y lanzamientos con presupuesto accesible en Paysandú.',
    usdPrice: 150,
    uyuPrice: 5800,
    features: [
      'Emisión continua en pantallas LED de Paysandú',
      '420 salidas diarias del spot publicitario',
      'Spots de 10 a 15 segundos en alta definición',
      'Adaptación y diseño de anuncio sin costo adicional',
      'Reporte periódico de emisiones'
    ],
    ctaLabel: 'Elegir Plan Starter'
  },
  {
    id: 'comercial',
    tag: 'PLAN COMERCIAL ACTIVO',
    title: 'Alta Frecuencia & Visibilidad',
    subtitle: 'Mayor presencia y rotación para destacar tu marca ante todo el tránsito comercial de Paysandú.',
    usdPrice: 290,
    uyuPrice: 11300,
    isPopular: true,
    savingsNote: 'El más elegido • Máxima frecuencia diaria',
    features: [
      'Emisión intensiva (más de 840 salidas diarias)',
      'Frecuencia destacada en horarios pico y comerciales',
      'Cambio de spot o promo sin costo durante el mes',
      'Diseño publicitario profesional incluido',
      'Reporte detallado y auditoría de transmisión'
    ],
    ctaLabel: 'Elegir Plan Comercial'
  },
  {
    id: 'gran-impacto',
    tag: 'PLAN GRAN IMPACTO',
    title: 'Dominancia & Cobertura Total',
    subtitle: 'Para marcas líderes, eventos, ferias e inauguraciones que exigen presencia masiva ininterrumpida.',
    usdPrice: 'custom',
    savingsNote: 'Exclusividad de rubro y descuento por volumen',
    features: [
      'Máxima frecuencia y prioridad en pantalla',
      'Bloqueo y exclusividad frente a competidores directos',
      'Ideal para lanzamientos, temporadas o eventos masivos',
      'Múltiples versiones de anuncios rotativos',
      'Asesor comercial y soporte técnico dedicado'
    ],
    ctaLabel: 'Hablar con un Asesor'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '1',
    title: 'Elige tu Plan',
    description: 'Selecciona el plan de pantallas LED que mejor se adapte al presupuesto y objetivo de tu negocio en Paysandú.'
  },
  {
    step: '2',
    title: 'Envíanos tu Anuncio o Flyer',
    description: 'Envía tu imagen, video o idea promocional. Si no tienes material listo, nuestro equipo te lo diseña o adapta sin costo.'
  },
  {
    step: '3',
    title: '¡Lanzamiento y Reporte!',
    description: 'Activamos tu campaña en las pantallas LED de Paysandú y te enviamos el comprobante y reporte de transmisión.'
  }
];


