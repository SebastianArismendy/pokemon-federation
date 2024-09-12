import { PokemonUsecaseService } from '../../../domain/Pokemon/usecases/pokemon-usecase.service';
import { Pokemon } from '../../../domain/Pokemon/models/pokemon.model';
import { ChangeDetectionStrategy, inject, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ListComponent implements OnInit {

  pokemonList: Pokemon[] = [];
  pokemon?: Pokemon;

  constructor(private _pokemonUsecase: PokemonUsecaseService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this._pokemonUsecase.getAllPokemon().subscribe((pokemons) => this.pokemonList = pokemons);
    // this._pokemonUsecase.getPokemonByName("bulbasaur").subscribe((pokemon) => this.pokemon = pokemon);
  }

  openDialog(pokemon: Pokemon): void {
    this.dialog.open(DialogComponent, {
      data: pokemon
    });
  }

}
