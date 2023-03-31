import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  template: ` <h1>Liste de Pokémons</h1> `,
  styles: ['h1 { text-align : center; }'],
})
// implements OnInit pour utiliser ngOnInit()
export class AppComponent implements OnInit {
  title = 'pokemon-app';
  pokemonList = POKEMONS;
  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
  }
}
