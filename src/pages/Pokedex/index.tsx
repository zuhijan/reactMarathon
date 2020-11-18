import React, { useState } from 'react';
import PokemonCard from 'components/PokemonCard';
import s from './Pokedex.module.scss';
import useData from '../../hook/getData';

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  if (isError) return <div>Something wrong</div>;
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((v) => ({
      ...v,
      name: e.target.value,
    }));
  };

  return (
    <div className={s.root}>
      <div>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data && (
            <div className={s.cards}>
              {data.pokemons.map(({ id, name, stats, types, img }) => (
                <PokemonCard key={id} name={name} stats={stats} types={types} img={img} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Pokedex;
