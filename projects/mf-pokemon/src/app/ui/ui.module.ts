import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiRoutingModule } from './ui-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PokemonUsecaseService } from '../domain/Pokemon/usecases/pokemon-usecase.service';
import { PokemonGateway } from '../domain/Pokemon/models/gateways/pokemon-gateway';
import { PokemonService } from '../infraestructure/driven-adapters/Pokemon/pokemon.service';
import { DialogComponent } from './components/dialog/dialog.component';
import { ListComponent } from './pages/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule,
    HttpClientModule,
    DialogComponent,
    ListComponent
  ],
  providers: [
    PokemonUsecaseService,
    { provide: PokemonGateway, useClass: PokemonService }
  ],
})
export class UiModule { }
