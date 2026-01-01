import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logoWhite from '@/assets/logo-white.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#hero', label: 'Beranda' },
    { href: '#about', label: 'Tentang Kami' },
    { href: '#services', label: 'Layanan' },
    { href: '#products', label: 'Produk' },
    { href: '#clients', label: 'Klien' },
    { href: '#contact', label: 'Kontak' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-cta text-primary-foreground relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-16 px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={logoWhite}
                alt="PT Intinusa Dinamika Optima"
                className="h-12"
              />
            </div>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              PT. Intinusa Dinamika Optima adalah perusahaan IT yang berpusat di Kota Cilacap yang menyediakan solusi produk dan layanan IT profesional untuk bisnis Anda.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Jl. Achmad Yani No. 77 Cilacap, Jawa Tengah, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">085726072590</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">info@intinusa.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} PT Intinusa Dinamika Optima. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Always Understanding You | Your One Stop IT Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
