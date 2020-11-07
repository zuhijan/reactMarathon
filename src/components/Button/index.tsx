import React from 'react';

import s from './Button.module.scss';

interface IButton {
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const Button: React.FC<IButton> = ({ children, onClick }) => {
  return (
    <button className={s.root} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
