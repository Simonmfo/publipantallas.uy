import React from 'react';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="w-full bg-[#060e20] text-[#bec8d2] pt-16 pb-12 border-t border-[#222a3d] shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-lg bg-[#131b2e] border border-[#222a3d] p-0.5 overflow-hidden shrink-0">
                <img src="/icon.jpg" alt="PubliPantallas.uy Logo" className="h-full w-full object-cover rounded" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                PubliPantallas<span className="text-[#0ea5e9]">.uy</span>
              </span>
            </div>
            <p className="text-sm text-[#bec8d2] leading-relaxed">
              La plataforma de publicidad exterior digital en pantallas LED de Paysandú. Ayudamos a comercios y marcas a aumentar sus ventas y presencia todos los días.
            </p>
            <div className="flex items-center gap-2 text-[#4edea3] font-mono-code text-xs font-bold pt-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Atención Comercial en Paysandú</span>
            </div>
          </div>

          {/* Services & Channels */}
          <div className="space-y-3">
            <span className="font-mono-code text-xs font-bold text-white uppercase tracking-wider block">
              Servicios
            </span>
            <ul className="space-y-2 text-sm text-[#bec8d2]">
              <li>
                <a href="#planes" className="hover:text-[#0ea5e9] transition-colors">
                  Pantallas LED Publicitarias
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-[#0ea5e9] transition-colors">
                  Planes para Comercios y PYMEs
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-[#0ea5e9] transition-colors">
                  Campañas de Marca y Lanzamientos
                </a>
              </li>
              <li>
                <a href="#cotizar" className="hover:text-[#0ea5e9] transition-colors">
                  Cobertura para Agencias y Medios
                </a>
              </li>
              <li>
                <a href="#cotizar" className="hover:text-[#0ea5e9] transition-colors">
                  Asesoría y Diseño Bonificado
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <span className="font-mono-code text-xs font-bold text-white uppercase tracking-wider block">
              Ventajas
            </span>
            <ul className="space-y-2 text-sm text-[#bec8d2]">
              <li>
                <a href="#como-funciona" className="hover:text-[#0ea5e9] transition-colors">
                  Alta Definición Outdoor
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#0ea5e9] transition-colors">
                  Más de 400 Salidas Diarias
                </a>
              </li>
              <li>
                <a href="#cotizar" className="hover:text-[#0ea5e9] transition-colors">
                  Sin Contratos Forzados
                </a>
              </li>
              <li>
                <a href="#cotizar" className="hover:text-[#0ea5e9] transition-colors">
                  Reportes Certificados de Emisión
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <span className="font-mono-code text-xs font-bold text-white uppercase tracking-wider block">
              Contacto Comercial
            </span>
            <p className="text-sm text-[#bec8d2]">
              Paysandú, Uruguay
            </p>
            <p className="font-mono-code text-sm text-[#0ea5e9] font-bold">
              <a 
                href="https://wa.me/59899000000" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-[#4edea3]" />
                <span>WhatsApp: +598 99 000 000</span>
              </a>
            </p>
            <p className="text-sm text-white">
              ventas@publipantallas.uy
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00a572] hover:bg-[#4edea3] text-[#002113] hover:text-black font-mono-code text-xs font-bold transition-all shadow-[0_0_16px_rgba(16,185,129,0.25)] cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Cotizar Ahora</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#222a3d] flex flex-col items-center justify-center text-center gap-5 font-mono-code text-xs text-[#88929b]">
          {/* Desarrollado por urudev.uy con Logo */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <span className="text-xs text-[#88929b] tracking-wider uppercase">
              Desarrollado por
            </span>
            <a 
              href="https://urudev-uy.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#090d18] border border-[#005ff9]/40 hover:border-[#005ff9] shadow-[0_0_15px_rgba(0,95,249,0.2)] hover:shadow-[0_0_22px_rgba(0,95,249,0.35)] transition-all duration-300 group hover:scale-[1.02]"
            >
              {/* Logo urudev.uy */}
              <div className="relative w-7 h-7 rounded-lg bg-gradient-to-b from-[#11192e] to-[#070a14] border border-[#005ff9]/50 flex items-center justify-center shrink-0 overflow-hidden shadow-sm group-hover:border-[#005ff9] transition-all">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                <div className="absolute -top-3 inset-x-0 h-4 bg-[#005ff9]/35 blur-xs rounded-full pointer-events-none" />
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                  <defs>
                    <linearGradient id="footerChevGrad" x1="10" y1="13" x2="20" y2="27" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#005ff9" />
                    </linearGradient>
                    <linearGradient id="footerCurGrad" x1="22" y1="27" x2="30" y2="27" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#00e599" />
                      <stop offset="100%" stopColor="#3fd5ae" />
                    </linearGradient>
                  </defs>
                  <path d="M11 13L19.5 20L11 27" stroke="url(#footerChevGrad)" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22.5 27H30" stroke="url(#footerCurGrad)" strokeWidth="3.6" strokeLinecap="round" />
                </svg>
              </div>

              {/* Nombre de marca urudev.uy más grande */}
              <span className="font-sans font-bold text-base sm:text-lg text-white group-hover:text-white transition-colors tracking-tight">
                urudev<span className="text-[#38bdf8]">.uy</span>
              </span>
            </a>
          </div>

          <div>
            © 2025 PubliPantallas.uy. Publicidad exterior digital en pantallas LED en Paysandú, Uruguay. Todos los derechos reservados.
          </div>

          <div className="flex items-center justify-center gap-6 text-[11px]">
            <span className="text-[#4edea3]">Lanza tu campaña en 24h</span>
            <span className="text-[#0ea5e9]">Soporte local en Paysandú</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
