import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { StatusSection } from './components/StatusSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col bg-grid-pattern relative selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Glow gradient ambient top */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-emerald-500/5 via-teal-500/5 to-transparent blur-[140px] -z-10" 
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <StatusSection />
        <ProjectsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
