
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-p',
  templateUrl: './p.component.html',
  styleUrls: ['./p.component.css']
})
export class PComponent {
    @Input() h2!: string; // Contenido de texto para el encabezado <h2>
    @Input() p!: string; // Contenido de texto para el párrafo <p>

}







