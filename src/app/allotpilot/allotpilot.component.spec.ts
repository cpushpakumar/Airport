import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotpilotComponent } from './allotpilot.component';

describe('AllotpilotComponent', () => {
  let component: AllotpilotComponent;
  let fixture: ComponentFixture<AllotpilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllotpilotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotpilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
