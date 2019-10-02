import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedThreadsComponent } from './followed-threads.component';

describe('FollowedThreadsComponent', () => {
  let component: FollowedThreadsComponent;
  let fixture: ComponentFixture<FollowedThreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowedThreadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowedThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
