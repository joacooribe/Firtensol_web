import React from 'react';
import { useTranslations } from '../i18n/utils';
import { FadeIn } from './FadeIn';

interface Props {
  lang: 'es' | 'en';
}

const servicesList = ['qualityControl', 'chemicalAnalysis', 'fumigation'] as const;

export const Services: React.FC<Props> = ({ lang }) => {
  const t = useTranslations(lang);

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <FadeIn direction="up" className="max-w-2xl">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              {t('services.title')}
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary leading-tight">
              {t('services.subtitle')}
            </h2>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
            <a href={`/${lang}/services`} className="text-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors">
              {t('services.viewAll')} →
            </a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((serviceKey, index) => (
            <FadeIn key={serviceKey} direction="up" delay={0.1 * (index + 1)} className="h-full">
              <div
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col h-full group"
              >
                <div className="relative h-48 -mt-10 -mx-10 mb-8 overflow-hidden rounded-t-2xl">
                  <img 
                    src={serviceKey === 'qualityControl' ? '/img/control de calidad.jpeg' : 
                         serviceKey === 'chemicalAnalysis' ? '/img/analisis quimico.jpeg' : 
                         '/img/fumigacion.jpeg'} 
                    alt={t(`services.${serviceKey}.title`)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur shadow-lg rounded-xl flex items-center justify-center text-primary">
                    {serviceKey === 'qualityControl' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                    )}
                    {serviceKey === 'chemicalAnalysis' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>
                    )}
                    {serviceKey === 'fumigation' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20"/><path d="M7 22v-5"/><path d="M17 22v-5"/><path d="M7 17h10V5a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v12z"/></svg>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-primary mb-4">
                  {t(`services.${serviceKey}.title`)}
                </h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {t(`services.${serviceKey}.desc`)}
                </p>
                
                <div className="pt-6 border-t border-slate-50">
                  <p className="text-sm text-slate-500 italic">
                    {t(`services.${serviceKey}.detail`)}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
