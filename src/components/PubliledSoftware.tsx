import React, { useState } from 'react';
import { Tv, MessageCircle, CheckCircle2, Check, Smartphone, Sparkles } from 'lucide-react';

export const PubliledSoftware: React.FC = () => {
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [trialScreens, setTrialScreens] = useState(2);
  const [trialEmail, setTrialEmail] = useState('');
  const [trialSubmitted, setTrialSubmitted] = useState(false);

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trialEmail) return;
    setTrialSubmitted(true);
  };

  return (
    <section className="w-full py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0b1326]" id="software-publiled">
      <div className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-br from-[#171f33] to-[#131b2e] border border-[#222a3d] p-8 lg:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Column */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#4edea3] font-bold uppercase tracking-wider">
            <Tv className="w-4 h-4 text-[#4edea3]" />
            <span>SOFTWARE PUBLILED PARA LOCALES COMERCIALES</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
            ¿Tienes televisores o pantallas en tu tienda, restaurante o gimnasio?
          </h3>

          <p className="text-base text-[#bec8d2] leading-relaxed">
            Convierte cualquier pantalla en tu propia cartelera digital con nuestra app. Controla promociones, precios del día y videos directamente desde tu celular o computadora. Sin cables ni equipos caros.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            <div className="flex items-baseline gap-2">
              <span className="font-mono-code text-3xl sm:text-4xl font-extrabold text-[#4edea3]">
                5,90 €
              </span>
              <span className="font-mono-code text-xs text-[#88929b]">
                / pantalla al mes
              </span>
            </div>
            <span className="text-[#89ceff] font-mono-code text-xs flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5" />
              Compatible con Android TV, FireStick y Smart TV
            </span>
          </div>
        </div>

        {/* Right Action Column */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full lg:w-auto shrink-0">
          <button
            type="button"
            onClick={() => setShowTrialModal(true)}
            className="px-8 py-4 rounded-xl bg-[#00a572] hover:bg-[#4edea3] text-[#002113] hover:text-black font-bold text-base shadow-[0_0_24px_rgba(16,185,129,0.3)] transition-all cursor-pointer text-center"
          >
            Probar 14 Días Gratis
          </button>

          <a
            href="https://wa.me/59899000000?text=Hola,%20quiero%20conectar%20las%20pantallas%20de%20mi%20local%20con%20Publiled%20(5,90€)"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-[#222a3d] hover:bg-[#2d3449] text-white font-bold text-base border border-[#3e4850] transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-[#4edea3]" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Trial Modal */}
      {showTrialModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#171f33] border border-[#222a3d] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => {
                setShowTrialModal(false);
                setTrialSubmitted(false);
              }}
              className="absolute top-4 right-4 text-[#88929b] hover:text-white p-2"
            >
              ✕
            </button>

            {trialSubmitted ? (
              <div className="text-center py-6 flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#00a572]/20 text-[#4edea3] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">¡Prueba Activada!</h4>
                <p className="text-sm text-[#bec8d2]">
                  Hemos enviado las credenciales de acceso para tus {trialScreens} pantallas al correo {trialEmail}. Descarga la app Publiled en tu Smart TV o Fire TV y vincula tu pantalla en segundos.
                </p>
                <button
                  onClick={() => setShowTrialModal(false)}
                  className="mt-3 px-6 py-2.5 rounded-lg bg-[#0ea5e9] text-[#001e2f] font-bold text-sm"
                >
                  Entendido
                </button>
              </div>
            ) : (
              <form onSubmit={handleTrialSubmit} className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#4edea3]" />
                  <h4 className="text-xl font-bold text-white">Activar Publiled Demo 14 Días</h4>
                </div>
                <p className="text-xs text-[#bec8d2]">
                  Sin tarjeta de crédito. Prueba el software que gestiona la cartelera de más de 300 tiendas en Uruguay.
                </p>

                <div>
                  <label className="block text-xs font-mono-code text-[#bec8d2] mb-1">
                    ¿Cuántos televisores o pantallas tienes en tu local?
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="1"
                      max="15"
                      value={trialScreens}
                      onChange={(e) => setTrialScreens(Number(e.target.value))}
                      className="w-full accent-[#0ea5e9]"
                    />
                    <span className="font-mono-code text-sm font-bold text-[#89ceff] w-12 text-right">
                      {trialScreens} TV{trialScreens > 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px] text-[#88929b] mt-1 font-mono-code">
                    <span>1 pantalla</span>
                    <span>Costo mensual post demo: {(trialScreens * 5.9).toFixed(2)} €/mes</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-[#bec8d2] mb-1">
                    Correo electrónico para recibir el código de vinculación:
                  </label>
                  <input
                    type="email"
                    required
                    value={trialEmail}
                    onChange={(e) => setTrialEmail(e.target.value)}
                    placeholder="tu-correo@empresa.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#222a3d] text-white text-sm border border-transparent focus:border-[#0ea5e9] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5 text-xs text-[#94a3b8] pt-1">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4edea3]" />
                    <span>Control desde móvil (iOS / Android) y panel web</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4edea3]" />
                    <span>Transmisión en bucle automático de imágenes y videos</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 rounded-lg bg-[#00a572] hover:bg-[#4edea3] text-[#002113] font-bold text-sm transition-all"
                >
                  Comenzar Prueba de 14 Días
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
