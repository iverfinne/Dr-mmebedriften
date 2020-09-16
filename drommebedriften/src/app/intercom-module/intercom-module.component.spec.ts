import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercomModuleComponent } from './intercom-module.component';

describe('IntercomModuleComponent', () => {
  let component: IntercomModuleComponent;
  let fixture: ComponentFixture<IntercomModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntercomModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercomModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
