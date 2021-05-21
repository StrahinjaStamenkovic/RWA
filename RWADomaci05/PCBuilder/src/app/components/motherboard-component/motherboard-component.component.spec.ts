import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardComponentComponent } from './motherboard-component.component';

describe('MotherboardComponentComponent', () => {
  let component: MotherboardComponentComponent;
  let fixture: ComponentFixture<MotherboardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherboardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
