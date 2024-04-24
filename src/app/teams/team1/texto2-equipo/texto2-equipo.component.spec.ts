import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Texto2EquipoComponent } from './texto2-equipo.component';

describe('Texto2EquipoComponent', () => {
  let component: Texto2EquipoComponent;
  let fixture: ComponentFixture<Texto2EquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Texto2EquipoComponent]
    });
    fixture = TestBed.createComponent(Texto2EquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
