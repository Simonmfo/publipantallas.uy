import React, { useState } from 'react';
import { Eye, Send, Monitor, Users, Zap, DollarSign, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onQuickQuoteSubmit: (data: { name: string; phone: string; zone: string }) => void;
  onExploreScreens: () => void;
  onNavigateToQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onQuickQuoteSubmit,
  onExploreScreens,
  onNavigateToQuote,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zone, setZone] = useState('all');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      alert('Por favor ingresa tu número de celular o WhatsApp para enviarte el catálogo.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onQuickQuoteSubmit({ name, phone, zone });
    }, 600);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#060e20] pt-10 pb-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#222a3d]/50">
      {/* Background glow effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#0ea5e9]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full bg-[#4edea3]/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 lg:gap-14">
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171f33] border border-[#222a3d] text-[#4edea3] font-mono-code text-xs font-semibold shadow-[0_0_16px_rgba(16,185,129,0.2)] w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4edea3]"></span>
          </span>
          <span>PUBLICIDAD EXTERIOR DIGITAL EN MONTEVIDEO</span>
        </div>

        {/* Main Grid: Copy vs Quick Quote Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#dae2fd] tracking-tight leading-[1.12] text-balance">
              Haz que tu marca se vea en las{' '}
              <span className="text-[#89ceff] bg-gradient-to-r from-[#89ceff] to-[#0ea5e9] bg-clip-text text-transparent">
                mejores pantallas
              </span>{' '}
              de la ciudad
            </h1>
            
            <p className="text-lg sm:text-xl text-[#bec8d2] max-w-2xl leading-relaxed">
              Publicidad exterior digital de alto impacto en Montevideo. Llega a miles de personas todos los días en los puntos más transitados de forma rápida, simple y accesible.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#pantallas"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreScreens();
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0ea5e9] hover:bg-[#89ceff] text-[#001e2f] font-bold text-base shadow-[0_0_24px_rgba(14,165,233,0.4)] transition-all cursor-pointer group"
              >
                <Eye className="w-5 h-5 text-[#001e2f] group-hover:scale-110 transition-transform" />
                <span>Ver Pantallas y Precios</span>
              </a>

              <a
                href="#cotizar"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateToQuote();
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#00a572] hover:bg-[#4edea3] text-[#002113] hover:text-black font-bold text-base shadow-[0_0_24px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
              >
                <Send className="w-5 h-5" />
                <span>Cotizar mi Campaña en 1 Minuto</span>
              </a>
            </div>

            {/* Micro proof badges */}
            <div className="flex items-center gap-6 pt-3 text-xs text-[#94a3b8] font-mono-code">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#4edea3]" />
                Auditoría fotográfica en vivo
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#89ceff]" />
                Sin costos de instalación
              </span>
            </div>
          </div>

          {/* Right Column: Quick Quote Box */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-4 bg-[#171f33] border border-[#222a3d] p-6 sm:p-7 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between pb-1 border-b border-[#222a3d]/70">
              <span className="text-xl font-bold text-white tracking-tight">
                Cotización Rápida
              </span>
              <span className="px-2.5 py-1 rounded bg-[#00a572]/20 text-[#4edea3] font-mono-code text-xs font-semibold border border-[#00a572]/30">
                Respuesta en 15m
              </span>
            </div>

            <p className="text-sm text-[#bec8d2] leading-snug">
              Déjanos tu contacto y recibe el catálogo de ubicaciones con disponibilidad para esta semana.
            </p>

            {submitted ? (
              <div className="py-6 px-4 bg-[#131b2e] border border-[#4edea3]/40 rounded-xl text-center flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#00a572]/20 text-[#4edea3] flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-white font-bold text-base">¡Propuesta Solicitada!</h4>
                <p className="text-xs text-[#bec8d2]">
                  Un asesor de PubliPantallas.uy te enviará la disponibilidad y precios al número ingresado.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#0ea5e9] hover:underline font-medium mt-1"
                >
                  Solicitar otra zona
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div>
                  <label htmlFor="hero-name" className="sr-only">Tu Nombre o Empresa</label>
                  <input
                    id="hero-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu Nombre o Empresa"
                    className="w-full px-3.5 py-3 rounded-lg bg-[#222a3d] text-white text-sm placeholder-[#88929b] border border-transparent focus:border-[#0ea5e9] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="hero-tel" className="sr-only">Celular o WhatsApp</label>
                  <input
                    id="hero-tel"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Celular / WhatsApp (+598)"
                    className="w-full px-3.5 py-3 rounded-lg bg-[#222a3d] text-white text-sm placeholder-[#88929b] border border-transparent focus:border-[#0ea5e9] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="hero-zone" className="sr-only">Zona de Interés</label>
                  <select
                    id="hero-zone"
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-lg bg-[#222a3d] text-[#dae2fd] text-sm border border-transparent focus:border-[#0ea5e9] focus:outline-none transition-all"
                  >
                    <option value="all">Quiero presencia en todo Montevideo</option>
                    <option value="centro">Centro &amp; 18 de Julio</option>
                    <option value="pocitos">Pocitos, Punta Carretas &amp; Rambla</option>
                    <option value="tres-cruces">Terminal Tres Cruces &amp; Accesos</option>
                    <option value="wtc">World Trade Center &amp; Shopping</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-1 py-3.5 rounded-lg bg-[#0ea5e9] hover:bg-[#89ceff] text-[#001e2f] font-bold text-sm shadow-[0_0_20px_rgba(14,165,233,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Enviando...' : 'Recibir Propuesta Inmediata'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#131b2e] border border-[#222a3d] shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#171f33] border border-[#222a3d]/60">
            <div className="w-11 h-11 rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center shrink-0">
              <Monitor className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono-code text-xl sm:text-2xl font-bold text-white block tracking-tight">
                48 Pantallas
              </span>
              <span className="font-mono-code text-xs text-[#bec8d2]">
                Ubicaciones Premium
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#171f33] border border-[#222a3d]/60">
            <div className="w-11 h-11 rounded-lg bg-[#00a572]/10 text-[#4edea3] flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono-code text-xl sm:text-2xl font-bold text-[#4edea3] block tracking-tight">
                +1.8 Millones
              </span>
              <span className="font-mono-code text-xs text-[#bec8d2]">
                Vistas Diarias Reales
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#171f33] border border-[#222a3d]/60">
            <div className="w-11 h-11 rounded-lg bg-[#7bd0ff]/10 text-[#7bd0ff] flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono-code text-xl sm:text-2xl font-bold text-[#7bd0ff] block tracking-tight">
                En 24 Horas
              </span>
              <span className="font-mono-code text-xs text-[#bec8d2]">
                Lanza tu campaña hoy
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#171f33] border border-[#222a3d]/60">
            <div className="w-11 h-11 rounded-lg bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center shrink-0">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono-code text-xl sm:text-2xl font-bold text-[#89ceff] block tracking-tight">
                Desde $150
              </span>
              <span className="font-mono-code text-xs text-[#bec8d2]">
                Planes accesibles/mes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
