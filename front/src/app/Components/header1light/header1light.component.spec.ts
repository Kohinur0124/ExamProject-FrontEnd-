import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header1lightComponent } from './header1light.component';

describe('Header1lightComponent', () => {
  let component: Header1lightComponent;
  let fixture: ComponentFixture<Header1lightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Header1lightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Header1lightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
