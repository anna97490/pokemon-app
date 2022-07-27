import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[] | undefined;
  pokemonSelected: Pokemon | undefined;

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonService.getPokemonById(+pokemonId);
    if(pokemon) {
      console.log(`Vous avez sélectionné ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Ce pokémon n'existe pas`);
      this.pokemonSelected = pokemon;
    }
  }

  constructor(private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.pokemonList = this.pokemonService.getPokemonList();
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
