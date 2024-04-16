import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Creator1Component } from './creator1.component';

describe('Creator1Component', () => {
  let component: Creator1Component;
  let fixture: ComponentFixture<Creator1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Creator1Component]
    });
    fixture = TestBed.createComponent(Creator1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
