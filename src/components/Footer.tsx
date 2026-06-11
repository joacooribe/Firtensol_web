import React from 'react';
import { useTranslations } from '../i18n/utils';
import { FadeIn } from './FadeIn';

interface Props {
  lang: 'es' | 'en';
}

export const Footer: React.FC<Props> = ({ lang }) => {
  const t = useTranslations(lang);
  const showGafta = false; // Set to true once the certification is active again

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/50 via-slate-900 to-slate-900 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-6 lg:col-span-6">
            <FadeIn direction="up">
              <div className="bg-white inline-block p-2 rounded-lg mb-6">
                <img
                  src="/img/fit logo.webp"
                  alt="FIT"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                FIRTENSOL INDEPENDENT TESTING (FIT) es líder regional en control de calidad, análisis químicos y servicios de fumigación bajo estándares internacionales.
              </p>
            </FadeIn>
          </div>

          {/* Links */}
          <div className="col-span-1 md:col-span-3 lg:col-span-3">
            <FadeIn direction="up" delay={0.1}>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">{t('footer.navigation')}</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href={`/${lang}`} className="hover:text-accent transition-colors">{t('nav.home')}</a></li>
                <li><a href={`/${lang}/services`} className="hover:text-accent transition-colors">{t('nav.services')}</a></li>
                <li><a href={`/${lang}/about`} className="hover:text-accent transition-colors">{t('nav.aboutUs')}</a></li>
                <li><a href={`/${lang}/contact`} className="hover:text-accent transition-colors">{t('nav.contact')}</a></li>
              </ul>
            </FadeIn>
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-3">
            <FadeIn direction="up" delay={0.2}>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">{t('footer.legal')}</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-accent transition-colors">{t('footer.terms')}</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">{t('footer.privacy')}</a></li>
              </ul>
            </FadeIn>
          </div>
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} FIRTENSOL S.A. <span className="mx-2">|</span> {t('footer.rights')}
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};
