import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProductsSection from '@/components/ProductsSection';
import CTASection from '@/components/CTASection';
import ChannelsSection from '@/components/ChannelsSection';
import ClientsSection from '@/components/ClientsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PT Intinusa Dinamika Optima - Your One Stop IT Solutions</title>
        <meta
          name="description"
          content="PT Intinusa Dinamika Optima adalah perusahaan IT di Cilacap yang menyediakan solusi Server, Storage, Computing, Printing, Network Enterprise & Retail Solutions."
        />
        <meta
          name="keywords"
          content="IT Solutions, Server, Storage, Network, Printing, Service Center, Cilacap, Jawa Tengah"
        />
        <link rel="canonical" href="https://intinusa.co.id" />
      </Helmet>

      <main className="overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <CTASection />
        <ChannelsSection />
        <ClientsSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  );
};

export default Index;
