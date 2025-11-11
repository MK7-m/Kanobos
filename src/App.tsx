import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import IntakeForm from './components/IntakeForm';
import LanguageToggle from './components/LanguageToggle';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-900">
        <Header onBookConsultation={() => setIsBookingOpen(true)} />
        <LanguageToggle />
        <Hero
          onBookConsultation={() => setIsBookingOpen(true)}
          onGetQuote={() => setIsIntakeOpen(true)}
        />
        <Services />
        <Process onGetQuote={() => setIsIntakeOpen(true)} />
        <WhyChooseUs onGetQuote={() => setIsIntakeOpen(true)} />
        <FAQ />
        <Footer
          onBookConsultation={() => setIsBookingOpen(true)}
          onGetQuote={() => setIsIntakeOpen(true)}
        />

        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />

        <IntakeForm
          isOpen={isIntakeOpen}
          onClose={() => setIsIntakeOpen(false)}
        />
      </div>
    </LanguageProvider>
  );
}

export default App;
