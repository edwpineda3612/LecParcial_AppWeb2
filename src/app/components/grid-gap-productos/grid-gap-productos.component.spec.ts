import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridGapProductosComponent } from './grid-gap-productos.component';

describe('GridGapProductosComponent', () => {
  let component: GridGapProductosComponent;
  let fixture: ComponentFixture<GridGapProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridGapProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridGapProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
