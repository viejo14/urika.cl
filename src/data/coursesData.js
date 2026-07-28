/**
 * Base de datos modular de cursos de conducción para Urika.
 * Permite agregar fácilmente nuevos programas (ej. Licencia Profesional Clase A2/A4, Motos Clase C, etc.).
 */

export const COURSES_DATA = [
  {
    id: 'claseB',
    badge: 'Más Popular',
    badgeType: 'green',
    title: 'Curso Completo Licencia Clase B',
    shortDesc: 'Diseñado para personas sin experiencia previa. Aprende desde cero con metodología progresiva y segura.',
    basePrice: 195000,
    discountPercent: 15,
    practicalClasses: '12 Clases Prácticas Individuales (45 min)',
    theoreticalModule: '5 Sesiones Teóricas Examen Conaset',
    psychotechnic: 'Ensayos Psicotécnicos en Simulador de Gabinete Sensométrico',
    features: [
      '12 Clases Prácticas en Ruta Real',
      '5 Clases Teóricas Examen Municipal',
      'Ensayos Psicotécnicos Ilimitados',
      'Préstamo de Auto para el Examen Municipal'
    ],
    popular: true,
    ctaText: 'Inscribirme en Clase B'
  },
  {
    id: 'reforzamiento',
    badge: 'Práctico Avanzado',
    badgeType: 'slate',
    title: 'Curso de Reforzamiento Práctico',
    shortDesc: 'Para personas con o sin licencia que deseen perder el miedo al volante, perfeccionar estacionamientos o autopistas.',
    basePrice: 135000,
    discountPercent: 15,
    practicalClasses: '8 Clases Prácticas Personalizadas',
    theoreticalModule: 'Evaluación de Maniobras Críticas',
    psychotechnic: 'Revisión Sensométrica Opcional',
    features: [
      '8 Clases Prácticas Personalizadas',
      'Maniobras en Estacionamientos Paralelos',
      'Conducción en Autopistas y Pendientes',
      'Horarios 100% Adaptables a tu Tiempo'
    ],
    popular: false,
    ctaText: 'Consultar Reforzamiento'
  },
  {
    id: 'teorico',
    badge: 'Intensivo',
    badgeType: 'gold',
    title: 'Curso Teórico Intensivo Conaset',
    shortDesc: 'Domina el Libro del Conductor Inteligente y aprueba el examen teórico municipal sin sorpresas.',
    basePrice: 65000,
    discountPercent: 15,
    practicalClasses: 'N/A (Enfoque Teórico-Práctico Digital)',
    theoreticalModule: 'Plataforma 24/7 Conaset',
    psychotechnic: 'Banco de Preguntas Trampa',
    features: [
      'Acceso 24/7 a Plataforma Online',
      'Ensayos Reales de Examen Conaset',
      'Resolución de Preguntas Trampa',
      'Certificado de Contenidos Aprobados'
    ],
    popular: false,
    ctaText: 'Ver Curso Teórico'
  }
];

export const SCHEDULE_OPTIONS = [
  { id: 'man', label: 'Mañana (08:30 - 13:00)', multiplier: 1.0 },
  { id: 'tar', label: 'Tarde (14:00 - 18:00)', multiplier: 1.0 },
  { id: 'ves', label: 'Sábado / Vespertino (18:00 - 20:30)', multiplier: 1.05 }
];
