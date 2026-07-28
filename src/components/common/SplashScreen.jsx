import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 2.8-second timer for ultra-clean minimalist splash intro
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#FFFFFF', // Crisp White Background
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Main Hummingbird Background Image Prominently Displayed in Center */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{
              scale: [0.85, 1.05, 1],
              opacity: [0, 0.95, 0.85]
            }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            style={{
              width: '420px',
              height: '320px',
              backgroundImage: "url('/images/img_fondo.png')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              marginBottom: '1rem',
              pointerEvents: 'none'
            }}
          />

          {/* Minimalist Corporate Typography Under Background Image */}
          <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 1.5rem' }}>
            
            {/* Clean Minimalist Title: URIKA */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '3.6rem',
                fontWeight: '800',
                color: '#0F172A',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                lineHeight: 1,
                marginBottom: '0.5rem'
              }}
            >
              URIKA
            </motion.h1>

            {/* Minimalist Subtitle: ESCUELA DE CONDUCTORES */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                color: '#0284C7',
                fontWeight: '600',
                letterSpacing: '0.28em',
                textTransform: 'uppercase'
              }}
            >
              Escuela de Conductores
            </motion.p>

            {/* Minimalist Accent Line Loader */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '140px', opacity: 1 }}
              transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
              style={{
                height: '2px',
                backgroundColor: '#0284C7',
                margin: '1.8rem auto 0 auto'
              }}
            />

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
