import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/screens';
import { PricingPlan } from '../types';
import { Check, Sparkles, MessageSquare } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [currency, setCurrency] = useState<'USD' | 'UYU'>('USD');

  return (
    <section className="w-full py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0b1326]" id="planes">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:gap-14">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
          <span className="font-mono-code text-xs font-bold text-[#4edea3] tracking-widest uppercase">
            TARIFAS CLARAS Y TRANSPARENTES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#dae2fd] tracking-tight">
            Elige el Plan Ideal para tu Negocio
          </h2>
          <p className="text-base text-[#bec8d2]">
            Sin contratos forzados ni sorpresas. Empieza con la inversión que mejor se adapte a tu objetivo.
          </p>

          {/* Currency Toggle */}
          <div className="mt-2 inline-flex items-center p-1 rounded-xl bg-[#171f33] border border-[#222a3d]">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono-code font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-[#0ea5e9] text-[#001e2f] shadow-sm'
                  : 'text-[#bec8d2] hover:text-white'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('UYU')}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono-code font-bold transition-all ${
                currency === 'UYU'
                  ? 'bg-[#0ea5e9] text-[#001e2f] shadow-sm'
                  : 'text-[#bec8d2] hover:text-white'
              }`}
            >
              Pesos Uruguayos (UYU $)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.isPopular;
            const priceDisplay = plan.usdPrice === 'custom'
              ? 'A Medida'
              : currency === 'USD'
              ? `$${plan.usdPrice}`
              : `$${plan.uyuPrice?.toLocaleString('es-UY')}`;

            const periodDisplay = plan.usdPrice === 'custom'
              ? ''
              : currency === 'USD'
              ? 'USD / mes'
              : 'UYU / mes';

            return (
              <div
                key={plan.id}
                className={`relative p-7 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#1a233a] border-2 border-[#0ea5e9] shadow-[0_8px_40px_rgba(14,165,233,0.3)] lg:-translate-y-2'
                    : 'bg-[#171f33] border border-[#222a3d] hover:border-[#3e4850] shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0ea5e9] text-[#001e2f] font-mono-code text-[11px] font-extrabold uppercase tracking-wider shadow-md whitespace-nowrap flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>EL MÁS ELEGIDO // MÁXIMO RETORNO</span>
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    <span className={`font-mono-code text-xs font-bold uppercase tracking-wider ${
                      isPopular ? 'text-[#4edea3]' : 'text-[#89ceff]'
                    }`}>
                      {plan.tag}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                      {plan.title}
                    </h3>
                    <p className="text-sm text-[#bec8d2] mt-1.5 leading-relaxed">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="py-2">
                    <div className="flex items-baseline gap-2">
                      <span className={`font-mono-code text-4xl sm:text-5xl font-extrabold tracking-tight ${
                        isPopular ? 'text-[#0ea5e9]' : 'text-white'
                      }`}>
                        {priceDisplay}
                      </span>
                      {periodDisplay && (
                        <span className="font-mono-code text-xs text-[#88929b]">
                          {periodDisplay}
                        </span>
                      )}
                    </div>
                    {plan.savingsNote && (
                      <span className="text-[#4edea3] font-mono-code text-xs block mt-1">
                        {plan.savingsNote}
                      </span>
                    )}
                    {plan.id === 'starter' && currency === 'USD' && (
                      <span className="text-[#4edea3] font-mono-code text-xs block mt-1">
                        o $5.800 UYU / mes
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 text-sm text-[#bec8d2] border-t border-[#222a3d] pt-5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#00a572]/20 text-[#4edea3] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => onSelectPlan(plan)}
                  className={`mt-8 w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isPopular
                      ? 'bg-[#0ea5e9] hover:bg-[#89ceff] text-[#001e2f] shadow-[0_0_24px_rgba(14,165,233,0.4)]'
                      : plan.usdPrice === 'custom'
                      ? 'bg-[#222a3d] hover:bg-[#2d3449] text-[#7bd0ff]'
                      : 'bg-[#222a3d] hover:bg-[#0ea5e9] text-[#89ceff] hover:text-[#001e2f]'
                  }`}
                >
                  {plan.usdPrice === 'custom' ? <MessageSquare className="w-4 h-4" /> : null}
                  <span>{plan.ctaLabel}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
