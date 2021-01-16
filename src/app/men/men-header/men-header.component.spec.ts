import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenHeaderComponent } from './men-header.component';

describe('MenHeaderComponent', () => {
  let component: MenHeaderComponent;
  let fixture: ComponentFixture<MenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
