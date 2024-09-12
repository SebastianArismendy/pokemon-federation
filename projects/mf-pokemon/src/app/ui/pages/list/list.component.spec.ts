import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { PokemonUsecaseService } from '../../../domain/Pokemon/usecases/pokemon-usecase.service';
import { PokemonGateway } from '../../../domain/Pokemon/models/gateways/pokemon-gateway';
import { PokemonService } from '../../../infraestructure/driven-adapters/Pokemon/pokemon.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ListComponent,
        DialogComponent,
        HttpClientModule
      ],
      providers: [
        PokemonUsecaseService,
        { provide: PokemonGateway, useClass: PokemonService }
      ]
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
