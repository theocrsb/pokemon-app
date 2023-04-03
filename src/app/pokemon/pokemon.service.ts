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
      tap((response) => this.log(response)),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => {
        console.log(error);
        return of(undefined);
      })
    );
  }

  private log(response: Pokemon | Pokemon[] | undefined) {
    console.table(response);
  }
  private handleError(err: Error, errorValue: [] | undefined) {
    console.error(err);
    return of(errorValue);
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
