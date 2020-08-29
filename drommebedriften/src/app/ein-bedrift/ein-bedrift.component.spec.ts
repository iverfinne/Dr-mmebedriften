import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EinBedriftComponent } from './ein-bedrift.component';

describe('EinBedriftComponent', () => {
  let component: EinBedriftComponent;
  let fixture: ComponentFixture<EinBedriftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EinBedriftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EinBedriftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
