import React, { useEffect, useState } from 'react';

import SmallPokeBallPng from 'assets/images/PokeBall1.png';
import CloudPng from 'assets/images/Cloud1.png';
import PokeBallPng from 'assets/images/Pokeball2.png';
import CloudBigPng from 'assets/images/Cloud2.png';
import PikachuPng from 'assets/images/Pikachu.png';

import s from './Parallax.module.scss';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenX, screenY]);

  return (
    <div className={s.root}>
      <div
        style={{
          transform: `translate(${screenX * -0.01}px, ${screenY * -0.01}px) `,
        }}
        className={s.smallPokeBall}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div
        style={{
          transform: `translate(${screenX * -0.02}px, ${screenY * -0.02}px)`,
        }}
        className={s.cloud}>
        <img src={CloudPng} alt="Cloud" />
      </div>
      <div
        style={{
          transform: `translate(${screenX * 0.03}px, ${screenY * 0.03}px)`,
        }}
        className={s.cloudBig}>
        <img src={CloudBigPng} alt="Cloud Big" />
      </div>
      <div
        style={{
          zIndex: 1,
          transform: `translate(${screenX * 0.1}px, ${screenY * 0.04}px) rotate(${screenX * 0.5}deg) 
          scale(${(screenX < 400 ? 400 : screenX) * 0.001})`,
        }}
        className={s.pokeBall}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div
        style={{
          transform: `translate(${screenY * 0.05}px, ${screenX * 0.05}px)`,
        }}
        className={s.pikachu}>
        <img src={PikachuPng} alt="Pikachu" />
      </div>
    </div>
  );
};

export default Parallax;
