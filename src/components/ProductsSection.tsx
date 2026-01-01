import { Laptop, Printer, Monitor, Fingerprint, Volume2, Camera, Network, HardDrive, Wrench, Users } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    { icon: Laptop, label: 'Laptop/Notebook berbagai Merk' },
    { icon: Printer, label: 'Printer berbagai Merk' },
    { icon: Monitor, label: 'PC Branded berbagai Merk' },
    { icon: HardDrive, label: 'PC Rakitan / Custom' },
    { icon: Fingerprint, label: 'Mesin Fingerprint / Absensi' },
    { icon: Volume2, label: 'PABX & Sound System' },
    { icon: Camera, label: 'CCTV / IPCAM' },
    { icon: Network, label: 'Networking & Instalasi Jaringan' },
  ];

  const repairServices = [
    'Monitor',
    'Komputer (Laptop, AIO, Notebook)',
    'Printer, Scanner',
    'UPS',
    'LCD Projector',
    'CCTV, IPCAM, PABX',
    'Fingerprint',
    'Dan lain sebagainya',
  ];

  return (
    <section id="products" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm">
            Produk
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Produk dan Jasa <span className="text-gradient">Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Kami menyediakan Berbagai Produk dan Jasa Layanan di Dunia IT
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Products */}
          <div className="lg:col-span-2">
            <div className="card-glass p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-cta rounded-xl flex items-center justify-center">
                  <HardDrive className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Produk</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/60 transition-colors duration-300 group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <product.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium text-sm">{product.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Repair Services */}
          <div className="space-y-8">
            <div className="card-glass p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-cta rounded-xl flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Jasa Servis</h3>
              </div>
              <ul className="space-y-3">
                {repairServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Consultant */}
            <div className="card-glass p-8 bg-gradient-cta text-primary-foreground">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-xl">Konsultan & Tenaga Profesional</h3>
              </div>
              <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4">
                Tim kami yang terdiri dari tenaga ahli dan profesional berpengalaman dapat membantu menemukan solusi yang tepat untuk kebutuhan Anda.
              </p>
              <p className="text-primary-foreground/80 text-sm">
                Kami menyediakan jasa Managed Services, Outsourcing, Free Konsultansi untuk Manajemen dan Klien kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
