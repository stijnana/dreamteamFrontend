import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';

describe('LearningRoutesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // @ts-ignore
    it("should create a new post", () => {
      // component.course = "newcourse";
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      // expect(compiled.innerHTML).toContain("newcourse");
    });
    // expect(component).toBeTruthy();
  });
});
