import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("Usage: catch <pokemon_name>");
  }

  const pokemonName = args[0];
  const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);

  console.log(`Throwing a Pokeball at ${pokemonName}...`);
  const catchChance = Math.floor(Math.random() * pokemon.base_experience);
  if (catchChance > 40) {
    console.log(`${pokemonName} escaped!`);
    return;
  }

  console.log(`${pokemonName} was caught!`);
  state.pokedex[pokemonName] = pokemon;
}
