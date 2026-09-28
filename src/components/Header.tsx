import React, { useState } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight, MonitorPlay } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(true);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b1326]/90 backdrop-blur-xl border-b border-[#222a3d]/80 shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
      <div className="h-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-6">
        {/* Brand Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center h-10 w-10 rounded-lg bg-[#131b2e] border border-[#222a3d] p-1.5 shadow-sm overflow-hidden">
              {logoLoaded ? (
                <img 
                  src="https://lh3.googleusercontent.com/aida/AEtjO1X5PE-1e-pzGsQj0-TyFUJH6mhtOCf7_M42zQQlfLHdCQ6UGA9P236g9xoWh1U6DOiR0qLc-J5N9N52-QgVA4K3hLSfANDJlsUfBs_kb0ZjkFUavP-fNbTezS9VkIANWOt-Fm-NwvVSLhEYkbFyBZNf2eHlQlnD_q0Bri6hnnaAIcRm-OhxLczoXPqDeXDDrEZ7lWWLE1wVMpNiQmbFtDK1Izk3C5e81IHkOpd7K4HlvI-9xYGG1cMXMLY" 
                  alt="PubliPantallas.uy" 
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoLoaded(false)}
                />
              ) : (
                <MonitorPlay className="w-5 h-5 text-[#0ea5e9]" />
              )}
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#89ceff] transition-colors whitespace-nowrap">
              PubliPantallas<span className="text-[#0ea5e9]">.uy</span>
            </span>
          </a>

          {/* Status Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-[#171f33] border border-[#222a3d] rounded-full shadow-[0_0_16px_rgba(14,165,233,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ea5e9] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ea5e9]"></span>
            </span>
            <span className="font-mono-code text-[11px] font-semibold text-[#89ceff] tracking-wider uppercase whitespace-nowrap">
              PANTALLAS LED &amp; WIFI // PAYSANDÚ
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#bec8d2]">
          <a 
            href="#planes" 
            className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-[#0ea5e9] whitespace-nowrap"
          >
            Planes &amp; Precios
          </a>
          <a 
            href="#como-funciona" 
            className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-[#0ea5e9] whitespace-nowrap"
          >
            Cómo Funciona
          </a>
          <a 
            href="#cotizar" 
            className="text-[#4edea3] hover:text-[#6ffbbe] font-semibold flex items-center gap-1 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Cotizar Express</span>
          </a>
        </nav>

        {/* Action Buttons Zone */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a 
            href="https://wa.me/59899000000?text=Hola%20PubliPantallas.uy,%20quiero%20cotizar%20publicidad%20en%20pantallas%20LED%20y%20puntos%20WiFi%20en%20Paysand%C3%BA"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#00a572] hover:bg-[#4edea3] text-[#002113] hover:text-black font-semibold text-xs sm:text-sm shadow-[0_0_16px_rgba(16,185,129,0.3)] transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>WhatsApp</span>
          </a>
          
          <button 
            type="button"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-[#0ea5e9] hover:bg-[#89ceff] text-[#001e2f] font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(14,165,233,0.35)] transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Cotizar Campaña</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#171f33] text-[#bec8d2] hover:text-white"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b1326] border-b border-[#222a3d] px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#222a3d]">
            <span className="text-xs font-mono-code text-[#89ceff] flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#0ea5e9] animate-pulse"></span>
              Lanzamiento en Paysandú
            </span>
          </div>
          <nav className="flex flex-col gap-2.5 text-sm text-[#dae2fd]">
            <a 
              href="#planes" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded hover:bg-[#171f33]"
            >
              Planes &amp; Precios
            </a>
            <a 
              href="#como-funciona" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded hover:bg-[#171f33]"
            >
              Cómo Funciona
            </a>
            <a 
              href="#cotizar" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded text-[#4edea3] font-semibold hover:bg-[#171f33]"
            >
              Cotización Inmediata
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a 
              href="https://wa.me/59899000000?text=Hola%20PubliPantallas.uy,%20quiero%20cotizar%20en%20Paysand%C3%BA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-lg bg-[#00a572] text-[#002113] font-bold text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Comercial (+598)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
