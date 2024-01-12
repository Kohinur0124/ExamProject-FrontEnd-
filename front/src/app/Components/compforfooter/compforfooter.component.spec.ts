import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompforfooterComponent } from './compforfooter.component';

describe('CompforfooterComponent', () => {
  let component: CompforfooterComponent;
  let fixture: ComponentFixture<CompforfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompforfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompforfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
