import React, { useState } from 'react';
import PokemonCard from 'components/PokemonCard';
import s from './Pokedex.module.scss';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';

interface IQuery {
  name?: string;
}

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});
  const debounceValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debounceValue]);

  if (isError) return <div>Something wrong</div>;
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
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
              {data.pokemons.map(({ id, name, stats, types, img }: PokemonsRequest) => (
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
