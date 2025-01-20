import React, { useEffect, useRef } from 'react';
import {
  Palette,
  Video,
  Code,
  MessageSquare,
  BarChart,
  Database,
  Brain,
  Search,
  Laptop
} from 'lucide-react';

const technicalSkills = [
  {
    icon: Palette,
    name: 'Design Graphique',
    description: 'Designs pour réseaux sociaux - Vignettes YouTube - Création de supports imprimés.',
    level: 85,
  },
  {
    icon: Video,
    name: 'Montage Vidéo',
    description: 'Création de contenu vidéo engageant',
    level: 70,
  },
  {
    icon: Code,
    name: 'Développement Web',
    description: 'HTML, CSS, et notions de JavaScript',
    level: 40,
  },
  {
    icon: Database,
    name: 'Data Scraping',
    description: 'Extraction de données à partir de sites web et d\'APIs avec Python',
    level: 60,
  },
];

const softSkills = [
  {
    icon: Search,
    name: 'Recherche stratégique',
    description: 'Identification des tendances du marché et analyse concurrentielle',
  },
  {
    icon: Laptop,
    name: 'Veille technologique',
    description: 'Suivi des évolutions du secteur et des outils numériques',
  },
  {
    icon: MessageSquare,
    name: 'Communication',
    description: 'Excellence en communication écrite et orale',
  },
  {
    icon: BarChart,
    name: 'Analyse Stratégique',
    description: 'Capacité à développer des stratégies efficaces',
  },
  {
    icon: Brain,
    name: 'Vision analytique',
    description: 'Capacité à interpréter les données et ajuster les stratégies',
  },
];

export function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Observer for skill items
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillItem = entry.target;
            skillItem.classList.add('animate-skill-item');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Separate observer for progress bars
    const progressObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target;
            progressBar.classList.add('animate');
            // Once animated, we can stop observing this progress bar
            progressObserver.unobserve(progressBar);
          }
        });
      },
      {
        threshold: 0.5, // Higher threshold for progress bars
        rootMargin: '50px', // Start animation slightly before the element comes into view
      }
    );

    // Observe skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 150}ms`;
      skillObserver.observe(item);
    });

    // Observe progress bars
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    progressBars.forEach((bar) => {
      progressObserver.observe(bar);
    });

    return () => {
      skillObserver.disconnect();
      progressObserver.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-title">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Compétences
          </span>
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center animate-subtitle">
              Compétences Techniques
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-item opacity-0 transform translate-y-8"
                >
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group hover:bg-indigo-50 h-full">
                    <skill.icon className="w-12 h-12 text-indigo-600 mb-4 transform group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-gray-600 mb-4 group-hover:text-gray-700">
                      {skill.description}
                    </p>
                    <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="progress-bar-fill absolute left-0 h-full bg-indigo-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ '--target-width': `${skill.level}%` } as React.CSSProperties}
                      >
                        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-right mt-1 text-sm text-gray-600">
                      {skill.level}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center animate-subtitle">
              Compétences Relationnelles
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-item opacity-0 transform translate-y-8"
                >
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group hover:bg-indigo-50 h-full">
                    <skill.icon className="w-12 h-12 text-indigo-600 mb-4 transform group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-gray-600 group-hover:text-gray-700">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}