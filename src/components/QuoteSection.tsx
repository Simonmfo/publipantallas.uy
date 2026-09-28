import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteSectionProps {
  initialData?: Partial<QuoteFormData>;
  onSubmitSuccess: (data: QuoteFormData) => void;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  initialData,
  onSubmitSuccess,
}) => {
  const [name, setName] = useState(initialData?.name || '');
  const [company, setCompany] = useState(initialData?.company || '');
  const [phone, setPhone] = useState(initialData?.phone || '');
  const [screenInterest, setScreenInterest] = useState(initialData?.screenInterest || 'todas');
  const [notes, setNotes] = useState(initialData?.notes || '');
  const [durationWeeks, setDurationWeeks] = useState(initialData?.durationWeeks || '2');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync when initialData changes from external clicks
  React.useEffect(() => {
    if (initialData?.screenInterest) {
      setScreenInterest(initialData.screenInterest);
    }
    if (initialData?.notes) {
      setNotes(initialData.notes);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      alert('Por favor ingresa tu número de WhatsApp para poder contactarte.');
      return;
    }

    setIsSubmitting(true);
    const data: QuoteFormData = {
      name,
      company,
      phone,
      screenInterest,
      durationWeeks,
      notes
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onSubmitSuccess(data);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola PubliPantallas.uy! Mi nombre es ${name || 'un cliente'} de la empresa ${company || 'en Montevideo'}. Me interesa cotizar presencia publicitaria en: ${screenInterest}. Mi teléfono es: ${phone}.`
  );

  return (
    <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#060e20]" id="cotizar">
      <div className="max-w-4xl mx-auto rounded-3xl bg-[#171f33] border border-[#222a3d] p-8 sm:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.6)] flex flex-col gap-8 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#0ea5e9]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Section Header */}
        <div className="text-center flex flex-col gap-2 relative z-10">
          <span className="font-mono-code text-xs font-bold text-[#0ea5e9] tracking-widest uppercase">
            ASESORÍA INMEDIATA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cotiza tu Campaña en 1 Minuto
          </h2>
          <p className="text-base text-[#bec8d2]">
            Cuéntanos qué necesitas y un asesor te responderá con precios exactos y ubicaciones disponibles.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 px-6 bg-[#131b2e] border border-[#00a572]/40 rounded-2xl text-center flex flex-col items-center gap-4 relative z-10">
            <div className="w-16 h-16 rounded-full bg-[#00a572]/20 text-[#4edea3] flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              ¡Solicitud Recibida con Éxito!
            </h3>
            <p className="text-sm text-[#bec8d2] max-w-lg">
              Gracias <strong>{name}</strong>. Un asesor de PubliPantallas.uy revisará la disponibilidad de la pantalla seleccionada ({screenInterest}) y se comunicará a tu WhatsApp <strong>{phone}</strong> en menos de 15 minutos.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/59899000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#00a572] hover:bg-[#4edea3] text-[#002113] font-bold text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Continuar por WhatsApp ahora
              </a>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-xl bg-[#222a3d] text-[#bec8d2] hover:text-white font-semibold text-sm"
              >
                Enviar otra consulta
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm relative z-10">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="form-name" className="font-mono-code text-xs text-[#bec8d2] font-medium">
                Tu Nombre y Apellido:
              </label>
              <input
                id="form-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Martín Gómez"
                className="p-3 rounded-xl bg-[#222a3d] text-white border border-[#222a3d] focus:border-[#0ea5e9] focus:outline-none transition-all placeholder-[#88929b]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="form-empresa" className="font-mono-code text-xs text-[#bec8d2] font-medium">
                Nombre de tu Empresa / Negocio:
              </label>
              <input
                id="form-empresa"
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Ej. Pizzería del Parque / Marca X"
                className="p-3 rounded-xl bg-[#222a3d] text-white border border-[#222a3d] focus:border-[#0ea5e9] focus:outline-none transition-all placeholder-[#88929b]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="form-phone" className="font-mono-code text-xs text-[#bec8d2] font-medium">
                Celular / WhatsApp (para enviarte la propuesta):
              </label>
              <input
                id="form-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ej. +598 99 123 456"
                className="p-3 rounded-xl bg-[#222a3d] text-white border border-[#222a3d] focus:border-[#0ea5e9] focus:outline-none transition-all placeholder-[#88929b]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="form-interes" className="font-mono-code text-xs text-[#bec8d2] font-medium">
                ¿Qué plan o zona te interesa cotizar?
              </label>
              <select
                id="form-interes"
                value={screenInterest}
                onChange={(e) => setScreenInterest(e.target.value)}
                className="p-3 rounded-xl bg-[#222a3d] text-[#dae2fd] border border-[#222a3d] focus:border-[#0ea5e9] focus:outline-none transition-all"
              >
                <option value="todas">Quiero asesoría y recomendaciones según mi presupuesto</option>
                <option value="Plan Starter Local ($150 USD)">Plan Starter Local - Comercio de Barrio ($150 USD)</option>
                <option value="Plan Circuito Urbano ($490 USD)">Plan Circuito Urbano - 5 Pantallas ($490 USD)</option>
                <option value="Plan Cobertura Total">Plan Cobertura Total - Gran Marca / Lanzamiento</option>
                <option value="Zona Centro & 18 de Julio">Zona Centro &amp; 18 de Julio</option>
                <option value="Zona Pocitos, Punta Carretas & Rambla">Zona Pocitos, Punta Carretas &amp; Rambla</option>
                <option value="Zona Terminal Tres Cruces">Zona Terminal Tres Cruces &amp; Accesos</option>
                <option value="Zona Buceo & World Trade Center">Zona Buceo &amp; World Trade Center</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label htmlFor="form-notes" className="font-mono-code text-xs text-[#bec8d2] font-medium">
                Comentario o consulta adicional (opcional):
              </label>
              <input
                id="form-notes"
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ej. Queremos salir en vivo el próximo fin de semana"
                className="p-3 rounded-xl bg-[#222a3d] text-white border border-[#222a3d] focus:border-[#0ea5e9] focus:outline-none transition-all placeholder-[#88929b]"
              />
            </div>

            {/* Micro guarantees */}
            <div className="md:col-span-2 flex flex-wrap items-center gap-6 py-1 text-xs text-[#94a3b8] font-mono-code">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#4edea3]" />
                Sin compromiso ni costos ocultos
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#89ceff]" />
                Asesoría de diseño para pantalla LED bonificada
              </span>
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-3.5 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3.5 rounded-xl bg-[#0ea5e9] hover:bg-[#89ceff] text-[#001e2f] font-bold text-base shadow-[0_0_24px_rgba(14,165,233,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Enviando Solicitud...' : 'Enviar Consulta y Recibir Propuesta'}</span>
              </button>

              <a
                href={`https://wa.me/59899000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-xl bg-[#00a572] hover:bg-[#4edea3] text-[#002113] hover:text-black font-bold text-base shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-2 text-center cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Hablar con un Asesor Ahora por WhatsApp</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
