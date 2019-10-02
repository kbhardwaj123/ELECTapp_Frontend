import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebateDetailsComponent } from './debate-details.component';

describe('DebateDetailsComponent', () => {
  let component: DebateDetailsComponent;
  let fixture: ComponentFixture<DebateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
