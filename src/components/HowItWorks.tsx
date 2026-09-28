import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/screens';
import { MousePointerClick, UploadCloud, Radio } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const stepIcons = [
    <MousePointerClick className="w-6 h-6 text-[#0ea5e9]" />,
    <UploadCloud className="w-6 h-6 text-[#4edea3]" />,
    <Radio className="w-6 h-6 text-[#7bd0ff]" />
  ];

  return (
    <section className="w-full py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#060e20] border-t border-b border-[#222a3d]/50" id="como-funciona">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-14">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2.5">
          <span className="font-mono-code text-xs font-bold text-[#0ea5e9] tracking-widest uppercase">
            SIMPLE, RÁPIDO Y SIN VUELTAS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#dae2fd] tracking-tight">
            ¿Cómo funciona? En solo 3 pasos
          </h2>
          <p className="text-base text-[#bec8d2]">
            Olvídate de procesos largos o contratos engorrosos. Publicar tu anuncio es tan fácil como enviar un mensaje.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="p-8 rounded-2xl bg-[#171f33] border border-[#222a3d] flex flex-col items-center text-center gap-4 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:border-[#0ea5e9]/40 transition-all duration-300 relative group"
            >
              {/* Number circle badge */}
              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-mono-code text-2xl font-bold border transition-transform duration-300 group-hover:scale-110 ${
                  idx === 0
                    ? 'bg-[#0ea5e9]/10 text-[#0ea5e9] border-[#0ea5e9]/30 shadow-[0_0_20px_rgba(14,165,233,0.2)]'
                    : idx === 1
                    ? 'bg-[#00a572]/15 text-[#4edea3] border-[#00a572]/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                    : 'bg-[#7bd0ff]/10 text-[#7bd0ff] border-[#7bd0ff]/30 shadow-[0_0_20px_rgba(123,208,255,0.2)]'
                }`}>
                  {step.step}
                </div>
                <div className="absolute -bottom-2 -right-2 p-1 rounded-full bg-[#131b2e] border border-[#222a3d]">
                  {stepIcons[idx]}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight mt-2">
                {step.title}
              </h3>

              <p className="text-sm text-[#bec8d2] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
