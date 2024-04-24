import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-carta',
    templateUrl: './carta.component.html',
    styleUrls: ['./carta.component.css']
})
export class CartaComponent {
    @Input() nombre: string = '';
    @Input() descripcion: string = '';
    @Input() imagen: string = '';
    @Input() instagram: string = '';
    @Input() twitter: string = '';
    @Input() tiktok: string = '';
    @Input() twitch: string = '';
}


