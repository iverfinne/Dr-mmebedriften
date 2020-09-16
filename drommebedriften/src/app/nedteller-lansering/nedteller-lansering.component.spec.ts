import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NedtellerLanseringComponent } from './nedteller-lansering.component';

describe('NedtellerLanseringComponent', () => {
  let component: NedtellerLanseringComponent;
  let fixture: ComponentFixture<NedtellerLanseringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NedtellerLanseringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NedtellerLanseringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
