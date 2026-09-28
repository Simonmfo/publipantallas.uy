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
        screenInterest: 'Plan Comercial Activo ($290 USD)',
        notes: 'Campaña masiva de marca / lanzamiento en Paysandú.',
      });
      scrollToQuote();
    } else {
      setQuotePrefill({
        screenInterest: 'Plan Gran Impacto',
        notes: 'Consulta para Agencias / Cobertura en pantallas LED en Paysandú.',
      });
      scrollToQuote();
    }
  };

  // Quick quote submission from hero
  const handleQuickQuoteSubmit = (data: { name: string; phone: string; service: string }) => {
    const serviceLabels: Record<string, string> = {
      all: 'Asesoría para mi presupuesto en Paysandú',
      starter: 'Plan Comercio Local ($150 USD)',
      comercial: 'Plan Comercial Activo ($290 USD)',
      masivo: 'Plan Gran Impacto / Cobertura Total'
    };

    const label = serviceLabels[data.service] || 'Asesoría para mi negocio en Paysandú';

    setQuotePrefill({
      name: data.name,
      phone: data.phone,
      screenInterest: label,
      notes: `Solicitud de propuesta rápida para: ${label} en Paysandú`,
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
