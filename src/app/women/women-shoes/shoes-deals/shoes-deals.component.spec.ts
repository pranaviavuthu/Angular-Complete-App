import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesDealsComponent } from './shoes-deals.component';

describe('ShoesDealsComponent', () => {
  let component: ShoesDealsComponent;
  let fixture: ComponentFixture<ShoesDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoesDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
