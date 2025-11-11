import { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Survey from './components/Survey';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleGetQuote = () => {
    window.location.href = '/survey';
  };

  if (currentPath === '/survey') {
    return (
      <LanguageProvider>
        <Survey />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-900">
        <Header onBookConsultation={() => setIsBookingOpen(true)} />
        <Hero
          onBookConsultation={() => setIsBookingOpen(true)}
          onGetQuote={handleGetQuote}
        />
        <Services />
        <Process onGetQuote={handleGetQuote} />
        <WhyChooseUs onGetQuote={handleGetQuote} />
        <FAQ />
        <Footer
          onBookConsultation={() => setIsBookingOpen(true)}
          onGetQuote={handleGetQuote}
        />

        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      </div>
    </LanguageProvider>
  );
}

export default App;
