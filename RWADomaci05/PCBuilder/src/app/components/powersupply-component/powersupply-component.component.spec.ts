import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowersupplyComponentComponent } from './powersupply-component.component';

describe('PowersupplyComponentComponent', () => {
  let component: PowersupplyComponentComponent;
  let fixture: ComponentFixture<PowersupplyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowersupplyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowersupplyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
