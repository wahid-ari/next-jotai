import { useAtom } from 'jotai';
import { pokemonAtom, pokemonData } from '@store/useAtom';

export function usePokemons() {
  const [pokemons, setPokemons] = useAtom(pokemonAtom)
  function addPokemon(name) {
    setPokemons([
      ...pokemons,
      { name: name, id: Math.random() * 100 },
    ])
  }
  function removePokemon(id) {
    setPokemons(pokemons.filter((pokemon) => pokemon.id !== id))
  }
  function removeAllPokemons() {
    setPokemons([])
  }
  function restoreAllPokemons() {
    setPokemons(pokemonData)
  }
  return {
    addPokemon,
    removePokemon,
    removeAllPokemons,
    restoreAllPokemons
  }
}