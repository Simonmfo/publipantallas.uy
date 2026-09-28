import React, { useState } from 'react';
import { BILLBOARD_SCREENS } from './data/screens';
import { BillboardScreen, PricingPlan, QuoteFormData } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { ScreensCatalog } from './components/ScreensCatalog';
import { Pricing } from './components/Pricing';
import { HowItWorks } from './components/HowItWorks';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';
import { ScreenSimulatorModal } from './components/ScreenSimulatorModal';
import { MapModal } from './components/MapModal';

export default function App() {
  const [screens] = useState<BillboardScreen[]>(BILLBOARD_SCREENS);
  const [selectedScreenForSim, setSelectedScreenForSim] = useState<BillboardScreen | null>(null);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<Partial<QuoteFormData>>({});

  // Smooth scroll helper
  const scrollToQuote = () => {
    const el = document.getElementById('cotizar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToScreens = () => {
    const el = document.getElementById('pantallas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When user clicks "Reservar Esta Pantalla" from catalog or map
  const handleReserveScreen = (screen: BillboardScreen) => {
    setQuotePrefill({
      screenInterest: screen.name,
      notes: `Deseo reservar espacio en ${screen.name} (${screen.location}). Presupuesto estimado: $${screen.weeklyPriceUsd} USD/sem.`,
    });
    scrollToQuote();
  };

  // When user configures an ad simulation in the modal and clicks "Cotizar"
  const handleSelectSimulatedScreen = (screen: BillboardScreen, customText: string) => {
    setQuotePrefill({
      screenInterest: screen.name,
      notes: `Anuncio simulado: ${customText}`,
    });
    scrollToQuote();
  };

  // When user clicks a pricing plan
  const handleSelectPlan = (plan: PricingPlan) => {
    setQuotePrefill({
      screenInterest: plan.tag,
      notes: `Solicitud de contratación: ${plan.title} (${plan.tag}).`,
    });
    scrollToQuote();
  };

  // When user selects a solution
  const handleSelectSolution = (type: 'pyme' | 'marcas' | 'agencias') => {
    if (type === 'pyme') {
      const el = document.getElementById('planes');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'marcas') {
      setQuotePrefill({
        screenInterest: 'Circuito de 5 Pantallas ($490 USD)',
        notes: 'Campaña masiva de gran marca / lanzamiento en avenidas principales.',
      });
      scrollToQuote();
    } else {
      setQuotePrefill({
        screenInterest: 'Red Completa 48 Pantallas',
        notes: 'Consulta para Agencias / Cobertura Total en Montevideo.',
      });
      scrollToQuote();
    }
  };

  // Quick quote submission from hero
  const handleQuickQuoteSubmit = (data: { name: string; phone: string; zone: string }) => {
    setQuotePrefill({
      name: data.name,
      phone: data.phone,
      screenInterest: data.zone === 'centro' ? '18 de Julio & Ejido (Centro)' : 'Quiero recomendaciones para mi presupuesto',
      notes: `Solicitud de catálogo rápido para zona: ${data.zone}`,
    });
  };

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] flex flex-col selection:bg-[#0ea5e9]/30 selection:text-white">
      {/* Top Header */}
      <Header
        onOpenQuote={scrollToQuote}
        onOpenMap={() => setIsMapModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-20 flex-1">
        {/* Hero Section */}
        <Hero
          onQuickQuoteSubmit={handleQuickQuoteSubmit}
          onExploreScreens={scrollToScreens}
          onNavigateToQuote={scrollToQuote}
        />

        {/* Solutions: PYMEs, Marcas, Publiled */}
        <Solutions onSelectSolution={handleSelectSolution} />

        {/* Featured Billboard Screens */}
        <ScreensCatalog
          screens={screens}
          onReserveScreen={handleReserveScreen}
          onSimulateScreen={(screen) => setSelectedScreenForSim(screen)}
          onOpenMap={() => setIsMapModalOpen(true)}
        />

        {/* Pricing Plans */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 3 Step Process */}
        <HowItWorks />

        {/* Quote & Booking Contact Form */}
        <QuoteSection
          initialData={quotePrefill}
          onSubmitSuccess={(data) => {
            console.log('Quote requested:', data);
          }}
        />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={scrollToQuote} />

      {/* Modal: Live Ad Simulator on Billboard */}
      {selectedScreenForSim && (
        <ScreenSimulatorModal
          screen={selectedScreenForSim}
          onClose={() => setSelectedScreenForSim(null)}
          onSelectForQuote={handleSelectSimulatedScreen}
        />
      )}

      {/* Modal: Interactive Montevideo Network Map */}
      {isMapModalOpen && (
        <MapModal
          screens={screens}
          onClose={() => setIsMapModalOpen(false)}
          onSelectScreen={handleReserveScreen}
        />
      )}
    </div>
  );
}
