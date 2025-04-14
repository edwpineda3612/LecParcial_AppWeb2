import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioServiciosBesComponent } from './formulario-servicios-bes.component';

describe('FormularioServiciosBesComponent', () => {
  let component: FormularioServiciosBesComponent;
  let fixture: ComponentFixture<FormularioServiciosBesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioServiciosBesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioServiciosBesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
