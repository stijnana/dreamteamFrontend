import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMoreCardComponent } from './read-more-card.component';

describe('ReadMoreCardComponent', () => {
  let component: ReadMoreCardComponent;
  let fixture: ComponentFixture<ReadMoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadMoreCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadMoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
