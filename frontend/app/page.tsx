import Hero from "@/components/home/Hero";
import Bestsellers from "@/components/home/Bestsellers";
import WhyDifferent from "@/components/home/WhyDifferent";
import SignaturePizzas from "@/components/home/SignaturePizzas";
import AboutStats from "@/components/home/AboutStats";
import Testimonial from "@/components/ui/Testimonial";
import PhotoGallery from "@/components/home/PhotoGallery";
import OrderCTA from "@/components/ui/OrderCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Bestsellers />
      <WhyDifferent />
      <SignaturePizzas />
      <AboutStats />
      {/* <Testimonial /> */}
      <PhotoGallery />
      <OrderCTA />
    </main>
  );
}
