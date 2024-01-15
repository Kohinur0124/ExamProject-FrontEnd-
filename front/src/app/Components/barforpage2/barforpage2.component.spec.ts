import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barforpage2Component } from './barforpage2.component';

describe('Barforpage2Component', () => {
  let component: Barforpage2Component;
  let fixture: ComponentFixture<Barforpage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Barforpage2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Barforpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
