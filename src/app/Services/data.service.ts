import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokeModel, Pokemon } from '../poke';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getPokemons() {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) {
   }

   getPokeName(){
    return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon?limit=60');
   }
   getPokeDetails(name : string){
    return this.http.get<PokeModel>(`https://pokeapi.co/api/v2/pokemon/${name}`);//Ecmascript placeholder ${}
  }

}
