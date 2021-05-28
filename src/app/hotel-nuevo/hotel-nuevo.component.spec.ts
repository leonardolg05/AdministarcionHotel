import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelNuevoComponent } from './hotel-nuevo.component';

describe('HotelNuevoComponent', () => {
  let component: HotelNuevoComponent;
  let fixture: ComponentFixture<HotelNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
