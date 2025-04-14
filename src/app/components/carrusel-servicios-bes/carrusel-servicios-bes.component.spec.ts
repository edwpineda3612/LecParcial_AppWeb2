import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselServiciosBesComponent } from './carrusel-servicios-bes.component';

describe('CarruselServiciosBesComponent', () => {
  let component: CarruselServiciosBesComponent;
  let fixture: ComponentFixture<CarruselServiciosBesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselServiciosBesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarruselServiciosBesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
