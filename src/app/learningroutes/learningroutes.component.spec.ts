import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningroutesComponent } from './learningroutes.component';

describe('LearningroutesComponent', () => {
  let component: LearningroutesComponent;
  let fixture: ComponentFixture<LearningroutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningroutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
