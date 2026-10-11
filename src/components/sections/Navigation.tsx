import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-navy/8 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div className="flex items-center gap-4">
          <Logo showTagline />
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-navy/70 transition-colors duration-200 hover:text-teal"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="primary" className="!px-4 !py-2.5">
            <Calendar size={15} />
            Book a Call
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden">
          <div className="mx-6 mb-4 rounded-xl border border-navy/10 bg-cream-light p-6 shadow-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-base font-medium text-navy/80 transition-colors hover:text-teal"
                >
                  {link.label}
                </a>
              ))}
              <Button href="#contact" variant="primary" className="mt-2 w-full justify-center" onClick={closeMenu}>
                <Calendar size={16} />
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
