import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedriftQuizComponent } from './bedrift-quiz.component';

describe('BedriftQuizComponent', () => {
  let component: BedriftQuizComponent;
  let fixture: ComponentFixture<BedriftQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedriftQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedriftQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
