import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";

const Index = () => {
  return (
    <>
      {/* Page Loader */}
      <PageLoader />

      <main className="min-h-screen bg-background relative">
        {/* Content */}
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <About />
          <Experience />
          <TechStack />
          <Projects />
          <Contact />
          <Footer />
        </div>

        {/* Scroll to top button */}
        <ScrollToTop />
      </main>
    </>
  );
};

export default Index;
