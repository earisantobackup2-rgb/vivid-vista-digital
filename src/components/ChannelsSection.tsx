const ChannelsSection = () => {
  const channels = [
    {
      name: 'Mbizmarket',
      url: 'https://www.mbizmarket.co.id/p/intinusaclp',
      logo: 'https://intinusa.co.id/assets/images/logo/bizmarket.png',
    },
    {
      name: 'E-Catalogue',
      url: 'https://e-katalog.lkpp.go.id/productsearchcontroller/listproduk?authenticityToken=fa535ce851994c567accfab1583d143a06c4e259&cat=&commodityId=88737&q=&jenis_produk=&kabid=233&pid=579887&mid=&tkdn_produk=-99&sni=-99&btu_id=&gt=&lt=',
      logo: 'https://intinusa.co.id/assets/images/logo/catalogue.png',
    },
    {
      name: 'Digipay',
      url: 'https://digipaysatu.kemenkeu.go.id/shop/category/products?param=vendor&search=inti-nusa-dinamika-optima',
      logo: 'https://intinusa.co.id/assets/images/logo/digipay.png',
    },
    {
      name: 'GEPSmart',
      url: '#',
      logo: 'https://intinusa.co.id/assets/images/logo/gepsmart.png',
    },
    {
      name: 'Padi UMKM',
      url: 'https://padiumkm.id/store/631a58778755a8a9895efd83',
      logo: 'https://intinusa.co.id/assets/images/logo/padiumkm.png',
    },
    {
      name: 'Siplah',
      url: 'https://siplah.tokoladang.co.id/official-store/pt-inti-nusa-dinamika-optima.28763',
      logo: 'https://intinusa.co.id/assets/images/logo/siplah.png',
    },
  ];

  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm">
            Channel & Klien
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Channel Pemasaran <span className="text-gradient">Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            PT. Intinusa Dinamika Optima telah terdaftar secara resmi di berbagai channel pemasaran untuk instansi anda seperti, E-CATALOGUE, MBIZ, PADIUMKM, SIPLAH, serta Onsite Survey di lokasi Instansi anda.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {channels.map((channel, index) => (
            <a
              key={index}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass p-6 flex items-center justify-center hover-lift group"
            >
              <img
                src={channel.logo}
                alt={channel.name}
                className="h-12 md:h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;
