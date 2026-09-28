import { BillboardScreen, PricingPlan } from '../types';

export const BILLBOARD_SCREENS: BillboardScreen[] = [];


export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-led',
    tag: 'PANTALLAS LED PUBLICITARIAS',
    title: 'Plan Pantallas LED',
    subtitle: 'Presencia visual continua para comercios y servicios locales en puntos clave de Paysandú.',
    usdPrice: 150,
    uyuPrice: 5800,
    features: [
      'Emisión continua en pantallas LED de Paysandú',
      'Cientos de salidas diarias en alta definición',
      'Asistencia y diseño del anuncio bonificado',
      'Reporte periódico de emisiones y rotación de spots'
    ],
    ctaLabel: 'Elegir Plan LED'
  },
  {
    id: 'plan-wifi',
    tag: 'PORTAL CAUTIVO // 100% ATENCIÓN',
    title: 'Plan Puntos WiFi Cautivo',
    subtitle: 'Tu anuncio a pantalla completa en el celular de los usuarios al conectarse al WiFi de locales en Paysandú.',
    usdPrice: 190,
    uyuPrice: 7400,
    isPopular: true,
    savingsNote: '100% de atención garantizada • Botón a WhatsApp o Web',
    features: [
      'Anuncio a pantalla completa obligatorio antes de navegar',
      'Botón interactivo directo a tu WhatsApp, Instagram o sitio web',
      'Presencia en red de locales gastronómicos y comerciales de Paysandú',
      'Sin bloqueadores de publicidad (imposible de saltar)',
      'Métricas exactas de impresiones, usuarios únicos y clics'
    ],
    ctaLabel: 'Elegir Plan WiFi Cautivo'
  },
  {
    id: 'combo-total',
    tag: 'COMBO INTEGRAL // MÁXIMA COBERTURA',
    title: 'Combo Pantallas LED + WiFi',
    subtitle: 'La combinación perfecta: impacto visual en la vía pública + presencia directa en los celulares de los clientes.',
    usdPrice: 290,
    uyuPrice: 11300,
    savingsNote: 'Tarifa bonificada contratando ambos canales',
    features: [
      'Presencia en pantallas LED de vía pública en Paysandú',
      'Anuncios en red de puntos WiFi con portal cautivo',
      'Estrategia omnicanal (visibilidad en la calle y en el móvil)',
      'Cambio de piezas publicitarias incluido en el mes',
      'Reporte consolidado de impactos y conexiones'
    ],
    ctaLabel: 'Elegir Combo Total'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '1',
    title: 'Elige tu Canal o Combo',
    description: 'Selecciona Pantallas LED, Publicidad en Puntos WiFi con Portal Cautivo o el Combo Total para tu negocio en Paysandú.'
  },
  {
    step: '2',
    title: 'Envíanos tu Anuncio o Promo',
    description: 'Envíanos tu flyer, video o imagen promocional. Si no tienes material listo, te ayudamos a diseñarlo sin costo.'
  },
  {
    step: '3',
    title: '¡Activación y Reporte!',
    description: 'Activamos tu campaña en pantallas LED y en la red WiFi de Paysandú, con métricas claras de visualizaciones y clics.'
  }
];

