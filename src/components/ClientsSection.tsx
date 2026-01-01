const ClientsSection = () => {
  const clients = [
    {
      name: 'RSUD Prov Jateng',
      logo: 'https://intinusa.co.id/assets/images/logo/rsud-prov-jateng.png',
    },
    {
      name: 'Favehotel Aston',
      logo: 'https://intinusa.co.id/assets/images/logo/favehotel-aston.png',
    },
    {
      name: 'PT BNI Persero',
      logo: 'https://intinusa.co.id/assets/images/logo/pt-bni-persero.png',
    },
    {
      name: 'Pertamina',
      logo: 'https://intinusa.co.id/assets/images/logo/pertamina.png',
    },
    {
      name: 'Solusi Bangun Indonesia',
      logo: 'https://intinusa.co.id/assets/images/logo/solusi_bangun_indonesia.png',
    },
    {
      name: 'DPMPTSP Cilacap',
      logo: 'https://intinusa.co.id/assets/images/logo/dpmptsp_cilacap.jpeg',
    },
    {
      name: 'BPPKAD Cilacap',
      logo: 'https://intinusa.co.id/assets/images/logo/bppkad_cilacap.png',
    },
    {
      name: 'Kementrian Perhubungan',
      logo: 'https://intinusa.co.id/assets/images/logo/kementrian_perhubungan.png',
    },
    {
      name: 'Indonesia Power',
      logo: 'https://intinusa.co.id/assets/images/logo/indonesia_power.png',
    },
  ];

  return (
    <section id="clients" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm">
            Klien Kami
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Dipercaya oleh <span className="text-gradient">Perusahaan Terbaik</span>
          </h2>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/60 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-16 object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* More Clients */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg font-medium">
            Dan Masih Banyak Lagi...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
