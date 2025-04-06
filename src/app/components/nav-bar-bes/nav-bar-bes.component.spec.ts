import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBESComponent } from './nav-bar-bes.component';

describe('NavBarBESComponent', () => {
  let component: NavBarBESComponent;
  let fixture: ComponentFixture<NavBarBESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarBESComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarBESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
