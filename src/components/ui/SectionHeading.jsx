import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
  eyebrowClassName = '',
  titleClassName = '',
  subtitleClassName = '',
  children,
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={twMerge(
        'flex flex-col max-w-3xl mb-12 md:mb-16',
        alignClasses[align] || alignClasses.center,
        className
      )}
    >
      {eyebrow && (
        <span
          className={twMerge(
            'text-eyebrow uppercase tracking-widest font-bold mb-3 px-3 py-1 rounded-full inline-block',
            isDark
              ? 'bg-navy-800 text-slate-300 border border-navy-700'
              : 'bg-navy-50 text-navy-800 border border-navy-100',
            eyebrowClassName
          )}
        >
          {eyebrow}
        </span>
      )}

      {title && (
        <h2
          className={twMerge(
            'text-3xl md:text-4xl lg:text-h2 font-display font-bold leading-tight tracking-tight',
            isDark ? 'text-white' : 'text-navy-900',
            titleClassName
          )}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={twMerge(
            'mt-4 text-base md:text-body-lg leading-relaxed',
            isDark ? 'text-slate-300' : 'text-slate-600',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
};

export default SectionHeading;
