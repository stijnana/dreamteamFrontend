import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningroutesControlComponent } from './learningroutes-control.component';

describe('LearningroutesControlComponent', () => {
  let component: LearningroutesControlComponent;
  let fixture: ComponentFixture<LearningroutesControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningroutesControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningroutesControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
