import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compforsection6Component } from './compforsection6.component';

describe('Compforsection6Component', () => {
  let component: Compforsection6Component;
  let fixture: ComponentFixture<Compforsection6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Compforsection6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Compforsection6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
