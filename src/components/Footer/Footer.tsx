// @ts-ignore
import React, { FC } from 'react';
import s from './Footer.module.scss';

interface IFooter {}

const Footer: FC<IFooter> = () => {
  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <p className={s.text}>Make with</p>
        <p className={s.text}>Ours team</p>
      </div>
    </footer>
  );
};

export default Footer;
