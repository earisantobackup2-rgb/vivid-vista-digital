import { CheckCircle, Users, Award, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Teknisi Handal',
      description: 'Teknisi dan Marketing yang handal yang memahami kebutuhan anda.',
    },
    {
      icon: Award,
      title: 'Solusi Terbaik',
      description: 'Respon dan solusi IT terbaik dengan relasi konsultan kami.',
    },
    {
      icon: Briefcase,
      title: 'Partnership Global',
      description: 'Partnership dengan berbagai Brand Produk Internasional dan Perusahaan Distributor Lokal yang Handal.',
    },
    {
      icon: CheckCircle,
      title: 'Berpengalaman',
      description: 'Berpengalaman lebih dari 10 tahun di Dunia IT baik project, pengadaan maupun Service.',
    },
  ];

  const services = [
    {
      title: 'Server & Storage',
      description: 'Menyediakan server dan kelengkapannya sesuai kebutuhan klien.',
    },
    {
      title: 'Network & Internet',
      description: 'Instalasi jaringan dan layanan internet.',
    },
    {
      title: 'Office Peripheral & Solutions',
      description: 'Melayani pengadaan kebutuhan kantor seperti printer, PC, dan lain-lain.',
    },
    {
      title: 'Service Center',
      description: 'Merupakan Authorized service center dari Beberapa Brand terbaik di Dunia IT.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold uppercase tracking-wider text-sm">
                Tentang Kami
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Tim kami dengan{' '}
                <span className="text-gradient">pengalaman</span> dan{' '}
                <span className="text-gradient">pengetahuan IT</span> untuk Bisnis anda.
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              <span className="font-semibold text-foreground">PT. Intinusa Dinamika Optima</span> kami adalah 
              perusahaan IT yang berpusat di Kota Cilacap yang menyediakan solusi produk dan layanan seperti 
              infrastruktur, solusi, lisensi, perangkat, tenaga ahli, Jaringan, Maintenance, dll sesuai dengan 
              kebutuhan klien kami.
            </p>

            {/* Service List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                >
                  <h4 className="font-semibold text-foreground mb-1">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-glass p-6 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-cta rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
