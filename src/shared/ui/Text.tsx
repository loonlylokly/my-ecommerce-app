import React from 'react';

type TextProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children: React.ReactNode;
  className?: string;
}

export const Text = ({ variant, children, className = '' }: TextProps) => {
  const baseClasses = {
    h1: 'text-4xl font-bold mb-4',
    h2: 'text-3xl font-bold mb-3',
    h3: 'text-2xl font-bold mb-2',
    h4: 'text-xl font-bold mb-2',
    h5: 'text-lg font-bold mb-2',
    h6: 'text-base font-bold mb-2',
    p: 'text-base mb-2',
  };

  const Component = variant;
  const classes = `${baseClasses[variant]} ${className}`;

  return <Component className={classes}>{children}</Component>;
};
