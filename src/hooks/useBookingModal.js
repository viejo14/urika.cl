import { useState } from 'react';
import confetti from 'canvas-confetti';

/**
 * Custom Hook para gestionar el modal de inscripción y la sumisión de formularios.
 */
export function useBookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourseName, setSelectedCourseName] = useState('Curso Completo Licencia Clase B');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    comuna: 'Santiago Centro'
  });

  const openBooking = (courseName) => {
    setSelectedCourseName(courseName);
    setIsOpen(true);
    setFormSubmitted(false);
  };

  const closeBooking = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return {
    isOpen,
    selectedCourseName,
    formSubmitted,
    formData,
    setFormData,
    openBooking,
    closeBooking,
    handleSubmit
  };
}
