import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelConsultarComponent } from './hotel-consultar.component';

describe('HotelConsultarComponent', () => {
  let component: HotelConsultarComponent;
  let fixture: ComponentFixture<HotelConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
