import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTestComponent } from './student-test.component';

describe('StudentTestComponent', () => {
  let component: StudentTestComponent;
  let fixture: ComponentFixture<StudentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
