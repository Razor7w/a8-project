import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  ditto (): Observable<any> {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/ditto')
  }
}
