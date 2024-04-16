import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Creator2Component } from './creator2.component';

describe('Creator2Component', () => {
  let component: Creator2Component;
  let fixture: ComponentFixture<Creator2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Creator2Component]
    });
    fixture = TestBed.createComponent(Creator2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
