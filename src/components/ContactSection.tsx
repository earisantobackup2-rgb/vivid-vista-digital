import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Halo PT. Intinusa Dinamika Optima.%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0APesan: ${formData.message}`;
    window.open(`https://web.whatsapp.com/send?phone=6285726072590&text=${message}`, '_blank');
    
    toast({
      title: 'Pesan dikirim!',
      description: 'Kami akan segera menghubungi Anda.',
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      details: ['WhatsApp: 085726072590', 'Telepon: 0282531042'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@intinusa.co.id'],
    },
    {
      icon: MapPin,
      title: 'Alamat',
      details: ['Jl. Achmad Yani No. 77 Cilacap', 'Jawa Tengah, Indonesia'],
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: ['Senin - Jumat', '09.00 - 17.00 WIB'],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm">
            Kontak
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Hubungi <span className="text-gradient">Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Siap membantu kebutuhan IT bisnis Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-glass p-8 order-2 lg:order-1">
            <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">
              Kirim Pesan
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Anda"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Pesan Anda"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-cta text-primary-foreground rounded-full shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <Send className="w-4 h-4 mr-2" />
                Kirim Pesan
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-cta rounded-xl flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-card h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.5427094773577!2d109.00671877420572!3d-7.732110276631123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e8ce24aea6b%3A0x5cce37cdec7cf8c4!2sPT%20Intinusa%20Dinamika%20Optima!5e0!3m2!1sen!2sid!4v1767274559753!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PT Intinusa Dinamika Optima Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
