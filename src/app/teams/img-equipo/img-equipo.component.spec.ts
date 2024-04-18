import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgEquipoComponent } from './img-equipo.component';

describe('ImgEquipoComponent', () => {
  let component: ImgEquipoComponent;
  let fixture: ComponentFixture<ImgEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgEquipoComponent]
    });
    fixture = TestBed.createComponent(ImgEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
