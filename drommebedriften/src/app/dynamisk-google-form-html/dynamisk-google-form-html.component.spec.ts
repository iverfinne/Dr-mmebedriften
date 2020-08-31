import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiskGoogleFormHTMLComponent } from './dynamisk-google-form-html.component';

describe('DynamiskGoogleFormHTMLComponent', () => {
  let component: DynamiskGoogleFormHTMLComponent;
  let fixture: ComponentFixture<DynamiskGoogleFormHTMLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiskGoogleFormHTMLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiskGoogleFormHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
