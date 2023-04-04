import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [],
})
export class SearchPokemonComponent implements OnInit {
  //  searchTerm construit un flux de donnée
  //  {...'a'...'ab'...'abz'...'ab'...'abc'...}
  searchTerm = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router, private pokemonService: PokemonService) {
    this.pokemons$ = this.searchTerm.pipe(
      //  {...'a'.'ab'....'abz'.'ab'....'abc'.....}
      debounceTime(300),
      //  {..'ab'....'ab'.... 'abc'.....}
      distinctUntilChanged(),
      //  {..'ab'............ 'abc'.....}
      switchMap((term) => this.pokemonService.searchPokemonList(term))
      //  {..pokemonList(ab)............ pokemonList(abc).....}
      //  concatMap / mergeMap / switchMap
    );
  }

  ngOnInit(): void {}

  search(term: string) {
    // next push avec un flux de donnée
    this.searchTerm.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemons', pokemon.id];
    this.router.navigate(link);
  }
}
