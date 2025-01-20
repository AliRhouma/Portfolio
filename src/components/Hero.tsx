import React from 'react';

export function Hero() {
  return (
    <section id="top" className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-violet-900 flex items-center justify-center relative overflow-hidden pt-32">
      {/* Background elements remain unchanged */}
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-7xl font-extrabold text-white mb-8 animate-title tracking-tight">
          Bienvenue dans mon{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            univers créatif
          </span>
          !
        </h1>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl mb-8 md:mb-12 border border-white/10">
          <p className="text-xl md:text-2xl text-white leading-relaxed animate-subtitle font-light">
            Boostez votre{' '}
            <span className="text-white font-medium">présence en ligne</span> avec des{' '}
            <span className="text-white font-medium">stratégies innovantes</span> et un{' '}
            <span className="text-white font-medium">design percutant</span>. Ensemble, transformons vos idées en{' '}
            <span className="text-white font-medium">campagnes mémorables</span> qui augmentent l'engagement, élargissent votre portée et génèrent des résultats concrets.
          </p>
        </div>
      </div>
    </section>
  );
}