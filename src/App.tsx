import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Show/hide scroll to top button based on scroll position
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navigation />
      
      <main className="relative">
        <Hero />
        <Introduction />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>

      {/* Back to top button - Updated positioning and styling */}
      <a
        href="#top"
        className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Rhouma Ali. Tous droits réservés.
            </div>
            <div className="flex space-x-4">
              <a href="mailto:contact@rhoumaali.com" className="hover:text-indigo-400">
                alirhouma09@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;