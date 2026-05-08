import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

export const PageHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <section className="relative pt-48 pb-24 bg-slate-900 text-white overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ffffff10_0%,transparent_100%)] opacity-30"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8 animate-fade-in">
          Firtensol Independent Testing
        </div>
        <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 tracking-tighter fade-in drop-shadow-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium fade-in opacity-80" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
