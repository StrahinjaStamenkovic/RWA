import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamComponentComponent } from './ram-component.component';

describe('RamComponentComponent', () => {
  let component: RamComponentComponent;
  let fixture: ComponentFixture<RamComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
