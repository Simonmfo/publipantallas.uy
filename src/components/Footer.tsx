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
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-white tracking-tight">
                PubliPantallas<span className="text-[#0ea5e9]">.uy</span>
              </span>
            </div>
            <p className="text-sm text-[#bec8d2] leading-relaxed">
              La plataforma de publicidad digital y puntos WiFi de Paysandú. Combinamos pantallas LED en vía pública y anuncios interactivos con portal cautivo para impulsar tus ventas.
            </p>
            <div className="flex items-center gap-2 text-[#4edea3] font-mono-code text-xs font-bold pt-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Atención Comercial en Paysandú</span>
            </div>
          </div>

          {/* Services & Channels */}
          <div className="space-y-3">
            <span className="font-mono-code text-xs font-bold text-white uppercase tracking-wider block">
              Canales Publicitarios
            </span>
            <ul className="space-y-2 text-sm text-[#bec8d2]">
              <li>
                <a href="#planes" className="hover:text-[#0ea5e9] transition-colors">
                  Pantallas LED Publicitarias
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-[#0ea5e9] transition-colors">
                  Puntos WiFi con Portal Cautivo
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-[#0ea5e9] transition-colors">
                  Combo Integral (LED + WiFi)
                </a>
              </li>
              <li>
                <a href="#cotizar" className="hover:text-[#0ea5e9] transition-colors">
                  Anuncios en Gastronomía y Bares
                </a>
              </li>
              <li>
                <a href="#cotizar" className="hover:text-[#0ea5e9] transition-colors">
                  Campañas Comerciales y PYMEs
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <span className="font-mono-code text-xs font-bold text-white uppercase tracking-wider block">
              Beneficios
            </span>
            <ul className="space-y-2 text-sm text-[#bec8d2]">
              <li>
                <a href="#como-funciona" className="hover:text-[#0ea5e9] transition-colors">
                  100% Atención en Celulares
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#0ea5e9] transition-colors">
                  Sin Bloqueadores de Anuncios
                </a>
              </li>
              <li>
                <a href="#cotizar" className="hover:text-[#0ea5e9] transition-colors">
                  Botón Directo a WhatsApp o Web
                </a>
              </li>
              <li>
                <a href="#cotizar" className="hover:text-[#0ea5e9] transition-colors">
                  Asesoría y Diseño Bonificado
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
        <div className="pt-8 border-t border-[#222a3d] flex flex-col md:flex-row items-center justify-between gap-4 font-mono-code text-xs text-[#88929b]">
          <div>
            © 2025 PubliPantallas.uy. Publicidad exterior digital y puntos WiFi en Paysandú, Uruguay. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#4edea3]">Lanza tu campaña en 24h</span>
            <span className="text-[#0ea5e9]">Soporte local en Paysandú</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
