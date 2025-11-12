import { State } from "./state.js";

export async function commandExplore(
  state: State,
  ...args: string[]
): Promise<void> {
  if (args.length !== 1) {
    throw new Error("Usage: explore <location_name>");
  }

  const locationName = args[0];
  const location = await state.pokeAPI.fetchLocation(locationName);

  console.log(`Exploring ${locationName}...`);
  console.log("Found Pokemon:");
  for (const encounter of location.pokemon_encounters) {
    console.log(` - ${encounter.pokemon.name}`);
  }
}
