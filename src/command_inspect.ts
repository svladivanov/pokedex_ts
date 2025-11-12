import { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
  if (args.length !== 1) {
    throw new Error("Usage: inspect <pokemon_name>");
  }

  const pokemonName = args[0];
  const pokemon = state.pokedex[pokemonName];

  if (!pokemon) {
    throw new Error(`You have not caught ${pokemonName} yet.`);
  }

  console.log(`Name: ${pokemon.name}`);
  console.log(`Weight: ${pokemon.weight}`);
  console.log("Stats:");
  for (const stat of pokemon.stats) {
    console.log(`  - ${stat.stat.name}: ${stat.base_stat}`);
  }
  console.log("Types:");
  for (const type of pokemon.types) {
    console.log(`  - ${type.type.name}`);
  }
}
