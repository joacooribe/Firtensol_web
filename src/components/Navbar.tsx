import React, { useState, useEffect } from 'react';
import { useTranslations } from '../i18n/utils';

interface Props {
  lang: 'es' | 'en';
}

export const Navbar: React.FC<Props> = ({ lang }) => {
  const t = useTranslations(lang);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: `/${lang}` },
    { name: t('nav.services'), href: `/${lang}/services` },
    { name: t('nav.aboutUs'), href: `/${lang}/about` },
    { name: t('nav.contact'), href: `/${lang}/contact` },
  ];

  const toggleLang = lang === 'es' ? 'en' : 'es';

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white shadow-sm py-3 border-b border-slate-100 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href={`/${lang}`} className="flex items-center gap-3 group">
          <img 
            src="/img/fit logo.jpeg" 
            alt="FIT Logo" 
            className="h-10 md:h-12 w-auto object-contain rounded-sm"
          />
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-primary/60 uppercase tracking-tighter hidden md:block">Firtensol Independent Testing</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-bold text-primary/80 hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-4 ml-4">
            <a
              href={`/${toggleLang}`}
              className="px-3 py-1 text-[10px] font-black border-2 border-primary/10 rounded hover:border-primary/30 text-primary transition-all uppercase tracking-widest"
            >
              {toggleLang}
            </a>
            <a 
              href={`/${lang}/contact`}
              className="bg-accent text-white px-7 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-accent/20 active:scale-95"
            >
              {t('hero.contact')}
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </header>
  );
};
