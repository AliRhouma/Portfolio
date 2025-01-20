import React, { useEffect, useRef } from 'react';
import { Calendar, Building2, Award } from 'lucide-react';
import { CountUpAnimation } from './CountUpAnimation';
import { useInView } from './useInView';

const experiences = [
  {
    id: 'wisecool',
    date: '2023 (2 mois)',
    company: 'Wisecool Platform',
    role: 'Designer Graphique',
    description: `Dans mon rôle chez Wisecool, j'ai conçu des contenus visuels pour améliorer l'apparence de la plateforme éducative et renforcer son impact en ligne.`,
    achievements: [
      'Création de plus de 20 visuels pour les réseaux sociaux',
      'Élaboration et mise en place d\'une charte graphique cohérente',
      'Participation à la création de l\'interface utilisateur (UI) en utilisant Figma',
    ],
    stats: [
      { value: 20, prefix: '+', label: 'Visuels créés' },
      { value: 2, prefix: '+', label: 'Vidéos éditées' }
    ],
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'bacbot',
    date: '2024 (6 mois)',
    company: 'Bac Bot (TikTok Account)',
    role: 'Créateur et Responsable Marketing',
    description: `En tant que créateur du compte TikTok Bac Bot, j'ai supervisé l'ensemble du processus, de la stratégie marketing à la création de contenu, en passant par la gestion des ventes et des designs visuels.`,
    achievements: [
      'Développement et mise en œuvre de stratégies marketing efficaces, atteignant plus de 800k vues',
      'Création de contenus visuels engageants pour les réseaux sociaux, générant plus de 50k likes',
      'Gestion des ventes et optimisation de la conversion, avec plus de 50 ventes réalisées',
      'Élaboration de stratégies de contenu ayant permis l\'acquisition de +8k abonnés',
    ],
    stats: [
      { value: 800, suffix: 'k+', label: 'Vues totales' },
      { value: 50, suffix: 'k+', label: 'Likes' },
      { value: 8, suffix: 'k+', label: 'Abonnés' },
      { value: 50, prefix: '+', label: 'Ventes' }
    ],
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, 0.1);

  useEffect(() => {
    if (isInView) {
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.remove('opacity-0', 'translate-y-20');
          item.classList.add('opacity-100', 'translate-y-0');
          
          const date = item.querySelector('.timeline-date');
          const content = item.querySelector('.timeline-content');
          
          if (date) {
            date.classList.remove('opacity-0');
            date.classList.add('opacity-100');
          }
          
          if (content) {
            content.classList.remove('opacity-0');
            content.classList.add('opacity-100');
          }
        }, index * 300);
      });
    }
  }, [isInView]);

  return (
    <section 
      id="experience" 
      className="py-20 bg-white min-h-screen transition-opacity duration-500"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Expérience
          </span>
        </h2>

        <div className="max-w-7xl mx-auto relative">
          {/* Timeline line with fade effect */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full top-0">
            <div
              className="w-0.5 h-full bg-gradient-to-b from-indigo-600 to-indigo-200 transition-opacity duration-700 ease-in-out"
            ></div>
          </div>

          {/* Timeline items */}
          <div className="relative space-y-32">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="timeline-item opacity-0 translate-y-20 transition-all duration-700"
              >
                {/* Date indicator with dot */}
                <div className={`timeline-date opacity-0 transition-all duration-500 mb-8 w-full z-20 flex ${
                  index % 2 === 0 ? 'md:justify-end md:pr-[calc(50%+2rem)]' : 'md:justify-start md:pl-[calc(50%+2rem)]'
                }`}>
                  <div className="relative flex items-center gap-4 bg-white px-8 py-4 rounded-xl shadow-lg w-72 hover:shadow-xl transition-all duration-300 hover:bg-indigo-50 group">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full border-2 border-white shadow-sm animate-pulse" />
                    <Calendar className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium text-indigo-600">{exp.date}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">
                  <div className={`timeline-content opacity-0 transition-all duration-500 z-10 ${
                    index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                  }`}>
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                      <div className="space-y-6">
                        {/* Title and Role */}
                        <div className="flex items-start gap-4 mb-6">
                          <Building2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1 transform transition-transform duration-500 group-hover:rotate-12" />
                          <div>
                            <h3 className="text-xl font-semibold mb-1 transition-colors duration-300 group-hover:text-indigo-600">
                              {exp.company}
                            </h3>
                            <h4 className="text-base text-indigo-600 opacity-90">
                              {exp.role}
                            </h4>
                          </div>
                        </div>

                        {/* Image */}
                        <div className="overflow-hidden rounded-lg">
                          <img
                            src={exp.image}
                            alt={exp.company}
                            className="w-full h-48 object-cover rounded-lg shadow-md transform transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {exp.stats.map((stat, i) => (
                            <div
                              key={i}
                              className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 group"
                            >
                              <div className="text-2xl font-bold text-indigo-600">
                                <CountUpAnimation
                                  end={stat.value}
                                  prefix={stat.prefix}
                                  suffix={stat.suffix}
                                  duration={2000}
                                />
                              </div>
                              <div className="text-sm text-gray-600 mt-1 group-hover:text-gray-800 transition-colors">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Description and Achievements */}
                        <div>
                          <p className="text-gray-600 mb-6 transition-colors duration-300 group-hover:text-gray-800">
                            {exp.description}
                          </p>
                          
                          <div className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-center gap-2 transform transition-transform duration-300 hover:translate-x-2">
                                <Award className="w-5 h-5 text-indigo-600 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                                <span className="text-gray-700">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}