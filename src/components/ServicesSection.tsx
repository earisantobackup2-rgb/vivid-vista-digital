import { Server, Network, Monitor, Wrench } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Server,
      title: 'Server & Storage',
      description: 'Solusi server dan penyimpanan data enterprise untuk kebutuhan bisnis Anda.',
      gradient: 'from-primary to-primary-light',
    },
    {
      icon: Network,
      title: 'Network & Internet',
      description: 'Instalasi jaringan profesional dan layanan konektivitas yang handal.',
      gradient: 'from-primary-light to-primary',
    },
    {
      icon: Monitor,
      title: 'Office Peripheral & Solutions',
      description: 'Pengadaan perangkat kantor lengkap dari printer, PC, hingga multimedia.',
      gradient: 'from-primary to-primary-dark',
    },
    {
      icon: Wrench,
      title: 'Service Center',
      description: 'Authorized service center dari berbagai brand terkemuka di dunia IT.',
      gradient: 'from-primary-dark to-primary',
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm">
            Layanan
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Layanan <span className="text-gradient">Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Kami menyediakan berbagai layanan IT profesional untuk mendukung pertumbuhan bisnis Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="card-glass p-8 h-full hover-lift text-center">
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <service.icon className="w-10 h-10 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-cta rounded-full group-hover:w-1/2 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
