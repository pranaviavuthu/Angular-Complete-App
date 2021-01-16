import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsToysComponent } from './kids-toys.component';

describe('KidsToysComponent', () => {
  let component: KidsToysComponent;
  let fixture: ComponentFixture<KidsToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsToysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
