import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carta-staff',
  templateUrl: './carta-staff.component.html',
  styleUrls: ['./carta-staff.component.css']
})
export class CartaStaffComponent {
  @Input() fondoimagen!: string; // Ruta de la imagen de fondo
  @Input() ciruloimagen!: string; // Ruta de la imagen en forma de círculo (perfil)
  @Input() nombre!: string; // Nombre de la persona
  @Input() roll!: string; // Rol o título de la persona
  @Input() descripcion!: string; // Descripción de la persona
  @Input() instagram!: string; // URL del perfil de Instagram
  @Input() twitter!: string; // URL del perfil de Twitter
}


