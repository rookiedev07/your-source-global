import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Container from './Container';

export const Section = ({
  id,
  children,
  className = '',
  containerClassName = '',
  containerSize = 'default',
  bg = 'white',
  padding = 'default',
  useContainer = true,
  ...props
}) => {
  const bgClasses = {
    white: 'bg-white text-navy-900',
    subtle: 'bg-canvas-subtle text-navy-900',
    muted: 'bg-slate-50 text-navy-900',
    navy: 'bg-navy-900 text-white',
  };

  const paddingClasses = {
    none: 'py-0',
    compact: 'py-12 md:py-16',
    default: 'py-20 md:py-28',
    spacious: 'py-28 md:py-36',
  };

  return (
    <section
      id={id}
      className={twMerge(
        'relative w-full scroll-mt-20',
        bgClasses[bg] || bgClasses.white,
        paddingClasses[padding] || paddingClasses.default,
        className
      )}
      {...props}
    >
      {useContainer ? (
        <Container size={containerSize} className={containerClassName}>
          {children}
        </Container>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;
