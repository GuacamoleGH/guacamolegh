import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { StatusSection } from './components/StatusSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col selection:bg-emerald-500/25 selection:text-emerald-200">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <StatusSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
