import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  // methodes :
  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>("api/pokemons").pipe(
      tap((pokemonList) => console.table(pokemonList)),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => console.log(pokemon)),
      catchError((error) => {
        console.log(error);
        return of(undefined);
      })
    );
  }

  private log(response: Pokemon | Pokemon[] | undefined) {}

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
