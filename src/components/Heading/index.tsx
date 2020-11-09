import React from 'react';
import cn from 'classnames';
import s from './Heading.module.scss';

interface IHeading {
  className?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
}

const Heading: React.FC<IHeading> = ({ children, className = null, variant = 'h1' }) => {
  switch (variant) {
    case 'h2':
      return <h2 className={cn(s.root, className)}>{children}</h2>;
    case 'h3':
      return <h3 className={cn(s.root, className)}>{children}</h3>;
    case 'h4':
      return <h4 className={cn(s.root, className)}>{children}</h4>;
    default:
      return <h1 className={cn(s.root, className)}>{children}</h1>;
  }
};

export default Heading;
