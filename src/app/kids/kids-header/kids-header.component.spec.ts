import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsHeaderComponent } from './kids-header.component';

describe('KidsHeaderComponent', () => {
  let component: KidsHeaderComponent;
  let fixture: ComponentFixture<KidsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
