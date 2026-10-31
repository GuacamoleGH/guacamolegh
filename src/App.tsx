import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { InfraSection } from './components/InfraSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#090d14] text-slate-100 flex flex-col selection:bg-emerald-500/25 selection:text-emerald-200">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <InfraSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
