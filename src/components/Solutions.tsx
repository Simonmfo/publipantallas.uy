import React from 'react';
import { Store, Rocket, Tv, ArrowRight } from 'lucide-react';

interface SolutionsProps {
  onSelectSolution: (type: 'pyme' | 'marcas' | 'software') => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolution }) => {
  return (
    <section className="w-full py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0b1326]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-14">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2.5">
          <span className="font-mono-code text-xs font-bold text-[#4edea3] tracking-widest uppercase">
            SOLUCIONES A TU MEDIDA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#dae2fd] tracking-tight">
            ¿Qué tipo de solución buscas hoy?
          </h2>
          <p className="text-base text-[#bec8d2]">
            Elige tu objetivo y te mostramos las opciones más rentables para tu negocio.
          </p>
        </div>

        {/* 3 Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: PYMEs */}
          <div className="group p-7 rounded-2xl bg-[#171f33] border border-[#222a3d] hover:border-[#0ea5e9]/50 hover:bg-[#1a233a] transition-all shadow-[0_4px_24px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-13 h-13 rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9] flex items-center justify-center border border-[#0ea5e9]/20 group-hover:scale-105 transition-transform">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Negocios Locales &amp; PYMEs
              </h3>
              <p className="text-sm text-[#bec8d2] leading-relaxed">
                Promociona tu tienda, clínica, gimnasio o restaurante en las esquinas más transitadas de tu barrio (Centro, Pocitos, Cordón). Planes accesibles y asesoramiento de diseño sin costo.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#planes"
                onClick={() => onSelectSolution('pyme')}
                className="w-full py-3 rounded-xl bg-[#222a3d] hover:bg-[#0ea5e9] text-[#89ceff] hover:text-[#001e2f] transition-all text-center block font-mono-code text-xs font-bold tracking-wider uppercase cursor-pointer"
              >
                Ver Planes para Comercios
              </a>
            </div>
          </div>

          {/* Card 2: Grandes Marcas */}
          <div className="group p-7 rounded-2xl bg-[#171f33] border border-[#222a3d] hover:border-[#4edea3]/50 hover:bg-[#1a233a] transition-all shadow-[0_4px_24px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-13 h-13 rounded-xl bg-[#00a572]/15 text-[#4edea3] flex items-center justify-center border border-[#00a572]/30 group-hover:scale-105 transition-transform">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Grandes Marcas &amp; Lanzamientos
              </h3>
              <p className="text-sm text-[#bec8d2] leading-relaxed">
                Campañas masivas de recordación, alta frecuencia y sincronización en avenidas principales y centros comerciales. Máxima visibilidad garantizada para lanzamientos.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#cotizar"
                onClick={() => onSelectSolution('marcas')}
                className="w-full py-3 rounded-xl bg-[#00a572] hover:bg-[#4edea3] text-[#002113] hover:text-black transition-all text-center block font-mono-code text-xs font-bold tracking-wider uppercase shadow-[0_0_16px_rgba(16,185,129,0.25)] cursor-pointer"
              >
                Cotizar Circuito Exclusivo
              </a>
            </div>
          </div>

          {/* Card 3: Software Publiled */}
          <div className="group p-7 rounded-2xl bg-[#171f33] border border-[#222a3d] hover:border-[#7bd0ff]/50 hover:bg-[#1a233a] transition-all shadow-[0_4px_24px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-13 h-13 rounded-xl bg-[#7bd0ff]/10 text-[#7bd0ff] flex items-center justify-center border border-[#7bd0ff]/20 group-hover:scale-105 transition-transform">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Software para tus Pantallas
              </h3>
              <p className="text-sm text-[#bec8d2] leading-relaxed">
                ¿Ya tienes Smart TVs o pantallas en tu sucursal? Conviértelas en tu propia cartelera de ofertas con nuestra aplicación Publiled por solo 5,90 € al mes. Fácil y sin cables.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#software-publiled"
                onClick={() => onSelectSolution('software')}
                className="w-full py-3 rounded-xl bg-[#222a3d] hover:bg-[#2d3449] text-[#7bd0ff] transition-all text-center block font-mono-code text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Descubrir Publiled App</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
