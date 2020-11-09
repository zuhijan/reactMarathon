import React, { FC } from 'react';
import s from './Footer.module.scss';

interface IFooter {}

const Footer: FC<IFooter> = () => {
  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <span className={s.text} role="img" aria-label="Make with love">
          Make with ❤️
        </span>
        <p className={s.text}>Ours team</p>
      </div>
    </footer>
  );
};

export default Footer;
