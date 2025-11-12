import { State } from "./state.js";

export async function CommandPokedex(state: State) {
  if (!state.pokedex) {
    throw new Error("Your PokeDex is currently empty");
  }

  console.log("Your PokeDex:");
  for (const pokemonName of Object.keys(state.pokedex)) {
    console.log(`  - ${pokemonName}`);
  }
}
