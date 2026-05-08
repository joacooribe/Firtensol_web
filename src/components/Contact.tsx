import React from 'react';
import { useTranslations } from '../i18n/utils';
import { FadeIn } from './FadeIn';

interface Props {
  lang: 'es' | 'en';
}

export const Contact: React.FC<Props> = ({ lang }) => {
  const t = useTranslations(lang);

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Info */}
          <div>
            <FadeIn direction="right">
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
                {t('contact.title')}
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                {t('contact.subtitle')}
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-lg">
                Estamos estratégicamente ubicados en el corazón de la logística regional, listos para atender sus necesidades con celeridad y precisión.
              </p>
            </FadeIn>

            <div className="space-y-10">
              <FadeIn direction="up" delay={0.1}>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t('contact.info.location')}</h4>
                    <p className="text-slate-400">{t('contact.info.address')}</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t('contact.info.phone')}</h4>
                    <p className="text-slate-400">+598 4544 6670</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t('contact.form.email')}</h4>
                    <p className="text-slate-400">info@fit.com.uy</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Form */}
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white p-10 rounded-3xl shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 text-sm font-bold mb-2">{t('contact.form.name')}</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-accent transition-colors" />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-bold mb-2">{t('contact.form.email')}</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-accent transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-bold mb-2">{t('contact.form.subject')}</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-bold mb-2">{t('contact.form.message')}</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
                </div>
                <button className="w-full bg-primary py-4 rounded-xl text-white font-bold text-lg hover:bg-primary-light transition-all shadow-lg hover:shadow-primary/20">
                  {t('contact.form.send')}
                </button>
              </form>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
