import React, { useEffect, useRef } from 'react';

export function Introduction() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target;
          section.classList.add('opacity-100');
          section.classList.remove('opacity-0');
          
          const image = section.querySelector('.about-image');
          const content = section.querySelector('.about-content');
          
          if (image) {
            image.classList.add('animate-slide-right');
          }
          
          if (content) {
            content.classList.add('animate-slide-left');
          }
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto opacity-0 transition-opacity duration-500" ref={sectionRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            À Propos
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative about-image opacity-0 transform translate-x-12">
              <img
                src="https://res.cloudinary.com/dceefnpod/image/upload/v1737365877/image_404_hgdpnl.png"
                alt="Rhouma Ali"
                className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-indigo-600 opacity-10 rounded-lg transition-opacity duration-500 hover:opacity-0"></div>
            </div>
            <div className="about-content opacity-0 transform -translate-x-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-8 transition-colors duration-300 hover:text-gray-900">
                Je suis Rhouma Ali, diplômé en sciences informatiques, expert en création graphique et passionné par le marketing digital. Grâce à mon expérience en design et gestion des réseaux sociaux, je vous aide à créer des campagnes percutantes qui boostent votre présence en ligne et génèrent des résultats concrets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}