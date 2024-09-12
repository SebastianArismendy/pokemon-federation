import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogComponent } from './dialog.component';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';


const mockDialogData = {
  name: 'Bulbasaur',
  height: 7,
  weight: 69,
  types: [{ name: 'grass' }, { name: 'poison' }],
  imagen: { url: 'https://pokeapi.co/media/sprites/pokemon/1.png' }
};


describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DialogComponent,  MatDialogModule, CommonModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: mockDialogData, // Usar la constante definida arriba
        },
      ],
    });
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
