import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesOffersComponent } from './shoes-offers.component';

describe('ShoesOffersComponent', () => {
  let component: ShoesOffersComponent;
  let fixture: ComponentFixture<ShoesOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoesOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
