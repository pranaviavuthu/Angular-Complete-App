import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsResultsComponent } from './bags-results.component';

describe('BagsResultsComponent', () => {
  let component: BagsResultsComponent;
  let fixture: ComponentFixture<BagsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
