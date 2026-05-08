import React from 'react';
import { useTranslations } from '../i18n/utils';
import { FadeIn } from './FadeIn';

interface Props {
  lang: 'es' | 'en';
}

export const About: React.FC<Props> = ({ lang }) => {
  const t = useTranslations(lang);
  const values = ['integrity', 'excellence', 'innovation', 'commitment'] as const;

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* Visual Element */}
          <div className="lg:w-1/2 relative">
            <FadeIn direction="right">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                <img
                  src="/img/nuestra historia.jpeg"
                  alt="FIT History"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </FadeIn>
            {/* Experience badge */}
            <FadeIn direction="up" delay={0.3} className="absolute -bottom-10 -right-10 z-20 hidden md:block">
              <div className="bg-accent p-8 rounded-2xl shadow-xl">
                <span className="block text-4xl font-bold text-white leading-none">2006</span>
                <span className="text-white/80 font-bold uppercase tracking-widest text-xs">{t('about.experience')}</span>
              </div>
            </FadeIn>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <FadeIn direction="left">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                {t('about.title')}
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 leading-tight">
                {t('about.subtitle')}
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
                <p>{t('about.history')}</p>
                <p className="border-l-4 border-accent pl-6 py-2 font-medium text-primary bg-slate-50 rounded-r-xl">
                  {t('about.mission')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {values.map((val, i) => (
                  <FadeIn key={val} delay={0.2 + (i * 0.1)} direction="up">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className="font-bold text-primary text-sm uppercase tracking-wide">
                        {t(`about.values.${val}`)}
                      </span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>

        {/* ISO Highlight */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mt-24 p-8 md:p-12 bg-primary rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{t('about.iso9001')}</h3>
                <p className="text-white/70">
                  Garantizamos la excelencia a través de procesos certificados internacionalmente, brindando seguridad y respaldo a cada una de sus transacciones.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
