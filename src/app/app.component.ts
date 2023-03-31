import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: `./app.component.html`,
  // styles: ["h1 { text-align : center; }"],
})
// implements OnInit pour utiliser ngOnInit()
export class AppComponent implements OnInit {
  title = "pokemon-app";
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelect: Pokemon | undefined;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );
    if (pokemon) {
      console.log(`Vous avez demandé sur le pokemon ${pokemon.name}`);
      this.pokemonSelect = pokemon;
    } else {
      console.log(`Vous avez demandé un pokemon qui n'existe pas`);
      this.pokemonSelect = pokemon;
    }
  }
}
