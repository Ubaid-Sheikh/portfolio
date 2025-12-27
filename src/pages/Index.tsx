import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ParallaxSection from "@/components/ParallaxSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background cursor-none">
      <CustomCursor />
      <Navigation />
      <Hero />
      <ParallaxSection speed={0.3}>
        <About />
      </ParallaxSection>
      <ParallaxSection speed={0.2}>
        <TechStack />
      </ParallaxSection>
      <ParallaxSection speed={0.3}>
        <Projects />
      </ParallaxSection>
      <ParallaxSection speed={0.2}>
        <Contact />
      </ParallaxSection>
      <Footer />
    </main>
  );
};

export default Index;
