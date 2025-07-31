import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Partners from '@/components/home/Partners';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Partners />
      <Testimonials />
      <Footer />
    </main>
  );
}
