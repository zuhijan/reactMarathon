import React from 'react';

import SmallPokeBallPng from 'assets/images/PokeBall1.png';
import CloudPng from 'assets/images/Cloud1.png';
import PokeBallPng from 'assets/images/Pokeball2.png';
import CloudBigPng from 'assets/images/Cloud2.png';
import PikachuPng from 'assets/images/Pikachu.png';

import s from './Parallax.module.scss';

const Parallax = () => {
  return (
    <div className={s.root}>
      <div className={s.smallPokeBall}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div className={s.cloud}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div className={s.cloudBig}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>

      <div className={s.pokeBall}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div className={s.pikachu}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
