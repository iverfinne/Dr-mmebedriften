import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseListerComponent } from './database-lister.component';

describe('DatabaseListerComponent', () => {
  let component: DatabaseListerComponent;
  let fixture: ComponentFixture<DatabaseListerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseListerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
