import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarServicioBesComponent } from './actualizar-servicio-bes.component';

describe('ActualizarServicioBesComponent', () => {
  let component: ActualizarServicioBesComponent;
  let fixture: ComponentFixture<ActualizarServicioBesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarServicioBesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarServicioBesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
