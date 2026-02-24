import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { DotPattern } from './components/DotPattern';

export default function App() {
  return (
    <div className="bg-white selection:bg-black selection:text-white">
      <DotPattern />
      <Header />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />

      {/* <footer className="py-8 text-center text-gray-600 border-t border-gray-200">
        <p>2026 | Som Raj | </p>
      </footer> */}
    </div>
  );
}