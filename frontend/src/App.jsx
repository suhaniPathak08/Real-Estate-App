import { useCallback } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Properties from './components/Properties';
import Contact from './components/Contact';

function App() {
  const scrollToSection = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-overlay">
          <div className="hero-content">
            <h1>Find Your Dream Property</h1>
            <p>Discover the best real estate deals in your area</p>
            <a href="#properties" className="btn-primary">
              Browse Properties
            </a>
          </div>
          </div>
        </section>

        {/* Properties Section */}
        <section id="properties" className="section">
          <Properties />
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;