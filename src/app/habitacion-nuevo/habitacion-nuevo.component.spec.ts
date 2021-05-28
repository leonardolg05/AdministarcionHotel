import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionNuevoComponent } from './habitacion-nuevo.component';

describe('HabitacionNuevoComponent', () => {
  let component: HabitacionNuevoComponent;
  let fixture: ComponentFixture<HabitacionNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitacionNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitacionNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
