import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <h1>Welcome to {{ pokemons[0] }}!</h1> `,
  styles: [],
})
export class AppComponent {
  title = 'pokemon-app';
  pokemons = ['Bulbizarre', 'Salamèche', 'Carapuce'];
}
