import Hero from "./components/Hero";
import ReviewCTA from "./components/ReviewCTA";
import LinksList from "./components/LinksList";
import Services from "./components/Services";
import Guarantee from "./components/Guarantee";
import Badges from "./components/Badges";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="relative mx-auto min-h-screen max-w-[480px] overflow-hidden bg-bg">
      <Hero />
      <main className="relative z-10 -mt-14 px-5 pb-7">
        <ReviewCTA />
        <div className="h-4.5" />
        <LinksList />
        <Services />
        <Guarantee />
        <Badges />

        {/*
          Próximos pasos del plan completo (no incluidos en esta entrega):
          - Sección "¿Por qué Climarte?" (diferencial)
          - Sección "Cómo trabajamos" (proceso paso a paso)
          - Sección "Trabajos realizados" (casos con fotos)
          - Sección "Pretemporada" con voucher por WhatsApp
          - Sección "Equipos & insumos" (catálogo, próximamente)
          - Tracking de conversiones (Meta Pixel / eventos de clic)
          Cuando se sumen, van como nuevos componentes en src/components/
          y entradas nuevas en src/data/, sin tocar lo ya construido.
        */}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
