import { ArrowRight, Server, Shield, Headphones } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-section"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 blob animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 blob animate-float-delayed" />
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-primary-light/10 rounded-full blur-3xl animate-pulse-soft" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Always Understanding You
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">PT Intinusa</span>
              <br />
              <span className="text-gradient">Dinamika Optima</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              <span className="text-primary font-semibold">Server, Storage, Computing, Printing, Network</span>
              <br />
              Enterprise & Retail Solutions
            </p>

            <p className="text-base text-muted-foreground">
              Your One Stop IT Solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-cta text-primary-foreground rounded-full px-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <a
                  href="https://web.whatsapp.com/send?phone=6285726072590&text=Halo%20PT.%20Intinusa%20Dinamika%20Optima."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Mulai Sekarang
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              >
                <a href="#services">Lihat Layanan</a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Tahun Pengalaman</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Klien Puas</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Dukungan</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-up-delayed">
            <div className="relative z-10">
              {/* Main Card */}
              <div className="card-glass p-8 md:p-10 rounded-3xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Server, label: 'Server & Storage', color: 'bg-primary' },
                    { icon: Shield, label: 'Network Security', color: 'bg-primary-light' },
                    { icon: Headphones, label: 'Service Center', color: 'bg-primary-dark' },
                    { icon: Server, label: 'IT Solutions', color: 'bg-primary' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group p-6 rounded-2xl bg-background hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                      <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <p className="font-medium text-sm text-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-glow animate-bounce-soft">
                Terpercaya ✓
              </div>
              <div className="absolute -bottom-4 -left-4 bg-background border border-border px-4 py-2 rounded-full text-sm font-medium shadow-card animate-bounce-soft" style={{ animationDelay: '0.5s' }}>
                🏆 Best IT Partner
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
