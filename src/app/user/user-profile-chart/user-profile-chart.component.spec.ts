import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileChartComponent } from './user-profile-chart.component';

describe('UserProfileChartComponent', () => {
  let component: UserProfileChartComponent;
  let fixture: ComponentFixture<UserProfileChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
