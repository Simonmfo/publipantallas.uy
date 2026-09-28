import React, { useState } from 'react';
import { BillboardScreen } from '../types';
import { MapPin, Eye, Sparkles, SlidersHorizontal, CheckCircle, Clock } from 'lucide-react';

interface ScreensCatalogProps {
  screens: BillboardScreen[];
  onReserveScreen: (screen: BillboardScreen) => void;
  onSimulateScreen: (screen: BillboardScreen) => void;
  onOpenMap: () => void;
}

export const ScreensCatalog: React.FC<ScreensCatalogProps> = ({
  screens,
  onReserveScreen,
  onSimulateScreen,
  onOpenMap
}) => {
  const [selectedZone, setSelectedZone] = useState<string>('all');

  const zones = [
    { id: 'all', label: 'Todas las 48 Pantallas' },
    { id: 'Centro', label: 'Centro & 18 de Julio' },
    { id: 'Tres Cruces', label: 'Tres Cruces Shopping' },
    { id: 'Pocitos', label: 'Rambla Pocitos & Kibón' },
    { id: 'Punta Carretas', label: 'Punta Carretas' },
    { id: 'Buceo / WTC', label: 'WTC & Buceo' }
  ];

  const filteredScreens = selectedZone === 'all'
    ? screens
    : screens.filter(s => s.zone === selectedZone);

  return (
    <section className="w-full py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#060e20] border-t border-b border-[#222a3d]/50" id="pantallas">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2.5">
            <span className="font-mono-code text-xs font-bold text-[#0ea5e9] tracking-widest uppercase">
              PUNTOS CLAVE EN MONTEVIDEO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#dae2fd] tracking-tight">
              Pantallas Destacadas &amp; Disponibilidad
            </h2>
            <p className="text-base text-[#bec8d2] max-w-2xl">
              Ubicaciones emblemáticas de gran afluencia peatonal y vehicular. Reserva tu espacio antes de que se agoten los cupos de la semana.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenMap}
            className="inline-flex items-center gap-2 font-mono-code text-xs font-bold text-[#4edea3] hover:text-[#6ffbbe] self-start md:self-auto py-2 px-3 rounded-lg bg-[#171f33] border border-[#222a3d] hover:border-[#4edea3]/40 transition-all cursor-pointer shadow-sm"
          >
            <MapPin className="w-4 h-4 text-[#4edea3]" />
            <span>Ver mapa de todas las 48 pantallas</span>
          </button>
        </div>

        {/* Zone Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#222a3d]/40">
          <div className="flex items-center gap-1.5 text-xs text-[#88929b] font-mono-code pr-2 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Zona:</span>
          </div>
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setSelectedZone(zone.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono-code transition-all whitespace-nowrap cursor-pointer ${
                selectedZone === zone.id
                  ? 'bg-[#0ea5e9] text-[#001e2f] font-bold shadow-[0_0_12px_rgba(14,165,233,0.35)]'
                  : 'bg-[#171f33] text-[#bec8d2] hover:bg-[#222a3d] hover:text-white border border-[#222a3d]'
              }`}
            >
              {zone.label}
            </button>
          ))}
        </div>

        {/* Screen Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredScreens.map((screen) => (
            <article
              key={screen.id}
              className="flex flex-col rounded-2xl bg-[#171f33] border border-[#222a3d] shadow-[0_4px_24px_rgba(0,0,0,0.5)] overflow-hidden group hover:shadow-[0_8px_32px_rgba(14,165,233,0.2)] hover:border-[#0ea5e9]/40 transition-all duration-300"
            >
              {/* Image & Overlay Zone */}
              <div className="relative w-full h-64 sm:h-72 bg-[#0b1326] overflow-hidden">
                <img
                  src={screen.imageUrl}
                  alt={screen.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171f33] via-black/20 to-transparent"></div>

                {/* Top Status Badge */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full font-mono-code text-[11px] font-bold tracking-wider flex items-center gap-1.5 shadow-md ${
                    screen.statusBadge.includes('INMEDIATA') || screen.statusBadge.includes('CUPOS')
                      ? 'bg-[#00a572] text-[#002113]'
                      : 'bg-[#131b2e]/90 text-[#89ceff] border border-[#0ea5e9]/30 backdrop-blur-md'
                  }`}>
                    <span className="h-2 w-2 rounded-full bg-current animate-ping"></span>
                    {screen.statusBadge}
                  </span>
                </div>

                {/* Bottom Left Location Tag */}
                <div className="absolute bottom-3.5 left-3.5 px-3 py-1 rounded-lg bg-[#060e20]/90 border border-[#222a3d] font-mono-code text-xs text-[#89ceff] font-bold backdrop-blur-md flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0ea5e9]" />
                  <span>{screen.locationBadge}</span>
                </div>

                {/* Simulator overlay button */}
                <button
                  type="button"
                  onClick={() => onSimulateScreen(screen)}
                  className="absolute top-3.5 right-3.5 px-3 py-1.5 rounded-lg bg-[#131b2e]/85 hover:bg-[#0ea5e9] text-white hover:text-[#001e2f] border border-[#222a3d] backdrop-blur-md font-mono-code text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                  title="Prueba cómo luciría tu anuncio en esta pantalla"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#89ceff]" />
                  <span>Simular Anuncio</span>
                </button>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex flex-col gap-5 flex-1 justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="text-[#88929b] font-mono-code text-xs">
                      {screen.categoryLabel}
                    </span>
                    <span className="text-[#4edea3] font-bold text-xl sm:text-2xl font-mono-code">
                      Desde ${screen.weeklyPriceUsd}/sem
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {screen.name}
                  </h3>

                  <p className="text-sm text-[#bec8d2] mt-1.5 leading-relaxed">
                    {screen.description}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-[#222a3d] text-center font-mono-code">
                  <div>
                    <span className="text-[#88929b] block text-[11px] uppercase tracking-wider">
                      Audiencia
                    </span>
                    <span className="text-[#89ceff] font-bold text-sm sm:text-base">
                      {screen.dailyAudience}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#88929b] block text-[11px] uppercase tracking-wider">
                      Tamaño / Formato
                    </span>
                    <span className="text-white font-bold text-sm sm:text-base">
                      {screen.dimensions}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#88929b] block text-[11px] uppercase tracking-wider">
                      Frecuencia
                    </span>
                    <span className="text-[#4edea3] font-bold text-sm sm:text-base">
                      {screen.frequency}
                    </span>
                  </div>
                </div>

                {/* Peak Hours & Specs */}
                <div className="flex items-center justify-between text-xs text-[#88929b] font-mono-code">
                  <span className="flex items-center gap-1 text-[#bec8d2]">
                    <Clock className="w-3.5 h-3.5 text-[#0ea5e9]" />
                    Pico: {screen.peakHours}
                  </span>
                  <span>{screen.featureLabel}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => onSimulateScreen(screen)}
                    className="flex-1 py-3 rounded-xl bg-[#222a3d] hover:bg-[#2d3449] text-[#89ceff] font-semibold text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Ver Detalles</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onReserveScreen(screen)}
                    className="flex-1 py-3 rounded-xl bg-[#0ea5e9] hover:bg-[#89ceff] text-[#001e2f] font-bold text-sm shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Reservar Esta Pantalla</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
