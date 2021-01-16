import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsFilterComponent } from './bags-filter.component';

describe('BagsFilterComponent', () => {
  let component: BagsFilterComponent;
  let fixture: ComponentFixture<BagsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
