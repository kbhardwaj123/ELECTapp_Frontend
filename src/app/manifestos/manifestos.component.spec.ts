import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestosComponent } from './manifestos.component';

describe('ManifestosComponent', () => {
  let component: ManifestosComponent;
  let fixture: ComponentFixture<ManifestosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifestosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
