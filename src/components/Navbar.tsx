import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';
import logoColor from '@/assets/logo-color.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Beranda' },
    { href: '#about', label: 'Tentang Kami' },
    { href: '#services', label: 'Layanan' },
    { href: '#products', label: 'Produk' },
    { href: '#clients', label: 'Klien' },
    { href: '#contact', label: 'Kontak' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src={logoColor}
            alt="PT Intinusa Dinamika Optima"
            className="h-10 md:h-12 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <p className={`font-heading font-bold text-sm md:text-base transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-primary-dark'
            }`}>
              PT Intinusa Dinamika Optima
            </p>
            <p className={`text-xs transition-colors duration-300 ${
              isScrolled ? 'text-muted-foreground' : 'text-muted-foreground'
            }`}>
              IT Solutions
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-primary/10 ${
                isScrolled ? 'text-foreground hover:text-primary' : 'text-foreground/80 hover:text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            asChild
            variant="default"
            className="bg-gradient-cta hover:opacity-90 text-primary-foreground rounded-full px-6 shadow-soft transition-all duration-300 hover:shadow-hover hover:-translate-y-0.5"
          >
            <a
              href="https://web.whatsapp.com/send?phone=6285726072590&text=Halo%20PT.%20Intinusa%20Dinamika%20Optima."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Hubungi Kami
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-foreground'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border shadow-card transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container-custom py-6 px-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-foreground font-medium rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <Button
              asChild
              className="w-full bg-gradient-cta text-primary-foreground rounded-full shadow-soft"
            >
              <a
                href="https://web.whatsapp.com/send?phone=6285726072590&text=Halo%20PT.%20Intinusa%20Dinamika%20Optima."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Hubungi Kami
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
