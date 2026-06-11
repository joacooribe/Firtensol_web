import React from 'react';
import { useTranslations } from '../i18n/utils';
import { FadeIn } from './FadeIn';

interface Props {
  lang: 'es' | 'en';
}

export const About: React.FC<Props> = ({ lang }) => {
  const t = useTranslations(lang);
  const showGafta = false; // Set to true once the certification is active again
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
                  src="/img/Fit empresa y autos.webp"
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

        {/* Members & Certifications */}
        <div className="mt-24 pt-12 border-t border-slate-100">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">
                {t('about.certifications.subtitle')}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                {t('about.certifications.title')}
              </h2>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-12">
            {/* Certifications Group */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-slate-50/50 p-8 md:p-12 rounded-3xl border border-slate-100 hover:border-slate-200 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                  </span>
                  {t('about.certifications.certificationsTitle')}
                </h3>
                <div className="space-y-6">
                  {/* ISO 9001 */}
                  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8 hover:shadow-md transition-shadow duration-300">
                    <div className="p-5 bg-primary/5 rounded-2xl text-primary shrink-0 flex items-center justify-center w-28 h-28 md:w-36 md:h-36 shadow-inner border border-primary/5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <h4 className="font-bold text-primary text-2xl mb-2">{t('about.iso9001')}</h4>
                      <span className="inline-block bg-primary/10 text-primary font-bold text-xs uppercase px-3 py-1 rounded-full mb-4 tracking-wider">
                        {t('about.certifications.qualityBadge')}
                      </span>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        {t('about.certifications.isoDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Memberships Group */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-slate-50/50 p-8 md:p-12 rounded-3xl border border-slate-100 hover:border-slate-200 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </span>
                  {t('about.certifications.membershipsTitle')}
                </h3>
                <div className="space-y-6">
                  {/* FOSFA */}
                  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8 hover:shadow-md transition-shadow duration-300">
                    <div className="p-6 bg-slate-50/50 border border-slate-100/50 rounded-2xl text-primary shrink-0 flex items-center justify-center w-28 h-28 md:w-36 md:h-36 shadow-sm">
                      <img src="/img/fosfa.webp" alt="FOSFA" className="w-full h-full object-contain" />
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <h4 className="font-bold text-primary text-2xl mb-2">FOSFA International</h4>
                      <span className="inline-block bg-accent/10 text-accent font-bold text-xs uppercase px-3 py-1 rounded-full mb-4 tracking-wider">
                        {t('about.certifications.memberBadge')}
                      </span>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        {t('about.certifications.fosfaDesc')}
                      </p>
                    </div>
                  </div>

                  {/* GAFTA (Temporarily hidden) */}
                  {showGafta && (
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8 hover:shadow-md transition-shadow duration-300">
                      <div className="p-6 bg-slate-50/50 border border-slate-100/50 rounded-2xl text-primary shrink-0 flex items-center justify-center w-28 h-28 md:w-36 md:h-36 shadow-sm">
                        <img src="/img/Gafta.webp" alt="GAFTA" className="w-full h-full object-contain" />
                      </div>
                      <div className="text-center md:text-left flex-1">
                        <h4 className="font-bold text-primary text-2xl mb-2">Gafta</h4>
                        <span className="inline-block bg-accent/10 text-accent font-bold text-xs uppercase px-3 py-1 rounded-full mb-4 tracking-wider">
                          {t('about.certifications.memberBadge')}
                        </span>
                        <p className="text-slate-600 text-lg leading-relaxed">
                          {t('about.certifications.gaftaDesc')}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
