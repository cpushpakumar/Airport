import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllothangarComponent } from './allothangar.component';

describe('AllothangarComponent', () => {
  let component: AllothangarComponent;
  let fixture: ComponentFixture<AllothangarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllothangarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllothangarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
