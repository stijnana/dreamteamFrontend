import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursetableComponent } from './coursetable.component';

describe('CoursetableComponent', () => {
  let component: CoursetableComponent;
  let fixture: ComponentFixture<CoursetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
