import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorComponentComponent } from './processor-component.component';

describe('ProcessorComponentComponent', () => {
  let component: ProcessorComponentComponent;
  let fixture: ComponentFixture<ProcessorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessorComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
