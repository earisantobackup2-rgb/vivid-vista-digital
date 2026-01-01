import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'PT. Intinusa Dinamika Optima telah memberikan solusi IT terbaik untuk perusahaan kami. Layanan mereka sangat profesional dan responsif.',
      name: 'Eko Arisanto',
      role: 'GM PT SEKAWAN GLOBAL KOMUNIKA',
    },
    {
      quote: 'Kami sangat puas dengan infrastruktur jaringan yang disediakan oleh PT. Intinusa Dinamika Optima. Tim mereka sangat ahli dan berpengalaman.',
      name: 'Agus Triyanto',
      role: 'BPPKAD Kab. Cilacap',
    },
    {
      quote: 'Layanan maintenance dari PT. Intinusa Dinamika Optima sangat membantu dalam menjaga performa sistem IT kami. Terima kasih atas dukungannya.',
      name: 'Dwi Santoso',
      role: 'IT Manager',
    },
  ];

  return (
    <section className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm">
            Testimonial
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Apa Kata <span className="text-gradient">Klien Kami</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-glass p-8 relative group hover-lift"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center shadow-glow">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="pt-4">
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
