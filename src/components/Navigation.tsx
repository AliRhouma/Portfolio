import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#top"
            className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-indigo-600' : 'text-white'
            }`}
          >
            Rhouma Ali
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#about" isScrolled={isScrolled}>À propos</NavLink>
            <NavLink href="#skills" isScrolled={isScrolled}>Compétences</NavLink>
            <NavLink href="#experience" isScrolled={isScrolled}>Expérience</NavLink>
            <NavLink href="#portfolio" isScrolled={isScrolled}>Portfolio</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
                À propos
              </MobileNavLink>
              <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>
                Compétences
              </MobileNavLink>
              <MobileNavLink href="#experience" onClick={() => setIsMenuOpen(false)}>
                Expérience
              </MobileNavLink>
              <MobileNavLink href="#portfolio" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) {
  return (
    <a
      href={href}
      className={`transition-colors duration-200 ${
        isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-white hover:text-indigo-200'
      }`}
    >
      {children}
    </a>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
      onClick={onClick}
    >
      {children}
    </a>
  );
}