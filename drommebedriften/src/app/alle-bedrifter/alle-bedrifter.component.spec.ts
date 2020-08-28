import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleBedrifterComponent } from './alle-bedrifter.component';

describe('AlleBedrifterComponent', () => {
  let component: AlleBedrifterComponent;
  let fixture: ComponentFixture<AlleBedrifterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlleBedrifterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlleBedrifterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
