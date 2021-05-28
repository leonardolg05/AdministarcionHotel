import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasSeleccionComponent } from './listas-seleccion.component';

describe('ListasSeleccionComponent', () => {
  let component: ListasSeleccionComponent;
  let fixture: ComponentFixture<ListasSeleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasSeleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
