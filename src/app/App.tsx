import { DotNav } from './components/DotNav';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { DotPattern } from './components/DotPattern';

export default function App() {
  return (
    <main className="h-[100dvh] overflow-y-auto scroll-smooth snap-y snap-mandatory bg-white selection:bg-black selection:text-white">
      <DotPattern />
      <DotNav />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />

      {/* <footer className="py-8 text-center text-gray-600 border-t border-gray-200">
        <p>2026 | Som Raj | </p>
      </footer> */}
    </main>
  );
}