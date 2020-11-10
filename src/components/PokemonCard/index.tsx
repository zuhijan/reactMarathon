import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface PokemonCardProps {
  name: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
  };
  img: string;
  types: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, stats, img, types }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading variant="h5" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((item) => (
            <span key={item} className={s.label}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
