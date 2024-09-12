import { Component, Inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA  } from '@angular/material/dialog'; // Importa el módulo del diálogo de Angular Material
import { MatButtonModule } from '@angular/material/button';
import { Pokemon } from '../../../domain/Pokemon/models/pokemon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule],
})
export class DialogComponent {
  pokemonTypes: string = '';
  constructor( @Inject(MAT_DIALOG_DATA) public data: Pokemon ) {
    this.pokemonTypes = data.types.map((type: { name: string }) => type.name).join(', ');
  }
}
