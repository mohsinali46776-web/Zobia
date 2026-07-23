import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { About } from './components/About';
import { Interests } from './components/Interests';
import { Timeline } from './components/Timeline';
import { Research } from './components/Research';
import { Publications } from './components/Publications';
import { Skills } from './components/Skills';
import { Teaching } from './components/Teaching';
import { Conferences } from './components/Conferences';
import { Awards } from './components/Awards';
import { Gallery } from './components/Gallery';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { Dashboard } from './components/Dashboard';

export function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Sticky Institutional Navbar */}
      <Navbar
        onOpenCVModal={() => setCvModalOpen(true)}
        onOpenDashboard={() => setDashboardOpen(true)}
      />

      {/* Main Faculty Page Content */}
      <main>
        <Hero onOpenCVModal={() => setCvModalOpen(true)} />
        <Metrics />
        <About />
        <Interests />
        <Timeline />
        <Research />
        <Publications />
        <Skills />
        <Teaching />
        <Conferences />
        <Awards />
        <Gallery />
        <Blog />
        <Contact />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
      <Dashboard isOpen={dashboardOpen} onClose={() => setDashboardOpen(false)} />

    </div>
  );
}

export default App;
