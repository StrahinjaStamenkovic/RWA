import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicscardComponentComponent } from './graphicscard-component.component';

describe('GraphicscardComponentComponent', () => {
  let component: GraphicscardComponentComponent;
  let fixture: ComponentFixture<GraphicscardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicscardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicscardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
