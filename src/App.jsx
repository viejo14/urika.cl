import React, { useState } from 'react';
import { TopBar } from './components/layout/TopBar';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { StatsSection } from './components/sections/StatsSection';
import { CourseCatalog } from './components/sections/CourseCatalog';
import { WhyUrikaSection } from './components/sections/WhyUrikaSection';
import { ProcessRoadmapSection } from './components/sections/ProcessRoadmapSection';
import { SocialFeedSection } from './components/sections/SocialFeedSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { BookingModal } from './components/common/BookingModal';
import { SplashScreen } from './components/common/SplashScreen';
import { useBookingModal } from './hooks/useBookingModal';

export function App() {
  const { isModalOpen, selectedCourse, openBooking, closeBooking } = useBookingModal();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    comuna: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 8000);
  };

  return (
    <div className="app-root">
      {/* Executive 3-Second Splash Screen Intro Animation */}
      <SplashScreen />

      {/* Top Header Contact Bar */}
      <TopBar />

      {/* Main Glass Navigation */}
      <Navbar onOpenBooking={openBooking} />

      {/* Full-Screen Hero Slider */}
      <HeroSection onOpenBooking={openBooking} />

      {/* Institutional Accreditation Bar & Stats */}
      <StatsSection />

      {/* Course Catalog & Payment Banner */}
      <CourseCatalog onOpenBooking={openBooking} />

      {/* Why Urika Facilities */}
      <WhyUrikaSection />

      {/* Process Roadmap 1-4 */}
      <ProcessRoadmapSection />

      {/* Live Social Feeds (Facebook & Instagram) */}
      <SocialFeedSection />

      {/* Verified Google Reviews */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact Form & Google Map */}
      <ContactSection
        formSubmitted={formSubmitted}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleFormSubmit}
      />

      {/* Footer */}
      <Footer />

      {/* Floating Animated WhatsApp Button */}
      <WhatsAppButton />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        courseTitle={selectedCourse}
        onClose={closeBooking}
      />
    </div>
  );
}

export default App;
