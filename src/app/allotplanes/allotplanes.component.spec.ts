import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotplanesComponent } from './allotplanes.component';

describe('AllotplanesComponent', () => {
  let component: AllotplanesComponent;
  let fixture: ComponentFixture<AllotplanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllotplanesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotplanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
