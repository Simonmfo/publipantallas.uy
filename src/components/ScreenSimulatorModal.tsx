import React, { useState } from 'react';
import { BillboardScreen } from '../types';
import { X, Sparkles, MapPin, Eye, CheckCircle, ArrowRight, Palette, Sliders } from 'lucide-react';

interface ScreenSimulatorModalProps {
  screen: BillboardScreen;
  onClose: () => void;
  onSelectForQuote: (screen: BillboardScreen, customText: string) => void;
}

export const ScreenSimulatorModal: React.FC<ScreenSimulatorModalProps> = ({
  screen,
  onClose,
  onSelectForQuote,
}) => {
  const [headline, setHeadline] = useState('TU MARCA AQUÍ');
  const [tagline, setTagline] = useState('Descuentos exclusivos este fin de semana');
  const [callToAction, setCallToAction] = useState('Visítanos en 18 de Julio 1420');
  const [accentColor, setAccentColor] = useState('#0ea5e9');
  const [template, setTemplate] = useState<'promo' | 'luxury' | 'gastronomy' | 'event'>('promo');

  const templates = [
    {
      id: 'promo',
      label: 'Comercio / Promo',
      headline: 'GRAN LIQUIDACIÓN DE TEMPORADA',
      tagline: 'Hasta 40% OFF en toda la tienda · Solo por esta semana',
      cta: 'Centro de Montevideo · Envíos a todo el país',
      color: '#0ea5e9'
    },
    {
      id: 'luxury',
      label: 'Marca / Premium',
      headline: 'NUEVA COLECCIÓN OTOÑO 2025',
      tagline: 'Diseño, exclusividad y vanguardia en cada detalle',
      cta: 'Descúbrelo en Punta Carretas Shopping',
      color: '#4edea3'
    },
    {
      id: 'gastronomy',
      label: 'Gastronomía',
      headline: 'AUTÉNTICA PIZZA NAPOLITANA',
      tagline: 'Masa madre 48hs y horno a leña en Pocitos',
      cta: 'Reservas por WhatsApp: 099 123 456',
      color: '#f59e0b'
    },
    {
      id: 'event',
      label: 'Evento / Concierto',
      headline: 'FESTIVAL MONTEVIDEO EN VIVO',
      tagline: 'Más de 15 bandas nacionales e internacionales',
      cta: 'Entradas en venta en RedTickets',
      color: '#ec4899'
    }
  ];

  const handleApplyTemplate = (t: typeof templates[0]) => {
    setTemplate(t.id as any);
    setHeadline(t.headline);
    setTagline(t.tagline);
    setCallToAction(t.cta);
    setAccentColor(t.color);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#131b2e] border border-[#222a3d] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-6">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222a3d] bg-[#171f33]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Simulador DOOH en Vivo
              </h3>
              <p className="text-xs text-[#88929b] font-mono-code">
                {screen.name} · {screen.dimensions}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#88929b] hover:text-white hover:bg-[#222a3d] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Billboard Canvas Preview (Left/Top) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative rounded-xl overflow-hidden bg-black border border-[#222a3d] shadow-xl group aspect-video sm:aspect-auto sm:h-80 flex items-center justify-center">
              {/* Actual photo of the billboard location */}
              <img
                src={screen.imageUrl}
                alt={screen.name}
                className="w-full h-full object-cover filter brightness-[0.75] contrast-105"
                referrerPolicy="no-referrer"
              />

              {/* Simulated LED Screen Container Embedded in the billboard area */}
              <div 
                className="absolute inset-4 sm:inset-8 border-2 border-white/40 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(14,165,233,0.5)] flex flex-col justify-between p-4 sm:p-6 backdrop-blur-[1px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(11, 19, 38, 0.92) 0%, rgba(19, 27, 46, 0.95) 100%)',
                }}
              >
                {/* LED pixel grid overlay texture */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                    backgroundSize: '4px 4px'
                  }}
                ></div>

                {/* Simulated Screen Top info */}
                <div className="relative z-10 flex items-center justify-between">
                  <span 
                    className="font-mono-code text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{ backgroundColor: `${accentColor}33`, color: accentColor }}
                  >
                    SPOT EN VIVO (10s)
                  </span>
                  <span className="font-mono-code text-[10px] sm:text-xs text-white/70">
                    MONTEVIDEO DOOH
                  </span>
                </div>

                {/* Main simulated headline & copy */}
                <div className="relative z-10 text-center space-y-1.5 my-auto">
                  <h4 
                    className="text-lg sm:text-2xl font-extrabold uppercase tracking-tight text-balance leading-tight drop-shadow-md"
                    style={{ color: accentColor }}
                  >
                    {headline || 'TU MARCA AQUÍ'}
                  </h4>
                  <p className="text-xs sm:text-sm text-white font-medium drop-shadow leading-snug">
                    {tagline || 'Tu mensaje promocional o lanzamiento'}
                  </p>
                </div>

                {/* Simulated Screen bottom CTA */}
                <div className="relative z-10 pt-2 border-t border-white/20 flex items-center justify-between text-[10px] sm:text-xs text-white/90 font-mono-code">
                  <span className="truncate max-w-[200px]">{callToAction}</span>
                  <span className="text-[#4edea3] font-bold">142k impactos/día</span>
                </div>
              </div>

              {/* Watermark badge on real screen preview */}
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/75 text-[10px] font-mono-code text-[#bec8d2]">
                Vista Previa Renderizada
              </div>
            </div>

            {/* Screen Metrics Summary */}
            <div className="grid grid-cols-3 gap-2 p-3 bg-[#171f33] rounded-xl border border-[#222a3d] text-center font-mono-code text-xs">
              <div>
                <span className="text-[#88929b] block text-[10px]">TAMAÑO</span>
                <span className="text-white font-bold">{screen.dimensions}</span>
              </div>
              <div>
                <span className="text-[#88929b] block text-[10px]">RESOLUCIÓN</span>
                <span className="text-[#89ceff] font-bold truncate block">{screen.resolution.split(' ')[0]}</span>
              </div>
              <div>
                <span className="text-[#88929b] block text-[10px]">TASA REFRESCO</span>
                <span className="text-[#4edea3] font-bold">{screen.frequency}</span>
              </div>
            </div>
          </div>

          {/* Controls & Configuration (Right/Bottom) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono-code text-[#bec8d2] font-semibold block mb-1.5 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#0ea5e9]" />
                  <span>Plantillas Rápidas:</span>
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {templates.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => handleApplyTemplate(t)}
                      className={`p-2 rounded-lg text-xs font-medium text-left transition-all border ${
                        template === t.id
                          ? 'bg-[#171f33] border-[#0ea5e9] text-white shadow-sm'
                          : 'bg-[#131b2e] border-[#222a3d] text-[#88929b] hover:text-[#bec8d2]'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title input */}
              <div>
                <label className="text-xs font-mono-code text-[#bec8d2] font-semibold block mb-1">
                  Titular Principal:
                </label>
                <input
                  type="text"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  maxLength={40}
                  className="w-full px-3 py-2 rounded-lg bg-[#222a3d] text-white text-xs border border-transparent focus:border-[#0ea5e9] focus:outline-none"
                  placeholder="Ej. NUEVO LOCAL EN MONTEVIDEO"
                />
              </div>

              {/* Tagline input */}
              <div>
                <label className="text-xs font-mono-code text-[#bec8d2] font-semibold block mb-1">
                  Texto o Beneficio:
                </label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  maxLength={65}
                  className="w-full px-3 py-2 rounded-lg bg-[#222a3d] text-white text-xs border border-transparent focus:border-[#0ea5e9] focus:outline-none"
                  placeholder="Ej. 2x1 en almuerzos ejecutivos"
                />
              </div>

              {/* CTA input */}
              <div>
                <label className="text-xs font-mono-code text-[#bec8d2] font-semibold block mb-1">
                  Llamado a la Acción (Ubicación / Web / Tel):
                </label>
                <input
                  type="text"
                  value={callToAction}
                  onChange={(e) => setCallToAction(e.target.value)}
                  maxLength={40}
                  className="w-full px-3 py-2 rounded-lg bg-[#222a3d] text-white text-xs border border-transparent focus:border-[#0ea5e9] focus:outline-none"
                  placeholder="Ej. Visítanos en nuestra sucursal"
                />
              </div>

              {/* Color picker */}
              <div>
                <label className="text-xs font-mono-code text-[#bec8d2] font-semibold block mb-1.5 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-[#0ea5e9]" />
                  <span>Color de Acento del Anuncio:</span>
                </label>
                <div className="flex items-center gap-2">
                  {['#0ea5e9', '#4edea3', '#f59e0b', '#ec4899', '#a855f7', '#ffffff'].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setAccentColor(c)}
                      className={`w-7 h-7 rounded-full border-2 transition-transform ${
                        accentColor === c ? 'scale-110 border-white' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Confirm CTA */}
            <div className="pt-3 border-t border-[#222a3d]">
              <button
                type="button"
                onClick={() => {
                  onSelectForQuote(screen, `Simulación realizada: "${headline}" - ${tagline}`);
                  onClose();
                }}
                className="w-full py-3.5 rounded-xl bg-[#0ea5e9] hover:bg-[#89ceff] text-[#001e2f] font-bold text-sm shadow-[0_0_20px_rgba(14,165,233,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Cotizar con Esta Pantalla y Anuncio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
