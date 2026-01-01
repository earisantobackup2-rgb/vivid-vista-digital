import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cta" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-primary-foreground rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-primary-foreground rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-foreground rounded-full" />
        </div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-4xl mx-auto leading-tight">
          Solusi IT yang terbaik untuk bisnis anda merupakan tujuan kami
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Dengan keahlian serta pengalaman lebih dari 10 tahun baik dari perusahaan kami, perusahaan afiliasi maupun partner kami.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8 shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <a
            href="https://web.whatsapp.com/send?phone=6285726072590&text=Halo%20PT.%20Intinusa%20Dinamika%20Optima."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
