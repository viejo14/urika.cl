import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 3-second timer for splash screen transition
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#0F172A',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Glowing Animated Background Hummingbird Figure */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{
              scale: [0.85, 1.08, 1],
              opacity: [0, 0.35, 0.25],
              rotate: [0, 2, 0]
            }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              width: '580px',
              height: '580px',
              backgroundImage: "url('/images/img_fondo.png')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              filter: 'drop-shadow(0 0 35px rgba(2, 132, 199, 0.4))',
              pointerEvents: 'none'
            }}
          />

          {/* Central Logo Emblem & Glowing Text */}
          <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 1.5rem' }}>
            
            {/* Logo Emblem */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}
            >
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '12px 24px',
                borderRadius: '0px',
                boxShadow: '0 15px 40px rgba(2, 132, 199, 0.35)'
              }}>
                <img
                  src="/urika-logo.png"
                  alt="Logo Escuela Urika"
                  style={{ height: '75px', objectFit: 'contain' }}
                />
              </div>
            </motion.div>

            {/* Glowing Main Title: URIKA */}
            <motion.h1
              initial={{ opacity: 0, y: 25, tracking: '0.2em' }}
              animate={{ opacity: 1, y: 0, tracking: '0.05em' }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '4.2rem',
                fontWeight: '800',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                lineHeight: 1,
                marginBottom: '0.6rem',
                textShadow: '0 0 30px rgba(2, 132, 199, 0.6)'
              }}
            >
              URIKA
            </motion.h1>

            {/* Subtitle: Escuela de Conductores */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                color: '#38BDF8',
                fontWeight: '600',
                letterSpacing: '0.22em',
                textTransform: 'uppercase'
              }}
            >
              Escuela de Conductores
            </motion.p>

            {/* Animated Loading Bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '220px' }}
              transition={{ duration: 2.2, delay: 0.5, ease: "easeInOut" }}
              style={{
                height: '3px',
                backgroundColor: '#0284C7',
                margin: '2rem auto 0 auto',
                boxShadow: '0 0 15px #38BDF8'
              }}
            />

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
