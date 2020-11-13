import React, { useEffect, useState } from 'react';
import PokemonCard from 'components/PokemonCard';
import s from './Pokedex.module.scss';

interface IPokemonsData {
  total: number;
  count: number;
  offset: string;
  limit: number;
  pokemons: {
    nameClean: string;
    abilities: string[];
    stats: {
      hp: number;
      attack: number;
      defense: number;
      'special-attack': number;
      'special-defense': number;
      speed: number;
    };
    types: string[];
    img: string;
    name: string;
    baseExperience: number;
    height: number;
    id: number;
    isDefault: boolean;
    order: number;
    weight: number;
  }[];
}

const usePokemons = () => {
  const [data, setData] = useState<IPokemonsData>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getPokemons = async () => {
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=20');
        const result = await response.json();
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);
  return { data, isLoading, isError };
};

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something wrong</div>;

  return (
    <div className={s.root}>
      {data && (
        <div className={s.cards}>
          {data.pokemons.map(({ id, name, stats, types, img }) => (
            <PokemonCard key={id} name={name} stats={stats} types={types} img={img} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
