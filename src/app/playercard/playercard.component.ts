import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playercard',
  templateUrl: './playercard.component.html',
  styleUrls: ['./playercard.component.css']
})
export class PlayercardComponent {
  @Input() descripcion!: string; // Propiedad para la descripción
  @Input() nombre!: string; // Propiedad para el nombre
  @Input() tag!: string; // Propiedad para la etiqueta (tag)
  @Input() roll!: string; // Propiedad para el rol (position)
  @Input() imagen!: string; // Propiedad para la imagen
}

