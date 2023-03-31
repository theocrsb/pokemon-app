import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styles: ['h1 { text-align : center; }'],
})
// implements OnInit pour utiliser ngOnInit()
export class AppComponent implements OnInit {
  title = 'pokemon-app';
  pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce'];
  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon('Bulbizarre');
  }

  selectPokemon(pokemonName: string) {
    console.log(`Vous avez cliqué sur le pokemon ${pokemonName}`);
  }
}
