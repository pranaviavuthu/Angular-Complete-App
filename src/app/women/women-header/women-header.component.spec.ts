import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenHeaderComponent } from './women-header.component';

describe('WomenHeaderComponent', () => {
  let component: WomenHeaderComponent;
  let fixture: ComponentFixture<WomenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
