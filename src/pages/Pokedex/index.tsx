import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer/Footer';
import PokemonCard from 'components/PokemonCard';
import s from './Pokedex.module.scss';
import pokemons from './pokemons';

const Pokedex = () => {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.cards}>
        {pokemons.map(({ id, name, stats, types, img }) => (
          <PokemonCard key={id} name={name} stats={stats} types={types} img={img} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Pokedex;
