import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftermanagerloginComponent } from './aftermanagerlogin.component';

describe('AftermanagerloginComponent', () => {
  let component: AftermanagerloginComponent;
  let fixture: ComponentFixture<AftermanagerloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AftermanagerloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AftermanagerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
