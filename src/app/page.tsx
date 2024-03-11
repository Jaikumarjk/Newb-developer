import HeroSection from "@/components/HeroSection";
import Products from '@/components/Products';
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0]">
      <HeroSection />
     <Products />
     <Footer />
    </main>
  );
}
