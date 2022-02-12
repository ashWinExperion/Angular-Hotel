import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdBookingComponent } from './curd-booking.component';

describe('CurdBookingComponent', () => {
  let component: CurdBookingComponent;
  let fixture: ComponentFixture<CurdBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurdBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
