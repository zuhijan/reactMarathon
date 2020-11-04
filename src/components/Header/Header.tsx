// @ts-ignore
import React, { FC } from 'react';
import cn from 'classnames';
import s from './Header.module.scss';
import logo from '../../../public/images/Logo.png';

interface IHeader {}

const Header: FC<IHeader> = () => {
  console.log('sdfs#');
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <img src={logo} alt="логотип" />
        <nav className={s.nav}>
          <p className={cn(s.link, s.link_selected)}>Home</p>
          <p className={s.link}>Pokédex</p>
          <p className={s.link}>Legendaries</p>
          <p className={s.link}>Documentation</p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
