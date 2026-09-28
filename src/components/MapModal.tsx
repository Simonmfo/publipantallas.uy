import React, { useState } from 'react';
import { BillboardScreen } from '../types';
import { X, MapPin, Radio, Eye, CheckCircle, Navigation, ShieldCheck } from 'lucide-react';

interface MapModalProps {
  screens: BillboardScreen[];
  onClose: () => void;
  onSelectScreen: (screen: BillboardScreen) => void;
}

export const MapModal: React.FC<MapModalProps> = ({
  screens,
  onClose,
  onSelectScreen,
}) => {
  const [selectedScreenId, setSelectedScreenId] = useState<string>(screens[0]?.id || '');
  const [filterZone, setFilterZone] = useState<string>('all');

  const selectedScreen = screens.find((s) => s.id === selectedScreenId) || screens[0];

  const filteredScreens = filterZone === 'all'
    ? screens
    : screens.filter(s => s.zone === filterZone);

  // Normalized map coordinates for Montevideo visual schematic
  // West (-56.20) to East (-56.08), North (-34.88) to South (-34.93)
  const getMapPosition = (lat: number, lng: number) => {
    // Bounds for Montevideo area
    const minLng = -56.22;
    const maxLng = -56.08;
    const minLat = -34.94;
    const maxLat = -34.87;

    const x = ((lng - minLng) / (maxLng - minLng)) * 100;
    const y = ((maxLat - lat) / (maxLat - minLat)) * 100;

    return {
      left: `${Math.max(10, Math.min(90, x))}%`,
      top: `${Math.max(12, Math.min(88, y))}%`,
    };
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#131b2e] border border-[#222a3d] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222a3d] bg-[#171f33]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center">
              <Navigation className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>Mapa de Cobertura DOOH Montevideo</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#00a572]/20 text-[#4edea3] font-mono-code">
                  48 PANTALLAS
                </span>
              </h3>
              <p className="text-xs text-[#88929b] font-mono-code">
                Red interconectada en tiempo real por fibra óptica
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

        {/* Filter bar */}
        <div className="px-6 py-2.5 bg-[#0e1628] border-b border-[#222a3d] flex items-center gap-2 overflow-x-auto text-xs font-mono-code">
          <span className="text-[#88929b] mr-1">Filtrar:</span>
          {['all', 'Centro', 'Tres Cruces', 'Pocitos', 'Punta Carretas', 'Buceo / WTC'].map((z) => (
            <button
              key={z}
              onClick={() => setFilterZone(z)}
              className={`px-3 py-1 rounded-md transition-all ${
                filterZone === z
                  ? 'bg-[#0ea5e9] text-[#001e2f] font-bold'
                  : 'bg-[#171f33] text-[#bec8d2] hover:text-white'
              }`}
            >
              {z === 'all' ? 'Todas' : z}
            </button>
          ))}
        </div>

        {/* Content Body: Map + Detail sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          {/* Interactive Map Visual (Left) */}
          <div className="lg:col-span-7 bg-[#0b1326] relative p-6 flex flex-col justify-between overflow-hidden select-none border-b lg:border-b-0 lg:border-r border-[#222a3d]">
            {/* SVG stylized road & coastline grid for Montevideo */}
            <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#222a3d" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              {/* Stylized Coastline of Rambla Montevideo */}
              <path
                d="M 50 380 Q 200 420 380 430 T 700 390 T 950 330"
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="3"
                strokeDasharray="4 4"
              />
              {/* Arteries: 18 de Julio & Av Italia */}
              <path d="M 120 280 L 400 240 L 780 180" fill="none" stroke="#3e4850" strokeWidth="2.5" />
              <path d="M 380 120 L 420 340" fill="none" stroke="#3e4850" strokeWidth="2" />
            </svg>

            {/* Geographical landmarks on map */}
            <div className="absolute top-4 left-6 text-[10px] font-mono-code text-[#4edea3]/70 font-semibold">
              BAHÍA DE MONTEVIDEO / PUERTO
            </div>
            <div className="absolute bottom-4 right-8 text-[10px] font-mono-code text-[#0ea5e9]/70 font-semibold">
              RÍO DE LA PLATA / RAMBLA
            </div>
            <div className="absolute top-1/2 left-1/3 -translate-y-6 text-[10px] font-mono-code text-[#88929b]/60">
              AV. 18 DE JULIO
            </div>

            {/* Billboard markers */}
            <div className="relative w-full h-72 sm:h-96">
              {filteredScreens.map((s) => {
                const pos = getMapPosition(s.coordinates.lat, s.coordinates.lng);
                const isSelected = s.id === selectedScreenId;

                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedScreenId(s.id)}
                    style={{ left: pos.left, top: pos.top }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-300 z-20 ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                    }`}
                  >
                    <div className="relative flex items-center justify-center">
                      <span className={`animate-ping absolute inline-flex h-8 w-8 rounded-full opacity-40 ${
                        isSelected ? 'bg-[#0ea5e9]' : 'bg-[#4edea3]'
                      }`}></span>
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-lg transition-colors ${
                        isSelected
                          ? 'bg-[#0ea5e9] border-white text-[#001e2f]'
                          : 'bg-[#171f33] border-[#4edea3] text-[#4edea3]'
                      }`}>
                        <Radio className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Popover label on hover or selected */}
                    <div className={`absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-[#171f33] border border-[#222a3d] text-[10px] font-mono-code whitespace-nowrap shadow-md transition-opacity pointer-events-none ${
                      isSelected ? 'opacity-100 text-white font-bold border-[#0ea5e9]' : 'opacity-85 text-[#bec8d2]'
                    }`}>
                      {s.zone}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Map bottom legend */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono-code text-[#88929b] pt-2 border-t border-[#222a3d]/60">
              <span className="flex items-center gap-1.5 text-[#4edea3]">
                <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
                Pantalla Activa Transmitiendo
              </span>
              <span>Pulsar un marcador para detalles</span>
            </div>
          </div>

          {/* Selected Screen Details Sidebar (Right) */}
          <div className="lg:col-span-5 p-6 flex flex-col justify-between bg-[#171f33] gap-5">
            <div className="space-y-4">
              <div className="relative w-full h-44 rounded-xl overflow-hidden bg-black border border-[#222a3d]">
                <img
                  src={selectedScreen.imageUrl}
                  alt={selectedScreen.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#00a572] text-[#002113] font-mono-code text-[10px] font-bold">
                  {selectedScreen.statusBadge}
                </div>
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded bg-black/80 font-mono-code text-[11px] text-[#89ceff]">
                  {selectedScreen.location}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#88929b] font-mono-code">
                    {selectedScreen.zone}
                  </span>
                  <span className="font-mono-code text-lg font-bold text-[#4edea3]">
                    ${selectedScreen.weeklyPriceUsd} USD / sem
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  {selectedScreen.name}
                </h4>
                <p className="text-xs text-[#bec8d2] mt-1 line-clamp-2">
                  {selectedScreen.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono-code">
                <div className="p-2 rounded-lg bg-[#222a3d]/70">
                  <span className="text-[#88929b] block text-[10px]">AUDIENCIA DIARIA</span>
                  <span className="font-bold text-[#89ceff]">{selectedScreen.dailyAudience}</span>
                </div>
                <div className="p-2 rounded-lg bg-[#222a3d]/70">
                  <span className="text-[#88929b] block text-[10px]">DIMENSIONES</span>
                  <span className="font-bold text-white">{selectedScreen.dimensions}</span>
                </div>
                <div className="p-2 rounded-lg bg-[#222a3d]/70">
                  <span className="text-[#88929b] block text-[10px]">FRECUENCIA</span>
                  <span className="font-bold text-[#4edea3]">{selectedScreen.frequency}</span>
                </div>
                <div className="p-2 rounded-lg bg-[#222a3d]/70">
                  <span className="text-[#88929b] block text-[10px]">HORAS PICO</span>
                  <span className="font-bold text-[#bec8d2] truncate block">{selectedScreen.peakHours.split('y')[0]}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  onSelectScreen(selectedScreen);
                  onClose();
                }}
                className="w-full py-3.5 rounded-xl bg-[#0ea5e9] hover:bg-[#89ceff] text-[#001e2f] font-bold text-sm shadow-[0_0_20px_rgba(14,165,233,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Reservar Esta Pantalla en Montevideo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
