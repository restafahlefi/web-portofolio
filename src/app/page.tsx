import TerminalLoadingScreen from "@/components/TerminalLoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      {/* 1. Terminal Loading Screen (First thing user sees) */}
      <TerminalLoadingScreen />
      
      {/* 2. Interactive Background Canvas */}
      <BackgroundCanvas />
      
      {/* 3. Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* 4. Base Dark Layer */}
      <div className="fixed inset-0 -z-30 bg-[#0a0a0f]" />
      
      {/* 5. Navigation */}
      <Navbar />
      
      {/* 6. Back to Top Button */}
      <BackToTop />
      
      {/* 5. Main Content Sections */}
      <div className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Testimonials />
        <div className="relative">
             {/* Subtle Section Divider */}
             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
             <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
}
