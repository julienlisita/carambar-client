// src/pages/HomePage.jsx

import About from '../components/About.jsx';
import Hero from '../components/Hero.jsx';

export default function LandingPage() {
  return (
    <div >
      {/* Hero */}
      <Hero/>
      {/* Section À propos */}
      <About/>
    </div>
  );
}