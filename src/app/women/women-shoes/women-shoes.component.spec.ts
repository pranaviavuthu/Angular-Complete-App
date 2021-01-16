import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WOmenSHoesComponent } from './women-shoes.component';

describe('WOmenSHoesComponent', () => {
  let component: WOmenSHoesComponent;
  let fixture: ComponentFixture<WOmenSHoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WOmenSHoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WOmenSHoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
