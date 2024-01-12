import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSection3Component } from './card-section3.component';

describe('CardSection3Component', () => {
  let component: CardSection3Component;
  let fixture: ComponentFixture<CardSection3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSection3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
