import { Component, ElementRef, Input, AfterViewInit, ViewChild } from '@angular/core';
import { trigger, style, state, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-p',
  templateUrl: './p.component.html',
  styleUrls: ['./p.component.css'],
  animations: [
    trigger('fade', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('hidden <=> visible', [
        animate('0.5s')
      ])
    ])
  ]
})
export class PComponent implements AfterViewInit {
  @Input() h2!: string;
  @Input() p!: string;

  // Define una variable para controlar el estado de visibilidad del párrafo
  visibilityState: 'hidden' | 'visible' = 'hidden';

  // Usa ViewChild para referenciar el elemento HTML que quieres observar
  @ViewChild('pElement') pElement!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
        ([entry]) => {
            console.log(`Entry isIntersecting: ${entry.isIntersecting}`); // Registro de visibilidad
            this.visibilityState = entry.isIntersecting ? 'visible' : 'hidden';
        },
        {
            threshold: [0.0, 0.5, 1.0] // Prueba con diferentes umbrales
        }
    );
    observer.observe(this.pElement.nativeElement);
}

}