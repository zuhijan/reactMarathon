import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface IButton {
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  backgroundColor?: string;
  width?: string | number;
  size?: 'small';
}

const Button: React.FC<IButton> = ({ children, onClick, backgroundColor, width, size }) => {
  return (
    <button
      style={{ backgroundColor, width }}
      className={cn(s.root, size ? s.small : '')}
      type="button"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
