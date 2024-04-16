import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Creator3Component } from './creator3.component';

describe('Creator3Component', () => {
  let component: Creator3Component;
  let fixture: ComponentFixture<Creator3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Creator3Component]
    });
    fixture = TestBed.createComponent(Creator3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
