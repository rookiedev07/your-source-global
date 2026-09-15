import React from 'react';
import { motion } from 'framer-motion';

export const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  y = 20,
  duration = 0.55,
  direction = 'up',
  as = 'div',
  ...props
}) => {
  const getInitial = () => {
    if (direction === 'up') return { opacity: 0, y };
    if (direction === 'down') return { opacity: 0, y: -y };
    if (direction === 'left') return { opacity: 0, x: y };
    if (direction === 'right') return { opacity: 0, x: -y };
    return { opacity: 0, y };
  };

  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
