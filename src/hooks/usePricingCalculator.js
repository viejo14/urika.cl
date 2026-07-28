import { useState } from 'react';
import { COURSES_DATA, SCHEDULE_OPTIONS } from '../data/coursesData';

/**
 * Custom Hook para la lógica de cálculo dinámico de precios y cuotas.
 */
export function usePricingCalculator() {
  const [selectedCourseId, setSelectedCourseId] = useState('claseB');
  const [preferredScheduleId, setPreferredScheduleId] = useState('tar');
  const [installments, setInstallments] = useState(2);

  const selectedCourse = COURSES_DATA.find(c => c.id === selectedCourseId) || COURSES_DATA[0];
  const selectedSchedule = SCHEDULE_OPTIONS.find(s => s.id === preferredScheduleId) || SCHEDULE_OPTIONS[0];

  const calculatedTotal = Math.round(selectedCourse.basePrice * selectedSchedule.multiplier);
  const onlineDiscount = Math.round(calculatedTotal * (selectedCourse.discountPercent / 100));
  const finalPrice = calculatedTotal - onlineDiscount;
  const monthlyPayment = Math.round(finalPrice / installments);

  return {
    selectedCourseId,
    setSelectedCourseId,
    preferredScheduleId,
    setPreferredScheduleId,
    installments,
    setInstallments,
    selectedCourse,
    selectedSchedule,
    calculatedTotal,
    onlineDiscount,
    finalPrice,
    monthlyPayment
  };
}
