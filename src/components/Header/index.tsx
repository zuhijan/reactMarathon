import React, { FC } from 'react';
import { ReactComponent as PokemonLogoSvg } from 'assets/images/logo.svg';
import s from './Header.module.scss';

interface IHeader {}
interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'HOME',
    link: '#',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '#',
  },
];
const Header: FC<IHeader> = () => {
  return (
    <header className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
      </div>
      <nav className={s.menuWrap}>
        {MENU.map(({ id, value, link }) => (
          <a key={id} href={link} className={s.menuLink}>
            {value}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
