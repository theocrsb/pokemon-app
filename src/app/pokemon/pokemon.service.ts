import { Injectable } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService {
  // methodes :
  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find((pokemon) => pokemon.id == pokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
      "Plante",
      "Poison",
      "Feu",
      "Insecte",
      "Eau",
      "Electrik",
      "Normal",
      "Fée",
      "Vol",
      "Combat",
      "Psy",
    ];
  }
}
