import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselforHeader3Component } from './caruselfor-header3.component';

describe('CaruselforHeader3Component', () => {
  let component: CaruselforHeader3Component;
  let fixture: ComponentFixture<CaruselforHeader3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaruselforHeader3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaruselforHeader3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
