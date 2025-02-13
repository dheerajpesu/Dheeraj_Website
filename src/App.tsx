import React, { useState, useEffect, TouchEvent } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Badges } from './components/Badges';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Loading } from './components/Loading';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'badges', 'contact'];

  const getCurrentSectionIndex = () => sections.indexOf(activeSection);
  const getPrevSection = () => {
    const currentIndex = getCurrentSectionIndex();
    return currentIndex > 0 ? sections[currentIndex - 1] : null;
  };
  const getNextSection = () => {
    const currentIndex = getCurrentSectionIndex();
    return currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const minSwipeDistance = 50;
    const swipeDistance = touchStart - touchEnd;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      // Left swipe
      if (swipeDistance > 0) {
        const nextSection = getNextSection();
        if (nextSection) {
          setActiveSection(nextSection);
        }
      }
      // Right swipe
      else {
        const prevSection = getPrevSection();
        if (prevSection) {
          setActiveSection(prevSection);
        }
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div 
      className="min-h-screen bg-gray-50"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="pt-16 pb-20">
        <div className={activeSection === 'home' ? 'block' : 'hidden'}>
          <Home />
        </div>
        <div className={activeSection === 'about' ? 'block' : 'hidden'}>
          <About />
        </div>
        <div className={activeSection === 'skills' ? 'block' : 'hidden'}>
          <Skills />
        </div>
        <div className={activeSection === 'projects' ? 'block' : 'hidden'}>
          <Projects />
        </div>
        <div className={activeSection === 'certifications' ? 'block' : 'hidden'}>
          <Certifications />
        </div>
        <div className={activeSection === 'badges' ? 'block' : 'hidden'}>
          <Badges />
        </div>
        <div className={activeSection === 'contact' ? 'block' : 'hidden'}>
          <Contact />
        </div>
      </main>

      <Footer
        prevSection={getPrevSection()}
        nextSection={getNextSection()}
        setActiveSection={setActiveSection}
      />
    </div>
  );
}

export default App;