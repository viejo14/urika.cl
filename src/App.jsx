import React from 'react';

// Hooks
import { useBookingModal } from './hooks/useBookingModal';

// Layout Components
import { TopBar } from './components/layout/TopBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Section Components
import { HeroSection } from './components/sections/HeroSection';
import { StatsSection } from './components/sections/StatsSection';
import { CourseCatalog } from './components/sections/CourseCatalog';
import { WhyUrikaSection } from './components/sections/WhyUrikaSection';
import { ProcessRoadmapSection } from './components/sections/ProcessRoadmapSection';
import { SocialFeedSection } from './components/sections/SocialFeedSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';

// Common Global Widgets
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { BookingModal } from './components/common/BookingModal';

export default function App() {
  const {
    isOpen,
    selectedCourseName,
    formSubmitted,
    formData,
    setFormData,
    openBooking,
    closeBooking,
    handleSubmit
  } = useBookingModal();

  return (
    <div className="app-root">
      {/* Top Contact Bar */}
      <TopBar />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenBooking={openBooking} />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenBooking={openBooking} />
        <StatsSection />
        <CourseCatalog onOpenBooking={openBooking} />
        <WhyUrikaSection />
        <ProcessRoadmapSection />
        <SocialFeedSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection
          formSubmitted={formSubmitted}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Floating Widgets & Modals */}
      <WhatsAppButton />
      <BookingModal
        isOpen={isOpen}
        onClose={closeBooking}
        selectedCourseName={selectedCourseName}
        formSubmitted={formSubmitted}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
