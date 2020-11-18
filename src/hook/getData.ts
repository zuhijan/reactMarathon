import { useEffect, useState } from 'react';
import req from '../utils/request';

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
const useData = (endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<IPokemonsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const result = await req(endpoint, query);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, deps);
  return { data, isLoading, isError };
};

export default useData;
