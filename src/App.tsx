import React, { useState } from 'react';
import { PricingPlan, QuoteFormData } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { Pricing } from './components/Pricing';
import { HowItWorks } from './components/HowItWorks';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';

export default function App() {
  const [quotePrefill, setQuotePrefill] = useState<Partial<QuoteFormData>>({});

  // Smooth scroll helper
  const scrollToQuote = () => {
    const el = document.getElementById('cotizar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const el = document.getElementById('planes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When user clicks a pricing plan
  const handleSelectPlan = (plan: PricingPlan) => {
    setQuotePrefill({
      screenInterest: plan.tag,
      notes: `Solicitud de reserva anticipada: ${plan.title} (${plan.tag}).`,
    });
    scrollToQuote();
  };

  // When user selects a solution
  const handleSelectSolution = (type: 'pyme' | 'marcas' | 'agencias') => {
    if (type === 'pyme') {
      scrollToPricing();
    } else if (type === 'marcas') {
      setQuotePrefill({
        screenInterest: 'Plan Circuito Urbano ($490 USD)',
        notes: 'Campaña masiva de gran marca / lanzamiento en avenidas principales de Montevideo.',
      });
      scrollToQuote();
    } else {
      setQuotePrefill({
        screenInterest: 'Plan Cobertura Total',
        notes: 'Consulta para Agencias / Cobertura Total en Montevideo.',
      });
      scrollToQuote();
    }
  };

  // Quick quote submission from hero
  const handleQuickQuoteSubmit = (data: { name: string; phone: string; zone: string }) => {
    const zoneLabels: Record<string, string> = {
      all: 'Quiero presencia en todo Montevideo',
      centro: 'Zona Centro, Cordón & 18 de Julio',
      pocitos: 'Zona Pocitos, Punta Carretas & Rambla',
      'tres-cruces': 'Zona Terminal Tres Cruces & Accesos',
      wtc: 'Zona Buceo & World Trade Center'
    };

    setQuotePrefill({
      name: data.name,
      phone: data.phone,
      screenInterest: zoneLabels[data.zone] || 'Asesoría general para mi presupuesto',
      notes: `Solicitud de propuesta rápida para zona: ${zoneLabels[data.zone] || data.zone}`,
    });
  };

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] flex flex-col selection:bg-[#0ea5e9]/30 selection:text-white">
      {/* Top Header */}
      <Header onOpenQuote={scrollToQuote} />

      {/* Main Content Sections */}
      <main className="w-full pt-20 flex-1">
        {/* Hero Section */}
        <Hero
          onQuickQuoteSubmit={handleQuickQuoteSubmit}
          onExploreScreens={scrollToPricing}
          onNavigateToQuote={scrollToQuote}
        />

        {/* Solutions: PYMEs, Marcas, Agencias */}
        <Solutions onSelectSolution={handleSelectSolution} />

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
    </div>
  );
}
